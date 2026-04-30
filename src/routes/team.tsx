import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/SectionHeading";

import ama from "@/assets/team-ama.jpg";
import kwame from "@/assets/team-kwame.jpg";
import abena from "@/assets/team-abena.jpg";
import efua from "@/assets/team-efua.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — The Artists at 360 Classy Look, Accra" },
      {
        name: "description",
        content:
          "Meet the trained stylists behind 360 Classy Look — natural hair, braids, men's grooming, bridal and kids' specialists in Accra.",
      },
      { property: "og:title", content: "Meet the Artists — 360 Classy Look" },
      { property: "og:description", content: "Trained professionals who care about your hair as much as you do." },
      { property: "og:image", content: ama },
    ],
  }),
  component: TeamPage,
});

const team = [
  {
    name: "Ama Serwah",
    role: "Lead Stylist · Natural Hair & Braids",
    bio: "She transforms hair with the patience of an artist.",
    img: ama,
  },
  {
    name: "Kwame Asante",
    role: "Men's Grooming Specialist",
    bio: "Sharp fades and cleaner lines than you've seen anywhere in Accra.",
    img: kwame,
  },
  {
    name: "Abena Frimpong",
    role: "Bridal & Event Styling",
    bio: "She's styled brides across Ghana. She'll make you unforgettable.",
    img: abena,
  },
  {
    name: "Efua Mensah",
    role: "Kids' Hair & Protective Styles",
    bio: "The kids love her. The parents trust her completely.",
    img: efua,
  },
];

function TeamPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="The Team"
          title={<>The Artists Behind <br /><span className="italic text-gradient-gold">the Magic</span></>}
          subtitle="Our stylists are trained professionals who care about your hair as much as you do."
        />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m) => (
            <div key={m.name} className="group">
              <div className="aspect-[4/5] overflow-hidden border border-border group-hover:border-gold transition-colors">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-2xl text-foreground">{m.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-gold">{m.role}</p>
                <p className="mt-4 text-sm text-muted-foreground italic font-serif leading-relaxed">
                  "{m.bio}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href={whatsappLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-primary-foreground font-medium tracking-widest text-sm uppercase animate-gold-pulse hover:scale-[1.02] transition-transform"
          >
            Book with Our Team <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
