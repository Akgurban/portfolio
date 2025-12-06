import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register plugins
gsap.registerPlugin(ScrollToPlugin);

export const smoothScroll = (target: string | HTMLElement, options = { offset: 0 }) => {
  const targetElement = typeof target === 'string' ? document.querySelector(target) : target;

  if (!targetElement) return;

  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: targetElement,
      offsetY: options.offset,
      autoKill: true
    },
    ease: 'power2.inOut'
  });
};

// Smooth scroll for all anchor links
export const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    const target = anchor.getAttribute('href');
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      if (target) {
        smoothScroll(target);
      }
    });
  });
};

// Horizontal scroll utility
export const horizontalScroll = (container: HTMLElement, target: number) => {
  gsap.to(container, {
    scrollLeft: target,
    duration: 1,
    ease: 'power2.inOut'
  });
};