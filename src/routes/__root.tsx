import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { useReveal } from "@/hooks/use-reveal";

import appCss from "../styles.css?url";
import heroSalon from "@/assets/shampoo-luxury.jpg";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-8xl text-gradient-gold font-bold">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-espresso font-bold">Page not found</h2>
        <p className="mt-2 text-sm text-taupe">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full gradient-gold text-espresso text-sm font-semibold shadow-glow hover:scale-[1.02] transition-transform duration-500"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#40342F" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "Classy Look" },
      { title: "360 Classy Look Hair Salon — The Touch of Class | Accra" },
      {
        name: "description",
        content:
          "Accra's most-loved hair salon on Palace Street. 4.9★ from 200+ clients. Premium cuts, styling, braids, bridal & kids' hair. Book via WhatsApp.",
      },
      { property: "og:title", content: "360 Classy Look Hair Salon — The Touch of Class" },
      {
        property: "og:description",
        content:
          "Premium hair salon on Palace Street, Accra. Book your appointment via WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // DNS prefetch speeds up the font connection without blocking render
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      // Non-blocking font load: media="print" loads async, onload switches to "all"
      // Only load weights actually used: Fraunces 400/600/700 italic + Plus Jakarta 400/500/600/700
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=optional",
        media: "print",
        onLoad: "this.media='all'",
      } as any,
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/icon-192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/icon-512.png" },
      { rel: "preload", as: "image", href: heroSalon, fetchpriority: "high" } as any,
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  useReveal();
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomNav />
    </>
  );
}
