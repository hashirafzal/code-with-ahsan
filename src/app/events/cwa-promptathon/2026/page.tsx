"use client";

import AnimatedBackground from "./components/AnimatedBackground";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import EventStructureSection from "./components/EventStructureSection";

const CwaPromptathon2026Page = () => {
  return (
    <div className="relative overflow-x-hidden bg-base-100 flex flex-col min-h-screen">
      <style dangerouslySetInnerHTML={{
        __html: `
        footer.footer-center { 
          position: relative !important; 
          z-index: 10 !important; 
          margin-top: 0 !important;
          border-radius: 0 !important;
        }
      `}} />
      <AnimatedBackground />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <EventStructureSection />
    </div>
  );
};

export default CwaPromptathon2026Page;
