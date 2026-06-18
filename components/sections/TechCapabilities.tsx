"use client";
import { useState } from "react";
import { useReveal } from "@/lib/useReveal";

const CAPABILITIES = [
  {
    id: "ai", label: "AI Systems", icon: "⬡",
    tools: ["LLM Integration","RAG Systems","Prompt Engineering","LangChain","Groq API","OpenAI API","Memory Systems","AI Orchestration"],
    description: "End-to-end AI pipeline design, LLM integration, and intelligent system architecture.",
  },
  {
    id: "cyber", label: "Cybersecurity", icon: "⬢",
    tools: ["Threat Intelligence","IOC Analysis","OSINT","Phishing Detection","SPF/DKIM/DMARC","QR Threat Analysis","SOC Tooling","Malware Classification"],
    description: "Cybersecurity platform development, threat intelligence APIs, and attack surface analysis.",
  },
  {
    id: "vision", label: "Computer Vision", icon: "◈",
    tools: ["OpenCV","MediaPipe","YOLOv8","Image Classification","Gesture Recognition","OCR / Tesseract","Real-time Inference","Video Processing"],
    description: "Computer vision pipelines, gesture tracking, and real-time visual intelligence systems.",
  },
  {
    id: "fullstack", label: "Full Stack", icon: "◎",
    tools: ["Next.js","TypeScript","React","FastAPI","Python","Java","Tailwind CSS","REST APIs"],
    description: "Full-stack web development from cinematic frontends to intelligent backend APIs.",
  },
  {
    id: "prompt", label: "Prompt Engineering", icon: "◇",
    tools: ["System Prompting","Chain-of-Thought","Few-Shot Learning","Tool Calling","Structured Output","RAG Prompting","Agent Design","Evaluation"],
    description: "Advanced prompting techniques for production-grade LLM behavior and reliability.",
  },
  {
    id: "realtime", label: "Real-Time Systems", icon: "◉",
    tools: ["WebSockets","Live Streaming","Event-Driven Arch","Low-Latency APIs","Data Pipelines","Async Processing","Redis","Real-Time UI"],
    description: "Real-time data systems, live APIs, and sub-100ms interaction design.",
  },
  {
    id: "uiux", label: "UI/UX Engineering", icon: "◰",
    tools: ["Framer Motion","Three.js","React Three Fiber","GSAP","Lenis Scroll","Custom Cursors","Shader Effects","Cinematic UX"],
    description: "Cinematic interface design, 3D experiences, and premium interactive storytelling.",
  },
  {
    id: "threat", label: "Threat Intelligence", icon: "◐",
    tools: ["VirusTotal API","URLScan.io","AbuseIPDB","Shodan","Have I Been Pwned","Hybrid Analysis","ThreatFox","IOC Extraction"],
    description: "Real-time threat intelligence integration, API orchestration, and automated analysis.",
  },
];

export default function TechCapabilities() {
  const [active, setActive] = useState<string>("ai");
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;
  const activeCapability = CAPABILITIES.find((c) => c.id === active);

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container-wide">
        <div className="reveal" style={{ marginBottom: "clamp(32px,4vw,60px)" }}>
          <p className="section-label">— Section 05</p>
          <h2
            style={{
              fontFamily: "Monument Extended,sans-serif", fontWeight: 800,
              fontSize: "clamp(24px,4vw,52px)", color: "var(--text-primary)",
            }}
          >
            TECHNICAL CAPABILITIES
          </h2>
        </div>

        <div
          className="reveal reveal-delay-1 caps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            gap: "clamp(20px, 3vw, 40px)",
            alignItems: "start",
          }}
        >
          {/* Sidebar — category list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            {CAPABILITIES.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActive(cap.id)}
                style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "10px 14px",
                  background: active === cap.id ? "var(--accent-red-dim)" : "transparent",
                  border: `1px solid ${active === cap.id ? "var(--border-accent)" : "transparent"}`,
                  borderRadius: "6px",
                  cursor: "none",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  if (active !== cap.id)
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                }}
                onMouseLeave={(e) => {
                  if (active !== cap.id)
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    color: active === cap.id ? "var(--accent-red)" : "var(--text-muted)",
                    transition: "color 0.2s ease",
                    flexShrink: 0,
                  }}
                >
                  {cap.icon}
                </span>
                <span
                  style={{
                    fontFamily: "General Sans,sans-serif",
                    fontSize: "12px",
                    fontWeight: active === cap.id ? 700 : 400,
                    color: active === cap.id ? "var(--text-primary)" : "var(--text-secondary)",
                    letterSpacing: "0.02em",
                    transition: "color 0.2s ease",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {cap.label}
                </span>
              </button>
            ))}
          </div>

          {/* Active capability panel */}
          {activeCapability && (
            <div
              key={active}
              style={{
                padding: "clamp(20px, 3vw, 32px)",
                background: "var(--bg-primary)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "12px",
                animation: "fadeUp 0.3s ease",
                minWidth: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "18px" }}>
                <span
                  style={{
                    fontSize: "28px", color: "var(--accent-red)",
                    filter: "drop-shadow(0 0 8px var(--accent-red))",
                    flexShrink: 0,
                  }}
                >
                  {activeCapability.icon}
                </span>
                <div style={{ minWidth: 0 }}>
                  <h3
                    style={{
                      fontFamily: "Syne,sans-serif", fontWeight: 700,
                      fontSize: "clamp(15px, 1.5vw, 20px)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {activeCapability.label}
                  </h3>
                  <p style={{ fontFamily: "General Sans,sans-serif", fontSize: "12px", color: "var(--text-secondary)", marginTop: "2px" }}>
                    {activeCapability.description}
                  </p>
                </div>
              </div>

              {/* Tools grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
                  gap: "8px",
                }}
              >
                {activeCapability.tools.map((tool, i) => (
                  <div
                    key={tool}
                    style={{
                      padding: "9px 12px",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "6px",
                      display: "flex", alignItems: "center", gap: "7px",
                      animation: `fadeUp 0.3s ease ${i * 0.04}s both`,
                      transition: "border-color 0.2s ease, background 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
                      (e.currentTarget as HTMLElement).style.background = "var(--accent-red-dim)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                      (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                    }}
                  >
                    <span
                      style={{
                        width: "4px", height: "4px", borderRadius: "50%",
                        background: "var(--accent-red)", flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "JetBrains Mono,monospace", fontSize: "10px",
                        color: "var(--text-secondary)", letterSpacing: "0.03em",
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                      }}
                    >
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .caps-grid {
            grid-template-columns: 1fr !important;
          }
          .caps-grid > div:first-child {
            display: grid !important;
            grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
            gap: 6px !important;
          }
        }
        @media (max-width: 480px) {
          .caps-grid > div:first-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}