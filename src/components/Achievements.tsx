import { Award, Calendar, Trophy, Target } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const achievements = [
  {
    title: "Sakthi Hackathon Finalist",
    description: "Top 10 finalist in the prestigious Sakthi Hackathon 2024 with SecureChat application",
    date: "March 2024",
    type: "competition",
    icon: Trophy,
    badge: "Finalist"
  },
  {
    title: "100 Days of LeetCode",
    description: "Completed 100 consecutive days of coding challenges, solving 150+ algorithmic problems",
    date: "January 2024",
    type: "challenge",
    icon: Target,
    badge: "Completed"
  },
  {
    title: "Cybersecurity Certification",
    description: "Earned CompTIA Security+ certification demonstrating expertise in cybersecurity fundamentals",
    date: "December 2023",
    type: "certification",
    icon: Award,
    badge: "Certified"
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to 15+ open source projects with 200+ commits and 50+ stars earned",
    date: "Ongoing",
    type: "contribution",
    icon: Target,
    badge: "Active"
  },
  {
    title: "University Dean's List",
    description: "Achieved Dean's List recognition for academic excellence with 3.8+ GPA for 3 consecutive semesters",
    date: "2023-2024",
    type: "academic",
    icon: Award,
    badge: "Honor"
  },
  {
    title: "Tech Talk Speaker",
    description: "Delivered presentations on 'Modern Web Security' at 3 technical conferences and meetups",
    date: "2023-2024",
    type: "speaking",
    icon: Trophy,
    badge: "Speaker"
  }
];

const typeColors = {
  competition: "bg-yellow-500/10 text-yellow-600 border-yellow-200 dark:bg-yellow-500/20 dark:text-yellow-400",
  challenge: "bg-green-500/10 text-green-600 border-green-200 dark:bg-green-500/20 dark:text-green-400",
  certification: "bg-blue-500/10 text-blue-600 border-blue-200 dark:bg-blue-500/20 dark:text-blue-400",
  contribution: "bg-purple-500/10 text-purple-600 border-purple-200 dark:bg-purple-500/20 dark:text-purple-400",
  academic: "bg-red-500/10 text-red-600 border-red-200 dark:bg-red-500/20 dark:text-red-400",
  speaking: "bg-orange-500/10 text-orange-600 border-orange-200 dark:bg-orange-500/20 dark:text-orange-400"
};

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Achievements & Milestones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key accomplishments and recognition that highlight my journey in technology and cybersecurity
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>

          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={achievement.title}
                className={`relative flex items-center mb-12 animate-fade-in ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block"></div>

                {/* Achievement Card */}
                <Card className={`w-full md:w-5/12 ${isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"} hover:shadow-glow transition-all duration-300 hover:-translate-y-1`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="p-2 rounded-lg bg-primary/10 mr-3">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <Badge
                          variant="outline"
                          className={typeColors[achievement.type as keyof typeof typeColors]}
                        >
                          {achievement.badge}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {achievement.date}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-card-foreground">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {achievement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};