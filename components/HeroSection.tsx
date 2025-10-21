import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
              Hi, I'm <span className="text-blue-600">Akgurban</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700">
            Software Engeneer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              I create beautiful, responsive, and user-friendly web applications
              using modern technologies. Passionate about clean code, great user
              experience, and continuous learning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg">
              Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Akgurban"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:akgurbanjumayev03@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-600 hover:text-blue-600">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
