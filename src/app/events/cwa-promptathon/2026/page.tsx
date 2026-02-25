"use client";

import AnimatedBackground from "./components/AnimatedBackground";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import EventStructureSection from "./components/EventStructureSection";

const CwaPromptathon2026Page = () => {
  return (
    <main
      className="min-h-screen relative"
      style={{
        background: `linear-gradient(to bottom, hsl(var(--b1)) 0%, hsl(var(--b1) / 0.8) 50%, hsl(var(--b1)) 100%)`,
      }}
    >
      <AnimatedBackground />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <EventStructureSection />
    </main>
  );
};

export default CwaPromptathon2026Page;
