"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Code, Link2, Twitter, Send, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const bgOrbsRef = useRef<(HTMLDivElement | null)[]>([]);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akgurbanjumayev03@gmail.com",
      href: "mailto:akgurbanjumayev03@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+993 61882075",
      href: "tel:+99361882075",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ashgabat, Turkmenistan",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Code,
      label: "GitHub",
      href: "https://github.com/Akgurban",
    },
    {
      icon: Link2,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate background orbs
    bgOrbsRef.current.forEach((orb, index) => {
      if (orb) {
        gsap.to(orb, {
          rotation: index === 0 ? 360 : -360,
          duration: index === 0 ? 20 : 25,
          repeat: -1,
          ease: 'none'
        });

        gsap.to(orb, {
          scale: 1.2,
          duration: (index === 0 ? 10 : 12.5),
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        });
      }
    });

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate title
    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    })
    .from(contactInfoRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')
    .from(socialRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.3')
    .from(formRef.current, {
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5');

    // Animate contact info items
    const contactItems = contactInfoRef.current?.querySelectorAll('a');
    contactItems?.forEach((item, index) => {
      tl.from(item, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        ease: 'power2.out'
      }, `-=${0.1 * index}`);
    });

    // Animate social buttons
    const socialButtons = socialRef.current?.querySelectorAll('button');
    socialButtons?.forEach((btn, index) => {
      tl.from(btn, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: 'back.out(1.7)'
      }, `-=${0.1 * index}`);
    });

    // Add hover effects for contact cards
    const contactCards = contactInfoRef.current?.querySelectorAll('.card');
    contactCards?.forEach(card => {
      const c = card as HTMLElement;
      c.addEventListener('mouseenter', () => {
        gsap.to(c, {
          y: -5,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      c.addEventListener('mouseleave', () => {
        gsap.to(c, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Add hover effects for social icons
    const socialIcons = socialRef.current?.querySelectorAll('button');
    socialIcons?.forEach(icon => {
      const i = icon as HTMLButtonElement;
      i.addEventListener('mouseenter', () => {
        gsap.to(i, {
          scale: 1.2,
          rotation: 5,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      i.addEventListener('mouseleave', () => {
        gsap.to(i, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Add hover effects for form
    const formCard = formRef.current?.closest('.card');
    if (formCard) {
      const f = formCard as HTMLElement;
      f.addEventListener('mouseenter', () => {
        gsap.to(f, {
          y: -5,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      f.addEventListener('mouseleave', () => {
        gsap.to(f, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    }

    // Add input focus effects
    const inputs = formRef.current?.querySelectorAll('input, textarea');
    inputs?.forEach(input => {
      const inp = input as HTMLInputElement | HTMLTextAreaElement;
      inp.addEventListener('focus', () => {
        gsap.to(inp, {
          scale: 1.02,
          duration: 0.2,
          ease: 'power2.out'
        });
      });
      inp.addEventListener('blur', () => {
        gsap.to(inp, {
          scale: 1,
          duration: 0.2,
          ease: 'power2.out'
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={el => {
            if (el) bgOrbsRef.current[0] = el;
          }}
          className="absolute top-40 right-20 w-60 h-60 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-50"
        />
        <div
          ref={el => {
            if (el) bgOrbsRef.current[1] = el;
          }}
          className="absolute bottom-20 left-20 w-60 h-60 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={titleRef}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 gap-1">
            <Sparkles className="w-3 h-3" />
            Contact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div ref={contactInfoRef}>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-foreground">Let's Connect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-purple-500/20 transition-colors group"
                    >
                      <div className="contact-icon flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                        <info.icon className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-medium text-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div ref={socialRef}>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-foreground">Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
                      <Button
                        key={link.label}
                        variant="outline"
                        size="icon"
                        asChild
                        className="social-icon hover:bg-purple-500/20 hover:border-purple-500/40"
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <link.icon size={20} />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-foreground">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="form-input">
                        <Input
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-input">
                        <Input
                          type="email"
                          placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-input">
                      <Input
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-input">
                      <Textarea
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" size="lg">
                      <div className="flex items-center justify-center gap-2">
                        <Send size={20} />
                        Send Message
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}