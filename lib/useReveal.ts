"use client";
import { useEffect, useRef } from "react";

export function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Watch both .rv (old) and .reveal (new) class names
    const targets = el.querySelectorAll<HTMLElement>(".rv, .reveal");

    // Also check the section element itself
    const allTargets: Element[] = Array.from(targets);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
          }
        });
      },
      { threshold }
    );

    allTargets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}