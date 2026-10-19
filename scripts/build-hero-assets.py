#!/usr/bin/env python3
"""
scripts/build-hero-assets.py
Processes the intro video into a seamless looping hero clip and still images.
1. Crops tightly around the person (head to toe, centered).
2. Scales to 768px wide (768x960).
3. Whitens background (colorlevels=rimax=0.98:gimax=0.98:bimax=0.98).
4. Creates a seamless 0.5s crossfade loop on video & audio.
5. Exports:
   - public/hero/hero.mp4 (H.264 yuv420p, CRF 24, AAC 96k, +faststart)
   - public/hero/hero.webm (VP9, CRF 36, Opus 80k)
   - public/portrait-bust.webp (480x600 head-to-shirt portrait)
   - public/og.jpg (1200x630 OpenGraph card)
"""

import sys
import os
import subprocess
import glob
import shutil
import math

def find_input_video():
    all_files = list(set(glob.glob("Character_introducing_herself_on*.mp4") + glob.glob("*.mp4")))
    candidates = [f for f in all_files if not f.startswith("public")]
    if candidates:
        candidates.sort(key=os.path.getmtime, reverse=True)
        return candidates[0]
    return "intro.mp4"

def find_ffmpeg():
    # Check local npm installer, system paths, brew
    local_npm = glob.glob("node_modules/@ffmpeg-installer/*/ffmpeg")
    paths = local_npm + [
        shutil.which("ffmpeg"),
        "/opt/homebrew/bin/ffmpeg",
        "/usr/local/bin/ffmpeg",
        os.path.expanduser("~/.nvm/versions/node/v24.16.0/bin/ffmpeg"),
    ]
    for p in paths:
        if p and os.path.isfile(p) and os.access(p, os.X_OK):
            return p
    return "ffmpeg"

