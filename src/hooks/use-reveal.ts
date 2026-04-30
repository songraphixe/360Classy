import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

/**
 * Adds `in-view` class to any `.reveal` element when scrolled into view.
 * Uses both IntersectionObserver and MutationObserver so elements that
 * mount late (after hydration, lazy renders, etc.) are never missed.
 */
export function useReveal() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Generous rootMargin — start revealing elements 120px before they enter
    // the viewport so there's no awkward "pop in" as the user scrolls.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 120px 0px" },
    );

    /** Observe every un-revealed element; immediately show anything already on screen */
    const observeAll = () => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.in-view)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Already visible (or above the fold) — reveal right away
        if (rect.top < window.innerHeight + 120 && rect.bottom > -120) {
          el.classList.add("in-view");
        } else {
          io.observe(el);
        }
      });
    };

    // Run once after a short settle, then again after a longer settle to
    // catch any elements that mount during hydration / code-splitting.
    const t1 = setTimeout(observeAll, 50);
    const t2 = setTimeout(observeAll, 400);
    const t3 = setTimeout(observeAll, 1000);

    // Watch the DOM for new `.reveal` nodes added after initial render
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      io.disconnect();
      mo.disconnect();
    };
  }, [location.pathname]);
}
