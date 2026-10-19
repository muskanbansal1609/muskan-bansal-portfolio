'use client';

import React, { useRef, useEffect, useState } from 'react';
import { TIMELINE } from '@/lib/data';

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [spineHeight, setSpineHeight] = useState(0);

  // Track scroll progress strictly within this section to draw spine
  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When section enters from bottom
      const startOffset = windowHeight * 0.7;
      const totalDistance = rect.height;
      const currentScroll = startOffset - rect.top;

      const progress = Math.min(1, Math.max(0, currentScroll / totalDistance));
      setSpineHeight(progress * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="section-py relative bg-[#f4f2ee] overflow-hidden"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-tag rv" style={{ '--i': 1 } as React.CSSProperties}>
          <span>05</span>
          <span className="w-6 h-[1px] bg-[#0d0d0d]/30" />
          <span>Journey</span>
        </div>

        <h2
          className="section-heading mb-16 rv"
          style={{ '--i': 2 } as React.CSSProperties}
        >
          One continuous <span className="accent-word font-normal">path.</span>
        </h2>

        {/* Timeline Path Container */}
        <div className="relative max-w-4xl mx-auto pl-8 sm:pl-12">
          {/* Background Grey Spine Track */}
          <div
            className="absolute left-[11px] sm:left-[15px] top-4 bottom-12 w-[2px] bg-[#0d0d0d]/10"
            aria-hidden="true"
          />

          {/* Animated Drawing Ink Spine */}
          <div
            className="absolute left-[11px] sm:left-[15px] top-4 w-[2px] bg-[#0d0d0d] transition-all duration-150 ease-out"
            style={{ height: `${spineHeight}%`, maxHeight: 'calc(100% - 48px)' }}
            aria-hidden="true"
          />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {TIMELINE.map((item, idx) => {
              const nodeThreshold = (idx / (TIMELINE.length + 1)) * 100;
              const isLit = spineHeight >= nodeThreshold;

              return (
                <div key={item.id} className="relative group">
                  {/* Spine Node Dot */}
                  <div
                    className={`absolute -left-[37px] sm:-left-[43px] top-6 w-[20px] h-[20px] rounded-full border-2 transition-all duration-400 flex items-center justify-center ${
                      isLit
                        ? 'bg-[#0d0d0d] border-[#0d0d0d] scale-110 shadow-sm'
                        : 'bg-white border-[#0d0d0d]/30 scale-90'
                    }`}
                    aria-hidden="true"
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-colors duration-400 ${
                        isLit ? 'bg-[#f4f2ee]' : 'bg-transparent'
                      }`}
                    />
                  </div>

                  {/* Stop Card */}
                  <div
                    className={`prem-card p-6 sm:p-8 bg-white transition-all duration-400 ${
                      isLit ? 'shadow-md border-[#0d0d0d]/20' : 'opacity-85'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#0d0d0d] text-white">
                          {item.year}
                        </span>
                        <span className="font-mono text-xs text-[#77756f] uppercase tracking-wider">
                          {item.period}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-[#77756f]">
                        {item.location}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0d0d0d]">
                      {item.title}
                    </h3>
                    <p className="font-serif italic text-base sm:text-lg text-[#77756f] mb-4">
                      {item.organization}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2 text-sm text-[#3a3a3a] leading-relaxed">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="text-[#0d0d0d] font-bold mt-1 text-xs">
                            •
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}

            {/* Ending Dashed Card: Next — Your team? */}
            <div className="relative group pt-4">
              {/* Terminal Node Dot */}
              <div
                className={`absolute -left-[37px] sm:-left-[43px] top-10 w-[20px] h-[20px] rounded-full border-2 border-dashed transition-all duration-400 flex items-center justify-center ${
                  spineHeight >= 85
                    ? 'border-[#0d0d0d] bg-white scale-110 shadow-sm'
                    : 'border-[#0d0d0d]/30 bg-transparent'
                }`}
                aria-hidden="true"
              >
                <span className="w-2 h-2 rounded-full bg-[#0d0d0d]" />
              </div>

              <div className="p-8 rounded-[28px] border-2 border-dashed border-[#0d0d0d]/25 bg-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-[#0d0d0d] transition-colors">
                <div>
                  <span className="font-mono text-xs text-[#77756f] uppercase tracking-wider block mb-1">
                    Future Roadmap
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-[#0d0d0d]">
                    Next — Your team?
                  </h3>
                  <p className="text-sm text-[#77756f] mt-1 max-w-md">
                    Looking for a high-impact frontend engineer to build resilient,
                    accessible, and high-performance web platforms.
                  </p>
                </div>

                <a href="#contact" className="btn-pill-primary text-xs py-3 px-6 whitespace-nowrap">
                  Get in touch →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
