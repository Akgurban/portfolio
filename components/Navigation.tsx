"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900/90 via-purple-900/90 to-slate-900/90 backdrop-blur-xl z-50 border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            onClick={(e) => handleNavClick(e as any, "#home")}
            className="group cursor-pointer flex items-center space-x-3"
          >
            <div className="relative">
              <Sparkles className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-all duration-300 group-hover:rotate-180" />
              <div className="absolute inset-0 w-8 h-8 bg-purple-400/20 rounded-full blur-lg group-hover:bg-purple-400/30 transition-all duration-300"></div>
            </div>
            <span className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
              Akgurban<span className="text-purple-400">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-xl ${
                    activeSection === item.href.replace("#", "")
                      ? "text-white bg-purple-500/20 border border-purple-400/30 shadow-lg shadow-purple-500/20"
                      : "text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/10"
                  } border border-transparent`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.href.replace("#", "") && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl"></div>
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative group p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors" />
            ) : (
              <Menu className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-white/10 backdrop-blur-xl">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-6 py-4 text-sm font-medium rounded-xl transition-all duration-300 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    {activeSection === item.href.replace("#", "") && (
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                    )}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
