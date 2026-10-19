'use client';

import React, { useState } from 'react';
import { SKILLS, SKILL_FAMILIES, SkillFamily, SkillItem } from '@/lib/data';
import { TechLogo, getLogoMeta } from '@/components/ui/TechLogo';

export const Skills: React.FC = () => {
  const [selectedFamily, setSelectedFamily] = useState<SkillFamily | 'All'>('All');
  const [activeSkill, setActiveSkill] = useState<SkillItem>(SKILLS[0]);

  return (
    <section id="skills" className="section-py relative bg-[#f4f2ee]">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-tag rv" style={{ '--i': 1 } as React.CSSProperties}>
          <span>02</span>
          <span className="w-6 h-[1px] bg-[#0d0d0d]/30" />
          <span>Technical stack</span>
        </div>

        <h2
          className="section-heading mb-10 rv"
          style={{ '--i': 2 } as React.CSSProperties}
        >
          The periodic table of my <span className="accent-word font-normal">stack.</span>
        </h2>

        {/* Filter Chips */}
        <div
          className="flex flex-wrap items-center gap-2 mb-12 rv"
          style={{ '--i': 3 } as React.CSSProperties}
        >
          <button
            onClick={() => setSelectedFamily('All')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all ${
              selectedFamily === 'All'
                ? 'bg-[#0d0d0d] text-white shadow-sm'
                : 'bg-white/70 text-[#3a3a3a] border border-[#0d0d0d]/10 hover:bg-white'
            }`}
          >
            All [ {SKILLS.length} ]
          </button>
          {SKILL_FAMILIES.map((family) => {
            const count = SKILLS.filter((s) => s.family === family).length;
            const isSelected = selectedFamily === family;
            return (
              <button
                key={family}
                onClick={() => setSelectedFamily(family)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all ${
                  isSelected
                    ? 'bg-[#0d0d0d] text-white shadow-sm'
                    : 'bg-white/70 text-[#3a3a3a] border border-[#0d0d0d]/10 hover:bg-white'
                }`}
              >
                {family} [ {count} ]
              </button>
            );
          })}
        </div>

        {/* Main Layout: Grid (8 cols desktop / 4 cols mobile) + Inspector Panel (320px) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* Periodic Table Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2.5 sm:gap-3">
            {SKILLS.map((skill, index) => {
              const row = Math.floor(index / 8);
              const col = index % 8;
              const delay = (row + col) * 40;
              const isMatch = selectedFamily === 'All' || skill.family === selectedFamily;
              const isSelected = activeSkill.name === skill.name;

              return (
                <button
                  key={skill.name}
                  onClick={() => setActiveSkill(skill)}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onFocus={() => setActiveSkill(skill)}
                  style={{
                    animationDelay: `${delay}ms`,
                  }}
                  className={`relative aspect-square p-2.5 rounded-2xl flex flex-col justify-between text-left transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#0d0d0d] text-white shadow-lg scale-105 z-10'
                      : 'bg-white border border-[#0d0d0d]/10 text-[#0d0d0d] hover:border-[#0d0d0d]/30 hover:shadow-md'
                  } ${!isMatch ? 'opacity-25 grayscale scale-95 pointer-events-auto' : 'opacity-100'}`}
                  aria-label={`${skill.name}, ${skill.family}`}
                >
                  {/* Top row: Atomic Number + Mini Symbol */}
                  <div className="flex justify-between items-start w-full">
                    <span
                      className={`font-mono text-[10px] ${
                        isSelected ? 'text-[#a9a6a0]' : 'text-[#77756f]'
                      }`}
                    >
                      {skill.number < 10 ? `0${skill.number}` : skill.number}
                    </span>
                    <span
                      className={`text-[8px] font-mono tracking-tighter uppercase px-1 rounded ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#0d0d0d]/5 text-[#77756f]'
                      }`}
                    >
                      {skill.family.slice(0, 3)}
                    </span>
                  </div>

                  {/* 2-letter Symbol */}
                  <div className="my-auto text-center w-full">
                    <span
                      className={`text-xl sm:text-2xl font-bold tracking-tight ${
                        isSelected ? 'text-white' : 'text-[#0d0d0d]'
                      }`}
                    >
                      {skill.symbol}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <div className="w-full">
                    <span
                      className={`block font-mono text-[9px] sm:text-[10px] leading-tight truncate ${
                        isSelected ? 'text-[#e9e6e0]' : 'text-[#3a3a3a]'
                      }`}
                      title={skill.name}
                    >
                      {skill.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Sticky Inspector Panel (320px) */}
          <aside
            className="prem-card sticky top-28 p-7 flex flex-col justify-between min-h-[460px] bg-white border border-[#0d0d0d]/10 shadow-lg"
            aria-label="Skill Inspector"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#0d0d0d]/8 pb-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#77756f]">
                  Inspector
                </span>
                <span className="font-mono text-xs text-[#0d0d0d] font-semibold">
                  No. {activeSkill.number < 10 ? `0${activeSkill.number}` : activeSkill.number}
                </span>
              </div>

              {/* Logo with Pop Animation */}
              <div className="flex items-center justify-center py-6 min-h-[170px]">
                <div
                  key={activeSkill.name}
                  className="transition-all duration-300 transform scale-100 animate-in fade-in zoom-in-90"
                >
                  <TechLogo
                    brandKey={activeSkill.brandKey}
                    size={140}
                    showGlow={true}
                  />
                </div>
              </div>

              {/* Details */}
              <div className="mt-4">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#77756f]">
                    [{activeSkill.symbol}]
                  </span>
                  <h3 className="text-xl font-bold text-[#0d0d0d] tracking-tight">
                    {activeSkill.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0d0d0d]/5 font-mono text-[11px] text-[#3a3a3a]">
                    {activeSkill.family}
                  </span>
                </div>
              </div>

              {/* Projects that use the skill */}
              <div className="mt-6 pt-5 border-t border-[#0d0d0d]/8">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#77756f] block mb-2.5">
                  Applied in:
                </span>
                <ul className="space-y-1.5">
                  {activeSkill.projects.map((proj) => (
                    <li
                      key={proj}
                      className="text-xs text-[#3a3a3a] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d]/40" />
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-[#0d0d0d]/8 font-mono text-[10px] text-[#77756f] flex justify-between">
              <span>Category</span>
              <span>{activeSkill.category}</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
