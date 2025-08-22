import { ExternalLink } from "lucide-react";

const TIMELINE = [
  {
    label: "506 Army Base Workshop",
    date: "May 2025 - Jun 2025",
    role: "Full-Stack Product Developer",
    desc: "Designed and Implemented the Productivity tracking system using real-time OSnet person tracking and IoT product counting.",
    color: "bg-[#0f172a]",
    projectLink:"",
  },
  {
    label: "EE Department IIT Bhilai",
    date: "Jan 2025 – March 2025",
    role: "Research Student",
    desc: "Developed gunshot detection and direction estimation device using VGGish embeddings and Random Forest, integrated with MEMS array on Jetson Nano.",
    color: "bg-[#334155]",
    projectLink:"https://github.com/piyush-c38/Gunshot_Direction_Estimation",
  },
  {
    label: "Self-Project",
    date: "Feb 2025 – March 2025",
    role: "Computer Vision",
    desc: "Developed a deep learning pipeline with PSPNet for concrete crack segmentation, achieving 84.85% recall and custom loss design.",
    color: "bg-[#64748b]",
    projectLink:"https://github.com/piyush-c38/Crack_Detection_CV",
  },
  {
    label: "IIT Indore",
    date: "May 2024 - Oct 2024",
    role: "Mobile App Developer",
    desc: "Developed cross-platform inventory app for TracExpert, using React-Native, Docker, CI/CD, Bitbucket, and JWT security.",
    color: "bg-[#94a3b8]",
    projectLink:"https://github.com/piyush-c38/TracExpert_T"
  },
  {
    label: "IBITF IIT Bhilai",
    date: "Jan 2024 - April 2024",
    role: "Web Developer",
    desc: "Developed a Web-IoT cashless payment solution with React and Node.js, serving 1,200+ institute users for daily transactions.",
    color: "bg-[#cbd5e1]",
    projectLink:"https://github.com/piyush-c38/Multifunctional_ID_Card",
  },
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
            {item.projectLink && <a
              href={item.projectLink}
              className="text-[12px] sm:text-[15px] flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              View Project <ExternalLink size={14} className="ml-1" />
            </a>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Timeline;
