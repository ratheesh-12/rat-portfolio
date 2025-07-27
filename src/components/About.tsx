import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, MapPin, Coffee, Heart, Code, Shield, Zap, Award } from "lucide-react";

const personalStats = [
  { icon: Code, label: "Years Coding", value: "5+", color: "text-blue-500" },
  { icon: Shield, label: "Security Projects", value: "12+", color: "text-red-500" },
  { icon: Coffee, label: "Cups of Coffee", value: "∞", color: "text-amber-500" },
  { icon: Award, label: "Certifications", value: "8+", color: "text-green-500" },
];

const interests = [
  "Cybersecurity Research",
  "Open Source Projects", 
  "AI & Machine Learning",
  "Cloud Architecture",
  "Mobile Development",
  "DevOps & Automation"
];

const facts = [
  "🌟 Started coding at age 16",
  "🔒 Discovered 3 critical vulnerabilities in major platforms",
  "🚀 Built 20+ full-stack applications",
  "📱 Published 2 mobile apps on Play Store",
  "🎓 Self-taught in 8 programming languages",
  "🌍 Mentored 50+ junior developers"
];

export const About = () => {
  const [selectedTab, setSelectedTab] = useState("story");

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a mission to create secure, innovative digital solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Personal Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {personalStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-muted p-1 rounded-lg">
              {[
                { key: "story", label: "My Story", icon: Heart },
                { key: "interests", label: "Interests", icon: Zap },
                { key: "facts", label: "Fun Facts", icon: Coffee }
              ].map((tab) => (
                <Button
                  key={tab.key}
                  variant={selectedTab === tab.key ? "default" : "ghost"}
                  onClick={() => setSelectedTab(tab.key)}
                  className="flex items-center gap-2"
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Main Content */}
            <Card className="col-span-full md:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {selectedTab === "story" && <Heart className="h-5 w-5 text-red-500" />}
                  {selectedTab === "interests" && <Zap className="h-5 w-5 text-yellow-500" />}
                  {selectedTab === "facts" && <Coffee className="h-5 w-5 text-amber-500" />}
                  {selectedTab === "story" && "My Journey"}
                  {selectedTab === "interests" && "What Drives Me"}
                  {selectedTab === "facts" && "Fun Facts"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedTab === "story" && (
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      My journey into technology began with curiosity and a broken computer. 
                      What started as trying to fix a family laptop turned into a passion 
                      for understanding how things work under the hood.
                    </p>
                    <p>
                      I discovered my love for cybersecurity during college when I 
                      participated in my first ethical hacking competition. The thrill 
                      of finding vulnerabilities and helping organizations secure their 
                      systems was addictive.
                    </p>
                    <p>
                      Today, I combine my development skills with security expertise 
                      to build applications that are not just functional and beautiful, 
                      but also secure by design. Every line of code I write considers 
                      both user experience and security implications.
                    </p>
                    <p>
                      When I'm not coding, you'll find me researching the latest security 
                      trends, contributing to open source projects, or mentoring aspiring 
                      developers in my community.
                    </p>
                  </div>
                )}

                {selectedTab === "interests" && (
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      My interests span across various domains of technology, 
                      driven by an insatiable curiosity to learn and innovate.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {interests.map((interest, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="justify-center p-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {interest}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      I believe in continuous learning and staying updated with 
                      emerging technologies. The intersection of security and 
                      development particularly excites me, as it challenges me 
                      to think from multiple perspectives.
                    </p>
                  </div>
                )}

                {selectedTab === "facts" && (
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Here are some interesting facts about my journey:
                    </p>
                    <div className="space-y-3">
                      {facts.map((fact, index) => (
                        <div 
                          key={index} 
                          className="p-3 bg-muted/50 rounded-lg border-l-4 border-primary text-sm"
                        >
                          {fact}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Right Column - Additional Info */}
            <div className="space-y-6">
              {/* Location & Availability */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Currently
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Chennai, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Available for projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Open to remote work</span>
                  </div>
                </CardContent>
              </Card>

              {/* Values */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Core Values
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <div className="font-medium text-foreground">Security First</div>
                    <div className="text-muted-foreground">Every application should be secure by design</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-foreground">User-Centric</div>
                    <div className="text-muted-foreground">Technology should solve real problems</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-foreground">Continuous Learning</div>
                    <div className="text-muted-foreground">Stay curious and never stop growing</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-foreground">Open Source</div>
                    <div className="text-muted-foreground">Give back to the community</div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Let's Connect!</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Always excited to discuss new opportunities and interesting projects.
                  </p>
                  <Button className="w-full">
                    <Heart className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
