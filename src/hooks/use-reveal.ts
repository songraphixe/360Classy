import { useEffect, useRef } from "react";

/**
 * Adds `in-view` class to any `.reveal` element when scrolled into view.
 * Re-runs on every render to catch dynamically added elements in SPA mode.
 */
export function useReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Schedule observer setup on next frame to ensure DOM is fully updated
    const timer = requestAnimationFrame(() => {
      // Disconnect previous observer if it exists
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.in-view)");
      if (!els.length) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in-view");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
      );
      els.forEach((el) => io.observe(el));
      observerRef.current = io;
    });

    return () => {
      cancelAnimationFrame(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }); // Re-run on every render to catch newly added elements
}
