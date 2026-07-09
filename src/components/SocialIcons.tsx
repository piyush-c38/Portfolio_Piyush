import { Mail, Instagram, Linkedin, X, School, Github } from "lucide-react";
import Links from "../../public/data/link.js";

type Props = {
  variant?: "footer" | "sidebar";
  className?: string;
};

const handleEmailClick = (email) => {
  const isMobileOrTablet = /Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(
    navigator.userAgent
  );

  if (isMobileOrTablet) {
    window.location.href =
      `mailto:${email}?subject=Project%20Inquiry`;
  } else {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Project%20Inquiry`,
      "_blank"
    );
  }
};

const ICONS = [
  {
    icon: Mail,
    label: "Personal Email",
    onClick: () => handleEmailClick(Links.personalEmail),
  },
  {
    icon: School,
    label: "Student Email",
    onClick: () => handleEmailClick(Links.studentEmail),
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    onClick: () => window.open(Links.linkedin, "_blank"),
  },
  {
    icon: Github,
    label: "GitHub",
    onClick: () => window.open(Links.github, "_blank"),
  },
  {
    icon: X,
    label: "Twitter",
    onClick: () => window.open(Links.x, "_blank"),
  },
  {
    icon: Instagram,
    label: "Instagram",
    onClick: () => window.open(Links.instagram, "_blank"),
  },
];

const SocialIcons = ({ variant = "footer", className = "" }: Props) => (
  <div className={`flex flex-row gap-3 ${className}`}>
    {ICONS.map(({ icon: Icon, label, onClick }) => (
      <button
        key={label}
        rel="noopener noreferrer"
        className="group w-9 h-9 rounded-full flex items-center justify-center bg-slate-800  hover:bg-slate-600  active:bg-white/30 text-white border border-white/20 transition transform hover:scale-110"
        aria-label={label}
        title={label}
        onClick={onClick}
      >
        <Icon size={19} strokeWidth={1.6} className="text-white" />
      </button>
    ))}
  </div>
);

export default SocialIcons;
