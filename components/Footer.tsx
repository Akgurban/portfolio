"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Code, Link2, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { smoothScroll } from "@/lib/smoothScroll";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const quickLinksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const socialRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const backToTopRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  const scrollToTop = () => {
    smoothScroll('#home');
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    if (!footerRef.current) return;

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 90%',
        end: 'bottom top',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate brand section
    tl.from(brandRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Animate social icons
    socialRefs.current.forEach((social, index) => {
      if (social) {
        tl.from(social, {
          opacity: 0,
          scale: 0,
          duration: 0.5,
          ease: 'back.out(1.7)'
        }, `-=${0.1 * index}`);
      }
    });

    // Animate quick links
    tl.from(quickLinksRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3');

    // Animate contact info
    tl.from(contactRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.2');

    // Animate bottom section
    tl.from(bottomRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.2');

    // Continuous arrow animation
    gsap.to(arrowRef.current, {
      y: -3,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Add hover effects for social icons
    socialRefs.current.forEach((social) => {
      if (social) {
        social.addEventListener('mouseenter', () => {
          gsap.to(social, {
            y: -5,
            rotation: 5,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
        social.addEventListener('mouseleave', () => {
          gsap.to(social, {
            y: 0,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
        social.addEventListener('mousedown', () => {
          gsap.to(social, {
            scale: 0.9,
            duration: 0.1,
            ease: 'power2.out'
          });
        });
        social.addEventListener('mouseup', () => {
          gsap.to(social, {
            scale: 1,
            duration: 0.1,
            ease: 'power2.out'
          });
        });
      }
    });

    // Add hover effect for back to top button
    if (backToTopRef.current) {
      backToTopRef.current.addEventListener('mouseenter', () => {
        gsap.to(backToTopRef.current, {
          y: -3,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      backToTopRef.current.addEventListener('mouseleave', () => {
        gsap.to(backToTopRef.current, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-muted/30 border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div
            ref={brandRef}
            className="md:col-span-2 space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Akgurban
            </h3>
            <p className="text-muted-foreground max-w-md">
              A passionate software engineer creating beautiful and functional web experiences.
              Let's build something amazing together.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Code, href: "https://github.com/Akgurban", label: "GitHub" },
                { icon: Link2, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:akgurbanjumayev03@gmail.com", label: "Email" },
              ].map((social, index) => (
                <Button
                  key={social.label}
                  ref={el => {
                    if (el) socialRefs.current[index] = el;
                  }}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-purple-500/20"
                >
                  <a
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <social.icon size={20} />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            ref={quickLinksRef}
          >
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div
            ref={contactRef}
          >
            <h4 className="text-lg font-semibold mb-4 text-foreground">Get in Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: akgurbanjumayev03@gmail.com</p>
              <p>Location: Ashgabat, Turkmenistan</p>
              <div className="inline-block mt-2">
                <Badge variant="secondary">
                  Available for Work
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mt-8 mb-8" />

        <div
          ref={bottomRef}
          className="flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Akgurban. All rights reserved.
          </p>
          <div
            ref={backToTopRef}
          >
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="mt-4 sm:mt-0 gap-2 hover:bg-purple-500/20"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}