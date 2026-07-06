import Timeline from "./Timeline";
import ImageCarousel from "./ImageCarousel";
import { portfolioSettings } from "@/lib/content";

const journeyParagraph = portfolioSettings.about[1] ??
  "Over the past 3+ years, I’ve worked on diverse development projects, partnering with various teams and clients to turn creative ideas into reality.";

const journeyItems = portfolioSettings.glimpseOfMyWork.map((item, index) => ({
  label: item.title,
  date: item.date ?? "Recent",
  desc: item.description,
  projectLink: item.link,
  demolink: item.demoLink,
  color: ["bg-[#0f172a]", "bg-[#334155]", "bg-[#64748b]"][index % 3],
}));

const JourneySection = () => (
  <div className="w-full flex flex-col gap-8 sm:gap-9">
    <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8 px-2 sm:px-0">
      <div className="md:max-w-[45%]">
        <h2 className="md:leading-[3rem] text-xl sm:text-2xl md:text-[2.5rem] font-light font-inter tracking-tight mb-2">Explore My Journey</h2>
      </div>
      <div className="md:max-w-[45%]">
        <p className="font-inter text-sm sm:text-base text-black/65 md:text-right">{journeyParagraph}</p>
      </div>
    </div>
    <div className="mt-5 sm:mt-7 px-2 sm:px-0"><Timeline items={journeyItems} /></div>
    {/* <div className="mt-5 sm:mt-8"><ImageCarousel /></div> */}
  </div>
);

export default JourneySection;
