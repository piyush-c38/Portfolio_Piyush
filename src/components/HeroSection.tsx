
import StatsCounters from "./StatsCounters";
import ScrollIndicator from "./ScrollIndicator";
import TechStack from "./TechStack";

const HeroSection = () => (
  <section className="relative w-full flex flex-col min-h-[420px] justify-center pb-8 md:min-h-[505px]">
    <div className="flex flex-col gap-12 lg:flex-row lg:gap-0 lg:justify-between items-center md:items-start lg:items-center w-full relative">
      {/* Left - Stats */}
      <div className="flex flex-col items-start max-w-xs sm:max-w-[320px] mb-6 lg:mb-0 ml-0 md:ml-10 lg:ml-0">
        <StatsCounters />
      </div>
      {/* Main Heading */}
      <div className="flex flex-col items-start w-full max-w-full sm:max-w-[600px] px-8">
        <h1 className="text-[44px] sm:text-[62px] md:text-[70px] lg:text-[130px] font-light font-inter tracking-tight mb-2 animate-fadeinup leading-[1.03] sm:leading-[0.95] text-black">
          Hello
        </h1>
        <p className="text-base sm:text-xl font-inter font-light text-black/60 mt-2 animate-fadeinup" style={{ animationDelay: "120ms" }}>
          — It’s Piyush, a Full-Stack Product Developer
        </p>
      </div>
      {/* TechStack - vertical zigzag, on right */}
      <div className="absolute hidden lg:flex flex-col items-center justify-center right-0 top-0 h-full w-[90px] pointer-events-none">
        <TechStack
          direction="vertical"
          crissCross
          className="h-[380px] w-full justify-center items-start gap-3"
        />
      </div>
      <div className="lg:w-[180px] hidden lg:block" />
    </div>
    <ScrollIndicator />
  </section>
);

export default HeroSection;
