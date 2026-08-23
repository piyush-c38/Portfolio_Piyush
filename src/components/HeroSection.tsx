import StatsCounters from "./StatsCounters";
import ScrollIndicator from "./ScrollIndicator";
import TechStack from "./TechStack";
import { Reveal, RevealGroup } from "./animation/Reveal";
import SplitText from "./animation/SplitText";
import DarkVeil from "./animation/DarkVeil";

const HeroSection = () => (
  <section className="relative w-full flex flex-col min-h-[420px] justify-center pb-8 md:min-h-[505px]">
    <RevealGroup
      className="flex flex-col gap-12 lg:flex-row lg:gap-0 lg:justify-between items-center md:items-start lg:items-center w-full relative"
      stagger={0.16}
    >
      {/* Left - Stats */}
      <Reveal className="flex flex-col items-start max-w-xs sm:max-w-[320px] mb-6 lg:mb-0 ml-0 md:ml-10 lg:ml-0">
        <StatsCounters />
      </Reveal>
      {/* Main Heading */}
      <Reveal className="flex flex-col items-start w-full max-w-full sm:max-w-[600px] px-8" delay={0.06}>
        <SplitText
          text="Hello"
          className="text-[44px] sm:text-[62px] md:text-[70px] lg:text-[130px] font-light font-inter tracking-tight mb-2 leading-[1.03] sm:leading-[0.95] text-black"
          delay={110}
          duration={2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={undefined}
        />
        <p className="text-base sm:text-xl font-inter font-light text-black/60 mt-2 animate-fadeinup" style={{ animationDelay: "120ms" }}>
          — It’s Piyush, a Full-Stack Developer
        </p>
      </Reveal>
      {/* TechStack - vertical zigzag, on right */}
      <Reveal className="absolute hidden lg:flex flex-col items-center justify-center right-0 top-0 h-full w-[90px] pointer-events-none" delay={0.12}>
        <TechStack
          direction="vertical"
          crissCross
          className="h-[380px] w-full justify-center items-start gap-3"
        />
      </Reveal>
      <div className="lg:w-[180px] hidden lg:block" />
    </RevealGroup>
    <ScrollIndicator />
  </section>
);

export default HeroSection;
