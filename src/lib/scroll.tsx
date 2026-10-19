'use client';

import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface ScrollContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | HTMLElement, offset?: number) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  lenis: null,
  scrollTo: () => {},
});

export function useScroll() {
  return useContext(ScrollContext);
}

export function scrollToTarget(target: string | HTMLElement, offset: number = 0) {
  if (typeof window === 'undefined') return;

  const targetEl =
    typeof target === 'string'
      ? document.querySelector<HTMLElement>(target)
      : target;

  if (!targetEl) return;

  const targetPosition =
    targetEl.getBoundingClientRect().top + window.scrollY + offset;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
}

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frameId = requestAnimationFrame(raf);

    // Setup RevealObserver for .rv and .rv-mask elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const observeElements = () => {
      document.querySelectorAll('.rv, .rv-mask').forEach((el) => {
        if (!el.classList.contains('is-in')) {
          observer.observe(el);
        }
      });
    };

    observeElements();
    const timeout = setTimeout(observeElements, 500);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timeout);
      observer.disconnect();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target: string | HTMLElement, offset: number = 0) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset, duration: 1.2 });
    } else {
      scrollToTarget(target, offset);
    }
  };

  return (
    <ScrollContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};
