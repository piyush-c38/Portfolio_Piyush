
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const NAVS = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  // { label: "Services", to: "/services" },
];

const Footer = () => (
  <footer className="w-full px-8 sm:px-12 mt-24 pt-10 sm:pt-16 pb-7 bg-[#18181b] border-t border-gray-200/20 text-white">
    {/* CTA section */}
    <div className="max-w-[1100px] mx-auto px-2 flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-0 pb-7 sm:pb-9 border-b border-gray-700">
      <div>
        <div className="text-xl sm:text-2xl font-inter font-light mb-1">
          Got a Vision? Let’s Bring It to Life!
        </div>
        <div className="text-xs sm:text-base text-gray-200 font-light mb-3 sm:mb-4">
          I’m always excited to collaborate on new and innovative projects. Whether you’re starting from scratch or refining an existing idea.
        </div>
        <div className="flex gap-5 text-sm text-gray-200 font-light mb-3 sm:mb-4">
          <a
            href={"mailto:chandrakarpiyush36@gmail.com"}
            key={"Email"}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 active:bg-white/30 text-white border border-white/20 transition transform hover:scale-110"
            aria-label={"Email"}
          >
            <Mail size={19} strokeWidth={1.6} className="text-white" />
          </a>
          <div className="content-center"><b>Email :</b> chandrakarpiyush36@gmail.com</div>
        </div>
      </div>
    </div>
    {/* Main Footer */}
    <div className="max-w-[1100px] mx-auto px-2 flex flex-col items-center mt-8 sm:mt-9">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mb-5 sm:mb-7">
        {NAVS.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className="text-base font-light tracking-wide px-2 sm:px-3 py-1 rounded hover:bg-white/10 transition text-center"
          >
            {link.label}
          </Link>
        ))}
      </div>
      {/* Branding & Socials */}
      <div className="flex flex-col items-center gap-3">
        <span className="font-bold text-xl font-inter select-none mb-2 text-center">Piyush Chandrakar</span>
        <div className="mb-1">
          <SocialIcons variant="footer" />
        </div>
        <span className="text-xs text-gray-400 mt-2 text-center">&copy; Piyush Chandrakar 2025. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
