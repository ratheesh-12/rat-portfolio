import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Play, Pause } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    longDescription: "This comprehensive e-commerce platform provides a seamless shopping experience with features like real-time inventory management, secure payment processing via Stripe, email notifications, and detailed analytics dashboard for administrators.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/ratheesh-12/ecommerce-platform",
    category: "Full-Stack"
  },
  {
    title: "Security Audit Tool",
    description: "A Python-based tool for automated security vulnerability scanning and reporting for web applications.",
    longDescription: "Advanced security scanning tool that performs comprehensive vulnerability assessments including SQL injection, XSS, CSRF, and other OWASP Top 10 vulnerabilities. Generates detailed reports with remediation suggestions.",
    image: "/placeholder.svg", 
    technologies: ["Python", "Flask", "SQLite", "OWASP", "Nmap"],
    githubUrl: "https://github.com/ratheesh-12/security-audit-tool",
    category: "Cybersecurity"
  },
  {
    title: "Task Management App",
    description: "A React Native mobile app for task management with real-time synchronization and offline support.",
    longDescription: "Cross-platform mobile application with features like drag-and-drop task organization, team collaboration, push notifications, and offline-first architecture with automatic sync when connected.",
    image: "/placeholder.svg",
    technologies: ["React Native", "Firebase", "Redux", "AsyncStorage"],
    liveUrl: "https://play.google.com/store/apps/task-manager",
    githubUrl: "https://github.com/ratheesh-12/task-manager-app",
    category: "Mobile"
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with data visualization and forecasting using modern web technologies.",
    longDescription: "Beautiful and responsive weather dashboard that provides current conditions, 7-day forecasts, weather maps, and historical data with interactive charts and animations.",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    liveUrl: "https://weather-dashboard-demo.com",
    githubUrl: "https://github.com/ratheesh-12/weather-dashboard",
    category: "Frontend"
  },
  {
    title: "API Gateway",
    description: "Microservices API gateway with authentication, rate limiting, and monitoring capabilities.",
    longDescription: "Enterprise-grade API gateway solution with features like JWT authentication, rate limiting, request/response transformation, API versioning, and comprehensive monitoring with metrics and logging.",
    image: "/placeholder.svg",
    technologies: ["Node.js", "Express", "Redis", "JWT", "Docker"],
    githubUrl: "https://github.com/ratheesh-12/api-gateway",
    category: "Backend"
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio website built with React, TypeScript, and Tailwind CSS with modern animations.",
    longDescription: "Modern, responsive portfolio website featuring advanced animations, particle backgrounds, interactive chatbot, and optimized performance. Built with accessibility and SEO best practices.",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://ratheesh-portfolio.com",
    githubUrl: "https://github.com/ratheesh-12/rat-portfolio",
    category: "Frontend"
  }
];

const categories = ["All", "Full-Stack", "Frontend", "Backend", "Mobile", "Cybersecurity"];

export const ProjectsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, mobile apps, and cybersecurity tools
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="ghost" onClick={() => setSelectedProject(project)}>
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <p className="text-muted-foreground leading-relaxed">
                          {project.longDescription}
                        </p>
                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3 pt-4">
                          {project.liveUrl && (
                            <Button asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                View Live
                              </a>
                            </Button>
                          )}
                          <Button variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
