import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Akshay Obulapuram",
  description: "AI Systems Engineer & Full Stack Developer",
};

export default function ResumePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-0)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        padding: "40px 20px",
      }}
    >
      <p
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "10px",
          letterSpacing: "0.18em",
          color: "var(--red)",
          textTransform: "uppercase",
        }}
      >
        — Akshay Obulapuram / Resume
      </p>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "9px",
            padding: "13px 27px",
            background: "var(--red)", color: "#fff",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px", letterSpacing: "0.10em",
            textTransform: "uppercase", textDecoration: "none",
            borderRadius: "3px",
          }}
        >
          View Resume ↗
        </a>
        <a
          href="/resume.pdf"
          download="Akshay_Obulapuram_Resume.pdf"
          style={{
            display: "inline-flex", alignItems: "center", gap: "9px",
            padding: "13px 27px",
            background: "transparent", color: "var(--t1)",
            border: "1px solid var(--b2)",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px", letterSpacing: "0.10em",
            textTransform: "uppercase", textDecoration: "none",
            borderRadius: "3px",
          }}
        >
          Download PDF ↓
        </a>
      </div>

      <p
        style={{
          fontFamily: "General Sans, Outfit, sans-serif",
          fontSize: "12px",
          color: "var(--t3)",
          textAlign: "center",
        }}
      >
        Place your resume PDF at <code style={{ color: "var(--red)" }}>public/resume.pdf</code>
      </p>
    </main>
  );
}
