
import Timeline from "./Timeline";
import ImageCarousel from "./ImageCarousel";

const journeyParagraph = (
  <>
    Over the past 4+ years, I’ve had the opportunity to work on a wide range of design projects,
    collaborating with diverse teams and clients to bring creative visions to life.
  </>
);

const JourneySection = () => (
  <div className="w-full flex flex-col gap-8 sm:gap-9">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8">
      <div className="md:max-w-[45%]">
        <h2 className="text-xl sm:text-2xl md:text-[2.1rem] font-light font-inter tracking-tight mb-2">Explore My Design Journey</h2>
      </div>
      <div className="md:max-w-[55%]">
        <p className="font-inter text-sm sm:text-base text-black/65 md:text-right">{journeyParagraph}</p>
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-black underline text-base mt-2 hover:text-black/80 transition"
        >
          Book A Call
          <span className="ml-0.5 font-normal text-[13px]">↗</span>
        </a>
      </div>
    </div>
    <div className="mt-5 sm:mt-7"><Timeline /></div>
    <div className="mt-5 sm:mt-8"><ImageCarousel /></div>
  </div>
);

export default JourneySection;
