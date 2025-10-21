"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-white via-purple-50 to-white backdrop-blur-lg z-50 border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-18 md:h-20">
          <div className="">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group px-6 py-3 text-gray-700 font-medium transition-all duration-300"
                >
                  {item.name}
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg blur-sm opacity-0 group-hover:opacity-40 transition-opacity duration-300"></span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
