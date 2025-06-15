
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import JourneySection from "@/components/JourneySection";
import BlogCards from "@/components/BlogCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen font-inter text-foreground transition-colors">
      <Navbar />
      <main className="w-full pt-[80px] pb-8 flex flex-col items-center">
        <section className="w-full max-w-[1100px] px-4 sm:px-6 md:px-8">
          <HeroSection />
        </section>
        <section className="w-full max-w-[1100px] px-4 sm:px-6 md:px-8 mt-24">
          <JourneySection />
        </section>
        <section className="w-full max-w-[1100px] px-4 sm:px-6 md:px-8 mt-24">
          <BlogCards />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

