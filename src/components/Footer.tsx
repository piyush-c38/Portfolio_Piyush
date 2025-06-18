
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";

const NAVS = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
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
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 bg-white text-black font-inter font-medium rounded-full shadow hover:bg-gray-100 transition text-sm"
        >
          Book a Call
          <span className="ml-0.5 font-normal text-[16px]">↗</span>
        </a>
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
