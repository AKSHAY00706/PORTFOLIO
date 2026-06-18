"use client";
import { useRef, useState, Suspense, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, Torus, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useReveal } from "@/lib/useReveal";

const CAPS = [
  { id:"ai",       label:"AI Systems",      desc:"LLM pipelines · RAG · Memory · Orchestration", angle:0 },
  { id:"cyber",    label:"Cybersecurity",   desc:"Threat Intel · IOC · Phishing · SOC Tooling",  angle:60 },
  { id:"vision",   label:"Computer Vision", desc:"OpenCV · Gesture · Tracking · Inference",       angle:120 },
  { id:"stack",    label:"Full Stack",      desc:"Next.js · FastAPI · TypeScript · Tailwind",     angle:180 },
  { id:"realtime", label:"Real-Time",       desc:"WebSockets · Live Streams · Sub-100ms",         angle:240 },
  { id:"ux",       label:"Interactive XP",  desc:"3D · Shaders · Particles · Cinematic UX",       angle:300 },
];

function Particles({ hovered }: { hovered: string | null }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const data = useMemo(() =>
    Array.from({ length: 120 }, () => {
      const th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1), r = 2.8 + Math.random() * 2.8;
      return { x: r * Math.sin(ph) * Math.cos(th), y: r * Math.sin(ph) * Math.sin(th), z: r * Math.cos(ph), s: Math.random() * 0.5 + 0.2, o: Math.random() * Math.PI * 2 };
    }), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime(), sp = hovered ? 1.8 : 1;
    data.forEach((p, i) => {
      dummy.position.set(p.x, p.y + Math.sin(t * p.s * sp + p.o) * 0.2, p.z);
      dummy.updateMatrix();
      ref.current?.setMatrixAt(i, dummy.matrix);
    });
    if (ref.current) ref.current.instanceMatrix.needsUpdate = true;
  });

  const col = hovered === "ai" ? "#64c8dc" : hovered === "cyber" ? "#e74c3c" : "#c0392b";
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, 120]}>
      <sphereGeometry args={[0.022, 6, 6]} />
      <meshStandardMaterial color={col} emissive={col} emissiveIntensity={hovered ? 1.2 : 0.7} transparent opacity={0.65} />
    </instancedMesh>
  );
}

function InnerLattice({ hovered }: { hovered: string | null }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime() * 0.15;
    ref.current.rotation.z = clock.getElapsedTime() * 0.08;
  });
  return (
    <Sphere ref={ref} args={[0.85, 12, 12]}>
      <meshStandardMaterial color="#1a1a22" wireframe emissive={hovered ? "#c0392b" : "#3a1a1a"} emissiveIntensity={hovered ? 0.5 : 0.15} transparent opacity={0.4} />
    </Sphere>
  );
}

function CoreArtifact({ hovered }: { hovered: string | null }) {
  const grp = useRef<THREE.Group>(null), core = useRef<THREE.Mesh>(null);
  const r1 = useRef<THREE.Mesh>(null), r2 = useRef<THREE.Mesh>(null), r3 = useRef<THREE.Mesh>(null), r4 = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();
  const hm = hovered ? 2.0 : 1.0;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (grp.current) { grp.current.rotation.y += 0.003 * hm; grp.current.rotation.x += (mouse.y * 0.12 - grp.current.rotation.x) * 0.04; }
    if (r1.current) { r1.current.rotation.x += 0.007 * hm; r1.current.rotation.y += 0.004 * hm; }
    if (r2.current) { r2.current.rotation.y += 0.005 * hm; r2.current.rotation.z -= 0.006 * hm; }
    if (r3.current) { r3.current.rotation.x -= 0.009 * hm; r3.current.rotation.z += 0.003 * hm; }
    if (r4.current) { r4.current.rotation.y += 0.011 * hm; r4.current.rotation.x += 0.007 * hm; }
    if (core.current) { const sc = 1 + Math.sin(t * (hovered ? 3 : 1.5)) * 0.04 * (hovered ? 1.3 : 1); core.current.scale.setScalar(sc); }
  });

  const gc = hovered === "cyber" ? "#e74c3c" : hovered === "ai" ? "#64c8dc" : "#c0392b";
  return (
    <group ref={grp}>
      <Particles hovered={hovered} />
      <InnerLattice hovered={hovered} />
      <Sphere ref={core} args={[0.52, 64, 64]}>
        <MeshDistortMaterial color={gc} emissive={gc} emissiveIntensity={hovered ? 1.5 : 0.7} distort={hovered ? 0.55 : 0.28} speed={hovered ? 4 : 2} roughness={0.05} metalness={0.95} transparent opacity={0.97} />
      </Sphere>
      <Sphere args={[0.72, 32, 32]}>
        <meshStandardMaterial color="#111" emissive={gc} emissiveIntensity={0.04} transparent opacity={0.12} roughness={0.02} metalness={1} wireframe />
      </Sphere>
      <Torus ref={r1} args={[1.15, 0.022, 10, 120]}>
        <meshStandardMaterial color={gc} emissive={gc} emissiveIntensity={hovered ? 2 : 1} metalness={1} roughness={0} />
      </Torus>
      <Torus ref={r2} args={[1.50, 0.015, 8, 100]} rotation={[1, 0, 0]}>
        <meshStandardMaterial color="#aaa" emissive="#666" emissiveIntensity={0.25} metalness={1} roughness={0} />
      </Torus>
      <Torus ref={r3} args={[1.82, 0.010, 8, 100]} rotation={[0, 1, 0.6]}>
        <meshStandardMaterial color={gc} emissive={gc} emissiveIntensity={hovered ? 1 : 0.35} metalness={1} roughness={0.1} transparent opacity={0.55} />
      </Torus>
      <Torus ref={r4} args={[2.10, 0.007, 6, 80]} rotation={[0.5, 0, 1.2]}>
        <meshStandardMaterial color="#777" emissive="#444" emissiveIntensity={0.15} metalness={1} roughness={0} transparent opacity={0.35} />
      </Torus>
      <ambientLight intensity={0.15} />
      <pointLight position={[4, 4, 4]} color={gc} intensity={hovered ? 5 : 2.5} />
      <pointLight position={[-4, -4, -4]} color="#223" intensity={0.8} />
      <pointLight position={[0, 4, -4]} color="#c0392b" intensity={hovered ? 1.5 : 0.5} />
    </group>
  );
}

