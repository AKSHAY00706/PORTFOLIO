"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const mx = useRef(0), my = useRef(0);
  const rx = useRef(0), ry = useRef(0);
  const raf = useRef<number>(0);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch/mobile - hide cursor entirely
    const touchDevice = window.matchMedia("(hover: none)").matches
      || window.matchMedia("(pointer: coarse)").matches
      || ("ontouchstart" in window);

    if (touchDevice) {
      setIsTouch(true);
      return;
    }

    const d = dot.current, r = ring.current;
    if (!d || !r) return;

    // Show cursor elements
    d.style.display = "block";
    r.style.display = "block";

    const move = (e: MouseEvent) => {
      mx.current = e.clientX; my.current = e.clientY;
      d.style.left = e.clientX + "px"; d.style.top = e.clientY + "px";
    };

    const tick = () => {
      rx.current += (mx.current - rx.current) * 0.10;
      ry.current += (my.current - ry.current) * 0.10;
      r.style.left = rx.current + "px"; r.style.top = ry.current + "px";
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    const on  = () => { d.classList.add("h"); r.classList.add("h"); };
    const off = () => { d.classList.remove("h"); r.classList.remove("h"); };

    const bind = () => {
      document.querySelectorAll("a, button, [data-cursor-hover]")
        .forEach((el) => {
          el.addEventListener("mouseenter", on);
          el.addEventListener("mouseleave", off);
        });
    };

    document.addEventListener("mousemove", move);
    bind();

    const obs = new MutationObserver(bind);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf.current);
      obs.disconnect();
    };
  }, []);

  // Don't render anything on touch devices
  if (isTouch) return null;

  return (
    <>
      <div id="cd" ref={dot}  aria-hidden="true" style={{ display: "none" }} />
      <div id="cr" ref={ring} aria-hidden="true" style={{ display: "none" }} />
    </>
  );
}