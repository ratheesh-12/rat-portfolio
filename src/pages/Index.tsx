import { useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";
import { Navigation } from "../components/Navigation";
import { ThemeToggle } from "../components/ThemeToggle";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Achievements } from "../components/Achievements";
import { Languages } from "../components/Languages";
import { CurrentFocus } from "../components/CurrentFocus";
import { Testimonials } from "../components/Testimonials";
import { TechCarousel } from "../components/TechCarousel";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  if (showLoading) {
    return <LoadingScreen onComplete={() => setShowLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeToggle />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        <TechCarousel />
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
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
