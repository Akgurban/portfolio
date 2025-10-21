import { Button } from "@/components/ui/button";
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
    featured: true,
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
    featured: true,
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
    featured: false,
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
    featured: false,
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
    featured: false,
    date: "2023",
  },
];

export default function ProjectsSection() {
  const featuredProjects = projectsData.filter((project) => project.featured);
  const otherProjects = projectsData.filter((project) => !project.featured);

  const ProjectCard = ({ project }: { project: (typeof projectsData)[0] }) => (
    <div className="bg-white bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 aspect-video flex items-center justify-center text-white font-semibold">
        <span>Project Screenshot</span>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 text-gray-600 flex items-center">
            <Calendar size={14} className="mr-1" />
            {project.date}
          </span>
          <span className="text-xs px-2 py-1 bg-blue-100 bg-blue-100 text-blue-600 text-blue-600 rounded-full">
            {project.featured ? "Featured" : "Recent"}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-gray-100 bg-gray-200 text-gray-700 text-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          <Button asChild variant="outline" size="sm">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          </Button>
          <Button asChild size="sm">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills and
            expertise
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-gray-900 mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-semibold mb-4">
            Have a project in mind?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
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
