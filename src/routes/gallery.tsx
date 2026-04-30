import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/SectionHeading";

import bridal from "@/assets/bridal.jpg";
import braids from "@/assets/braids.jpg";
import mensCut from "@/assets/mens-cut.jpg";
import hairWaves from "@/assets/hair-waves.jpg";
import hairStraight from "@/assets/hair-straight.jpg";
import hairCurls from "@/assets/hair-curls.jpg";
import kidsImg from "@/assets/kids.jpg";
import eventStyling from "@/assets/event-styling.jpg";
import nails from "@/assets/nails.jpg";
import henna from "@/assets/henna.jpg";
import hennaHand from "@/assets/henna-hand.jpg";
import salonInterior from "@/assets/salon-interior.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Lookbook — 360 Classy Look Hair Salon Gallery, Accra" },
      {
        name: "description",
        content:
          "Browse our lookbook — bridal styles, braids, men's cuts, kids' hair and more from 360 Classy Look on Palace Street, Accra.",
      },
      { property: "og:title", content: "The Lookbook — 360 Classy Look" },
      {
        property: "og:description",
        content: "Real work. Real results. Browse our gallery and book yours.",
      },
      { property: "og:image", content: bridal },
    ],
  }),
  component: GalleryPage,
});

type Cat = "All" | "Women" | "Men" | "Braids" | "Kids" | "Bridal";

const photos: { src: string; cat: Exclude<Cat, "All">; alt: string }[] = [
  { src: bridal, cat: "Bridal", alt: "Bridal updo styling" },
  { src: braids, cat: "Braids", alt: "Box braids" },
  { src: mensCut, cat: "Men", alt: "Men's fade" },
  { src: hairWaves, cat: "Women", alt: "Long wavy hair" },
  { src: hairStraight, cat: "Women", alt: "Silk press" },
  { src: hairCurls, cat: "Women", alt: "Defined curls" },
  { src: kidsImg, cat: "Kids", alt: "Kids hairstyle" },
  { src: eventStyling, cat: "Bridal", alt: "Event styling" },
  { src: salonInterior, cat: "Women", alt: "Salon interior" },
  { src: nails, cat: "Women", alt: "Nail styling" },
  { src: henna, cat: "Bridal", alt: "Henna" },
  { src: hennaHand, cat: "Bridal", alt: "Henna hand" },
];

const cats: Cat[] = ["All", "Women", "Men", "Braids", "Kids", "Bridal"];

function GalleryPage() {
  const [active, setActive] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? photos : photos.filter((p) => p.cat === active);

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Our Work"
          title={<>The <span className="italic text-gradient-gold">Lookbook</span></>}
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 text-sm uppercase tracking-wider border transition-all ${
                active === c
                  ? "bg-gold border-gold text-primary-foreground"
                  : "border-border text-foreground/70 hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((p, i) => (
            <button
              key={i}
              onClick={() => setLightbox(p.src)}
              className="block w-full break-inside-avoid overflow-hidden border border-transparent hover:border-gold transition-all group"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-auto brightness-90 group-hover:brightness-110 group-hover:scale-[1.02] transition-all duration-500"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-espresso/95 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-gold"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img src={lightbox} alt="" className="max-h-[85vh] max-w-[90vw] object-contain" />
        </div>
      )}

      <div className="hidden lg:block fixed bottom-0 left-0 right-0 z-40 bg-espresso/95 backdrop-blur-md border-t border-gold/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/80 font-serif italic">
            Love what you see? Book your appointment →
          </p>
          <a
            href={whatsappLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-primary-foreground text-sm uppercase tracking-widest"
          >
            WhatsApp Us <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
