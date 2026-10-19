'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ACHIEVEMENTS } from '@/lib/data';

// easeOutQuart counting hook
function useCountUp(end: number, duration: number = 1400, trigger: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart: 1 - pow(1 - x, 4)
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, trigger]);

  return count;
}

export const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // If no achievements data per Rule 1, do not render section
  if (!ACHIEVEMENTS || ACHIEVEMENTS.length === 0) {
    return null;
  }

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative bg-[#f4f2ee]"
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-12 section-container">
        {/* Header with Thin Progress Bar */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            <div className="section-tag mb-0">
              <span>06</span>
              <span className="w-6 h-[1px] bg-[#0d0d0d]/30" />
              <span>Achievements</span>
            </div>
            <span className="font-mono text-xs text-[#77756f]">
              Horizontal Travel
            </span>
          </div>

          <h2 className="section-heading mb-6">
            Honours &amp; <span className="accent-word font-normal">milestones.</span>
          </h2>

          {/* Thin Progress Bar */}
          <div className="w-full h-[2px] bg-[#0d0d0d]/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0d0d0d] transition-all duration-75"
              style={{ width: `${scrollPercent * 100}%` }}
            />
          </div>
        </div>

        {/* Sliding Horizontal Card Track */}
        <div className="my-auto w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-center gap-8 transition-transform duration-100 ease-out"
            style={{
              transform: `translateX(-${scrollPercent * 60}%)`,
            }}
          >
            {ACHIEVEMENTS.map((card, idx) => (
              <div
                key={idx}
                className="prem-card flex-shrink-0 w-[clamp(340px,40vw,540px)] h-[clamp(260px,36vh,310px)] p-8 bg-white flex flex-col justify-between transition-all duration-400 hover:-translate-y-3 hover:shadow-xl"
              >
                {/* Top: 72px Logo Tile + Index */}
                <div className="flex items-center justify-between">
                  <div className="w-[72px] h-[72px] rounded-2xl bg-[#f4f2ee] p-3 flex items-center justify-center shadow-inner">
                    <img
                      src={card.logo}
                      alt={card.platform}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-mono text-xs text-[#77756f]">
                    {card.index}
                  </span>
                </div>

                {/* Bottom Row: Detail (Left) and Huge Count (Right) */}
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-lg text-[#0d0d0d]">
                      {card.label}
                    </h3>
                    <p className="text-xs text-[#77756f] mt-0.5">
                      {card.caption}
                    </p>
                    <span className="font-mono text-[11px] text-[#3a3a3a] block mt-2">
                      {card.detail}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="font-mono text-4xl sm:text-5xl font-bold tracking-tight text-[#0d0d0d]">
                      {card.number}
                      {card.suffix}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex-shrink-0 px-8 font-serif italic text-2xl text-[#77756f]">
              and counting →
            </div>
          </div>
        </div>

        <div className="font-mono text-xs text-[#77756f] text-right">
          Scroll to explore →
        </div>
      </div>
    </section>
  );
};
