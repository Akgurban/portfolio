"use client";

import { useState } from "react";
import { Code, Palette, Smartphone, Database, Layers, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

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

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-background via-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's a comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-4">
            <Card className="sticky top-24 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Layers className="mr-2 text-purple-600" size={20} />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {skillsData.map((category) => (
                  <div key={category.category}>
                    <Button
                      variant={activeCategory === category.category ? "default" : "ghost"}
                      onClick={() => handleCategoryChange(category.category)}
                      className="w-full justify-start hover:bg-purple-500/20"
                    >
                      <category.icon size={20} className="mr-3" />
                      {category.category}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {/* Main Skills Card */}
              <Card className="shadow-xl">
                <div>
                  <CardHeader>
                    <div className="flex items-center">
                      {activeSkills && <activeSkills.icon className="text-purple-600 mr-3" size={28} />}
                      <CardTitle>{activeCategory}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">
                      My proficiency level in various technologies within this category
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {activeSkills?.skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className="space-y-3"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-lg text-foreground">
                            {skill.name}
                          </span>
                          <Badge variant="secondary">
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="relative h-3">
                          <Progress value={skill.level} className="h-3" />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </div>
              </Card>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Zap,
                    title: "Fast Learner",
                    description: "Continuously learning new technologies and frameworks",
                  },
                  {
                    icon: Database,
                    title: "Problem Solver",
                    description: "Strong analytical thinking and debugging skills",
                  },
                  {
                    icon: Code,
                    title: "Team Player",
                    description: "Excellent communication and collaboration abilities",
                  },
                ].map((info) => (
                  <div key={info.title}>
                    <Card className="shadow-xl border-0 hover:shadow-2xl">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <info.icon
                            className="mr-2 text-purple-600"
                            size={24}
                          />
                          <h4 className="text-lg font-semibold text-foreground">{info.title}</h4>
                        </div>
                        <p className="text-muted-foreground">{info.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}