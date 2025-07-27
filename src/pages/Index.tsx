import { useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";
import { Navigation } from "../components/Navigation";
import { ThemeToggle } from "../components/ThemeToggle";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { ProjectsShowcase } from "../components/ProjectsShowcase";
import { Experience } from "../components/Experience";
import { Achievements } from "../components/Achievements";
import { Languages } from "../components/Languages";
import { CurrentFocus } from "../components/CurrentFocus";
import { Testimonials } from "../components/Testimonials";
import { TechCarousel } from "../components/TechCarousel";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";
import { ParticleBackground } from "../components/ParticleBackground";
import { ScrollToTop } from "../components/ScrollToTop";
import { Chatbot } from "../components/Chatbot";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  if (showLoading) {
    return <LoadingScreen onComplete={() => setShowLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Navigation />
      <ThemeToggle />
      <ScrollToTop />
      <Chatbot />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <TechCarousel />
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <ProjectsShowcase />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <Languages />
        <CurrentFocus />
        <Testimonials />
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
