import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — 360 Classy Look Hair Salon, Accra" },
      {
        name: "description",
        content:
          "Get in touch with 360 Classy Look Hair Salon on Palace Street, Accra. Send us a message via WhatsApp or visit us directly.",
      },
      { property: "og:title", content: "Contact 360 Classy Look — Accra" },
      {
        property: "og:description",
        content: "Send us a message and we'll help you decide what service is right for you.",
      },
    ],
  }),
  component: ContactPage,
});

const services = [
  "I'm not sure yet",
  "Women's Styling",
  "Men's Cut",
  "Braiding",
  "Bridal",
  "Hair Treatment",
  "Kids' Hair",
];

function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0]);
  const [msg, setMsg] = useState("");

  const compose = () => {
    let m = `Hello 360 Classy Look 👋\n\nMy name is ${name || "(name)"}.`;
    if (phone) m += `\nMy number: ${phone}`;
    m += `\nI'm interested in: ${service}`;
    if (msg.trim()) m += `\n\n${msg.trim()}`;
    return m;
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title={<>Get in <span className="italic text-gradient-gold">Touch</span></>}
          subtitle="Not sure what service you need? Send us a message and we'll help you decide."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form
            className="space-y-6 reveal"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(whatsappLink(compose()), "_blank");
            }}
          >
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-gold">Full Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-2 w-full bg-input border border-border focus:border-gold outline-none px-4 py-3 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-gold">Phone / WhatsApp</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 w-full bg-input border border-border focus:border-gold outline-none px-4 py-3 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-gold">Service Interest</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-2 w-full bg-input border border-border focus:border-gold outline-none px-4 py-3 transition-colors"
              >
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-gold">Message (optional)</label>
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows={5}
                className="mt-2 w-full bg-input border border-border focus:border-gold outline-none px-4 py-3 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-3 px-9 py-4 bg-gold text-primary-foreground font-medium tracking-widest text-sm uppercase hover:scale-[1.02] transition-transform"
            >
              Send via WhatsApp <ArrowUpRight size={18} />
            </button>
          </form>

          {/* Right column */}
          <div className="space-y-8 reveal">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1 shrink-0" size={20} />
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Address</div>
                  <div className="text-foreground mt-1">Palace Street, Accra, Ghana</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-gold mt-1 shrink-0" size={20} />
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Phone</div>
                  <a
                    href={`tel:+${WHATSAPP_DISPLAY.replace(/[^\d]/g, "")}`}
                    className="text-foreground mt-1 hover:text-gold block"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-gold mt-1 shrink-0" size={20} />
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Hours</div>
                  <div className="text-foreground mt-1 text-sm space-y-0.5">
                    <div>Mon – Sat · 9:00 AM – 8:00 PM</div>
                    <div>Sunday · 12:00 PM – 6:00 PM</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 pt-2">
                <a href="https://www.instagram.com/360classy_look_hair_salon/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-foreground/70 hover:text-gold">
                  <Instagram size={22} />
                </a>
                <a href="https://web.facebook.com/groups/157325990972850/" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-foreground/70 hover:text-gold">
                  <Facebook size={22} />
                </a>
              </div>
            </div>

            <div className="aspect-video border border-gold/30 overflow-hidden">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Palace+Street,+Accra,+Ghana&output=embed"
                className="w-full h-full grayscale-[40%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
