# Muskan Bansal — Personal Portfolio Website

A production-ready, high-performance personal portfolio website built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Lenis**. Designed with an Awwwards-inspired "quiet luxury" aesthetic: white, black, and warm off-white (`#f4f2ee`), with 100% truthful data extracted verbatim from the résumé.

---

## 1. Quick Start

### Prerequisites
- Node.js 18+ (tested with Node.js v24)
- npm 9+
- Python 3.9+ (for video asset pipeline)

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (starts on http://localhost:3000)
npm run dev

# 3. Create production build
npm run build

# 4. Preview production build locally
npm run start
```

---

## 2. Sections Table

| Order | Section | Component Path | Key Features & Motion | Data Source |
|---|---|---|---|---|
| **00** | **Navigation** | `src/components/Navigation.tsx` | Glass frosted pill after 40px scroll, active section sliding ink indicator, 2px top scroll-progress bar, spinning initials mark, mobile full-screen overlay with clip-path | `src/lib/data.ts` (`NAV`) |
| **01** | **Hero** | `src/components/hero/Hero.tsx` | Head-to-toe 768×960 video with `mix-blend-mode: multiply`, background uppercase ghost word (`MUSKAN`), sound unlock on first gesture, ▶/❚❚ icon button with ping ring, pauses when <35% visible | `Character_introducing_herself...mp4` |
| **02** | **About** | `src/components/sections/About.tsx` | 3-column grid, realistic hanging lanyard ID card with damped pendulum swing physics, idle sway, 3D flip card (front/back), portrait halo, barcode, holographic sticker, verbatim summary & quick facts | `src/lib/data.ts` (`PROFILE`) |
| **03** | **Skills** | `src/components/sections/Skills.tsx` | Periodic table of stack: 8 columns (desktop) / 4 (mobile), diagonal wave entrance, category filter chips with dimming, sticky 320px Inspector panel with 150px pop logo & applied projects | `src/lib/data.ts` (`SKILLS`) |
| **04** | **Work** | `src/components/sections/Work.tsx` | Expanding accordion gallery: active panel flex 8, collapsed panels form slim spines with vertical title & rotating `+`, illustrative pure CSS/JSX mini-UIs (CineScout, Bill Generator, Real-Time Dashboard, YouTube Clone) | `src/lib/data.ts` (`PROJECTS`) |
| **05** | **Certifications** | `src/components/sections/Certifications.tsx` | Full-width white band with hairline borders, left sticky title, right numbered list with horizontal ink-flood hover (`scaleX 0→1`), white text transition & sliding `↗` arrow | `src/lib/data.ts` (`CERTIFICATIONS`) |
| **06** | **Experience** | `src/components/sections/Experience.tsx` | Single unified path (Education + Intern + Full-time), vertical spine drawing dynamically with section scroll progress, stops lighting up sequentially, concludes with dashed "Next — Your team?" card | `src/lib/data.ts` (`TIMELINE`) |
| **07** | **Achievements** | `src/components/sections/Achievements.tsx` | Pinned horizontal gallery (sticky 100svh), horizontal slide track with top progress bar, 72px platform logos, easeOutQuart count-up animation | `src/lib/data.ts` (`ACHIEVEMENTS`) |
| **08** | **Contact** | `src/components/sections/Contact.tsx` | Interactive heading with per-letter bouncing translateY hop on cursor pass, large email link with accessible "Copied ✓" chip, direct links (phone, GitHub, LinkedIn), spinning circular "Say Hello" badge | `src/lib/data.ts` (`PROFILE`) |

---

## 3. The Hero Video & Stills Pipeline

The hero video is generated from the original source intro clip `Character_introducing_herself_on…_1080p_20261018120330.mp4` via `scripts/build-hero-assets.py`:

```bash
python3 scripts/build-hero-assets.py
```

### Pipeline Steps:
1. **Centred Tight Crop**: `crop=800:1000:560:80` (centred horizontally at `(1920 - 800) / 2 = 560`, `y=80` from head to toe).
2. **Resolution Scaling**: Scales to `768×960` (`scale=768:960`), preserving aspect ratio.
3. **Backdrop Whitening**: Applies `colorlevels=rimax=0.98:gimax=0.98:bimax=0.98` so the off-white backdrop becomes pure white `#ffffff`, blending seamlessly into the `--paper` background via `mix-blend-mode: multiply`.
4. **Seamless Video & Audio Loop**:
   - Video: Cross-fades the last 0.5s into the first 0.5s via ffmpeg `xfade=transition=fade:duration=0.5:offset=9.5`.
   - Audio: Sample-accurate linear cross-fade in numpy/PCM preventing clicks and audio dropouts without retiming lips.
5. **Exports**:
   - `public/hero/hero.webm`: VP9 (CRF 36, Opus 80 kbps)
   - `public/hero/hero.mp4`: H.264 (yuv420p, CRF 24, -preset slow, AAC 96 kbps, `+faststart`)
   - `public/portrait-bust.webp`: 480×600 head-to-shirt crop from 2.0s frame (quality 90)
   - `public/og.jpg`: 1200×630 OpenGraph social share card

---

## 4. Design System Tokens

```css
:root {
  --paper: #f4f2ee;      /* Page background (warm off-white) */
  --card: #ffffff;       /* Card surfaces */
  --ink: #0d0d0d;        /* Text, buttons, active states */
  --ink-2: #3a3a3a;      /* Secondary dark text */
  --mute: #77756f;       /* Secondary text */
  --faint: #a9a6a0;      /* Labels and disabled states */
  --line: rgba(13,13,13,.1); /* Hairline borders */
  --soft: #e9e6e0;       /* Muted card elements */
  --ease: cubic-bezier(.16, 1, .3, 1); /* Universal transition curve */
  --gutter: clamp(18px, 4vw, 64px);
  --max-width: 1320px;
}
```

### Self-Hosted Typography
- **Display & Body**: Inter Tight (Variable Font `100..900`)
- **Italic Headings**: Instrument Serif (`Regular` & `Italic`)
- **Mono Indices & Badges**: JetBrains Mono (Variable Font `100..800`)

---

## 5. Credits & Licences

- **Devicon**: All programming language and framework logos are licensed under the [MIT License](public/logos/LICENSE-DEVICON.txt) © 2015-2024 Devicon contributors.
- **Simple Icons**: Platform icons licensed under [CC0 1.0 Universal](public/logos/LICENSE-SIMPLE-ICONS.txt) (Public Domain Dedication).
- **Fonts**: Inter Tight, Instrument Serif, and JetBrains Mono are licensed under the SIL Open Font License (OFL 1.1).
- **Lenis Smooth Scroll**: Developed by Studio Freight, licensed under the MIT License.
