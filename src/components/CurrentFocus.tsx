import { BookOpen, Code, Shield, Zap, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const currentFocus = [
  {
    title: "Database Systems & SQL Mastery",
    description: "Mastering relational databases, advanced SQL queries, and performance tuning",
    icon: Database, // Replace with appropriate icon if needed
    status: "In Progress",
    progress: 55, // or your real progress
    timeframe: "4 months",
    details: [
      "Advanced SQL Querying (Joins, Subqueries, CTEs)",
      "MySQL & PostgreSQL Performance Tuning",
      "Schema Design & Normalization",
      "Database Security Best Practices"
    ]
  },  
  {
    title: "React + TypeScript Mastery",
    description: "Building scalable applications with modern React patterns and TypeScript",
    icon: Code,
    status: "In Progress",
    progress: 50,
    timeframe: "5 months",
    details: ["Advanced TypeScript Patterns", "React Performance Optimization", "State Management with Zustand"]
  },
  {
    title: "Advanced Cybersecurity",
    description: "Deep diving into ethical hacking, penetration testing, and security architecture",
    icon: Shield,
    status: "In Progress",
    progress: 30,
    timeframe: "6 months",
    details: ["OSCP Certification Prep", "Advanced Penetration Testing", "Security Architecture Design"]
  },
  {
    title: "Java DSA Mastery",
    description: "Mastering core data structures and algorithms using Java with competitive coding practices",
    icon: Code,
    status: "In Progress",
    progress: 20, // Set your actual progress here
    timeframe: "5 months",
    details: [
      "Tree, BST, and Graph Algorithms",
      "Sorting, Searching, and Sliding Window Problems",
      "Time & Space Complexity Analysis (Big O Notation)",
      "Solving LeetCode, GFG, and HackerRank problems in Java"
    ]
  },  
  {
    title: "Cloud Architecture (AWS)",
    description: "Learning cloud-native development and deployment strategies",
    icon: Zap,
    status: "Starting Soon",
    progress: 0,
    timeframe: "4 months",
    details: ["AWS Solutions Architect", "Serverless Applications", "Microservices Architecture"]
  },
  {
    title: "Machine Learning Engineering",
    description: "Applying ML techniques to cybersecurity and web applications",
    icon: BookOpen,
    status: "Research Phase",
    progress: 0,
    timeframe: "6 months",
    details: ["MLOps Pipelines", "Security ML Models", "Real-time Threat Detection"]
  }
];

const statusColors = {
  "In Progress": "bg-learning text-learning-foreground",
  "Active": "bg-success text-success-foreground",
  "Starting Soon": "bg-primary text-primary-foreground",
  "Research Phase": "bg-muted text-muted-foreground"
};

export const CurrentFocus = () => {
  return (
    <section id="focus" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            What I'm Learning Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning is key to staying current in technology. Here's what I'm focusing on right now.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {currentFocus.map((focus, index) => {
            const Icon = focus.icon;
            return (
              <Card
                key={focus.title}
                className="hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-3 rounded-lg bg-primary/10 mr-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-card-foreground">
                          {focus.title}
                        </CardTitle>
                        <div className="flex items-center mt-1">
                          <Badge
                            className={`mr-2 ${statusColors[focus.status as keyof typeof statusColors]}`}
                          >
                            {focus.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {focus.timeframe}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardDescription className="text-muted-foreground mb-4">
                    {focus.description}
                  </CardDescription>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-card-foreground">Progress</span>
                      <span className="text-sm text-muted-foreground">{focus.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${focus.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-card-foreground mb-3">Focus Areas:</h4>
                    {focus.details.map((detail, detailIndex) => (
                      <div
                        key={detail}
                        className="flex items-center text-sm text-muted-foreground animate-fade-in-right"
                        style={{ animationDelay: `${(index * 0.2) + (detailIndex * 0.1)}s` }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};