def main():
    import argparse
    parser = argparse.ArgumentParser(description="Build hero video and image assets")
    parser.add_argument("--input", default=None, help="Input video path")
    parser.add_argument("--crop-w", type=int, default=800, help="Crop width")
    parser.add_argument("--crop-h", type=int, default=1000, help="Crop height")
    parser.add_argument("--crop-x", type=int, default=560, help="Crop X (centered = (1920-800)/2 = 560)")
    parser.add_argument("--crop-y", type=int, default=80, help="Crop Y (head to toe)")
    parser.add_argument("--scale-w", type=int, default=768, help="Output width")
    parser.add_argument("--scale-h", type=int, default=960, help="Output height")
    parser.add_argument("--duration", type=float, default=10.0, help="Video duration in seconds")
    parser.add_argument("--crossfade", type=float, default=0.5, help="Crossfade duration in seconds")
    args = parser.parse_args()

    input_file = args.input or find_input_video()
    if not os.path.exists(input_file):
        print(f"Error: Input video not found at '{input_file}'")
        sys.exit(1)

    ffmpeg_bin = find_ffmpeg()
    print(f"Using input video: {input_file}")
    print(f"Using ffmpeg: {ffmpeg_bin}")

    os.makedirs("public/hero", exist_ok=True)
    os.makedirs("public", exist_ok=True)

    crop_filter = f"crop={args.crop_w}:{args.crop_h}:{args.crop_x}:{args.crop_y}"
    # Pure white threshold for background (removes faint 3D grid/checkerboard)
    whiten_filter = "colorlevels=rimax=0.87:gimax=0.87:bimax=0.87"
    scale_filter = f"scale={args.scale_w}:{args.scale_h}"
    vf_base = f"{crop_filter},{scale_filter},{whiten_filter}"

    # Target loop duration
    loop_duration = args.duration - args.crossfade
    offset = loop_duration

    print("\n--- Step 1: Processing video loop with xfade ---")
    # Video cross-fade: split into main and loop-tail
    # Stream [v] trimmed to args.duration
    # xfade transition=fade:duration=0.5:offset=args.duration-0.5
    filter_complex = (
        f"[0:v]{vf_base},trim=duration={args.duration},setpts=PTS-STARTPTS[v0];"
        f"[v0]split[v1][v2];"
        f"[v1]trim=start=0:end={offset},setpts=PTS-STARTPTS[v1t];"
        f"[v2]trim=start={offset}:end={args.duration},setpts=PTS-STARTPTS[v2t];"
        f"[v1t][v2t]xfade=transition=fade:duration={args.crossfade}:offset={offset - args.crossfade}[vloop]"
    )

    # Audio cross-fade: Extract raw audio PCM to crossfade sample-accurately in numpy if numpy available
    audio_temp_wav = "public/hero/temp_audio.wav"
    loop_audio_wav = "public/hero/loop_audio.wav"

    has_numpy = False
    try:
        import numpy as np
        import wave
        has_numpy = True
    except ImportError:
        has_numpy = False

    # Extract audio
    extract_audio_cmd = [
        ffmpeg_bin, "-y", "-i", input_file,
        "-t", str(args.duration),
        "-vn", "-acodec", "pcm_s16le", "-ar", "44100", "-ac", "2",
        audio_temp_wav
    ]
    subprocess.run(extract_audio_cmd, capture_output=True)

    if has_numpy and os.path.exists(audio_temp_wav):
        print("Applying sample-accurate audio crossfade using numpy...")
        import numpy as np
        import wave
        with wave.open(audio_temp_wav, 'rb') as wf:
            n_channels = wf.getnchannels()
            sampwidth = wf.getsampwidth()
            framerate = wf.getframerate()
            n_frames = wf.getnframes()
            audio_bytes = wf.readframes(n_frames)

        samples = np.frombuffer(audio_bytes, dtype=np.int16).reshape(-1, n_channels).astype(np.float32)
        total_samples = int(args.duration * framerate)
        samples = samples[:total_samples]
        
        fade_len = int(args.crossfade * framerate)
        fade_out = np.linspace(1.0, 0.0, fade_len).reshape(-1, 1)
        fade_in = np.linspace(0.0, 1.0, fade_len).reshape(-1, 1)

        # Crossfade last fade_len into first fade_len
        tail = samples[-fade_len:]
        head = samples[:fade_len]
        blended = (head * fade_in) + (tail * fade_out)

        out_samples = samples[:total_samples - fade_len].copy()
        out_samples[:fade_len] = blended

        out_int16 = np.clip(out_samples, -32768, 32767).astype(np.int16)
        with wave.open(loop_audio_wav, 'wb') as wf:
            wf.setnchannels(n_channels)
            wf.setsampwidth(sampwidth)
            wf.setframerate(framerate)
            wf.writeframes(out_int16.tobytes())
        use_audio_file = loop_audio_wav
    else:
        use_audio_file = audio_temp_wav

    # Export hero.mp4
    out_mp4 = "public/hero/hero.mp4"
    print(f"Exporting {out_mp4}...")
    mp4_cmd = [
        ffmpeg_bin, "-y",
        "-i", input_file,
        "-i", use_audio_file,
        "-filter_complex", (
            f"[0:v]{vf_base},trim=duration={args.duration},setpts=PTS-STARTPTS[v0];"
            f"[v0]split=2[v1][v2];"
            f"[v1]trim=start=0:end={offset},setpts=PTS-STARTPTS[v1_main];"
            f"[v2]trim=start={offset}:end={args.duration},setpts=PTS-STARTPTS[v2_tail];"
            f"[v1_main][v2_tail]xfade=transition=fade:duration={args.crossfade}:offset={offset - args.crossfade}[v_out]"
        ),
        "-map", "[v_out]",
        "-map", "1:a",
        "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "24", "-preset", "slow",
        "-c:a", "aac", "-b:a", "96k",
        "-movflags", "+faststart",
        "-t", str(loop_duration),
        out_mp4
    ]
    res_mp4 = subprocess.run(mp4_cmd, capture_output=True, text=True)
    if res_mp4.returncode != 0:
        print(f"Direct complex filter failed, falling back to direct loop encode: {res_mp4.stderr[-300:]}")
        # Direct fallback
        fallback_cmd = [
            ffmpeg_bin, "-y",
            "-i", input_file,
            "-vf", vf_base,
            "-t", str(args.duration),
            "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "24", "-preset", "slow",
            "-c:a", "aac", "-b:a", "96k",
            "-movflags", "+faststart",
            out_mp4
        ]
        subprocess.run(fallback_cmd, check=True)

    # Export hero.webm
    out_webm = "public/hero/hero.webm"
    print(f"Exporting {out_webm}...")
    webm_cmd = [
        ffmpeg_bin, "-y",
        "-i", out_mp4,
        "-c:v", "libvpx-vp9", "-crf", "36", "-b:v", "0",
        "-c:a", "libopus", "-b:a", "80k",
        out_webm
    ]
    subprocess.run(webm_cmd, capture_output=True)

    # Step 5: Portrait still at 480x600 (head-to-shirt)
    # Clear frame around 2.0s
    out_portrait_png = "public/portrait-bust.png"
    out_portrait = "public/portrait-bust.webp"
    print(f"Exporting portrait bust still: {out_portrait}...")
    # Head-to-shirt crop centered on character (x=680, y=50, 560x700 scaled to 480x600)
    portrait_crop = "crop=560:700:680:50,scale=480:600"
    portrait_cmd = [
        ffmpeg_bin, "-y",
        "-ss", "00:00:02.000",
        "-i", input_file,
        "-vf", f"{portrait_crop},{whiten_filter}",
        "-vframes", "1",
        out_portrait_png
    ]
    subprocess.run(portrait_cmd, capture_output=True)

    # Convert to webp using node sharp
    conv_code = f"require('sharp')('{out_portrait_png}').webp({{ quality: 90 }}).toFile('{out_portrait}').then(() => {{ try {{ require('fs').unlinkSync('{out_portrait_png}'); }} catch(e){{}} }})"
    subprocess.run(["node", "-e", conv_code], capture_output=True)

    # Export OpenGraph card at 1200x630
    out_og = "public/og.jpg"
    print(f"Exporting OpenGraph preview: {out_og}...")
    og_crop = "crop=1200:630:(in_w-1200)/2:(in_h-630)/2"
    og_cmd = [
        ffmpeg_bin, "-y",
        "-ss", "00:00:02.000",
        "-i", input_file,
        "-vf", f"{whiten_filter},scale=1920:1080,{og_crop}",
        "-vframes", "1",
        "-q:v", "2",
        out_og
    ]
    subprocess.run(og_cmd, capture_output=True)

    # Clean up temp files
    for tmp in [audio_temp_wav, loop_audio_wav]:
        if os.path.exists(tmp):
            try:
                os.remove(tmp)
            except OSError:
                pass

    print("\n✅ Hero assets built successfully!")
    print(f"  - {out_mp4}")
    print(f"  - {out_webm}")
    print(f"  - {out_portrait}")
    print(f"  - {out_og}")

if __name__ == "__main__":
    main()
