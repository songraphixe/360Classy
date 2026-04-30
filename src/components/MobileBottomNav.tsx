import { Link, useLocation } from "@tanstack/react-router";
import { Home, Scissors, Image as ImageIcon, Users, Calendar } from "lucide-react";

type Item = {
  to: "/" | "/services" | "/book" | "/gallery" | "/team";
  label: string;
  Icon: typeof Home;
  primary?: boolean;
};

const items: Item[] = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/services", label: "Services", Icon: Scissors },
  { to: "/book", label: "Book", Icon: Calendar, primary: true },
  { to: "/gallery", label: "Gallery", Icon: ImageIcon },
  { to: "/team", label: "Team", Icon: Users },
];

export function MobileBottomNav() {
  const { pathname } = useLocation();

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2"
      aria-label="Primary"
    >
      <div className="glass shadow-pill rounded-[2rem] px-2 py-2 flex items-center justify-between gap-1 border border-border/40">
        {items.map(({ to, label, Icon, primary }) => {
          const active =
            to === "/" ? pathname === "/" : pathname.startsWith(to);
          if (primary) {
            return (
              <Link
                key={to}
                to={to}
                className="flex flex-col items-center justify-center gap-0.5 -mt-7 h-16 w-16 rounded-full gradient-gold text-espresso shadow-glow active:scale-95 transition-transform"
              >
                <Icon size={22} strokeWidth={2.4} />
                <span className="text-[10px] font-semibold tracking-wide">{label}</span>
              </Link>
            );
          }
          return (
            <Link
              key={to}
              to={to}
              className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-2xl transition-colors ${
                active ? "text-espresso" : "text-taupe"
              }`}
            >
              <Icon size={20} strokeWidth={active ? 2.4 : 2} />
              <span className="text-[10px] font-medium tracking-wide">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
