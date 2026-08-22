import Timeline from "./Timeline";
import { portfolioContent } from "@/lib/content";
import { Reveal, RevealGroup } from "./Reveal";

const JourneySection = () => (
  <RevealGroup className="w-full flex flex-col gap-8 sm:gap-9" stagger={0.16}>
    <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8 px-2 sm:px-0">
      <Reveal className="md:max-w-[45%]">
        <h2 className="md:leading-[3rem] text-xl sm:text-2xl md:text-[2.5rem] font-light font-inter tracking-tight mb-2">
          {portfolioContent.journey.heading}
        </h2>
      </Reveal>
      <Reveal className="md:max-w-[45%]" delay={0.08}>
        <p className="font-inter text-sm sm:text-base text-black/65 md:text-right">
          {portfolioContent.journey.description}
        </p>
      </Reveal>
    </div>
    <Reveal className="mt-5 sm:mt-7 px-2 sm:px-0" delay={0.12}>
      <Timeline items={portfolioContent.timeline} />
    </Reveal>
  </RevealGroup>
);

export default JourneySection;
