import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

/**
 * Adds `in-view` class to any `.reveal` element when scrolled into view.
 */
export function useReveal() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10px 0px" },
    );

    const observe = () => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.in-view)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Already visible on screen — reveal immediately
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("in-view");
        } else {
          io.observe(el);
        }
      });
    };

    // Allow DOM to settle before querying
    const timeout = setTimeout(observe, 100);

    return () => {
      clearTimeout(timeout);
      io.disconnect();
    };
  }, [location.pathname]);
}
