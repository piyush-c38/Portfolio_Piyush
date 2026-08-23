import { ExternalLink, Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Links from "../../public/data/link.js";
import ShinyText from "./animation/ShinyText.js";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
];


const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isServicesPage = location.pathname === "/services";
  const [hasPassedServicesHero, setHasPassedServicesHero] = useState(false);
  const isServicesHeroMode = isServicesPage && !hasPassedServicesHero;

  useEffect(() => {
    if (!isServicesPage) {
      setHasPassedServicesHero(false);
      return;
    }

    const handleScroll = () => {
      setHasPassedServicesHero(window.scrollY >= window.innerHeight - 96);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isServicesPage]);

  const handleConnect = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setOpen(v => !v)
  };

  return (
    <header
      className={clsx(
        "fixed left-0 top-0 w-full z-30 transition-all duration-300",
        isServicesHeroMode
          ? "backdrop-blur-xl border-b border-white/10"
          : "bg-white border-b border-gray-200/50"
      )}
    >
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between h-20 px-5 font-inter relative">
        <div className="flex items-center gap-10">
          <Link to="/">
            <span className={clsx(
              "font-bold text-xl tracking-tight select-none transition-colors duration-300",

            )}>
              <ShinyText
                text="PC."
                speed={5}
                delay={0}
                color={(isServicesHeroMode) ? "#ffffff" : "#000000"}
                shineColor="#aee0ff"
                spread={135}
                direction="left"
                yoyo={false}
                pauseOnHover={true}
                disabled={true}
                className="font-bold text-xl tracking-tight select-none transition-colors duration-300"
              />

            </span>
          </Link>
          {/* Desktop nav */}
          <ul className="hidden md:flex gap-7 text-base font-normal">
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <Link
                  className={clsx(
                    "tracking-wide px-2 py-1 relative transition after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                    isServicesHeroMode
                      ? "text-white/85 hover:text-white after:bg-white/80"
                      : "text-black/85 hover:text-black after:bg-black/60",
                    location.pathname === item.href &&
                    (isServicesHeroMode
                      ? "font-bold text-white"
                      : "font-semibold text-black")
                  )}
                  to={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-0 items-center">
          {/* Desktop book a call */}
          <a
            href={`tel:${Links.phoneNumber}`}
            rel="noopener noreferrer"
            className={clsx(
              "hidden md:flex ml-3 font-medium px-5 py-2 rounded-full items-center gap-2 active:scale-100 transition",
              isServicesHeroMode
                ? "border border-[#aee0ff] bg-black/90 text-[#aee0ff] shadow-sm shadow-[#aee0ff] hover:shadow-[#aee0ff] hover:shadow-md"
                : "border border-black/15 bg-black/90 text-white hover:bg-black shadow-none shadow-black/5"
            )}
          >
            Contact
            <Phone size={18} />
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            onClick={handleConnect}
            className={clsx(
              "hidden md:flex ml-3 font-medium px-5 py-2 rounded-full items-center gap-2 active:scale-100 transition",
              isServicesHeroMode
                ? "border border-[#aee0ff] bg-black/90 text-[#aee0ff] shadow-sm shadow-[#aee0ff] hover:shadow-[#aee0ff] hover:shadow-md"
                : "border border-black/15 bg-black/90 text-white hover:bg-black shadow-none shadow-black/5"
            )}
          >
            Connect
            <ExternalLink size={18} />
          </a>
        </div>
        {/* Hamburger menu for mobile */}
        <button
          className={clsx(
            "md:hidden flex items-center p-2 rounded transition",
            isServicesHeroMode
              ? "text-white hover:bg-white/10"
              : "text-black focus:outline-none hover:bg-gray-100"
          )}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? "Close Menu" : "Open Menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile menu */}
        {open && (
          <div
            className={clsx(
              "fixed inset-0 z-40 flex flex-col p-6 gap-7 animate-fadeinup md:hidden drop-shadow-lg",
              isServicesHeroMode
                ? "bg-[#09090f]/70 backdrop-blur-2xl border-b border-white/10 text-white"
                : "bg-white border-b border-gray-200 text-black"
            )}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-xl tracking-tight select-none">PC.</span>
              <button
                className={clsx(
                  "p-2 rounded transition",
                  isServicesHeroMode ? "hover:bg-white/10" : "hover:bg-gray-100"
                )}
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <X size={28} />
              </button>
            </div>
            <ul className="flex flex-col gap-5 text-lg font-normal w-full">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <Link
                    className={clsx(
                      "tracking-wide px-2 py-1 block transition",
                      isServicesHeroMode ? "text-white/80 hover:text-white" : "text-black/85 hover:text-black",
                      location.pathname === item.href &&
                      (isServicesHeroMode ? "font-semibold text-white" : "font-semibold text-black")
                    )}
                    to={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className={clsx("pt-3 border-t", isServicesHeroMode ? "border-white/10" : "border-gray-200")}>
                <a
                  href={`tel:${Links.phoneNumber}`}
                  rel="noopener noreferrer"
                  className={clsx(
                    "flex justify-center font-medium px-5 py-2 rounded-full items-center gap-2 active:scale-100 transition",
                    isServicesHeroMode
                      ? "border border-white/25 bg-white text-black hover:bg-white/90"
                      : "border border-black/15 bg-black/90 text-white hover:bg-black shadow-none shadow-black/5"
                  )}
                >
                  Contact
                  <Phone size={18} />
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="#"
                  rel="noopener noreferrer"
                  onClick={handleConnect}
                  className={clsx(
                    "flex justify-center font-medium px-5 py-2 rounded-full items-center gap-2 active:scale-100 transition",
                    isServicesHeroMode
                      ? "border border-white/25 bg-white text-black hover:bg-white/90"
                      : "border border-black/15 bg-black/90 text-white hover:bg-black shadow-none shadow-black/5"
                  )}
                >
                  Connect
                  <ExternalLink size={18} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
