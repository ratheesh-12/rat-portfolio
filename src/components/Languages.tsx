import { Badge } from "./ui/badge";

const languages = [
  {
    name: "Tamil",
    flag: "🇮🇳",
    level: "Native",
    proficiency: 100
  },
  {
    name: "English",
    flag: "🇬🇧",
    level: "Fluent",
    proficiency: 95
  }
];

export const Languages = () => {
  return (
    <section id="languages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Languages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Communication is key in global development teams
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
          {languages.map((language, index) => (
            <div
              key={language.name}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 min-w-[180px] text-center">
                <div className="text-4xl mb-3 group-hover:animate-bounce">
                  {language.flag}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {language.name}
                </h3>
                <Badge
                  variant="outline"
                  className="mb-3 bg-primary/10 text-primary border-primary/30"
                >
                  {language.level}
                </Badge>
                
                {/* Proficiency Bar */}
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${language.proficiency}%` }}
                  ></div>
                </div>
                <span className="text-sm text-muted-foreground">
                  {language.proficiency}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};