'use client';

import { useEffect, useState, useRef, RefObject } from 'react';

/**
 * Hook to observe element visibility via IntersectionObserver
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit & { triggerOnce?: boolean } = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check prefers-reduced-motion: if reduced, show immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}

/**
 * Hook to track scroll progress (0 to 1) of the page or a target element
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }
      const current = window.scrollY;
      setProgress(Math.min(1, Math.max(0, current / scrollHeight)));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return progress;
}

/**
 * Hook to check if user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return prefersReducedMotion;
}

/**
 * Damped spring/pendulum motion hook for the ID card lanyard
 */
export function usePendulum(enabled: boolean = true) {
  const [angle, setAngle] = useState(0);
  const angleRef = useRef(0);
  const velocityRef = useRef(0);
  const targetAngleRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.05); // cap delta
      lastTime = time;

      // Subtle idle sway when no pointer velocity
      const idleSway = Math.sin(time * 0.002) * 1.5;
      const target = targetAngleRef.current + idleSway;

      // Spring physics: F = -k*x - c*v
      const k = 45; // Spring constant
      const damping = 7.5; // Damping constant
      const displacement = angleRef.current - target;
      const acceleration = -k * displacement - damping * velocityRef.current;

      velocityRef.current += acceleration * dt;
      angleRef.current += velocityRef.current * dt;

      setAngle(angleRef.current);
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [enabled]);

  const push = (intensity: number) => {
    velocityRef.current += intensity;
  };

  const setTarget = (ang: number) => {
    targetAngleRef.current = ang;
  };

  return { angle, push, setTarget };
}
