"use client";
import { useReveal } from "@/lib/useReveal";

export default function ExperimentalProjects() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef}
      id="experimental"
      className="section-padding"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container-wide">
        <div className="reveal" style={{ marginBottom: "clamp(32px,4vw,60px)" }}>
          <p className="section-label">— Section 04</p>
          <h2
            style={{
              fontFamily: "Monument Extended,sans-serif", fontWeight: 800,
              fontSize: "clamp(24px, 4vw, 52px)", color: "var(--text-primary)",
            }}
          >
            EXPERIMENTAL SYSTEMS
          </h2>
        </div>

        {/* Main experimental card */}
        <div
          className="reveal reveal-delay-1"
          style={{
            position: "relative",
            border: "1px solid var(--border-subtle)",
            borderRadius: "12px",
            overflow: "hidden",
            background: "var(--bg-secondary)",
          }}
        >
          {/* Background visual */}
          <div
            style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(192,57,43,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute", inset: 0,
              backgroundImage: "linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              opacity: 0.5, pointerEvents: "none",
            }}
          />

          <div
            className="experimental-grid"
            style={{
              position: "relative", zIndex: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(28px, 4vw, 60px)",
              padding: "clamp(28px, 4vw, 60px)",
              alignItems: "center",
            }}
          >
            {/* Left: Content */}
            <div>
              <span className="tag" style={{ marginBottom: "16px", display: "inline-block" }}>
                Experimental
              </span>
              <h3
                style={{
                  fontFamily: "Monument Extended,sans-serif", fontWeight: 800,
                  fontSize: "clamp(22px, 3vw, 42px)",
                  color: "var(--text-primary)", lineHeight: 1.1,
                  marginTop: "16px", marginBottom: "8px",
                }}
              >
                ANIMEJUTSU
                <br />
                <span style={{ color: "var(--accent-red)" }}>VISION</span>
              </h3>
              <p
                style={{
                  fontFamily: "JetBrains Mono,sans-serif", fontSize: "11px",
                  color: "var(--accent-red)", letterSpacing: "0.06em",
                  textTransform: "uppercase", marginBottom: "16px",
                }}
              >
                Cinematic Anime Interaction Engine
              </p>
              <p
                style={{
                  fontFamily: "General Sans,sans-serif",
                  fontSize: "clamp(12px, 1.2vw, 15px)",
                  color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "22px",
                }}
              >
                Real-time gesture-controlled anime powers engine using computer vision, particles,
                cinematic overlays, and audio systems. Tracks hands via webcam and transforms
                gestures into spectacular anime-style visual effects.
              </p>

              <ul
                style={{
                  listStyle: "none", display: "flex",
                  flexDirection: "column", gap: "7px", marginBottom: "24px",
                }}
              >
                {[
                  "Real-time hand tracking via OpenCV",
                  "Gesture-to-FX mapping engine",
                  "Cinematic particle systems",
                  "Audio-reactive overlays",
                  "Anime-style visual effects",
                  "Webcam-based interaction",
                ].map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      fontFamily: "General Sans,sans-serif", fontSize: "12px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--accent-red)", flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "24px" }}>
                {["Python", "OpenCV", "MediaPipe", "Pygame", "NumPy", "Computer Vision"].map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "JetBrains Mono,monospace", fontSize: "9px",
                      color: "var(--text-muted)", padding: "3px 8px",
                      border: "1px solid var(--border-subtle)", borderRadius: "3px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <a
                  href="https://github.com/AKSHAY00706"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ fontSize: "11px", padding: "10px 20px" }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Right: Visual showcase */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { label: "RASENGAN", color: "#3498db", icon: "◎" },
                { label: "CHIDORI",  color: "#f1c40f", icon: "⚡" },
                { label: "SUSANOO",  color: "#9b59b6", icon: "◈" },
              ].map((effect) => (
                <div
                  key={effect.label}
                  style={{
                    padding: "18px 22px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "8px",
                    display: "flex", alignItems: "center", gap: "14px",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = effect.color)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)")}
                >
                  <span style={{ fontSize: "22px", color: effect.color, filter: `drop-shadow(0 0 8px ${effect.color})`, flexShrink: 0 }}>
                    {effect.icon}
                  </span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "12px", color: "var(--text-primary)", letterSpacing: "0.08em" }}>
                      {effect.label}
                    </p>
                    <p style={{ fontFamily: "General Sans,sans-serif", fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>
                      Gesture-triggered FX
                    </p>
                  </div>
                  <div style={{ width: "36px", height: "4px", background: "var(--border-subtle)", borderRadius: "2px", overflow: "hidden", flexShrink: 0 }}>
                    <div style={{ height: "100%", background: effect.color, width: "70%", animation: "pulse 2s ease-in-out infinite" }} />
                  </div>
                </div>
              ))}

              <div
                style={{
                  padding: "14px 18px",
                  background: "var(--accent-red-dim)",
                  border: "1px solid var(--border-accent)",
                  borderRadius: "8px",
                }}
              >
                <p style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "9px", color: "var(--accent-red)", letterSpacing: "0.1em", marginBottom: "4px" }}>
                  LOCAL PROJECT
                </p>
                <p style={{ fontFamily: "General Sans,sans-serif", fontSize: "12px", color: "var(--text-secondary)" }}>
                  Runs locally with webcam input. Architecture available on GitHub.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Also live */}
        <div className="reveal reveal-delay-2" style={{ marginTop: "36px" }}>
          <p
            style={{
              fontFamily: "JetBrains Mono,monospace", fontSize: "10px",
              color: "var(--text-muted)", letterSpacing: "0.12em",
              textTransform: "uppercase", marginBottom: "16px",
            }}
          >
            Also Live
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              { name: "PANICPLAN", url: "https://panicplan.vercel.app/", desc: "Emergency planning AI" },
              { name: "NULLTRACE", url: "https://nulltrace-uorw.onrender.com/", desc: "Anonymized trace tool" },
            ].map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank" rel="noopener noreferrer"
                className="card-glass"
                style={{ display: "block", padding: "20px 24px", textDecoration: "none" }}
              >
                <p style={{ fontFamily: "Monument Extended,sans-serif", fontWeight: 800, fontSize: "13px", color: "var(--text-primary)", marginBottom: "5px", letterSpacing: "0.05em" }}>
                  {project.name}
                </p>
                <p style={{ fontFamily: "General Sans,sans-serif", fontSize: "12px", color: "var(--text-secondary)", marginBottom: "12px" }}>
                  {project.desc}
                </p>
                <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "10px", color: "var(--accent-red)", letterSpacing: "0.08em" }}>
                  LIVE ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .experimental-grid {
            grid-template-columns: 1fr !important;
            padding: 28px !important;
            gap: 28px !important;
          }
        }
        @media (max-width: 480px) {
          .experimental-grid {
            padding: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}