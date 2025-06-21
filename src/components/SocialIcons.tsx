import { Mail, Instagram, Linkedin, X, School, Github } from "lucide-react";

type Props = {
  variant?: "footer" | "sidebar";
  className?: string;
};

const ICONS = [
  {
    icon: Mail,
    label: "Personal Email",
    href: "mailto:chandrakarpiyush36@gmail.com"
  },
  {
    icon: School,
    label: "Student Email",
    href: "mailto:piyushc@iitbhilai.ac.in"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/piyush-chandrakar"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/piyush-c38"
  },
  {
    icon: X,
    label: "X",
    href: "https://x.com/piyush_c38"
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/piyush_c38"
  },
];

const SocialIcons = ({ variant = "footer", className = "" }: Props) => (
  <div className={`flex flex-row gap-3 ${className}`}>
    {ICONS.map(({ icon: Icon, label, href }) => (
      <a
        href={href}
        key={label}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 active:bg-white/30 text-white border border-white/20 transition transform hover:scale-110"
        aria-label={label}
      >
        <Icon size={19} strokeWidth={1.6} className="text-white" />
      </a>
    ))}
  </div>
);

export default SocialIcons;
