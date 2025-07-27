import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Tech Innovations Ltd",
    location: "Remote",
    period: "2023 - Present",
    type: "Full-time",
    description: "Developed and maintained web applications using React, Node.js, and MongoDB. Implemented security best practices and conducted code reviews.",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"]
  },
  {
    title: "Cybersecurity Analyst",
    company: "SecureNet Solutions",
    location: "Chennai, India", 
    period: "2022 - 2023",
    type: "Full-time",
    description: "Performed penetration testing, vulnerability assessments, and security audits. Developed security protocols and conducted training sessions.",
    technologies: ["Penetration Testing", "OWASP", "Network Security", "Linux", "Python"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Co",
    location: "Bangalore, India",
    period: "2021 - 2022",
    type: "Full-time", 
    description: "Built responsive web interfaces using React and TypeScript. Collaborated with UX/UI designers to implement modern designs.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
  }
];

export const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles in technology and cybersecurity
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  index === activeIndex
                    ? "ring-2 ring-primary shadow-lg scale-105"
                    : "hover:scale-102"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </CardTitle>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Timeline indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {experiences.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
