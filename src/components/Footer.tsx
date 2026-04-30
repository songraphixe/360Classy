import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { WHATSAPP_DISPLAY, whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="px-4 lg:px-6 pb-6 pt-24">
      <div className="max-w-7xl mx-auto rounded-3xl gradient-espresso shadow-elegant overflow-hidden">
        <div className="px-8 lg:px-14 pt-16 pb-10 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-12 w-12 rounded-full gradient-gold flex items-center justify-center text-espresso font-serif text-base font-bold">
                360
              </span>
              <span className="font-serif text-xl text-cream font-bold tracking-tight">
                Classy Look
              </span>
            </div>
            <p className="mt-5 text-sm text-cream/70 italic font-serif">
              "The Touch of Class."
            </p>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed max-w-xs">
              Accra's most-loved hair salon. Premium styling, professional care, unforgettable experience.
            </p>
            <a
              href={whatsappLink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full pl-5 pr-2 py-2 bg-cream text-espresso font-semibold text-sm hover:scale-[1.02] transition-transform duration-500"
            >
              Book via WhatsApp
              <span className="h-8 w-8 rounded-full gradient-gold flex items-center justify-center text-espresso">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            </a>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold mb-6 font-semibold">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ["/", "Home"],
                ["/services", "Services & Pricing"],
                ["/gallery", "Lookbook"],
                ["/team", "Our Team"],
                ["/book", "Book Appointment"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-cream/70 hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold mb-6 font-semibold">
              Visit
            </h4>
            <ul className="space-y-4 text-sm text-cream/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                Palace Street, Accra, Ghana
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <a href={`tel:${WHATSAPP_DISPLAY.replace(/\s/g, "")}`} className="hover:text-gold">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex gap-3 pt-2">
                <a href="https://www.instagram.com/360classy_look_hair_salon/" target="_blank" rel="noreferrer" aria-label="Instagram" className="h-10 w-10 rounded-full bg-cream/10 hover:bg-gold flex items-center justify-center text-cream transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="https://web.facebook.com/groups/157325990972850/" target="_blank" rel="noreferrer" aria-label="Facebook" className="h-10 w-10 rounded-full bg-cream/10 hover:bg-gold flex items-center justify-center text-cream transition-colors">
                  <Facebook size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/10 px-8 lg:px-14 py-5 text-xs text-cream/50 flex flex-col md:flex-row justify-between gap-2">
          <span>© 2025 360 Classy Look Hair Salon. All rights reserved.</span>
          <span className="italic font-serif">The Touch of Class.</span>
        </div>
      </div>
    </footer>
  );
}
