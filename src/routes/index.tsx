import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight, ArrowUpRight, MapPin, Phone, Navigation, Sparkles } from "lucide-react";
import { useState } from "react";
import { whatsappLink, DEFAULT_MESSAGE, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/SectionHeading";

import heroSalon from "@/assets/shampoo-luxury.jpg";
import salonInterior from "@/assets/salon-interior.jpg";
import hairWaves from "@/assets/hair-waves.jpg";
import hairStraight from "@/assets/hair-straight.jpg";
import hairCurls from "@/assets/hair-curls.jpg";
import bridal from "@/assets/bridal.jpg";
import braids from "@/assets/braids.jpg";
import mensCut from "@/assets/mens-cut.jpg";
import kidsImg from "@/assets/kids.jpg";
import heroSalonOrig from "@/assets/hero-salon.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "360 Classy Look — Accra's Premium Hair Salon | Palace Street" },
      {
        name: "description",
        content:
          "Where every visit feels like a luxury. 4.9★ rated salon on Palace Street, Accra. Cuts, styling, braids, bridal. Book via WhatsApp now.",
      },
      { property: "og:title", content: "360 Classy Look — Accra's Premium Hair Salon" },
      {
        property: "og:description",
        content: "Where every visit feels like a luxury. Book via WhatsApp.",
      },
      { property: "og:image", content: heroSalon },
      { property: "twitter:image", content: heroSalon },
    ],
  }),
  component: Home,
});

const services = [
  { title: "Hair Cuts & Styling", desc: "Fresh cuts and styling for men, women, and children. Tailored to your look." },
  { title: "Hair Straightening", desc: "Silky, smooth finishes using professional-grade products. Long-lasting results." },
  { title: "Braiding & Naturals", desc: "Protective styles that are as beautiful as they are practical." },
  { title: "Bridal & Event", desc: "Your most important moments deserve our best work. Book early." },
  { title: "Hair Treatments", desc: "Deep conditioning, protein treatments, and scalp care to restore and protect." },
  { title: "Kids' Hair", desc: "A calm, friendly space where your little ones are in great hands." },
];

const galleryImgs = [bridal, mensCut, braids, hairWaves, hairCurls, heroSalonOrig];

const testimonials = [
  { quote: "The best salon experience I've had in Accra. Clean, professional, and they actually listen to what you want.", name: "Abena K." },
  { quote: "Brought my daughter here for the first time. The staff made her so comfortable. We're regulars now.", name: "Maame O." },
  { quote: "The atmosphere is just elegant. You feel like you're in a high-end salon anywhere in the world.", name: "Kafui A." },
  { quote: "My hair has never looked this good. The stylists really know their craft.", name: "Esi M." },
  { quote: "Booked via WhatsApp and got a slot the same day. Easy process, amazing result.", name: "Nana B." },
  { quote: "Worth every pesewa. I never leave without getting compliments the next day.", name: "Akosua D." },
];

const bookingServices = ["Men's Cut", "Women's Styling", "Braiding", "Treatment", "Bridal", "Kids"];

