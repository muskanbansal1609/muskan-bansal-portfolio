'use client';

import React from 'react';
import { CERTIFICATIONS } from '@/lib/data';

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="section-py relative bg-white border-y border-[#0d0d0d]/10 overflow-hidden"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left: Sticky Heading & Counter */}
          <div className="lg:sticky lg:top-28">
            <div className="section-tag rv" style={{ '--i': 1 } as React.CSSProperties}>
              <span>04</span>
              <span className="w-6 h-[1px] bg-[#0d0d0d]/30" />
              <span>Certifications</span>
            </div>

            <h2
              className="section-heading mb-4 rv"
              style={{ '--i': 2 } as React.CSSProperties}
            >
              Always <span className="accent-word font-normal">learning.</span>
            </h2>

            <p
              className="text-[#77756f] text-sm md:text-base leading-relaxed mb-6 max-w-sm rv"
              style={{ '--i': 3 } as React.CSSProperties}
            >
              Continuous professional credentials across cloud platforms, modern frontend architecture, and continuous integration.
            </p>

            <div
              className="font-mono text-xs text-[#0d0d0d] font-medium tracking-wide flex items-center gap-2 rv"
              style={{ '--i': 4 } as React.CSSProperties}
            >
              <span className="w-2 h-2 rounded-full bg-[#0d0d0d]" />
              <span>{CERTIFICATIONS.length} Certified Credentials Verified</span>
            </div>
          </div>

          {/* Right: Ink-Flood Numbered Rows */}
          <div className="divide-y divide-[#0d0d0d]/10 border-y border-[#0d0d0d]/10">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={cert.index}
                tabIndex={0}
                className="group relative p-6 sm:p-8 cursor-pointer transition-colors duration-400 overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0d0d0d]"
              >
                {/* Ink Flood Background Layer: floods from left to right */}
                <span
                  className="absolute inset-0 bg-[#0d0d0d] transition-transform duration-500 ease-[var(--ease)] origin-left scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex items-center justify-between gap-6">
                  <div className="flex items-baseline gap-6 sm:gap-8">
                    {/* Index */}
                    <span className="font-mono text-sm sm:text-base text-[#77756f] group-hover:text-[#a9a6a0] group-focus-visible:text-[#a9a6a0] transition-colors duration-300">
                      {cert.index}
                    </span>

                    {/* Title & Issuer */}
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-[#0d0d0d] group-hover:text-[#f4f2ee] group-focus-visible:text-[#f4f2ee] transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="font-mono text-xs sm:text-sm text-[#77756f] group-hover:text-[#e9e6e0] group-focus-visible:text-[#e9e6e0] transition-colors duration-300 mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Sliding ↗ Arrow */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#0d0d0d]/15 group-hover:border-white/30 text-[#0d0d0d] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                    <span className="font-mono text-base transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
