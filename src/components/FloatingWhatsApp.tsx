import { useState, useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";
import { whatsappLink, DEFAULT_MESSAGE, WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { MessageCircle, Phone, Mail, X } from "lucide-react";

// WhatsApp green
const WA_GREEN = "oklch(0.64 0.2 145)";

const CONTACT_OPTIONS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: whatsappLink(DEFAULT_MESSAGE),
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    bg: WA_GREEN,
    text: "white",
  },
  {
    id: "call",
    label: "Call Us",
    href: `tel:+${WHATSAPP_NUMBER}`,
    icon: <Phone className="w-6 h-6" />,
    bg: "var(--espresso)",
    text: "var(--cream)",
  },
  {
    id: "email",
    label: "Email Us",
    href: "mailto:360classylook@gmail.com",
    icon: <Mail className="w-6 h-6" />,
    bg: "var(--gradient-gold)",
    text: "var(--espresso)",
    isGradient: true,
  },
];

export function FloatingWhatsApp() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [open]);

  // Close on route change
  useEffect(() => setOpen(false), [location.pathname]);

  if (location.pathname === "/book") return null;

  return (
    <div
      ref={ref}
      className="fixed right-4 lg:right-6 bottom-24 lg:bottom-6 z-50 flex flex-col items-end gap-3"
    >
      {/* Contact options — fan up from button */}
      {CONTACT_OPTIONS.map((opt, i) => (
        <a
          key={opt.id}
          href={opt.href}
          target={opt.id !== "call" ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={opt.label}
          onClick={() => setOpen(false)}
          style={{
            // Stagger: top options animate first (reverse index for natural fan)
            transitionDelay: open ? `${(CONTACT_OPTIONS.length - 1 - i) * 55}ms` : `${i * 40}ms`,
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0) scale(1)" : "translateY(16px) scale(0.85)",
            pointerEvents: open ? "auto" : "none",
          }}
          className="flex items-center gap-3 transition-all duration-300 ease-out"
        >
          {/* Label pill */}
          <span className="glass text-espresso text-xs font-semibold tracking-wide px-4 py-2 rounded-full shadow-pill whitespace-nowrap">
            {opt.label}
          </span>

          {/* Icon circle */}
          <span
            className="h-14 w-14 rounded-full flex items-center justify-center shadow-elegant hover:scale-110 transition-transform duration-300 shrink-0"
            style={{
              background: opt.isGradient ? "var(--gradient-gold)" : opt.bg,
              color: opt.text,
            }}
          >
            {opt.icon}
          </span>
        </a>
      ))}

      {/* Main toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close contact menu" : "Contact us"}
        className="relative h-16 w-16 rounded-full flex items-center justify-center shadow-elegant transition-all duration-500 hover:scale-105"
        style={{ background: `oklch(0.7 0.18 145)` }}
      >
        <span
          className="absolute inset-0 rounded-full"
          style={{
            animation: open ? "none" : "whatsapp-pulse 2.6s ease-out infinite",
            background: `oklch(0.7 0.18 145)`,
          }}
        />
        <span
          className="relative z-10 text-white transition-all duration-400"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          {open ? <X size={26} strokeWidth={2.5} /> : <MessageCircle size={28} fill="white" />}
        </span>
      </button>
    </div>
  );
}
