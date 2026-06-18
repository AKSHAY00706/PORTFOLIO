"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Only run on desktop (Lenis on mobile can fight native scroll)
    if (window.matchMedia("(hover: none)").matches) return;

    let lenis: any;

    const init = async () => {
      try {
        const Lenis = (await import("lenis")).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 0.8,
        });

        const raf = (time: number) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};
        requestAnimationFrame(raf);
      } catch (e) {
        // Lenis optional — fallback to native scroll silently
      }
    };

    init();
    return () => lenis?.destroy();
  }, []);

  return null;
}
