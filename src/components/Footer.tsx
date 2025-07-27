import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/rathii",
    color: "hover:text-gray-800 dark:hover:text-gray-200"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/rathii",
    color: "hover:text-blue-600"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:rathii.dev@gmail.com",
    color: "hover:text-red-500"
  }
];

const quickLinks = [
  { name: "About", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Learning", href: "#focus" }
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-4">
              Rathii
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full-Stack Developer & Cybersecurity Enthusiast building secure, 
              scalable applications that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground transition-colors duration-300 ${link.color}`}
                    aria-label={link.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                Open to new opportunities and collaborations
              </p>
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href="mailto:ratheeshsekar00@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Let's Connect
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-sm text-muted-foreground mb-4 md:mb-0">
            <span>Built by Ratheesh Sekar</span>
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-current animate-pulse" />
          </div>
          
          <div className="flex items-center space-x-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Ratheesh Sekar. All rights reserved.
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};