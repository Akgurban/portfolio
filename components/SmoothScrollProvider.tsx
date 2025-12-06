"use client";

import { useEffect } from 'react';
import { initSmoothScroll } from '@/lib/smoothScroll';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize smooth scroll for anchor links
    initSmoothScroll();

    // Cleanup
    return () => {
      // GSAP ScrollTrigger cleanup happens in individual components
    };
  }, []);

  return <>{children}</>;
}