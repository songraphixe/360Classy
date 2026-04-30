import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${a} reveal`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream border border-border text-[11px] uppercase tracking-[0.3em] text-gold font-semibold mb-6`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] text-espresso font-bold">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-base md:text-lg text-taupe leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
