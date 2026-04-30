import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Star, Zap, Sparkles } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Your Appointment — 360 Classy Look, Accra" },
      {
        name: "description",
        content:
          "Book your hair appointment at 360 Classy Look on Palace Street, Accra. Choose your service and day — we'll confirm via WhatsApp within minutes.",
      },
      { property: "og:title", content: "Book Your Appointment — 360 Classy Look" },
      {
        property: "og:description",
        content: "Pick your service and day. We'll confirm in minutes via WhatsApp.",
      },
    ],
  }),
  component: BookPage,
});

const services = ["Men's Cut", "Women's Styling", "Braiding", "Treatment", "Bridal", "Kids"];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function BookPage() {
  const [service, setService] = useState("Women's Styling");
  const [day, setDay] = useState("Sat");
  const [notes, setNotes] = useState("");

  const message = useMemo(() => {
    let m = `Hello 360 Classy Look 👋\n\nI'd like to book an appointment.\n\n• Service: ${service}\n• Preferred day: ${day}`;
    if (notes.trim()) m += `\n• Notes: ${notes.trim()}`;
    m += `\n\nPlease confirm availability. Thank you!`;
    return m;
  }, [service, day, notes]);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Book"
          title={<>Book Your <span className="italic text-gradient-gold">Appointment</span></>}
          subtitle="Select your service and tap the button. We'll confirm within minutes."
        />

        <div className="mt-16 space-y-12">
          {/* Step 1 */}
          <div>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-serif text-2xl text-gold">01</span>
              <h3 className="font-serif text-xl text-foreground">Select your service</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {services.map((s) => (
                <button
                  key={s}
                  onClick={() => setService(s)}
                  className={`px-5 py-2.5 text-sm uppercase tracking-wider border transition-all ${
                    service === s
                      ? "bg-gold border-gold text-primary-foreground"
                      : "border-border text-foreground/70 hover:border-gold hover:text-gold"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-serif text-2xl text-gold">02</span>
              <h3 className="font-serif text-xl text-foreground">Pick a preferred day</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {days.map((d) => (
                <button
                  key={d}
                  onClick={() => setDay(d)}
                  className={`px-5 py-2.5 text-sm uppercase tracking-wider border transition-all min-w-[80px] ${
                    day === d
                      ? "bg-gold border-gold text-primary-foreground"
                      : "border-border text-foreground/70 hover:border-gold hover:text-gold"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-serif text-2xl text-gold">03</span>
              <h3 className="font-serif text-xl text-foreground">Any special notes?</h3>
            </div>
            <input
              type="text"
              placeholder="e.g. Hair shoulder length, prefer afternoon"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-input border border-border focus:border-gold outline-none px-5 py-4 text-foreground placeholder:text-muted-foreground/60 transition-colors"
            />
          </div>

          {/* Preview */}
          <div className="bg-card border border-gold/30 p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Message Preview
            </div>
            <pre className="whitespace-pre-wrap font-sans text-sm text-foreground/90 leading-relaxed">
              {message}
            </pre>
          </div>

          <div className="text-center">
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-primary-foreground font-medium tracking-widest text-sm uppercase animate-gold-pulse hover:scale-[1.02] transition-transform"
            >
              Book Now on WhatsApp
              <ArrowUpRight size={18} />
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="flex items-center gap-2"><Star size={14} className="text-gold" fill="currentColor" /> 4.9 Stars</span>
              <span className="flex items-center gap-2"><Zap size={14} className="text-gold" /> Fast Response</span>
              <span className="flex items-center gap-2"><Sparkles size={14} className="text-gold" /> Professional & Clean</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
