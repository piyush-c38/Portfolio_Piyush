import { Mail, Instagram, Linkedin, X, School, Github } from "lucide-react";
import { siteContent } from "@/lib/content";
import { openEmailClient } from "@/lib/site";

type Props = {
  variant?: "footer" | "sidebar";
  className?: string;
};

const ICONS = [
  {
    icon: Mail,
    label: "Personal Email",
    onClick: () => openEmailClient(siteContent.personal_email),
  },
  {
    icon: School,
    label: "Student Email",
    onClick: () => openEmailClient(siteContent.student_email),
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    onClick: () => window.open(siteContent.social_links.linkedin, "_blank"),
  },
  {
    icon: Github,
    label: "GitHub",
    onClick: () => window.open(siteContent.social_links.github, "_blank"),
  },
  {
    icon: X,
    label: "Twitter",
    onClick: () => window.open(siteContent.social_links.x, "_blank"),
  },
  {
    icon: Instagram,
    label: "Instagram",
    onClick: () => window.open(siteContent.social_links.instagram, "_blank"),
  },
];

const SocialIcons = ({ variant = "footer", className = "" }: Props) => (
  <div className={`flex flex-row flex-wrap justify-center gap-2 ${className}`}>
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
