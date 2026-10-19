'use client';

import React, { useState, useRef } from 'react';
import { PROFILE } from '@/lib/data';
import { usePendulum } from '@/lib/hooks';

export const About: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const lastMouseX = useRef<number | null>(null);

  // Pendulum swing hook
  const { angle, push } = usePendulum(true);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (lastMouseX.current !== null) {
      const deltaX = e.clientX - lastMouseX.current;
      // Push angle gently based on mouse speed
      push(deltaX * 0.08);
    }
    lastMouseX.current = e.clientX;
  };

  const handleMouseLeave = () => {
    lastMouseX.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setFlipped(!flipped);
    }
  };

  return (
    <section id="about" className="section-py relative overflow-hidden bg-[#f4f2ee]">
      <div className="section-container">
        {/* Section Header Tag */}
        <div className="section-tag rv" style={{ '--i': 1 } as React.CSSProperties}>
          <span>01</span>
          <span className="w-6 h-[1px] bg-[#0d0d0d]/30" />
          <span>About me</span>
        </div>

        <h2
          className="section-heading mb-16 rv"
          style={{ '--i': 2 } as React.CSSProperties}
        >
          Engineering at <span className="accent-word font-normal">scale.</span>
        </h2>

        {/* Three-column Grid: Left (Summary) | Centre (ID Card) | Right (Quick Facts) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px_minmax(0,1fr)] gap-10 items-stretch">
          {/* Left Column */}
          <div
            className="prem-card p-8 md:p-10 flex flex-col justify-between rv"
            style={{ '--i': 3 } as React.CSSProperties}
          >
            <div>
              <span className="font-mono text-xs text-[#77756f] uppercase tracking-wider block mb-3">
                Overview
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0d0d0d] mb-6">
                Hi, I&apos;m Muskan.
              </h3>
              <p className="text-[#3a3a3a] leading-relaxed text-[15px] md:text-base mb-6">
                {PROFILE.resumeSummary}
              </p>
              <p className="text-[#77756f] text-sm leading-relaxed">
                {PROFILE.shortBio}
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-[#0d0d0d]/8 flex flex-wrap gap-3">
              <a
                href={PROFILE.resumePath}
                download="Muskan_Bansal_Resume.pdf"
                className="btn-pill-primary text-xs py-2.5 px-5"
              >
                Download Résumé ↓
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="btn-pill-secondary text-xs py-2.5 px-5"
              >
                GitHub ↗
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-pill-secondary text-xs py-2.5 px-5"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Centre Column: Hanging Lanyard ID Card */}
          <div
            ref={cardContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex flex-col items-center justify-start min-h-[500px] py-4 rv"
            style={{ '--i': 4 } as React.CSSProperties}
          >
            {/* Lanyard Strap with Scrolling Text */}
            <div className="relative w-[30px] h-[56px] bg-[#1a1a1a] rounded-t-sm shadow-md overflow-hidden flex flex-col justify-center items-center">
              <div className="absolute inset-0 flex flex-col items-center justify-around text-[7px] font-mono tracking-widest text-[#a9a6a0] uppercase select-none opacity-80 animate-pulse">
                <span>MB</span>
                <span>FE</span>
              </div>
            </div>

            {/* Metal Ring & Swivel Clip */}
            <div className="w-4 h-3 rounded-full border-2 border-[#888] -mt-1 z-10 bg-gradient-to-b from-[#bbb] to-[#666] shadow-sm" />
            <div className="w-6 h-4 bg-gradient-to-r from-[#999] via-[#ccc] to-[#888] rounded-b-md shadow-sm mb-1 z-10" />

            {/* Pendulum Swing Transform Container */}
            <div
              className="relative transition-transform duration-75 ease-out"
              style={{
                transformOrigin: 'top center',
                transform: `rotate(${angle}deg)`,
              }}
            >
              {/* Flip Card Wrapper */}
              <div
                tabIndex={0}
                role="button"
                aria-label="Developer ID Card. Press Enter to flip between front and back."
                onClick={() => setFlipped(!flipped)}
                onKeyDown={handleKeyDown}
                className="w-[300px] h-[404px] cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0d0d0d] rounded-[24px] outline-none [perspective:1000px] group"
              >
                <div
                  className="relative w-full h-full rounded-[24px] transition-transform duration-700 ease-[var(--ease)] [transform-style:preserve-3d]"
                  style={{
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* FRONT FACE */}
                  <div className="absolute inset-0 w-full h-full bg-white rounded-[24px] shadow-xl border border-[#0d0d0d]/10 overflow-hidden flex flex-col justify-between p-5 [backface-visibility:hidden]">
                    {/* Top Band */}
                    <div>
                      <div className="bg-[#0d0d0d] text-white py-1.5 px-4 rounded-xl flex items-center justify-between font-mono text-[10px] tracking-widest uppercase mb-4">
                        <span>Developer ID</span>
                        <span className="text-[#a9a6a0] font-normal">Active</span>
                      </div>

                      {/* Centered Portrait with Halo & Gradient Ring */}
                      <div className="flex justify-center mb-4">
                        <div className="relative w-[128px] h-[156px] rounded-2xl p-[3px] bg-gradient-to-b from-[#e5e5e5] via-[#888] to-[#222] shadow-md group-hover:shadow-lg transition-shadow">
                          <div className="w-full h-full rounded-[13px] overflow-hidden bg-[#e9e6e0]">
                            <img
                              src="/portrait-bust.webp"
                              alt="Muskan Bansal portrait"
                              className="w-full h-full object-cover transition-transform duration-500 ease-[var(--ease)] group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Name & Title */}
                      <div className="text-center mb-3">
                        <h4 className="font-bold text-lg text-[#0d0d0d] tracking-tight">
                          {PROFILE.name}
                        </h4>
                        <p className="font-mono text-xs text-[#77756f]">
                          {PROFILE.role}
                        </p>
                      </div>

                      {/* ID Metadata Rows */}
                      <div className="space-y-1 font-mono text-[11px] border-t border-b border-[#0d0d0d]/8 py-2 text-[#3a3a3a]">
                        <div className="flex justify-between">
                          <span className="text-[#77756f]">ID No.</span>
                          <span className="font-semibold">{PROFILE.idNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#77756f]">Dept.</span>
                          <span>{PROFILE.dept}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#77756f]">Valid till</span>
                          <span>{PROFILE.graduationYear} - Lifetime</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom: Barcode + Holographic Sticker */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex flex-col">
                        <div
                          className="h-6 w-32 bg-repeat-x opacity-70"
                          style={{
                            backgroundImage:
                              'repeating-linear-gradient(90deg, #0d0d0d 0, #0d0d0d 2px, transparent 2px, transparent 4px, #0d0d0d 4px, #0d0d0d 7px, transparent 7px, transparent 9px)',
                          }}
                          aria-label="Barcode"
                        />
                        <span className="font-mono text-[8px] text-[#77756f] mt-0.5 tracking-widest">
                          8618148191-FE
                        </span>
                      </div>

                      {/* Holographic sticker in grays */}
                      <div
                        className="w-10 h-10 rounded-full border border-[#0d0d0d]/20 bg-gradient-to-tr from-[#ddd] via-[#fff] to-[#999] shadow-inner flex items-center justify-center font-mono text-[8px] font-bold text-[#555] select-none"
                        title="Authentic ID"
                      >
                        VERIFIED
                      </div>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className="absolute inset-0 w-full h-full bg-[#161616] text-[#f4f2ee] rounded-[24px] shadow-xl border border-white/10 p-6 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div>
                      <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
                        <span className="font-mono text-xs uppercase tracking-wider text-[#a9a6a0]">
                          Profile Manifest
                        </span>
                        <span className="font-mono text-[10px] text-white/50">
                          BACK
                        </span>
                      </div>

                      <h4 className="font-serif italic text-2xl mb-4 text-white">
                        What I am
                      </h4>

                      <div className="space-y-2.5 text-xs text-[#a9a6a0] font-sans">
                        <div className="flex items-start gap-2">
                          <span className="text-white">•</span>
                          <span>{PROFILE.role} at TIAA (Pune, India)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-white">•</span>
                          <span>{PROFILE.degree} (PES University)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-white">•</span>
                          <span>Shipped 4 production financial applications end-to-end</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-white">•</span>
                          <span>Lifted Lighthouse scores from 72 to 96+</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-white">•</span>
                          <span>Author of 210+ unit &amp; integration tests</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <p className="font-serif italic text-sm text-white/90 mb-2">
                        Muskan Bansal
                      </p>
                      <p className="font-mono text-[10px] text-[#77756f]">
                        If found, say hello · {PROFILE.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <span className="block text-center font-mono text-[10px] text-[#77756f] mt-3">
                Click or press Enter to flip card ↺
              </span>
            </div>
          </div>

          {/* Right Column: Quick Facts & Paraphrased Quote */}
          <div
            className="prem-card p-8 md:p-10 flex flex-col justify-between rv"
            style={{ '--i': 5 } as React.CSSProperties}
          >
            <div>
              <span className="font-mono text-xs text-[#77756f] uppercase tracking-wider block mb-3">
                Quick facts
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#0d0d0d] mb-6">
                Key Details
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex flex-col pb-3 border-b border-[#0d0d0d]/8">
                  <span className="font-mono text-xs text-[#77756f] mb-1">
                    Location
                  </span>
                  <span className="font-medium text-[#0d0d0d]">
                    {PROFILE.location}
                  </span>
                </div>

                <div className="flex flex-col pb-3 border-b border-[#0d0d0d]/8">
                  <span className="font-mono text-xs text-[#77756f] mb-1">
                    Education
                  </span>
                  <span className="font-medium text-[#0d0d0d]">
                    {PROFILE.degree}
                  </span>
                  <span className="text-xs text-[#77756f] mt-0.5">
                    {PROFILE.university}
                  </span>
                </div>

                <div className="flex flex-col pb-3 border-b border-[#0d0d0d]/8">
                  <span className="font-mono text-xs text-[#77756f] mb-1">
                    Current Role
                  </span>
                  <span className="font-medium text-[#0d0d0d]">
                    Frontend Engineer at TIAA
                  </span>
                </div>

                <div className="flex flex-col pb-3">
                  <span className="font-mono text-xs text-[#77756f] mb-1">
                    Contact Email
                  </span>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="font-mono text-xs text-[#0d0d0d] hover:underline"
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Short Quote drawn strictly from résumé wording */}
            <div className="pt-8 mt-6 border-t border-[#0d0d0d]/8">
              <blockquote className="font-serif italic text-lg text-[#0d0d0d] leading-snug">
                &ldquo;{PROFILE.quote}&rdquo;
              </blockquote>
              <span className="block font-mono text-[11px] text-[#77756f] mt-2">
                — Muskan Bansal
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
