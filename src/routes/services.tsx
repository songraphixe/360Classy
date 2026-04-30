import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/SectionHeading";
import hairFrontals from "@/assets/hair-frontals.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — 360 Classy Look Hair Salon, Accra" },
      {
        name: "description",
        content:
          "Full menu of women's, men's, and kids' hair services at 360 Classy Look on Palace Street, Accra. Cuts, braids, relaxers, bridal, treatments.",
      },
      { property: "og:title", content: "Services & Pricing — 360 Classy Look" },
      {
        property: "og:description",
        content: "Every service, one goal — you leaving looking and feeling your best.",
      },
    ],
  }),
  component: ServicesPage,
});

const categories = [
  {
    title: "Women's Hair",
    items: [
      ["Hair Cut & Blowout", "GHS 150 – 250", "60 min"],
      ["Relaxer / Straightening", "GHS 250 – 400", "90 min"],
      ["Deep Conditioning Treatment", "GHS 180 – 300", "60 min"],
      ["Silk Press", "GHS 220 – 350", "75 min"],
      ["Natural Hair Styling", "GHS 200 – 380", "90 min"],
      ["Braiding (Box, Cornrows, Knotless)", "GHS 350 – 800", "3 – 6 hrs"],
      ["Weave Installation", "GHS 300 – 600", "2 – 3 hrs"],
      ["Bridal Hair", "Call for Pricing", "By appt."],
    ],
  },
  {
    title: "Men's Hair",
    items: [
      ["Haircut & Shape-Up", "GHS 80 – 150", "45 min"],
      ["Beard Grooming & Line-Up", "GHS 60 – 100", "30 min"],
      ["Scalp Treatment", "GHS 120 – 200", "45 min"],
    ],
  },
  {
    title: "Kids' Hair",
    items: [
      ["Kids' Cut & Style", "GHS 60 – 120", "30 min"],
      ["Kids' Braids", "GHS 150 – 350", "1 – 3 hrs"],
    ],
  },
];

function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Menu"
          title={<>Our Services & <span className="italic text-gradient-gold">Pricing</span></>}
          subtitle="Every service, one goal — you leaving looking and feeling your best."
        />

        {/* Feature image */}
        <div className="mt-12 rounded-[2rem] overflow-hidden shadow-elegant reveal">
          <img
            src={hairFrontals}
            alt="Styling techniques for hair frontals at 360 Classy Look"
            width={1200}
            height={500}
            loading="eager"
            decoding="async"
            className="w-full h-[320px] md:h-[420px] object-cover object-top"
          />
        </div>

        <div className="mt-16 space-y-20">
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-6 mb-10">
                <h3 className="font-serif text-3xl md:text-4xl text-gold">{cat.title}</h3>
                <div className="flex-1 h-px bg-gold/30" />
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {cat.items.map(([name, price, time]) => (
                  <div
                    key={name}
                    className="flex items-baseline gap-4 py-4 border-b border-border"
                  >
                    <div className="flex-1">
                      <div className="font-serif text-xl text-foreground">{name}</div>
                      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                        {time}
                      </div>
                    </div>
                    <div className="text-gold whitespace-nowrap text-sm">{price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a
            href={whatsappLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-primary-foreground font-medium tracking-widest text-sm uppercase animate-gold-pulse hover:scale-[1.02] transition-transform"
          >
            Book Your Appointment
            <ArrowUpRight size={18} />
          </a>
          <p className="mt-4 text-xs text-muted-foreground tracking-wide">
            Pricing may vary based on hair length and service complexity.
          </p>
        </div>
      </div>
    </div>
  );
}
