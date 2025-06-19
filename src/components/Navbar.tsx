
import { ExternalLink, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  // { name: "Services", href: "/services" },
];


const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  
  const handleConnect = () => {
    window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: "smooth" });
    setOpen(v => !v)
  };

  return (
    <header className="fixed left-0 top-0 w-full z-30 bg-white border-b border-gray-200/50">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between h-20 px-5 font-inter relative">
        <div className="flex items-center gap-10">
          <span className="font-bold text-xl tracking-tight select-none">PC.</span>
          {/* Desktop nav */}
          <ul className="hidden md:flex gap-7 text-base font-normal">
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <Link
                  className={clsx(
                    "tracking-wide px-2 py-1 relative transition text-black/85 hover:text-black after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-black/60 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                    location.pathname === item.href && "font-semibold text-black"
                  )}
                  to={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3 items-center">
          {/* Desktop book a call */}
          <a
            href="#"
            rel="noopener noreferrer"
            onClick={handleConnect}
            className="hidden md:flex ml-3 font-medium border border-black/15 px-5 py-2 rounded-full items-center gap-2 bg-black/90 text-white hover:bg-black active:scale-100 transition shadow-none shadow-black/5"
          >
            Connect
            <ExternalLink size={18} />
          </a>
        </div>
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden flex items-center p-2 rounded focus:outline-none hover:bg-gray-100 transition"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? "Close Menu" : "Open Menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile menu */}
        {open && (
          <div className="fixed inset-0 z-40 bg-white border-b border-gray-200 flex flex-col p-6 gap-7 animate-fadeinup md:hidden drop-shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-xl tracking-tight select-none">PC.</span>
              <button
                className="p-2 rounded hover:bg-gray-100"
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
                      "tracking-wide px-2 py-1 block transition text-black/85 hover:text-black",
                      location.pathname === item.href && "font-semibold text-black"
                    )}
                    to={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-3 border-t border-gray-200">
                <a
                  href="#"
                  rel="noopener noreferrer"
                  onClick={handleConnect}
                  className="flex justify-center font-medium border border-black/15 px-5 py-2 rounded-full items-center gap-2 bg-black/90 text-white hover:bg-black active:scale-100 transition shadow-none shadow-black/5"
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
