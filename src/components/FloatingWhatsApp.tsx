import { useLocation } from "@tanstack/react-router";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const location = useLocation();
  if (location.pathname === "/book") return null;

  return (
    <a
      href={whatsappLink(DEFAULT_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      aria-label="Book Instantly via WhatsApp"
      className="group fixed right-4 lg:right-6 bottom-24 lg:bottom-6 z-50 flex items-center gap-3"
    >
      <span className="hidden md:block opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 glass text-espresso text-xs font-medium tracking-wide px-4 py-2.5 rounded-full shadow-pill">
        Book Instantly via WhatsApp
      </span>
      <span className="relative h-16 w-16 rounded-full bg-[oklch(0.7_0.18_145)] flex items-center justify-center shadow-glow animate-whatsapp-pulse hover:scale-105 transition-transform duration-500">
        <MessageCircle size={28} className="text-white" fill="currentColor" />
      </span>
    </a>
  );
}
