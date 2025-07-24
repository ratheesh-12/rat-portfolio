import { useEffect, useState } from "react";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "Node.js", icon: "🟢" },
  { name: "MySQL", icon: "🐬" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "🌳" },
  { name: "Linux", icon: "🐧" },
  { name: "Cybersecurity", icon: "🔒" }
];

export const TechCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-primary/5 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-xl font-semibold text-card-foreground mb-8">
          Technologies I Work With
        </h3>
        
        {/* Mobile View - Carousel */}
        <div className="md:hidden flex justify-center">
          <div className="bg-card rounded-lg p-4 shadow-soft min-w-[120px] text-center animate-scale-in">
            <div className="text-3xl mb-2">{techStack[currentIndex].icon}</div>
            <div className="text-sm font-medium text-card-foreground">
              {techStack[currentIndex].name}
            </div>
          </div>
        </div>

        {/* Desktop View - Scrolling Banner */}
        <div className="hidden md:block">
          <div className="flex animate-gradient-x">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center bg-card rounded-lg p-3 mx-2 shadow-soft min-w-[120px] flex-shrink-0 animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl mr-3">{tech.icon}</div>
                <div className="text-sm font-medium text-card-foreground">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};