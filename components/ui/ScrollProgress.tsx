"use client";
import { useEffect } from "react";
export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("sp");
    if (!bar) return;
    const fn = () => {
      const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      bar.style.width = Math.min(p * 100, 100) + "%";
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return <div id="sp" aria-hidden="true" />;
}
