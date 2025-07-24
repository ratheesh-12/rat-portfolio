import { useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";
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

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  if (showLoading) {
    return <LoadingScreen onComplete={() => setShowLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      <main>
        <Hero />
        <TechCarousel />
        <Skills />
        <Projects />
        <Achievements />
        <Languages />
        <CurrentFocus />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
