"use client";
import { useReveal } from "@/lib/useReveal";
import { useState } from "react";

const PROJECTS = [
  {
    index:"01",id:"sentrix",name:"SENTRIX",tagline:"AI Threat Intelligence Platform",theme:"Cybersecurity SOC Dashboard",
    desc:"AI-powered cybersecurity platform for phishing detection, malicious URL analysis, QR phishing attacks, and suspicious attachments using real-time threat intelligence APIs with explainable scoring.",
    features:["SPF/DKIM/DMARC analysis","IOC extraction & scoring","QR phishing detection","AI-assisted classification","Interactive threat dashboards"],
    tech:["Next.js","React","Tailwind","Framer Motion","Threat APIs"],
    color:"#e74c3c",accent:"rgba(231,76,60,0.10)",github:"https://github.com/AKSHAY00706",demo:null as string|null,status:"OPERATIONAL",
  },
  {
    index:"02",id:"vektor",name:"VEKTOR",tagline:"AI Trading Chart Analysis",theme:"Fintech Intelligence Terminal",
    desc:"AI-powered trading chart analysis using computer vision and LLM reasoning to generate explainable market intelligence with probabilistic confidence scoring.",
    features:["Screenshot-based chart analysis","Probabilistic prediction engine","Support/resistance detection","AI-generated explanations","Confidence scoring"],
    tech:["Next.js","FastAPI","Python","OpenCV","Groq API","TypeScript"],
    color:"#c0392b",accent:"rgba(192,57,43,0.10)",github:"https://github.com/AKSHAY00706",demo:null as string|null,status:"IN DEVELOPMENT",
  },
  {
    index:"03",id:"atlas",name:"ATLAS",tagline:"AI Operating Environment",theme:"Ambient Intelligence OS",
    desc:"Experimental AI operating environment focused on contextual intelligence, adaptive workflows, persistent memory systems, and cinematic interaction design. Local-first intelligence.",
    features:["AI orchestration engine","Persistent memory arch","Contextual intelligence","Adaptive workflows","Cinematic UI systems"],
    tech:["Next.js","TypeScript","LLM APIs","Custom Memory"],
    color:"#95a5a6",accent:"rgba(149,165,166,0.07)",github:"https://github.com/AKSHAY00706",demo:null as string|null,isLocal:true,status:"LOCAL BUILD",
  },
  {
    index:"04",id:"crispcv",name:"CRISPCV",tagline:"AI Resume & Portfolio Analyzer",theme:"Brutalist AI Critique System",
    desc:"AI-powered platform that parses resumes and scrapes portfolio sites to generate structured recruiter-style feedback and actionable improvement recommendations.",
    features:["PDF parsing & OCR","Portfolio scraping","Recruiter-style AI feedback","Structured scoring","Actionable recs"],
    tech:["Next.js","Python","LLM APIs","PDF parsing","Web scraping"],
    color:"#c0392b",accent:"rgba(192,57,43,0.09)",github:"https://github.com/AKSHAY00706",demo:"https://crispcv.vercel.app/",status:"LIVE",
  },
];

