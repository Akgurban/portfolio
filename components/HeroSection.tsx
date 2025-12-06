"use client";

import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, Mail, Download, Code, Link2 } from "lucide-react";
import { gsap } from 'gsap';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const floatingShapes = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline();

    // Floating shapes animation
    floatingShapes.current.forEach((shape, index) => {
      if (shape) {
        gsap.to(shape, {
          y: -15 - index * 5,
          duration: 4 + index,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: index * 0.5
        });

        gsap.to(shape, {
          rotation: 360,
          duration: 20 + index * 5,
          repeat: -1,
          ease: 'none'
        });
      }
    });

    // Initial hero animations
    tl.from(titleRef.current, {
      opacity: 0,
      y: 60,
      rotationX: 90,
      transformPerspective: 800,
      duration: 1.2,
      ease: 'power3.out'
    })
    .from(subtitleRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.8')
    .from(descriptionRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.6')
    .from(buttonsRef.current?.children || [], {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    }, '-=0.4')
    .from(socialRef.current?.children || [], {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'back.out(2)'
    }, '-=0.2')
    .from(scrollRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Scroll animations for continuous movement
    gsap.to(scrollRef.current, {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleDownload = () => {
    // Add download functionality
    window.open('/resume-placeholder.txt', '_blank');
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={el => {
              if (el) floatingShapes.current[i] = el;
            }}
            className={`absolute w-32 h-32 ${
              i % 2 === 0 ? 'bg-purple-500/10' : 'bg-blue-500/10'
            } rounded-full blur-3xl ${
              i === 0 ? 'top-20 left-20' :
              i === 1 ? 'top-40 right-32' :
              i === 2 ? 'bottom-20 left-40' :
              i === 3 ? 'bottom-32 right-20' :
              i === 4 ? 'top-1/2 left-1/3' :
              'bottom-1/2 right-1/3'
            }`}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 mt-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white/80 text-sm font-medium">Available for work</span>
          </div>

          {/* Title with gradient */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
              Hi, I'm
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
              Akgurban
            </span>
          </h1>

          {/* Subtitle */}
          <h2
            ref={subtitleRef}
            className="text-2xl md:text-4xl font-semibold text-white/90"
          >
            Software Engineer
          </h2>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting exceptional digital experiences with modern web technologies.
            Specialized in building scalable applications that make a difference.
          </p>

          {/* Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg group shadow-xl shadow-purple-500/25 transition-all duration-300"
              onClick={handleDownload}
            >
              <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm px-8 py-3 text-lg transition-all duration-300"
            >
              <Link href="#contact" className="flex items-center">
                Let's Talk
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div
            ref={socialRef}
            className="flex justify-center gap-4"
          >
            {[
              { icon: Code, href: "https://github.com/Akgurban", label: "GitHub" },
              { icon: Link2, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:akgurbanjumayev03@gmail.com", label: "Email" },
            ].map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full group"
              >
                <a
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-white group-hover:text-purple-300 transition-colors"
                >
                  <social.icon size={24} />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
}