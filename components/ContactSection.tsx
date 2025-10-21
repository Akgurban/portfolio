"use client";

import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {

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
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Akgurban",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Let's connect
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <info.icon className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {info.label}
                      </p>
                      <p className="text-gray-900">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          
        </div>
      </div>
    </section>
  );
}