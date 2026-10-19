'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PROFILE } from '@/lib/data';
import { useScroll } from '@/lib/scroll';

export const Hero: React.FC = () => {
  const { scrollTo } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [autoplayBlocked, setAutoplayBlocked] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize video and handle sound unlock
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try playing with sound first
    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
          setAutoplayBlocked(false);
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay with sound blocked: fallback to muted play
          video.muted = true;
          video
            .play()
            .then(() => {
              setIsMuted(true);
              setAutoplayBlocked(true);
              setIsPlaying(true);
            })
            .catch(() => {
              // Video play blocked completely until interaction
              setIsPlaying(false);
            });
        });
    }

    // Unlock sound on first user gesture anywhere
    const unlockSound = () => {
      if (video && video.muted) {
        video.muted = false;
        video
          .play()
          .then(() => {
            setIsMuted(false);
            setAutoplayBlocked(false);
          })
          .catch(() => {
            // keep muted if still blocked
          });
      }
      removeUnlockListeners();
    };

    const removeUnlockListeners = () => {
      window.removeEventListener('pointerdown', unlockSound);
      window.removeEventListener('keydown', unlockSound);
      window.removeEventListener('touchend', unlockSound);
    };

    window.addEventListener('pointerdown', unlockSound, { once: true });
    window.addEventListener('keydown', unlockSound, { once: true });
    window.addEventListener('touchend', unlockSound, { once: true });

    return () => {
      removeUnlockListeners();
    };
  }, []);

  // IntersectionObserver to pause video when < 35% visible
  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.35) {
          if (video.paused) {
            video.play().catch(() => {});
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      },
      {
        threshold: [0, 0.35, 0.7, 1.0],
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      setIsMuted(false);
      setAutoplayBlocked(false);
      video.play().catch(() => {});
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[var(--paper)]"
    >
      {/* Giant outlined ghost word behind the person */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="text-[clamp(6rem,22vw,22rem)] font-bold tracking-tighter uppercase leading-none text-transparent"
          style={{
            WebkitTextStroke: '1.5px rgba(13, 13, 13, 0.07)',
            transform: 'translateY(-4%)',
          }}
        >
          {PROFILE.firstName}
        </span>
      </div>

      {/* Center Video Container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-auto h-[64svh] md:h-[min(94svh,1040px)] aspect-[768/960] flex items-center justify-center">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="auto"
            poster="/portrait-bust.webp"
            className="w-full h-full object-contain pointer-events-auto mix-blend-multiply"
            style={{ mixBlendMode: 'multiply' }}
          >
            <source src="/hero/hero.webm" type="video/webm" />
            <source src="/hero/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Top spacing */}
      <div className="relative z-20" />

      {/* Bottom Content & CTAs */}
      <div className="relative z-20 section-container mt-auto">
        <div className="max-w-2xl">
          <div className="section-tag rv" style={{ '--i': 1 } as React.CSSProperties}>
            <span>00</span>
            <span className="w-6 h-[1px] bg-[#0d0d0d]/30" />
            <span>Frontend Engineer &amp; Architect</span>
          </div>

          <h1
            className="section-heading text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-[-0.045em] mb-6 rv"
            style={{ '--i': 2 } as React.CSSProperties}
          >
            Frontend <span className="accent-word font-normal">Engineer.</span>
          </h1>

          <p
            className="text-base md:text-lg text-[#3a3a3a] leading-relaxed max-w-xl mb-8 rv"
            style={{ '--i': 3 } as React.CSSProperties}
          >
            Specializing in performance-critical, accessible web apps for fintech
            platforms. Shipped 4 production apps serving 1,500+ advisors with 96+ Lighthouse scores.
          </p>

          <div
            className="flex flex-wrap items-center gap-3 md:gap-4 rv"
            style={{ '--i': 4 } as React.CSSProperties}
          >
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#work', -20);
              }}
              className="btn-pill-primary"
            >
              Explore work
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact', -20);
              }}
              className="btn-pill-secondary"
            >
              Let&apos;s talk
            </a>

            <a
              href={PROFILE.resumePath}
              download="Muskan_Bansal_Resume.pdf"
              className="btn-pill-secondary"
            >
              Résumé ↓
            </a>
          </div>
        </div>
      </div>

      {/* Floating Sound Control Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-30 pointer-events-auto">
        <button
          onClick={toggleSound}
          className="relative flex items-center justify-center w-[46px] h-[46px] rounded-full bg-[#0d0d0d] text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
        >
          {autoplayBlocked && isMuted && (
            <span
              className="absolute inset-0 rounded-full border-2 border-[#0d0d0d] animate-ping opacity-40 pointer-events-none"
              aria-hidden="true"
            />
          )}

          {isMuted ? (
            // Triangle ▶ icon
            <svg
              className="w-4 h-4 fill-current ml-0.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            // Two bars ❚❚ icon
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
};