function Node({ cap, hovered, onHover, isMobile }: { cap: typeof CAPS[0]; hovered: string | null; onHover: (id: string | null) => void; isMobile: boolean }) {
  const R = isMobile ? 110 : 190, rad = (cap.angle * Math.PI) / 180;
  const x = Math.cos(rad) * R, y = Math.sin(rad) * R, active = hovered === cap.id;
  return (
    <div
      style={{
        position: "absolute",
        left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`,
        transform: "translate(-50%,-50%)",
        textAlign: "center", cursor: "none", zIndex: 10,
      }}
      onMouseEnter={() => onHover(cap.id)}
      onMouseLeave={() => onHover(null)}
      onTouchStart={() => onHover(cap.id)}
      onTouchEnd={() => onHover(null)}
      data-cursor-hover
    >
      <div
        style={{
          width: active ? "10px" : "6px", height: active ? "10px" : "6px",
          borderRadius: "50%",
          background: active ? "var(--accent-red-bright)" : "var(--accent-red)",
          margin: "0 auto 6px",
          boxShadow: active ? "var(--glow-red-sm)" : "none",
          transition: "all 0.3s",
        }}
      />
      {active && (
        <div
          style={{
            position: "absolute", top: "50%", left: "50%",
            width: "26px", height: "26px", borderRadius: "50%",
            border: "1px solid var(--accent-red)",
            transform: "translate(-50%,-50%)",
            animation: "pulse-ring 1.2s ease-out infinite",
            pointerEvents: "none",
          }}
        />
      )}
      <p
        style={{
          fontFamily: "JetBrains Mono,monospace",
          fontSize: isMobile ? "7px" : "9px",
          letterSpacing: "0.09em", textTransform: "uppercase", whiteSpace: "nowrap",
          color: active ? "var(--text-primary)" : "var(--text-secondary)",
          transition: "color 0.3s",
        }}
      >
        {cap.label}
      </p>
    </div>
  );
}

export default function AICore3D() {
  const [hovered, setHovered] = useState<string | null>(null);
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const active = CAPS.find((c) => c.id === hovered);

  return (
    <section
      ref={sectionRef}
      id="ai-core"
      className="section-padding"
      style={{ position: "relative", background: "var(--bg-secondary)", overflow: "hidden" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "600px", height: "600px",
          background: "radial-gradient(ellipse at center, rgba(192,57,43,0.06) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 0,
        }}
      />
      <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{ marginBottom: "clamp(32px,4vw,56px)" }}>
          <p className="section-label">— Section 02 / Intelligence Core</p>
          <h2
            style={{
              fontFamily: "Monument Extended,sans-serif", fontWeight: 800,
              fontSize: "clamp(24px,4vw,50px)", color: "var(--text-primary)", marginBottom: "12px",
            }}
          >
            AI CORE SYSTEMS
          </h2>
          <p style={{ fontFamily: "General Sans,sans-serif", fontSize: "14px", color: "var(--text-secondary)", maxWidth: "420px", lineHeight: 1.7 }}>
            Hover a node to activate the subsystem. Each domain powers a different intelligence layer.
          </p>
        </div>

        <div className="reveal reveal-delay-1" style={{ position: "relative", height: isMobile ? "420px" : "520px" }}>
          <Canvas
            camera={{ position: [0, 0, 5.8], fov: 44 }}
            style={{ position: "absolute", inset: 0, background: "transparent" }}
            dpr={[1, isMobile ? 1.5 : 2]}
          >
            <Suspense fallback={null}>
              <Float speed={1.4} rotationIntensity={0.08} floatIntensity={0.28}>
                <CoreArtifact hovered={hovered} />
              </Float>
            </Suspense>
          </Canvas>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            {CAPS.map((cap) => (
              <div key={cap.id} style={{ position: "absolute", inset: 0, pointerEvents: "all" }}>
                <Node cap={cap} hovered={hovered} onHover={setHovered} isMobile={isMobile} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "28px", minHeight: "50px" }}>
          {active && (
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: "12px",
                padding: "10px 22px",
                background: "var(--bg-card)", border: "1px solid var(--border-accent)",
                borderRadius: "5px", backdropFilter: "blur(12px)",
                animation: "fadeUp 0.3s ease",
              }}
            >
              <span
                style={{
                  width: "5px", height: "5px", borderRadius: "50%",
                  background: "var(--accent-red)", boxShadow: "var(--glow-red-sm)",
                  flexShrink: 0, animation: "energyPulse 1.5s ease infinite",
                }}
              />
              <p style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "11px", color: "var(--text-primary)", letterSpacing: "0.04em" }}>
                {active.desc}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}