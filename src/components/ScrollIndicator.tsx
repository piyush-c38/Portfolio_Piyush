import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

type ScrollIndicatorProps = {
  textColor?: string;
  position?: "left" | "center";
  hideAfterViewport?: boolean;
};

const ScrollIndicator = ({
  textColor = "text-black/50",
  position = "left",
  hideAfterViewport = false,
}: ScrollIndicatorProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      if (
        (hideAfterViewport && scrollY >= viewportHeight - 96) ||
        scrollY + viewportHeight >= docHeight - 16
      ) {
        setShow(false);
      } else {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideAfterViewport]);

  if (!show) return null;

  const positionClass =
    position === "left"
      ? "fixed left-1 bottom-2 md:left-6 flex flex-col items-start"
      : "fixed inset-x-0 bottom-2 flex flex-col items-center";

  return (
    <div
      className={`${positionClass} select-none animate-fadeinup pointer-events-none z-50`}
      style={{ animationDelay: "650ms" }}
    >
      <span className={`text-xs sm:text-sm ${textColor} font-normal mb-0.5 tracking-wide`}>
        Scroll down
      </span>
      <ChevronDown size={20} className={`${textColor} animate-bounce`} />
    </div>
  );
};

export default ScrollIndicator;
