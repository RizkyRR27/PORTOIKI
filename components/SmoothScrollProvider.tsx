'use client';

import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';

const SmoothScrollContext = createContext<Lenis | null>(null);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom easing
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    // Connect GSAP ScrollTrigger to Lenis scroll event
    lenis.on('scroll', () => {
      if (typeof window !== 'undefined') {
        try {
          const { ScrollTrigger } = require('gsap/ScrollTrigger');
          ScrollTrigger.update();
        } catch (e) {
          // gsap not loaded yet
        }
      }
    });

    // Run the animation loop
    let rafId: number;
    const update = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenisRef.current}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}