function ProjectRow({ p, flip }: { p: typeof PROJECTS[0]; flip: boolean }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="project-row reveal"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(28px, 4vw, 64px)",
        alignItems: "center",
        padding: "clamp(40px, 6vw, 80px) 0",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      {/* Image / Visual Card */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16/9",
          width: "100%",
          background: "var(--bg-primary)",
          border: `1px solid ${hov ? p.color + "60" : "var(--border-subtle)"}`,
          borderRadius: "6px",
          overflow: "hidden",
          order: flip ? 1 : 0,
          transition: "border-color 0.4s, box-shadow 0.4s",
          boxShadow: hov ? `0 0 40px ${p.accent}` : "none",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${p.accent} 0%, transparent 70%)` }} />
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(var(--border-subtle) 1px, transparent 1px),linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: hov ? 0.8 : 0.4,
            transition: "opacity 0.4s",
          }}
        />
        {hov && (
          <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
            <div
              style={{
                position: "absolute", left: 0, right: 0, height: "1px",
                background: `linear-gradient(90deg,transparent,${p.color}88,transparent)`,
                animation: "scanLine 3s linear infinite",
              }}
            />
          </div>
        )}
        <div
          style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "Monument Extended,sans-serif", fontWeight: 800,
              fontSize: "clamp(20px, 3vw, 42px)",
              color: p.color, letterSpacing: "0.04em",
              filter: hov ? `drop-shadow(0 0 20px ${p.color})` : "none",
              transition: "filter 0.4s",
              textAlign: "center",
            }}
          >
            {p.name}
          </p>
          <span className="tag">{p.theme}</span>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
            <span
              style={{
                width: "5px", height: "5px", borderRadius: "50%",
                background: p.status === "LIVE" || p.status === "OPERATIONAL" ? "#2ecc71" : p.color,
                boxShadow: p.status === "LIVE" ? "0 0 8px #2ecc71" : "none",
              }}
            />
            <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "9px", letterSpacing: "0.12em", color: "var(--text-muted)" }}>
              {p.status}
            </span>
          </div>
        </div>
        {[{ t: "top", l: "left" }, { t: "top", l: "right" }, { t: "bottom", l: "left" }, { t: "bottom", l: "right" }].map(({ t, l }) => (
          <div
            key={t + l}
            style={{
              position: "absolute", [t]: "10px", [l]: "10px",
              width: "14px", height: "14px",
              borderTop: t === "top" ? `1px solid ${p.color}` : "none",
              borderBottom: t === "bottom" ? `1px solid ${p.color}` : "none",
              borderLeft: l === "left" ? `1px solid ${p.color}` : "none",
              borderRight: l === "right" ? `1px solid ${p.color}` : "none",
              opacity: hov ? 0.9 : 0.4, transition: "opacity 0.4s",
            }}
          />
        ))}
      </div>

      {/* Text Content */}
      <div style={{ order: flip ? 0 : 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "10px", color: "var(--text-muted)" }}>
            {p.index}
          </span>
          <div style={{ flex: 1, height: "1px", background: "var(--border-subtle)" }} />
          {"isLocal" in p && p.isLocal && <span className="tag" style={{ fontSize: "9px" }}>LOCAL</span>}
        </div>
        <h3
          style={{
            fontFamily: "Monument Extended,sans-serif", fontWeight: 800,
            fontSize: "clamp(16px, 2vw, 28px)",
            color: "var(--text-primary)", marginBottom: "6px",
          }}
        >
          {p.name}
        </h3>
        <p
          style={{
            fontFamily: "JetBrains Mono,monospace", fontSize: "10px",
            color: p.color, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "14px",
          }}
        >
          {p.tagline}
        </p>
        <p
          style={{
            fontFamily: "General Sans,sans-serif", fontSize: "clamp(12px, 1.2vw, 14px)",
            color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "16px",
          }}
        >
          {p.desc}
        </p>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "5px", marginBottom: "18px" }}>
          {p.features.map((f) => (
            <li
              key={f}
              style={{
                display: "flex", alignItems: "center", gap: "9px",
                fontFamily: "General Sans,sans-serif", fontSize: "12px",
                color: "var(--text-secondary)",
              }}
            >
              <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: p.color, flexShrink: 0 }} />
              {f}
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "20px" }}>
          {p.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "JetBrains Mono,monospace", fontSize: "9px",
                color: "var(--text-muted)", padding: "3px 7px",
                border: "1px solid var(--border-subtle)", borderRadius: "2px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "10px", padding: "9px 18px" }}>
              Live Demo ↗
            </a>
          )}
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: "10px", padding: "9px 18px" }}>
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;
  return (
    <section ref={sectionRef} id="projects" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="container-wide">
        <div className="reveal" style={{ marginBottom: "clamp(32px, 4vw, 60px)" }}>
          <p className="section-label">— Section 03 / Featured Systems</p>
          <h2
            style={{
              fontFamily: "Monument Extended,sans-serif", fontWeight: 800,
              fontSize: "clamp(24px, 4vw, 50px)", color: "var(--text-primary)",
            }}
          >
            ACTIVE SYSTEMS
          </h2>
        </div>
        {PROJECTS.map((p, i) => <ProjectRow key={p.id} p={p} flip={i % 2 === 1} />)}
      </div>

      <style>{`
        @keyframes scanLine {
          0% { top: -1px; }
          100% { top: 100%; }
        }
        @media (max-width: 768px) {
          .project-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .project-row > div {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  );
}