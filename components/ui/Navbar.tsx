"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const NAV = [
  { label: "About",   href: "#about" },
  { label: "Core",    href: "#ai-core" },
  { label: "Systems", href: "#projects" },
  { label: "Stack",   href: "#capabilities" },
  { label: "History", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  // Nav background: adapts to theme
  const navBg = scrolled
    ? theme === "dark"
      ? "rgba(4,4,6,0.92)"
      : "rgba(240,235,227,0.92)"
    : "transparent";

  const borderColor = scrolled
    ? theme === "dark"
      ? "rgba(255,255,255,0.05)"
      : "rgba(0,0,0,0.08)"
    : "transparent";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        height: "58px",
        padding: "0 36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: navBg,
        backdropFilter: scrolled ? "blur(28px)" : "none",
        borderBottom: `1px solid ${borderColor}`,
        transition: "background 0.4s, border 0.4s",
      }}
    >
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          background: "none", border: "none", cursor: "none",
          padding: 0, display: "flex", alignItems: "center", gap: "10px",
        }}
      >
        <img
          src="/favicon_red.png"
          alt="AO"
          style={{
            width: "24px", height: "24px", objectFit: "contain",
            filter: "drop-shadow(0 0 7px rgba(192,57,43,0.85))",
          }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px", letterSpacing: "0.12em",
            color: "var(--t1)",
          }}
        >
          <span style={{ color: "var(--red)" }}>AO</span>
          <span style={{ color: "var(--t2)" }}>/SYS</span>
        </span>
      </button>

      {/* Desktop nav */}
      <div className="hidden md:flex" style={{ alignItems: "center", gap: "30px" }}>
        {NAV.map((l) => (
          <button
            key={l.href}
            onClick={() => go(l.href)}
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "10px", letterSpacing: "0.13em",
              textTransform: "uppercase",
              color: "var(--t2)",
              background: "none", border: "none", cursor: "none",
              padding: 0, transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--t1)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--t2)")}
          >
            {l.label}
          </button>
        ))}

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          data-cursor-hover
          style={{
            display: "flex", alignItems: "center", gap: "7px",
            background: "none", border: "none", cursor: "none", padding: 0,
          }}
        >
          <div
            style={{
              width: "38px", height: "20px", borderRadius: "10px",
              position: "relative",
              background: theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(192,57,43,0.15)",
              border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(192,57,43,0.3)"}`,
              transition: "background 0.35s",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "3px",
                left: theme === "dark" ? "3px" : "19px",
                width: "12px", height: "12px",
                borderRadius: "50%",
                background: theme === "dark" ? "var(--t2)" : "var(--red)",
                transition: "left 0.3s cubic-bezier(0.16,1,0.3,1), background 0.3s",
                boxShadow: theme === "light" ? "0 0 8px var(--red)" : "none",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px", letterSpacing: "0.12em",
              color: "var(--t2)", textTransform: "uppercase",
            }}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </span>
        </button>
      </div>

      {/* Mobile controls */}
      <div className="flex md:hidden" style={{ alignItems: "center", gap: "16px" }}>
        <button
          onClick={toggleTheme}
          data-cursor-hover
          style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "13px", color: "var(--t2)",
          }}
        >
          {theme === "dark" ? "○" : "●"}
        </button>
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", gap: "4px", padding: "4px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: i === 1 ? "16px" : "22px",
                height: "1.5px",
                background: "var(--t1)",
                transition: "all 0.3s",
                transform: open
                  ? i === 0 ? "translateY(5.5px) rotate(45deg)"
                  : i === 2 ? "translateY(-5.5px) rotate(-45deg)"
                  : "scaleX(0)"
                  : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "58px", left: 0, right: 0,
            background: theme === "dark" ? "rgba(7,7,9,0.97)" : "rgba(240,235,227,0.97)",
            borderBottom: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.08)"}`,
            padding: "28px 20px",
            display: "flex", flexDirection: "column", gap: "20px",
            backdropFilter: "blur(24px)",
          }}
        >
          {NAV.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "12px", letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--t2)",
                background: "none", border: "none",
                cursor: "pointer", textAlign: "left",
                padding: 0, transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--t1)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--t2)")}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}