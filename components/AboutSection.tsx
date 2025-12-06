"use client";

import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const statNumbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  const stats = [
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 50, suffix: '+', label: 'Projects Completed' },
    { value: 20, suffix: '+', label: 'Happy Clients' },
    { value: 100, suffix: '%', label: 'Client Satisfaction' }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Create ScrollTrigger timeline for section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate title and subtitle
    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    })
    .from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')
    .from(contentRef.current?.children || [], {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out'
    }, '-=0.3')
    .from(imageRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'back.out(1.7)'
    }, '-=0.5');

    // Animate stats
    statsRef.current.forEach((statCard, index) => {
      if (statCard) {
        tl.from(statCard, {
          opacity: 0,
          y: 50,
          rotationY: -90,
          duration: 0.8,
          ease: 'power3.out'
        }, `-=${0.2 * index}`)
        .from(statNumbersRef.current[index], {
          textContent: '0',
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() {
            const stat = stats[index];
            this.textContent = Math.floor(this.progress() * stat.value) + stat.suffix;
          }
        }, `-=${0.2 * index}`);
      }
    });

    // Parallax effect for the section
    gsap.to(imageRef.current, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Parallax effect for stat cards
    statsRef.current.forEach((statCard, index) => {
      if (statCard) {
        gsap.to(statCard, {
          yPercent: -10 * (index + 1),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      }
    });

    // Hover animations
    statsRef.current.forEach((statCard) => {
      if (statCard) {
        statCard.addEventListener('mouseenter', () => {
          gsap.to(statCard, {
            y: -10,
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        statCard.addEventListener('mouseleave', () => {
          gsap.to(statCard, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            About Me
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Passionate software engineer with a love for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-foreground leading-relaxed text-lg">
              I'm a passionate software engineer with a keen eye for design and a love for creating
              exceptional user experiences. With expertise in modern web technologies, I transform
              ideas into responsive, accessible, and performant applications.
            </p>
            <p className="text-foreground leading-relaxed text-lg">
              My journey in software development started 5 years ago, and I've been continuously
              learning and adapting to new technologies and best practices ever since. I believe
              in writing clean, maintainable code and creating solutions that not only look
              great but also provide value to users.
            </p>
          </div>

          {/* Image and Stats */}
          <div className="relative">
            <div
              ref={imageRef}
              className="aspect-square w-full max-w-md mx-auto relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl transform -rotate-3"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 p-1">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src="/image.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500/20 rounded-full blur-md"></div>
              <div className="absolute top-8 -left-2 w-4 h-4 bg-blue-500/20 rounded-full blur-sm"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-green-500/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              ref={el => {
                statsRef.current[index] = el;
                return undefined;
              }}
              className="relative overflow-hidden bg-card border-0 shadow-xl group-hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="relative p-6 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  <span
                    ref={el => {
                      statNumbersRef.current[index] = el;
                      return undefined;
                    }}
                  >
                    0{stat.suffix}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}