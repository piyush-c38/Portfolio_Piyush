
const TIMELINE = [
  {
    label: "Self-Employed, Brisbane",
    date: "Sep 2016 - Aug 2016",
    role: "Visual Designer",
    desc: "Worked on diverse freelance projects, focusing on branding, user flows, and digital identities.",
    color: "bg-[#222]"
  },
  {
    label: "New Man Services",
    date: "Jan 2017 - Mar 2018",
    role: "UI/UX Designer",
    desc: "Transformed user experiences, building intuitive interfaces for business clients across platforms.",
    color: "bg-[#A8A8A8]"
  },
  {
    label: "Global Solution",
    date: "Feb 2019 - Mar 2020",
    role: "Sr. Product Designer",
    desc: "Led product design vision and cross-functional teams to deliver impactful, scalable solutions.",
    color: "bg-[#E4E4E4]"
  }
];

const Timeline = () => (
  <div className="relative pl-4 max-w-xl mx-auto sm:pl-4">
    <div className="absolute top-5 left-3 bottom-4 w-0.5 bg-gray-200 rounded hidden sm:block"></div>
    <div className="flex flex-col gap-7">
      {TIMELINE.map((item, idx) => (
        <div key={item.label} className="relative z-10 flex flex-row gap-4 sm:gap-5 mb-0 sm:mb-8 last:mb-0 group">
          {/* Dot and line */}
          <div className="flex flex-col items-center pt-0.5">
            <span className={`w-4 h-4 rounded-full border-4 border-white shadow-sm ${item.color}`}></span>
            {idx !== TIMELINE.length - 1 && (
              <span className="hidden sm:flex flex-1 w-px bg-gray-200 mt-0.5"></span>
            )}
          </div>
          {/* Entry text */}
          <div>
            <h3 className="text-[15px] sm:text-lg font-medium font-inter mb-0.5">{item.label}</h3>
            <div className="text-[11px] sm:text-xs text-gray-400 mb-1 font-inter">
              {item.date} — <span className="text-black/50">{item.role}</span>
            </div>
            <div className="text-[12px] sm:text-[15px] text-black/65 font-light max-w-xs sm:max-w-lg">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Timeline;
