
const TIMELINE = [
  {
    label: "506 Army Base Workshop",
    date: "May 2025 - Present",
    role: "Full-Stack Product Developer",
    desc: "Designed and Implemented the Productivity tracking system using real-time OSnet person tracking and IoT product counting.",
    color: "bg-[#222]"
  },
  {
    label: "EE Department, IIT Bhilai",
    date: "Jan 2025 – March 2025",
    role: "Research Student",
    desc: "Developed gunshot detection and direction estimation device using VGGish embeddings and Random Forest, integrated with MEMS array on Jetson Nano.",
    color: "bg-[#A8A8A8]"
  },
  {
    label: "IIT Indore",
    date: "May 2024 - Oct 2024",
    role: "Mobile App Developer",
    desc: "Developed cross-platform inventory app for TracExpert, using Docker, CI/CD, Bitbucket, and JWT security.",
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
