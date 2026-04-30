import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled ? "top-3" : "top-5"
      }`}
    >
      <div className="mx-auto px-4 lg:px-6 max-w-7xl flex items-center justify-between gap-3">
        {/* Logo pill */}
        <Link
          to="/"
          className="glass shadow-pill rounded-full pl-4 pr-5 py-2.5 flex items-center gap-2 group transition-transform duration-500 hover:scale-[1.02]"
        >
          <span className="h-9 w-9 rounded-full gradient-gold flex items-center justify-center text-espresso font-serif text-base font-bold shadow-glow">
            360
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-serif text-sm font-bold text-espresso tracking-tight">
              Classy Look
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-taupe mt-0.5">
              Touch of Class
            </span>
          </span>
        </Link>

        {/* Center pill nav */}
        <nav className="hidden lg:flex glass shadow-pill rounded-full px-2 py-2 items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-5 py-2.5 rounded-full text-sm font-medium text-espresso/75 hover:text-espresso transition-colors duration-300"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{
                className:
                  "!text-primary-foreground bg-espresso shadow-soft",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right: Book pill */}
        <div className="flex items-center gap-2">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 glass shadow-pill rounded-full pl-4 sm:pl-5 pr-2 py-2 text-sm font-semibold text-espresso hover:scale-[1.02] transition-transform duration-500"
          >
            <span className="hidden sm:inline">Book Now</span>
            <span className="sm:hidden">Book</span>
            <span className="h-9 w-9 rounded-full gradient-gold flex items-center justify-center text-espresso shadow-glow">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
          </Link>

          <button
            className="hidden glass shadow-pill rounded-full h-12 w-12 items-center justify-center text-espresso"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden mx-4 mt-3 glass shadow-elegant rounded-3xl p-6 animate-fade-up">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-5 py-4 rounded-2xl font-serif text-2xl text-espresso hover:bg-cream transition-colors"
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "!bg-espresso !text-primary-foreground" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-3 px-6 py-4 rounded-2xl gradient-gold text-espresso font-semibold text-center shadow-glow flex items-center justify-center gap-2"
            >
              Book an Appointment <ArrowUpRight size={18} />
            </Link>
            <a
              href={whatsappLink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="text-center text-sm text-taupe mt-2 py-2"
            >
              or message us on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
