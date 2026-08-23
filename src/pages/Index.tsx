import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogCards from "@/components/BlogCards";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/animation/Reveal";


const Index = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="bg-background min-h-screen font-inter text-foreground transition-colors">
      <Navbar />
      <main className="w-full pt-[80px] pb-8 flex flex-col items-center mt-10">
        <Reveal className="w-full max-w-[1200px] my-12 px-4 sm:px-6 md:px-8" distance={18}>
          <HeroSection />
        </Reveal>
        <Reveal className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 mt-24" delay={0.04}>
          <JourneySection />
        </Reveal>
        <Reveal className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 mt-24" delay={0.08}>
          <ProjectsSection />
        </Reveal>
        <Reveal className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 mt-24" delay={0.12}>
          <BlogCards />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
