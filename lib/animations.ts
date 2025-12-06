import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Custom animation utilities
export const animations = {
  // Fade in animation
  fadeIn: (element: HTMLElement | HTMLElement[], options = {}) => {
    return gsap.fromTo(
      element,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        ...options
      }
    );
  },

  // Staggered fade in for multiple elements
  staggerFadeIn: (elements: HTMLElement[], options = {}) => {
    return gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        ...options
      }
    );
  },

  // Scale in animation
  scaleIn: (element: HTMLElement, options = {}) => {
    return gsap.fromTo(
      element,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        ...options
      }
    );
  },

  // Slide in from left
  slideInLeft: (element: HTMLElement, options = {}) => {
    return gsap.fromTo(
      element,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        ...options
      }
    );
  },

  // Slide in from right
  slideInRight: (element: HTMLElement, options = {}) => {
    return gsap.fromTo(
      element,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        ...options
      }
    );
  },

  // Text reveal animation
  textReveal: (element: HTMLElement, options = {}) => {
    return gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        ...options
      }
    );
  },

  // Parallax effect
  parallax: (element: HTMLElement, speed = 0.5) => {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  },

  // Animated counter
  countUp: (element: HTMLElement, end: number, options = {}) => {
    const obj = { value: 0 };
    return gsap.to(obj, {
      value: end,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        element.textContent = Math.floor(obj.value) + (element.textContent?.replace(/[0-9]/g, '') || '');
      },
      ...options
    });
  },

  // Floating animation
  floating: (element: HTMLElement, options = {}) => {
    const defaults = {
      duration: 3,
      y: -10,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true
    };
    return gsap.to(element, { ...defaults, ...options });
  },

  // Rotation animation
  rotate: (element: HTMLElement, options = {}) => {
    return gsap.to(element, {
      rotation: 360,
      duration: 20,
      ease: 'none',
      repeat: -1,
      ...options
    });
  }
};

// Create timeline for complex animations
export const createTimeline = () => {
  return gsap.timeline();
};

// ScrollTrigger helper
export const createScrollTrigger = (element: HTMLElement, animation: gsap.TweenVars, options = {}) => {
  return ScrollTrigger.create({
    trigger: element,
    animation: gsap.to(element, animation),
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
    ...options
  });
};

// Cleanup function
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};