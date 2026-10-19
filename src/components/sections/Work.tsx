'use client';

import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '@/lib/data';
import { TechLogo } from '@/components/ui/TechLogo';

// Mini-UI for CineScout
const CineScoutMiniUI = () => (
  <div className="w-full h-full bg-[#141414] text-[#f4f2ee] rounded-2xl p-5 flex flex-col justify-between border border-white/10 shadow-inner select-none">
    <div>
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
          <span className="font-mono text-[11px] font-bold tracking-wider text-white">
            CINESCOUT
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-[#a9a6a0]">
          <span className="px-2 py-0.5 rounded bg-white/10 text-white">SSR ACTIVE</span>
          <span>70% CACHE HIT</span>
        </div>
      </div>

      {/* Search Input Simulation */}
      <div className="mt-4 px-3 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-xs text-[#a9a6a0]">
        <span>Search movies, series, directors...</span>
        <span className="font-mono text-[10px] text-white/50">Instant Search</span>
      </div>

      {/* Streaming Cards Mockup */}
      <div className="grid grid-cols-3 gap-2.5 mt-5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="aspect-[3/4] rounded-lg bg-white/5 border border-white/10 p-2.5 flex flex-col justify-between"
          >
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px]">
              ▶
            </div>
            <div>
              <div className="h-2 w-3/4 bg-white/40 rounded mb-1" />
              <div className="h-1.5 w-1/2 bg-white/20 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Status */}
    <div className="pt-3 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-[#a9a6a0]">
      <span>Latency: 1.2s faster initial load</span>
      <span>TanStack Query</span>
    </div>
  </div>
);

