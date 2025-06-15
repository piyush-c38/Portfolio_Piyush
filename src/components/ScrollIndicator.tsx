
import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";

// ScrollIndicator now hides at page bottom and reappears otherwise
const ScrollIndicator = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;
      // If at (or very close to) the bottom, hide the indicator, else show
      if (scrollY + viewportHeight >= docHeight - 16) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;
  return (
    <div className="fixed left-1 bottom-2 md:left-6 flex flex-col items-start select-none animate-fadeinup pointer-events-none z-50" style={{ animationDelay: "650ms" }}>
      <span className="text-xs sm:text-sm text-black/50 font-normal mb-0.5 tracking-wide">Scroll down</span>
      <ChevronDown size={20} className="text-black/60 animate-bounce" />
    </div>
  );
};

export default ScrollIndicator;
