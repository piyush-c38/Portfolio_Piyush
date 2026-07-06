import { Mail, Instagram, Linkedin, X, School, Github } from "lucide-react";
import type { SocialLink } from "@/types/content";
import Links from "../../public/data/link.js";

type Props = {
  variant?: "footer" | "sidebar";
  className?: string;
  links?: SocialLink[];
};

const ICONS = [
  {
    icon: Mail,
    label: "Personal Email",
    href: `mailto:${Links.personalEmail}`
  },
  {
    icon: School,
    label: "Student Email",
    href: `mailto:${Links.studentEmail}`
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: `${Links.linkedin}`
  },
  {
    icon: Github,
    label: "GitHub",
    href: `${Links.github}`
  },
  {
    icon: X,
    label: "X",
    href: `${Links.x}`  
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: `${Links.instagram}`
  },
];

const fallbackIcons = ICONS;

const SocialIcons = ({ variant = "footer", className = "", links }: Props) => {
  const icons = links?.length
    ? links.map((link) => {
        const iconMap: Record<string, typeof Mail> = {
          Email: Mail,
          LinkedIn: Linkedin,
          GitHub: Github,
          X: X,
          Instagram: Instagram,
          School,
        };

        const icon = iconMap[link.label] ?? Mail;

        return {
          icon,
          label: link.label,
          href: link.href,
        };
      })
    : fallbackIcons;

  return (
  <div className={`flex flex-row gap-3 ${className}`}>
    {icons.map(({ icon: Icon, label, href }) => (
      <a
        href={href}
        key={label}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-9 h-9 rounded-full flex items-center justify-center bg-slate-800  hover:bg-slate-600  active:bg-white/30 text-white border border-white/20 transition transform hover:scale-110"
        aria-label={label}
      >
        <Icon size={19} strokeWidth={1.6} className="text-white" />
      </a>
    ))}
  </div>
  );
};

export default SocialIcons;