// Mini-UI for Bill Generator
const BillGeneratorMiniUI = () => (
  <div className="w-full h-full bg-[#f9f8f6] text-[#0d0d0d] rounded-2xl p-5 flex flex-col justify-between border border-[#0d0d0d]/10 shadow-inner select-none font-sans">
    <div>
      {/* Invoice Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#0d0d0d]/10">
        <div>
          <span className="font-mono text-[10px] text-[#77756f] uppercase block">
            INVOICE #INV-2024-08
          </span>
          <span className="font-bold text-sm text-[#0d0d0d]">Client Preview</span>
        </div>
        <span className="px-2 py-1 rounded bg-[#0d0d0d] text-white font-mono text-[9px] uppercase tracking-wider">
          PDF Ready
        </span>
      </div>

      {/* Table Mockup */}
      <div className="mt-4 space-y-2 text-xs">
        <div className="flex justify-between font-mono text-[10px] text-[#77756f] pb-1 border-b border-[#0d0d0d]/8">
          <span>ITEM</span>
          <span>QTY</span>
          <span>TOTAL</span>
        </div>
        <div className="flex justify-between items-center py-1 border-b border-[#0d0d0d]/5">
          <span className="font-medium text-[11px]">Design System Setup</span>
          <span className="font-mono text-[11px]">1</span>
          <span className="font-mono text-[11px] font-semibold">$1,200</span>
        </div>
        <div className="flex justify-between items-center py-1 border-b border-[#0d0d0d]/5">
          <span className="font-medium text-[11px]">Frontend Component Dev</span>
          <span className="font-mono text-[11px]">40h</span>
          <span className="font-mono text-[11px] font-semibold">$3,600</span>
        </div>
        <div className="flex justify-between items-center py-1">
          <span className="font-medium text-[11px]">Client Review &amp; Tests</span>
          <span className="font-mono text-[11px]">1</span>
          <span className="font-mono text-[11px] font-semibold">$450</span>
        </div>
      </div>
    </div>

    {/* Calculation Summary */}
    <div className="pt-3 border-t border-[#0d0d0d]/10">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-[#77756f]">Tax Rate (8%):</span>
        <span className="font-mono">$420.00</span>
      </div>
      <div className="flex justify-between items-baseline font-bold text-sm">
        <span>Balance Due:</span>
        <span className="font-mono text-base">$5,670.00</span>
      </div>
      <div className="mt-2 text-center">
        <span className="font-mono text-[9px] text-[#77756f] block">
          Client-side jsPDF export · No backend dependency
        </span>
      </div>
    </div>
  </div>
);

// Mini-UI for Real-Time Collaborative Dashboard
const CollaborativeDashboardMiniUI = () => (
  <div className="w-full h-full bg-[#181818] text-[#f4f2ee] rounded-2xl p-5 flex flex-col justify-between border border-white/10 shadow-inner select-none">
    <div>
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-[11px] text-white">LIVE FEED (WS)</span>
        </div>
        {/* Avatars */}
        <div className="flex -space-x-1.5 items-center">
          {['MB', 'AD', 'JS'].map((initials, idx) => (
            <span
              key={initials}
              className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[8px] font-bold border border-white/20 ${
                idx === 0 ? 'bg-white text-black' : 'bg-white/20 text-white'
              }`}
            >
              {initials}
            </span>
          ))}
        </div>
      </div>

      {/* Concurrent Editing Activity */}
      <div className="mt-4 space-y-2">
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs flex items-center justify-between">
          <span className="text-white/80">Batching State Burst #402</span>
          <span className="font-mono text-[10px] text-emerald-400">60 FPS</span>
        </div>
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs flex items-center justify-between">
          <span className="text-white/80">Virtual Window [rows 120-160]</span>
          <span className="font-mono text-[10px] text-[#a9a6a0]">12ms</span>
        </div>
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs flex items-center justify-between">
          <span className="text-white/80">Cursor Sync (Figma model)</span>
          <span className="font-mono text-[10px] text-white/50">Active</span>
        </div>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="pt-3 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-[#a9a6a0]">
      <span>Radix UI + Redux Toolkit</span>
      <span>WebSocket Synced</span>
    </div>
  </div>
);

// Mini-UI for YouTube Clone
const YouTubeCloneMiniUI = () => (
  <div className="w-full h-full bg-[#0f0f0f] text-[#f4f2ee] rounded-2xl p-5 flex flex-col justify-between border border-white/10 shadow-inner select-none font-sans">
    <div>
      {/* Top Header: YouTube Logo + Search Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-5 h-3.5 bg-[#cc0000] rounded-sm flex items-center justify-center text-[7px] text-white font-bold">
            ▶
          </div>
          <span className="font-mono text-[11px] font-bold tracking-wider text-white">
            YOUTUBE
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-[#a9a6a0]">
          <span className="px-2 py-0.5 rounded bg-white/10 text-white">API CONNECTED</span>
          <span>THEATER MODE</span>
        </div>
      </div>

      {/* Main 16:9 Video Player Simulation */}
      <div className="mt-3.5 relative aspect-[16/9] w-full rounded-xl bg-black border border-white/10 overflow-hidden flex flex-col justify-between p-3">
        <div className="flex justify-between items-center text-[10px] font-mono text-white/70">
          <span>React 18 · TypeScript</span>
          <span className="px-1.5 py-0.5 rounded bg-red-600 text-white text-[8px] font-bold">LIVE</span>
        </div>

        {/* Center Play Button Overlay */}
        <div className="my-auto mx-auto w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white text-base">
          ▶
        </div>

        {/* Playback Controls & Timeline Bar */}
        <div>
          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mb-1.5">
            <div className="w-2/5 h-full bg-red-600" />
          </div>
          <div className="flex justify-between items-center text-[9px] font-mono text-white/60">
            <span>12:45 / 28:30</span>
            <span>HD 1080p</span>
          </div>
        </div>
      </div>

      {/* Under-player Title & Engagement Bar */}
      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="h-2.5 w-36 bg-white/40 rounded mb-1" />
          <div className="h-2 w-20 bg-white/20 rounded" />
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px]">
          <span className="px-2 py-1 rounded-full bg-white/10 text-white">Like</span>
          <span className="px-2 py-1 rounded-full bg-white/10 text-white">Share</span>
        </div>
      </div>
    </div>

    {/* Bottom Status */}
    <div className="pt-3 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-[#a9a6a0]">
      <span>YouTube Data API v3</span>
      <span>Tailwind CSS + React Router</span>
    </div>
  </div>
);

export const Work: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string>(PROJECTS[0].id);

  return (
    <section id="work" className="section-py relative bg-[#f4f2ee]">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-tag rv" style={{ '--i': 1 } as React.CSSProperties}>
          <span>03</span>
          <span className="w-6 h-[1px] bg-[#0d0d0d]/30" />
          <span>Selected work</span>
        </div>

        <h2
          className="section-heading mb-12 rv"
          style={{ '--i': 2 } as React.CSSProperties}
        >
          Things I&apos;ve <span className="accent-word font-normal">built.</span>
        </h2>

        {/* Desktop Accordion Gallery (Side-by-side flex container) */}
        <div className="hidden lg:flex gap-4 h-[min(78svh,620px)] w-full items-stretch">
          {PROJECTS.map((proj) => {
            const isOpen = activeProject === proj.id;

            return (
              <div
                key={proj.id}
                onMouseEnter={() => setActiveProject(proj.id)}
                onFocus={() => setActiveProject(proj.id)}
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
                aria-label={`${proj.title} project panel`}
                className={`prem-card relative overflow-hidden transition-all duration-700 ease-[var(--ease)] cursor-pointer outline-none ${
                  isOpen
                    ? 'flex-[8] p-8 md:p-10 bg-white shadow-xl'
                    : 'flex-[1] p-6 bg-white/70 hover:bg-white flex flex-col justify-between items-center'
                }`}
              >
                {isOpen ? (
                  /* OPEN ACCORDION PANEL */
                  <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch animate-in fade-in duration-500">
                    {/* Left: Project Details */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 font-mono text-xs text-[#77756f] uppercase tracking-wider mb-3">
                          <span>{proj.index}</span>
                          <span>—</span>
                          <span>{proj.kicker}</span>
                        </div>

                        <h3 className="text-3xl font-bold tracking-tight text-[#0d0d0d] mb-4">
                          {proj.title}
                        </h3>

                        <p className="text-sm md:text-[15px] text-[#3a3a3a] leading-relaxed mb-6">
                          {proj.description}
                        </p>

                        {/* 2-column Feature List */}
                        <div className="mb-6">
                          <span className="font-mono text-xs uppercase tracking-wider text-[#77756f] block mb-2.5">
                            Key Features &amp; Impact
                          </span>
                          <ul className="grid grid-cols-1 gap-2 text-xs text-[#3a3a3a]">
                            {proj.features.map((feat, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#0d0d0d] font-bold mt-0.5">•</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Tech Chips + GitHub CTA */}
                      <div className="pt-6 border-t border-[#0d0d0d]/8 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-2">
                          {proj.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-full bg-[#0d0d0d]/5 font-mono text-xs text-[#3a3a3a]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {proj.github && (
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-pill-primary text-xs py-2 px-4 whitespace-nowrap"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View on GitHub ↗
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right: Illustrative Mini-UI */}
                    <div className="relative w-full h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] text-[#77756f] uppercase tracking-wider">
                          Illustrative UI
                        </span>
                        <span className="font-mono text-[10px] text-[#a9a6a0]">
                          Pure CSS/JSX Preview
                        </span>
                      </div>

                      <div className="relative flex-1 w-full rounded-2xl overflow-hidden shadow-sm">
                        {proj.id === 'cinescout' && <CineScoutMiniUI />}
                        {proj.id === 'bill-generator' && <BillGeneratorMiniUI />}
                        {proj.id === 'collaborative-dashboard' && (
                          <CollaborativeDashboardMiniUI />
                        )}
                        {proj.id === 'youtube-clone' && <YouTubeCloneMiniUI />}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* COLLAPSED ACCORDION SPINE */
                  <div className="w-full h-full flex flex-col justify-between items-center py-4">
                    <span className="font-mono text-xs font-bold text-[#77756f]">
                      {proj.index}
                    </span>

                    {/* Rotated Vertical Title */}
                    <div className="my-auto [writing-mode:vertical-rl] transform rotate-180 text-sm font-semibold tracking-wide text-[#3a3a3a] whitespace-nowrap">
                      {proj.title}
                    </div>

                    {/* Rotating Plus Button */}
                    <div className="w-8 h-8 rounded-full border border-[#0d0d0d]/20 flex items-center justify-center text-sm font-mono text-[#0d0d0d] transition-transform duration-300 group-hover:rotate-90">
                      +
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Accordion */}
        <div className="lg:hidden space-y-4">
          {PROJECTS.map((proj) => {
            const isOpen = activeProject === proj.id;

            return (
              <div
                key={proj.id}
                className="prem-card p-6 bg-white overflow-hidden transition-all duration-400"
              >
                <button
                  onClick={() => setActiveProject(isOpen ? '' : proj.id)}
                  className="w-full flex items-center justify-between text-left"
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="font-mono text-xs text-[#77756f] block mb-1">
                      {proj.index} — {proj.kicker}
                    </span>
                    <h3 className="text-xl font-bold text-[#0d0d0d]">
                      {proj.title}
                    </h3>
                  </div>

                  <span
                    className={`w-7 h-7 rounded-full border border-[#0d0d0d]/20 flex items-center justify-center font-mono text-sm transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-6 pt-5 border-t border-[#0d0d0d]/8 space-y-5 animate-in fade-in duration-300">
                    <p className="text-sm text-[#3a3a3a] leading-relaxed">
                      {proj.description}
                    </p>

                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#77756f] block mb-2">
                        Features &amp; Metrics
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#3a3a3a]">
                        {proj.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#0d0d0d]">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Illustrative mini-UI on mobile */}
                    <div className="h-[260px] w-full rounded-2xl overflow-hidden mt-4">
                      {proj.id === 'cinescout' && <CineScoutMiniUI />}
                      {proj.id === 'bill-generator' && <BillGeneratorMiniUI />}
                      {proj.id === 'collaborative-dashboard' && (
                        <CollaborativeDashboardMiniUI />
                      )}
                      {proj.id === 'youtube-clone' && <YouTubeCloneMiniUI />}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-full bg-[#0d0d0d]/5 font-mono text-[11px] text-[#3a3a3a]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-pill-primary text-xs py-2 px-4"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
