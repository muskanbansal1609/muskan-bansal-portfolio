'use client';

import React, { useEffect, useState, useRef } from 'react';
import { NAV, PROFILE } from '@/lib/data';
import { useScroll } from '@/lib/scroll';
import { useScrollProgress } from '@/lib/hooks';

export const Navigation: React.FC = () => {
  const { scrollTo } = useScroll();
  const scrollProgress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pillRect, setPillRect] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  const navListRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Handle scroll state for navbar appearance (> 40px)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section with rootMargin: -45% 0px -50% 0px
  useEffect(() => {
    const sectionIds = NAV.map((item) => item.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-45% 0px -50% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Update sliding indicator pill under active link
  useEffect(() => {
    const activeEl = linkRefs.current[activeSection];
    const parentEl = navListRef.current;
    if (activeEl && parentEl) {
      const parentRect = parentEl.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      setPillRect({
        left: elRect.left - parentRect.left,
        width: elRect.width,
      });
    }
  }, [activeSection, scrolled]);

  // Lock scroll when mobile menu is open, handle Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollTo(href, -20);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* 2px ink scroll-progress bar along the very top */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-[#0d0d0d] z-50 transition-all duration-75 pointer-events-none"
        style={{ width: `${scrollProgress * 100}%` }}
        aria-hidden="true"
      />

      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-400 py-4 px-[var(--gutter)] flex items-center justify-between pointer-events-none"
        style={{
          paddingTop: scrolled ? '14px' : '24px',
          paddingBottom: scrolled ? '14px' : '24px',
        }}
      >
        {/* Left: Initials mark + Full name */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className={`group relative flex items-center justify-center w-10 h-10 rounded-full text-xs font-mono font-semibold transition-all duration-400 ${
              scrolled
                ? 'bg-[#0d0d0d] text-[#f4f2ee] shadow-md'
                : 'bg-transparent text-[#0d0d0d] border border-[#0d0d0d]/30'
            }`}
            aria-label="Muskan Bansal - back to top"
          >
            <span className="transition-transform duration-500 ease-[var(--ease)] group-hover:rotate-[360deg]">
              MB
            </span>
          </a>

          <span
            className={`font-medium tracking-tight text-sm text-[#0d0d0d] transition-opacity duration-300 ${
              scrolled ? 'opacity-0 pointer-events-none -translate-x-2' : 'opacity-100'
            }`}
          >
            {PROFILE.name}
          </span>
        </div>

        {/* Center / Right: Desktop navigation pill */}
        <nav
          className={`hidden md:block pointer-events-auto transition-all duration-500 ease-[var(--ease)] rounded-full px-2 py-1.5 ${
            scrolled
              ? 'bg-white/80 backdrop-blur-md shadow-sm border border-[#0d0d0d]/8'
              : 'bg-transparent border border-transparent'
          }`}
          aria-label="Main Navigation"
        >
          <ul
            ref={navListRef}
            className="relative flex items-center gap-1 text-[13px] font-medium"
          >
            {/* Sliding ink indicator pill */}
            <span
              className="absolute top-1 bottom-1 bg-[#0d0d0d] rounded-full transition-all duration-350 ease-[var(--ease)] pointer-events-none"
              style={{
                left: `${pillRect.left}px`,
                width: `${pillRect.width}px`,
                opacity: pillRect.width > 0 ? 1 : 0,
              }}
              aria-hidden="true"
            />

            {NAV.map((item) => {
              const secId = item.href.replace('#', '');
              const isActive = activeSection === secId;

              return (
                <li key={item.href}>
                  <a
                    ref={(el) => {
                      linkRefs.current[secId] = el;
                    }}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`relative z-10 block px-4 py-1.5 rounded-full transition-colors duration-250 ${
                      isActive
                        ? 'text-[#f4f2ee]'
                        : 'text-[#3a3a3a] hover:text-[#0d0d0d]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile: Menu toggle pill */}
        <div className="md:hidden pointer-events-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#0d0d0d]/10 text-xs font-mono tracking-wider uppercase text-[#0d0d0d] shadow-sm active:scale-95 transition-all"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Paper Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#f4f2ee] flex flex-col justify-between p-8 md:hidden transition-all duration-500 ease-[var(--ease)] ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]'
            : 'opacity-0 pointer-events-none [clip-path:polygon(0_0,100%_0,100%_0,0_0)]'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between border-b border-[#0d0d0d]/10 pb-6">
          <span className="font-mono text-xs text-[#77756f] uppercase tracking-wider">
            Navigation
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-sm font-mono uppercase tracking-wider text-[#0d0d0d]"
            aria-label="Close menu"
          >
            ✕ Close
          </button>
        </div>

        <nav className="my-auto">
          <ul className="space-y-4">
            {NAV.map((item, idx) => {
              const secId = item.href.replace('#', '');
              const isActive = activeSection === secId;

              return (
                <li
                  key={item.href}
                  className={`transition-all duration-500 ease-[var(--ease)] ${
                    mobileMenuOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(idx + 1) * 60}ms` }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="group flex items-baseline gap-4 py-2"
                  >
                    <span className="font-mono text-xs text-[#77756f]">
                      0{idx + 1}
                    </span>
                    <span
                      className={`text-3xl font-bold tracking-tight transition-colors duration-200 ${
                        isActive
                          ? 'text-[#0d0d0d] underline underline-offset-8'
                          : 'text-[#77756f] group-hover:text-[#0d0d0d]'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="pt-6 border-t border-[#0d0d0d]/10 flex justify-between items-center text-xs font-mono text-[#77756f]">
          <span>{PROFILE.location}</span>
          <a
            href={PROFILE.resumePath}
            download
            className="text-[#0d0d0d] underline font-medium"
          >
            Download Résumé ↓
          </a>
        </div>
      </div>
    </>
  );
};
