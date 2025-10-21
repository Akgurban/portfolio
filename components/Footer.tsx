"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Akgurban</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              A passionate software engineer creating beautiful and functional web experiences.
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Akgurban"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:akgurbanjumayev03@gmail.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-600">
              <p>Email: akgurbanjumayev03@gmail.com</p>
              <p>Location: Ashgabat, Turkmenistan</p>
              <p>Available: Freelance/Full-time</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Akgurban. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}