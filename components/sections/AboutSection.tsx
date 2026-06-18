"use client";
import { useReveal } from "@/lib/useReveal";

const EDUCATION = [
  {
    degree: "Bachelor of Technology — Computer Science & Engineering",
    school: "RSR Engineering College, Kadanuthala",
    period: "2021 – 2025",
    grade: "73%",
    icon: "◈",
  },
  {
    degree: "Intermediate (MPC)",
    school: "Narayana Junior College",
    period: "2019 – 2021",
    grade: "92%",
    icon: "◇",
  },
  {
    degree: "SSC — Secondary School Certificate",
    school: "Jaya Usha E.M High School",
    period: "2018 – 2019",
    grade: "9.2 CGPA",
    icon: "○",
  },
];

const TRAITS = [
  {
    label: "Systems Thinker",
    desc: "I design at the architecture level before writing a single line of code.",
  },
  {
    label: "Anti-Generic",
    desc: "Every interface I build feels engineered, not templated.",
  },
  {
    label: "Depth-First",
    desc: "I go all the way down the rabbit hole — that is how real systems get built.",
  },
  {
    label: "Cinematic Eye",
    desc: "I believe software should feel as premium as the problem it solves.",
  },
];

export default function AboutSection() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-pad"
      style={{
        background: "var(--bg-1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "40%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(192,57,43,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="rv" style={{ marginBottom: "70px" }}>
          <p className="lbl">— Who I Am</p>
          <h2
            style={{
              fontFamily: "Monument Extended, Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(26px, 4vw, 52px)",
              color: "var(--t1)",
              lineHeight: 1,
            }}
          >
            ABOUT ME
          </h2>
        </div>

        {/* Main split */}
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 6vw, 90px)",
            alignItems: "start",
            marginBottom: "90px",
          }}
        >
          {/* Left — narrative */}
          <div>
            <div className="rv">
              <div
                style={{
                  width: "36px",
                  height: "2px",
                  background: "var(--red)",
                  marginBottom: "28px",
                  boxShadow: "0 0 10px var(--red)",
                }}
              />

              <p
                style={{
                  fontFamily: "General Sans, Outfit, sans-serif",
                  fontSize: "clamp(16px, 1.6vw, 20px)",
                  fontWeight: 500,
                  color: "var(--t1)",
                  lineHeight: 1.65,
                  marginBottom: "24px",
                }}
              >
                I do not just write code.{" "}
                <span style={{ color: "var(--red)" }}>
                  I architect intelligence.
                </span>
              </p>

              <p
                style={{
                  fontFamily: "General Sans, Outfit, sans-serif",
                  fontSize: "clamp(14px, 1.3vw, 16px)",
                  color: "var(--t2)",
                  lineHeight: 1.82,
                  marginBottom: "20px",
                }}
              >
                I am a Computer Science graduate with an obsession for building
                systems that sit at the intersection of AI, cybersecurity, and
                human experience. My work is not about adding AI as a feature
                — it is about making intelligence the foundation everything else
                runs on.
              </p>

              <p
                style={{
                  fontFamily: "General Sans, Outfit, sans-serif",
                  fontSize: "clamp(14px, 1.3vw, 16px)",
                  color: "var(--t2)",
                  lineHeight: 1.82,
                  marginBottom: "20px",
                }}
              >
                I have built phishing intelligence platforms that detect novel
                attack vectors in milliseconds. I have trained computer vision
                systems that translate hand gestures into cinematic anime
                effects in real time. I have designed AI operating environments
                that remember, adapt, and evolve.
              </p>

              <p
                style={{
                  fontFamily: "General Sans, Outfit, sans-serif",
                  fontSize: "clamp(14px, 1.3vw, 16px)",
                  color: "var(--t2)",
                  lineHeight: 1.82,
                }}
              >
                The common thread? Every system I build is engineered to feel{" "}
                <span style={{ color: "var(--t1)", fontStyle: "italic" }}>
                  alive
                </span>
                . Not functional —{" "}
                <span style={{ color: "var(--t1)", fontStyle: "italic" }}>
                  alive
                </span>
                .
              </p>
            </div>

            {/* Trait cards */}
            <div
              className="rv d2"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginTop: "40px",
              }}
            >
              {TRAITS.map((t) => (
                <div
                  key={t.label}
                  style={{
                    padding: "16px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--b1)",
                    borderRadius: "8px",
                    transition: "border-color 0.3s, background 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--ba)";
                    el.style.background = "var(--red-d)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--b1)";
                    el.style.background = "var(--bg-card)";
                  }}
                >
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "10px",
                      color: "var(--red)",
                      letterSpacing: "0.08em",
                      marginBottom: "6px",
                    }}
                  >
                    {t.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "General Sans, Outfit, sans-serif",
                      fontSize: "12px",
                      color: "var(--t2)",
                      lineHeight: 1.55,
                    }}
                  >
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — education */}
          <div className="rv d1">
            <p className="lbl" style={{ marginBottom: "24px" }}>
              Academic Record
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {EDUCATION.map((ed, i) => (
                <div
                  key={ed.school}
                  style={{
                    position: "relative",
                    paddingLeft: "30px",
                    paddingBottom: i < EDUCATION.length - 1 ? "36px" : "0",
                  }}
                >
                  {i < EDUCATION.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        left: "9px",
                        top: "18px",
                        bottom: 0,
                        width: "1px",
                        background:
                          "linear-gradient(to bottom, var(--red), transparent)",
                      }}
                    />
                  )}

                  <div
                    style={{
                      position: "absolute",
                      left: "3px",
                      top: "8px",
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      border: "1px solid var(--red)",
                      background: "var(--red-d)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontSize: "7px", color: "var(--red)" }}>
                      {ed.icon}
                    </span>
                  </div>

                  <div
                    style={{
                      padding: "18px 20px",
                      background: "var(--bg-card)",
                      border: "1px solid var(--b1)",
                      borderRadius: "8px",
                      transition: "border-color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "var(--ba)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "var(--b1)")
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "6px",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Syne, sans-serif",
                          fontWeight: 700,
                          fontSize: "13px",
                          color: "var(--t1)",
                          lineHeight: 1.3,
                          flex: 1,
                          marginRight: "12px",
                        }}
                      >
                        {ed.degree}
                      </p>
                      <span
                        style={{
                          fontFamily:
                            "Monument Extended, Syne, sans-serif",
                          fontWeight: 800,
                          fontSize: "14px",
                          color: "var(--red)",
                          whiteSpace: "nowrap",
                          textShadow: "0 0 12px var(--red)",
                        }}
                      >
                        {ed.grade}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "General Sans, Outfit, sans-serif",
                        fontSize: "12px",
                        color: "var(--t2)",
                        marginBottom: "4px",
                      }}
                    >
                      {ed.school}
                    </p>
                    <p
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "9.5px",
                        color: "var(--t3)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {ed.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "28px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://github.com/AKSHAY00706"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-o"
                style={{ fontSize: "10px", padding: "9px 18px" }}
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/akshay-obulapuram-85973a307/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-o"
                style={{ fontSize: "10px", padding: "9px 18px" }}
              >
                LinkedIn ↗
              </a>
              <a
                href="#"
                className="btn btn-r"
                style={{ fontSize: "10px", padding: "9px 18px" }}
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Philosophy bar */}
        <div
          className="rv d3"
          style={{
            padding: "28px 36px",
            background: "var(--bg-card)",
            border: "1px solid var(--b1)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--red)",
              boxShadow: "0 0 10px var(--red)",
              animation: "pulse 2s ease infinite",
              flexShrink: 0,
            }}
          />
          <p
            style={{
              fontFamily: "General Sans, Outfit, sans-serif",
              fontSize: "clamp(14px, 1.3vw, 16px)",
              color: "var(--t2)",
              lineHeight: 1.6,
              flex: 1,
            }}
          >
            <span style={{ color: "var(--t1)", fontWeight: 500 }}>
              Philosophy:{" "}
            </span>
            If it does not feel impossible to build, it is not ambitious
            enough. I chase the intersection where engineering rigor meets
            cinematic vision.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}