function Home() {
  const [pickedService, setPickedService] = useState("Women's Styling");
  const message = `Hello 360 Classy Look, I'd like to book a ${pickedService} appointment. Please confirm availability.`;

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-12 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-elegant min-h-[88vh] flex items-center">
            <img
              src={heroSalon}
              alt="360 Classy Look luxury salon interior"
              className="absolute inset-0 w-full h-full object-cover scale-105"
              width={1920}
              height={1280}
              fetchPriority="high"
              decoding="sync"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-espresso/80 via-espresso/55 to-espresso/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />

            {/* floating rating */}
            <div className="absolute top-6 right-6 z-10 glass-dark rounded-full pl-3 pr-5 py-2 flex items-center gap-2.5 animate-fade-in">
              <span className="h-7 w-7 rounded-full gradient-gold flex items-center justify-center">
                <Star size={13} className="text-white" fill="currentColor" />
              </span>
              <span className="text-sm font-semibold text-cream">4.9</span>
              <span className="text-xs text-cream/70">· 200+ reviews</span>
            </div>

            <div className="relative z-10 px-6 md:px-14 lg:px-20 py-16 max-w-5xl animate-fade-up">
              <div className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 mb-8">
                <Sparkles size={14} className="text-gold" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-cream font-medium">
                  Palace Street · Accra
                </span>
              </div>
              <h1 className="font-serif text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.98] text-cream font-bold tracking-tight">
                Where every visit
                <br />
                feels like a{" "}
                <span className="italic font-light text-gradient-gold">luxury.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-cream/85 max-w-xl leading-relaxed">
                Accra's most-loved hair salon. Premium styling, with the warmth and care
                you'd expect from family.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink(DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full pl-7 pr-2 py-2 gradient-gold text-espresso font-semibold shadow-glow hover:scale-[1.02] transition-transform duration-500"
                >
                  Book via WhatsApp
                  <span className="h-11 w-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </span>
                </a>
                <Link
                  to="/gallery"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 glass-dark text-cream font-medium hover:bg-cream/10 transition-colors"
                >
                  View Our Work <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="px-4 lg:px-6 -mt-2">
        <div className="max-w-7xl mx-auto rounded-3xl bg-card shadow-card border border-border px-6 py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {[
            ["4.9★", "Google Rating"],
            ["200+", "Happy Clients"],
            ["10+", "Years of Class"],
            ["Palace St.", "Accra, Ghana"],
          ].map(([big, small]) => (
            <div key={small} className="text-center">
              <div className="font-serif text-3xl md:text-4xl text-espresso font-bold">{big}</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-taupe font-medium">{small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 lg:py-20 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative reveal">
            <div className="rounded-[2rem] overflow-hidden shadow-elegant">
              <img
                src={salonInterior}
                alt="Inside the 360 Classy Look salon"
                width={800}
                height={1000}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-[1.2s] ease-out"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 rounded-2xl gradient-gold text-espresso px-7 py-5 shadow-glow rotate-[-3deg]">
              <div className="font-serif text-2xl font-bold">Est. on</div>
              <div className="text-[10px] uppercase tracking-[0.3em] mt-0.5">Palace Street</div>
            </div>
            <div className="absolute -top-4 -left-4 hidden md:flex h-24 w-24 rounded-full bg-lavender/40 backdrop-blur-sm items-center justify-center text-espresso font-serif text-xs text-center leading-tight rotate-[8deg] animate-float">
              Touch<br/>of<br/>Class
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="About the Salon"
              title={<>The Touch of <span className="italic font-light text-gradient-gold">Class</span></>}
            />
            <div className="mt-8 space-y-5 text-espresso/80 leading-relaxed text-base md:text-lg reveal">
              <p>
                360 Classy Look is more than a hair salon — it's a ritual. Located on Palace Street in the heart of Accra, we've built a reputation for precision, professionalism, and an experience that leaves you feeling like royalty.
              </p>
              <p>
                Whether you're coming in for a fresh cut, a bridal style, or just to treat yourself — our team is ready to give you that touch of class you deserve.
              </p>
            </div>
            <Link
              to="/team"
              className="reveal mt-10 inline-flex items-center gap-2 rounded-full pl-5 pr-2 py-2 bg-espresso text-cream text-sm font-semibold hover:scale-[1.02] transition-transform duration-500"
            >
              Meet Our Team
              <span className="h-9 w-9 rounded-full gradient-gold flex items-center justify-center">
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-cream px-6 md:px-14 py-14 md:py-16 shadow-soft">
          <SectionHeading
            align="center"
            eyebrow="Our Craft"
            title={<>What we do <span className="italic font-light text-gradient-gold">best.</span></>}
            subtitle="Professional services for every look, every occasion."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                style={{ transitionDelay: `${i * 60}ms` }}
                className="reveal group p-8 rounded-3xl bg-card shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
              >
                <div className="h-12 w-12 rounded-2xl gradient-gold flex items-center justify-center text-espresso font-serif text-lg font-bold shadow-glow">
                  0{i + 1}
                </div>
                <h3 className="mt-6 font-serif text-2xl text-espresso font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-taupe leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-gold text-xs uppercase tracking-[0.2em] font-semibold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center reveal">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2 bg-espresso text-cream text-sm font-semibold hover:scale-[1.02] transition-transform duration-500"
            >
              See Full Service Menu
              <span className="h-9 w-9 rounded-full gradient-gold flex items-center justify-center">
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section id="gallery" className="py-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            align="center"
            eyebrow="Lookbook"
            title={<>The work <span className="italic font-light text-gradient-gold">speaks for itself.</span></>}
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {galleryImgs.map((src, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${i * 80}ms` }}
                className={`reveal group rounded-3xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-700 ${
                  i % 5 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-[4/5]"
                }`}
              >
                <img
                  src={src}
                  alt="Salon work"
                  width={600}
                  height={750}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.4s] ease-out"
                />
              </div>
            ))}
          </div>
          <div className="mt-14 text-center reveal">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2 bg-espresso text-cream text-sm font-semibold hover:scale-[1.02] transition-transform duration-500"
            >
              View Full Gallery
              <span className="h-9 w-9 rounded-full gradient-gold flex items-center justify-center">
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* BOOKING WIDGET */}
      <section className="py-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto relative rounded-[2.5rem] overflow-hidden shadow-elegant">
          <div className="absolute inset-0">
            <img src={hairStraight} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-espresso/95 via-espresso/85 to-espresso/95" />
          </div>
          <div className="relative px-6 md:px-12 py-20 md:py-24 max-w-3xl mx-auto text-center">
            <div className="reveal inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 mb-6">
              <Sparkles size={14} className="text-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-cream font-medium">Book in 30 seconds</span>
            </div>
            <h2 className="reveal font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-bold leading-[1.05]">
              Ready for your <span className="italic font-light text-gradient-gold">transformation?</span>
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-2 reveal">
              {bookingServices.map((s) => (
                <button
                  key={s}
                  onClick={() => setPickedService(s)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    pickedService === s
                      ? "gradient-gold text-espresso shadow-glow scale-[1.04]"
                      : "glass-dark text-cream hover:bg-cream/15"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noreferrer"
              className="reveal mt-12 inline-flex items-center gap-2 rounded-full pl-8 pr-2 py-2 bg-cream text-espresso font-semibold animate-gold-pulse hover:scale-[1.02] transition-transform duration-500"
            >
              Book {pickedService} on WhatsApp
              <span className="h-11 w-11 rounded-full gradient-gold flex items-center justify-center text-espresso">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            align="center"
            eyebrow="Kind Words"
            title={<>What our <span className="italic font-light text-gradient-gold">clients say.</span></>}
          />
          <div className="mt-16 flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide reveal">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="snap-start min-w-[85%] sm:min-w-[440px] rounded-3xl bg-card shadow-card p-8 md:p-10 hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex gap-1 text-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-espresso italic font-medium">
                  "{t.quote}"
                </p>
                <p className="mt-6 text-sm text-gold tracking-[0.2em] uppercase font-semibold">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-cream px-6 md:px-14 py-14 shadow-soft">
          <SectionHeading
            eyebrow="Visit Us"
            title={<>Find us on <span className="italic font-light text-gradient-gold">Palace Street.</span></>}
          />
          <div className="mt-14 grid lg:grid-cols-2 gap-10">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card reveal">
              <iframe
                title="360 Classy Look location"
                src="https://www.google.com/maps?q=Palace+Street,+Accra,+Ghana&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="space-y-8 reveal">
              <div className="space-y-5">
                {[
                  [<MapPin size={18} key="m" />, "Address", "Palace Street, Accra, Ghana"],
                  [<Phone size={18} key="p" />, "Phone", WHATSAPP_DISPLAY],
                  [<Star size={18} key="s" />, "Accepts", "Mobile Money · NFC · Cash"],
                ].map(([icon, label, val]) => (
                  <div key={label as string} className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-card">
                    <div className="h-11 w-11 rounded-xl gradient-gold flex items-center justify-center text-espresso shrink-0">
                      {icon}
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-taupe font-semibold">{label as string}</div>
                      <div className="text-espresso mt-1 font-medium">{val as string}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Palace+Street+Accra+Ghana"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-card shadow-card text-sm font-medium text-espresso hover:scale-[1.02] transition-transform duration-500"
                >
                  <Navigation size={14} /> Directions
                </a>
                <a
                  href={`tel:+${WHATSAPP_DISPLAY.replace(/[^\d]/g, "")}`}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-card shadow-card text-sm font-medium text-espresso hover:scale-[1.02] transition-transform duration-500"
                >
                  <Phone size={14} /> Call Us
                </a>
                <a
                  href={whatsappLink(DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full gradient-gold text-espresso text-sm font-semibold shadow-glow hover:scale-[1.02] transition-transform duration-500"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
