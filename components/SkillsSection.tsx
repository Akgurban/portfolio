"use client";

import { useState } from "react";
import { Code, Palette, Smartphone, Database, Layers, Zap } from "lucide-react";

const skillsData = [
  {
    category: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    category: "UI/UX Design",
    icon: Palette,
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 70 },
      { name: "Responsive Design", level: 90 },
      { name: "Design Systems", level: 80 },
      { name: "Prototyping", level: 75 },
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 80 },
      { name: "Flutter", level: 70 },
      { name: "Progressive Web Apps", level: 85 },
      { name: "iOS/Android", level: 75 },
      { name: "Cross-platform", level: 80 },
    ],
  },
  {
    category: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 80 },
      { name: "RESTful APIs", level: 85 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    category: "Tools & Others",
    icon: Layers,
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "CI/CD", level: 75 },
      { name: "Testing", level: 80 },
    ],
  },
  {
    category: "Performance",
    icon: Zap,
    skills: [
      { name: "Web Vitals", level: 85 },
      { name: "SEO", level: 80 },
      { name: "Optimization", level: 90 },
      { name: "Web Accessibility", level: 85 },
      { name: "Caching", level: 75 },
    ],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].category);

  const activeSkills = skillsData.find(skill => skill.category === activeCategory);

  const SkillBar = ({ level }: { level: number }) => (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className="bg-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      />
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Layers className="mr-2 text-blue-600" size={20} />
                Categories
              </h3>
              <div className="space-y-2">
                {skillsData.map((category) => (
                  <button
                    key={category.category}
                    onClick={() => setActiveCategory(category.category)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeCategory === category.category
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <category.icon size={20} className={activeCategory === category.category ? "text-white" : "text-gray-500"} />
                    <span className="font-medium">{category.category}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {/* Main Skills Card */}
              <div className="bg-white rounded-lg shadow p-8">
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    {activeSkills && <activeSkills.icon className="text-blue-600 mr-3" size={28} />}
                    <h3 className="text-2xl font-bold text-gray-900">
                      {activeCategory}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    My proficiency level in various technologies within this category
                  </p>
                </div>

                <div className="space-y-6">
                  {activeSkills?.skills.map((skill) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900 font-semibold text-lg">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <SkillBar level={skill.level} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-500 rounded-lg p-6 text-white">
                  <div className="flex items-center mb-3">
                    <Zap className="mr-2" size={24} />
                    <h4 className="text-lg font-semibold">Fast Learner</h4>
                  </div>
                  <p className="text-blue-100">
                    Continuously learning new technologies and frameworks
                  </p>
                </div>

                <div className="bg-purple-500 rounded-lg p-6 text-white">
                  <div className="flex items-center mb-3">
                    <Database className="mr-2" size={24} />
                    <h4 className="text-lg font-semibold">Problem Solver</h4>
                  </div>
                  <p className="text-purple-100">
                    Strong analytical thinking and debugging skills
                  </p>
                </div>

                <div className="bg-green-500 rounded-lg p-6 text-white">
                  <div className="flex items-center mb-3">
                    <Code className="mr-2" size={24} />
                    <h4 className="text-lg font-semibold">Team Player</h4>
                  </div>
                  <p className="text-green-100">
                    Excellent communication and collaboration abilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}