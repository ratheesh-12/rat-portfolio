import { ArrowDown, Download, ExternalLink, Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import profilePicture from "../assets/profile-picture.jpg";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float [animation-delay:1s]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          {/* Profile Picture */}
          <div className="mb-8 animate-scale-in">
            <div className="relative inline-block">
              <img
                src={profilePicture}
                alt="Ratheesh's Profile"
                className="w-40 h-40 rounded-full border-4 border-white/20 shadow-glow mx-auto object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/10"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-fade-in [animation-delay:0.2s]">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Ratheesh Sekar
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-blue-100 max-w-3xl mx-auto">
              Full-Stack Developer & Cybersecurity Enthusiast
            </p>
            
            <p className="text-lg mb-8 text-blue-200/80 max-w-2xl mx-auto leading-relaxed">
              Building secure, scalable web applications with modern technologies. 
              Passionate about creating digital solutions that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:0.4s]">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
            {/* Social Icons Row */}
            <div className="flex justify-center gap-4 mt-6 animate-fade-in [animation-delay:0.6s]">
              <a href="https://github.com/ratheesh-12" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white hover:text-primary text-2xl transition-colors">
                <Github className="w-7 h-7" />
              </a>
              <a href="https://wa.me/918098501226/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white hover:text-green-500 text-2xl transition-colors">
                <FaWhatsapp className="w-7 h-7" />
              </a>
              <a href="https://t.me/+918098501226" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-white hover:text-blue-400 text-2xl transition-colors">
                <FaTelegramPlane className="w-7 h-7" />
              </a>
              <a href="https://x.com/ratheesh1226/" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-white hover:text-black text-2xl transition-colors">
                <Twitter className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/ratheeshsekar12/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-blue-600 text-2xl transition-colors">
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};