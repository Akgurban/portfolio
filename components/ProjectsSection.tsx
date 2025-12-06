import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Code } from "lucide-react";

const projectsData = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and responsive design. Built with Next.js, Node.js, and PostgreSQL.",
    image: "/api/placeholder/600/400",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2024",
  },
  {
    title: "Task Management Dashboard",
    description:
      "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2024",
  },
  {
    title: "Weather App",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Weather API", "Redux", "Charts.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2023",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and dark mode.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2024",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media management with real-time data visualization and reporting features.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "D3.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2023",
  },
];

export default function ProjectsSection() {

  const ProjectCard = ({ project }: { project: (typeof projectsData)[0] }) => (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 aspect-video flex items-center justify-center text-white font-semibold">
          <span>Project Screenshot</span>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
              <Button size="sm" variant="secondary" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2"
                >
                  <Github size={20} />
                </a>
              </Button>
              <Button size="sm" variant="secondary" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2"
                >
                  <ExternalLink size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar size={14} />
          <span>{project.date}</span>
        </div>

        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-0 px-6 pb-6">
        <div className="flex gap-3 w-full">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          </Button>
          <Button asChild size="sm" className="flex-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills and
            expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-lg p-8 text-primary-foreground">
          <h3 className="text-2xl font-semibold mb-4">
            Have a project in mind?
          </h3>
          <p className="primary-foreground/90 mb-6 max-w-2xl mx-auto">
            I'm always excited to work on new projects. Let's collaborate and
            bring your ideas to life!
          </p>
          <Button asChild variant="secondary" size="lg">
            <a href="#contact">
              <Code className="mr-2" size={20} />
              Let's Work Together
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
