import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "SecureChat App",
    description: "End-to-end encrypted messaging application with real-time communication and advanced security features.",
    tech: ["React", "Node.js", "Socket.io", "Cryptography", "PostgreSQL"],
    github: "https://github.com/rathii/securechat",
    live: "https://securechat-demo.vercel.app",
    featured: true,
    image: "🔐"
  },
  {
    title: "Portfolio Tracker",
    description: "Full-stack investment portfolio tracker with real-time stock prices and analytics dashboard.",
    tech: ["React", "TypeScript", "Python", "FastAPI", "MySQL"],
    github: "https://github.com/rathii/portfolio-tracker",
    live: "https://portfolio-tracker-demo.com",
    featured: true,
    image: "📈"
  },
  {
    title: "Vulnerability Scanner",
    description: "Automated web application security scanner for common vulnerabilities (OWASP Top 10).",
    tech: ["Python", "Selenium", "SQLAlchemy", "Flask", "Docker"],
    github: "https://github.com/rathii/vuln-scanner",
    featured: false,
    image: "🛡️"
  },
  {
    title: "Task Management API",
    description: "RESTful API for task management with JWT authentication and role-based access control.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "JWT"],
    github: "https://github.com/rathii/task-api",
    featured: false,
    image: "📋"
  },
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce platform with payment integration and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    github: "https://github.com/rathii/ecommerce",
    live: "https://ecommerce-demo.netlify.app",
    featured: true,
    image: "🛒"
  },
  {
    title: "Machine Learning Predictor",
    description: "Stock price prediction model using LSTM neural networks and real-time data analysis.",
    tech: ["Python", "TensorFlow", "Pandas", "Flask", "Chart.js"],
    github: "https://github.com/rathii/ml-predictor",
    featured: false,
    image: "🤖"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development and cybersecurity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                project.featured ? "border-primary/50 shadow-glow" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-4xl">{project.image}</div>
                  {project.featured && (
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs hover:scale-105 transition-transform"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                
                {project.live && (
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 transition-all"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};