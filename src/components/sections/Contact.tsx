'use client';

import React, { useState } from 'react';
import { PROFILE } from '@/lib/data';
import { useScroll } from '@/lib/scroll';

// Interactive hopping letter component
const HoppingLetter: React.FC<{ char: string }> = ({ char }) => {
  const [bouncing, setBouncing] = useState(false);

  if (char === ' ') {
    return <span>&nbsp;</span>;
  }

  return (
    <span
      onMouseEnter={() => {
        setBouncing(true);
        setTimeout(() => setBouncing(false), 600);
      }}
      className={`inline-block transition-transform duration-300 select-none cursor-default ${
        bouncing ? '-translate-y-4 scale-110 text-[#3a3a3a]' : 'translate-y-0'
      }`}
    >
      {char}
    </span>
  );
};

export const Contact: React.FC = () => {
  const { scrollTo } = useScroll();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(PROFILE.email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
      });
    }
  };

  const line1 = "Let's build";
  const line2 = 'something together.';

  return (
    <section id="contact" className="pt-24 pb-12 bg-[#f4f2ee] relative overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-tag rv" style={{ '--i': 1 } as React.CSSProperties}>
          <span>06</span>
          <span className="w-6 h-[1px] bg-[#0d0d0d]/30" />
          <span>Get in touch</span>
        </div>

        {/* Huge Interactive Heading with bouncing letters */}
        <div className="mb-14 rv" style={{ '--i': 2 } as React.CSSProperties}>
          <h2 className="text-[clamp(2.75rem,7.5vw,6rem)] font-bold tracking-[-0.05em] leading-[1.0] text-[#0d0d0d]">
            <div className="flex flex-wrap">
              {line1.split('').map((char, i) => (
                <HoppingLetter key={i} char={char} />
              ))}
            </div>
            <div className="flex flex-wrap text-[#77756f] font-serif italic font-normal mt-1">
              {line2.split('').map((char, i) => (
                <HoppingLetter key={i} char={char} />
              ))}
            </div>
          </h2>
        </div>

        {/* Center Grid: Contact Methods + Rotating Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center pb-20 border-b border-[#0d0d0d]/10">
          <div className="space-y-8">
            {/* Large Email Link with Copy Chip */}
            <div>
              <span className="font-mono text-xs text-[#77756f] uppercase tracking-wider block mb-2">
                Primary Contact
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0d0d0d] underline underline-offset-8 decoration-[#0d0d0d]/30 hover:decoration-[#0d0d0d] transition-all"
                >
                  {PROFILE.email}
                </a>

                {/* Copy Chip */}
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-[#0d0d0d]/15 font-mono text-xs text-[#0d0d0d] shadow-sm hover:bg-[#0d0d0d] hover:text-white transition-all active:scale-95"
                  aria-label="Copy email address to clipboard"
                >
                  <span aria-live="polite">
                    {copied ? 'Copied ✓' : 'Copy'}
                  </span>
                </button>
              </div>
            </div>

            {/* Direct Links: Phone, GitHub, LinkedIn */}
            <div className="flex flex-wrap items-center gap-8 font-mono text-sm text-[#0d0d0d]">
              <div>
                <span className="text-[#77756f] text-xs block mb-1">Direct Phone</span>
                <a
                  href={PROFILE.phoneHref}
                  className="font-medium hover:underline"
                >
                  {PROFILE.phone}
                </a>
              </div>

              <div>
                <span className="text-[#77756f] text-xs block mb-1">Source Code</span>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:underline flex items-center gap-1"
                >
                  GitHub ↗
                </a>
              </div>

              <div>
                <span className="text-[#77756f] text-xs block mb-1">Professional</span>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:underline flex items-center gap-1"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* Spinning "Say Hello" Circular Text Badge */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg
                viewBox="0 0 160 160"
                className="w-full h-full animate-[spin_16s_linear_infinite]"
                aria-hidden="true"
              >
                <path
                  id="circlePath"
                  d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  fill="none"
                />
                <text className="font-mono text-[10.5px] uppercase tracking-[0.24em] fill-[#0d0d0d]">
                  <textPath href="#circlePath">
                    • SAY HELLO • OPEN TO OPPORTUNITIES
                  </textPath>
                </text>
              </svg>

              {/* Centre Dot / Symbol */}
              <a
                href={`mailto:${PROFILE.email}`}
                className="absolute w-12 h-12 rounded-full bg-[#0d0d0d] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
                aria-label="Send email"
              >
                <span className="font-mono text-sm">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#77756f]">
          <div suppressHydrationWarning>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built with Next.js 15 &amp; Tailwind</span>
            <button
              onClick={() => scrollTo('#hero', 0)}
              className="text-[#0d0d0d] hover:underline font-medium"
            >
              Back to top ↑
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};
