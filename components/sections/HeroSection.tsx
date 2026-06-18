"use client";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/lib/useReveal";

function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d")!;
    let W = c.width = window.innerWidth, H = c.height = window.innerHeight;
    let mx = W * 0.75, my = H * 0.5;
    const N = W < 768 ? 55 : 120;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22,
      r: Math.random() * 1.4 + .3,
      op: Math.random() * .38 + .06,
      depth: Math.random(),
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const g = ctx.createRadialGradient(mx, my, 0, mx, my, Math.max(W, H) * .65);
      g.addColorStop(0, "rgba(192,57,43,.07)");
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      pts.forEach(p => {
        const par = 1 + p.depth * .45;
        p.x += p.vx * par; p.y += p.vy * par;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(192,57,43," + (p.op * (.55 + p.depth * .45)) + ")";
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const mfn = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const rfn = () => { W = c.width = innerWidth; H = c.height = innerHeight; };
    window.addEventListener("mousemove", mfn, { passive: true });
    window.addEventListener("resize", rfn);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", mfn); window.removeEventListener("resize", rfn); };
  }, []);
  return <canvas ref={ref} aria-hidden="true" style={{ position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1 }} />;
}

const WORDS = ["BUILDING", "INTELLIGENT", "SYSTEMS"];

export default function HeroSection() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;
  const [loaded, setLoaded] = useState(false);
  const [word, setWord]   = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    const iv = setInterval(() => setWord(w => (w + 1) % WORDS.length), 2800);
    return () => clearInterval(iv);
  }, []);

  return (
    <section ref={sectionRef} id="hero" style={{
      position:"relative", minHeight:"100svh",
      display:"flex", alignItems:"center", overflow:"hidden",
      background:"var(--bg-0)",
    }}>
      {/* Ambient bg layers */}
      <div aria-hidden="true" style={{ position:"absolute",inset:0,zIndex:0,
        background:"radial-gradient(ellipse 75% 65% at 78% 48%, rgba(192,57,43,.10) 0%, transparent 65%), radial-gradient(ellipse 85% 45% at 50% 105%, rgba(192,57,43,.05) 0%, transparent 60%)" }} />

      {/* Perspective grid */}
      <div aria-hidden="true" style={{ position:"absolute",inset:0,zIndex:1,
        backgroundImage:"linear-gradient(var(--b1) 1px,transparent 1px),linear-gradient(90deg,var(--b1) 1px,transparent 1px)",
        backgroundSize:"68px 68px",
        maskImage:"radial-gradient(ellipse 95% 95% at 50% 50%,black 25%,transparent 100%)",
        WebkitMaskImage:"radial-gradient(ellipse 95% 95% at 50% 50%,black 25%,transparent 100%)",
        opacity:.32,transform:"perspective(700px) rotateX(5deg)",transformOrigin:"bottom" }} />

      <ParticleField />

      {/* Scan line */}
      <div aria-hidden="true" style={{ position:"absolute",inset:0,overflow:"hidden",zIndex:2,pointerEvents:"none" }}>
        <div style={{ position:"absolute",left:0,right:0,height:"1px",
          background:"linear-gradient(90deg,transparent,rgba(192,57,43,.32),transparent)",
          animation:"scan 9s linear infinite",animationDelay:"2.5s" }} />
      </div>

      {/* Ghost bg text */}
      <div aria-hidden="true" style={{ position:"absolute",top:"-40px",left:"-10px",
        fontFamily:"Monument Extended,Syne,sans-serif",fontWeight:800,
        fontSize:"clamp(80px,13vw,170px)",color:"var(--t1)",
        opacity:.016,letterSpacing:"-.02em",lineHeight:.82,
        userSelect:"none",whiteSpace:"nowrap",pointerEvents:"none",zIndex:0 }}>
        INTELLIGENCE
      </div>

      {/* Main content */}
      <div className="wrap" style={{ position:"relative",zIndex:3,
        display:"grid",gridTemplateColumns:"1fr 1fr",
        gap:"clamp(28px,5vw,80px)",alignItems:"center",
        paddingTop:"80px",paddingBottom:"40px" }}>

        {/* LEFT */}
        <div>
          {/* Status badge */}
          <div className="rv" style={{ display:"inline-flex",alignItems:"center",gap:"9px",
            padding:"5px 13px",background:"var(--red-d)",border:"1px solid var(--ba)",
            borderRadius:"2px",marginBottom:"28px" }}>
            <span style={{ width:"5px",height:"5px",borderRadius:"50%",background:"#2ecc71",
              boxShadow:"0 0 8px #2ecc71",animation:"pulse 2s ease infinite" }} />
            <span style={{ fontFamily:"JetBrains Mono,monospace",fontSize:"9.5px",
              letterSpacing:".15em",color:"var(--red)",textTransform:"uppercase" }}>
              Available for work
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily:"Monument Extended,Syne,sans-serif",fontWeight:800,
            fontSize:"clamp(38px,5.2vw,82px)",lineHeight:.93,letterSpacing:"-.02em",
            color:"var(--t1)",marginBottom:"8px",
            opacity:loaded?1:0,transform:loaded?"translateY(0)":"translateY(22px)",
            transition:"opacity .95s cubic-bezier(.16,1,.3,1),transform .95s cubic-bezier(.16,1,.3,1)",
            transitionDelay:".2s",
          }}>
            AKSHAY<br />
            <span style={{ color:"var(--red)" }}>OBULAPURAM</span>
          </h1>

          {/* Animated word cycle */}
          <div className="rv d1" style={{ height:"32px",overflow:"hidden",marginBottom:"20px" }}>
            <p key={word} style={{
              fontFamily:"JetBrains Mono,monospace",fontSize:"clamp(11px,1.1vw,13px)",
              letterSpacing:".18em",color:"var(--t2)",textTransform:"uppercase",
              animation:"fadeUp .4s ease both",
            }}>
              {WORDS[word]} · AI Systems Engineer
            </p>
          </div>

          <p className="rv d2" style={{ fontFamily:"General Sans,Outfit,sans-serif",
            fontSize:"clamp(14px,1.4vw,17px)",color:"var(--t2)",
            maxWidth:"460px",lineHeight:1.78,marginBottom:"40px" }}>
            Building intelligent systems that interpret complexity in real time —
            cybersecurity platforms, adaptive AI architectures, and cinematic digital experiences.
          </p>

          <div className="rv d3" style={{ display:"flex",gap:"13px",flexWrap:"wrap",marginBottom:"52px" }}>
            <a href="#projects" className="btn btn-r"
              onClick={e => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({behavior:"smooth"}); }}>
              Explore Systems
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </a>
            <a href="https://github.com/AKSHAY00706" target="_blank" rel="noopener noreferrer" className="btn btn-o">
              GitHub ↗
            </a>
          </div>

          {/* Tags */}
          <div className="rv d4" style={{ display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"28px" }}>
            {["AI Systems","Cybersecurity","Computer Vision","Full Stack","Real-Time"].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {/* Telemetry stats */}
          <div className="rv d5" style={{ display:"flex",gap:"28px",flexWrap:"wrap",
            borderTop:"1px solid var(--b1)",paddingTop:"22px" }}>
            {[["04","Active Projects"],["03","Internships"],["08","Skill Domains"],["73%","B.Tech GPA"]].map(([v,l]) => (
              <div key={l}>
                <p style={{ fontFamily:"Monument Extended,Syne,sans-serif",fontWeight:800,
                  fontSize:"clamp(18px,2vw,24px)",color:"var(--red)" }}>{v}</p>
                <p style={{ fontFamily:"JetBrains Mono,monospace",fontSize:"9px",
                  color:"var(--t3)",letterSpacing:".12em",textTransform:"uppercase",marginTop:"2px" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — portrait */}
        <div className="hidden md:flex" style={{ justifyContent:"center",alignItems:"center",position:"relative" }}>
          <div style={{ position:"relative",width:"420px",maxWidth:"100%" }}>
            {/* glow behind portrait */}
            <div aria-hidden="true" style={{ position:"absolute",top:"5%",left:"5%",right:"5%",bottom:"5%",
              background:"radial-gradient(ellipse at center,rgba(192,57,43,.24) 0%,transparent 68%)",
              filter:"blur(55px)",borderRadius:"50%",zIndex:0,animation:"float 6s ease-in-out infinite" }} />

            <img src="/portrait.jpg" alt="Akshay Obulapuram"
              style={{ position:"relative",zIndex:1,width:"100%",height:"auto",
                objectFit:"cover",borderRadius:"4px",
                maskImage:"radial-gradient(ellipse 82% 93% at 50% 50%,black 48%,transparent 100%)",
                WebkitMaskImage:"radial-gradient(ellipse 82% 93% at 50% 50%,black 48%,transparent 100%)",
                filter:"contrast(1.07) brightness(0.92) saturate(.94)" }}
              onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />

            {/* HUD overlay */}
            <div style={{ position:"absolute",bottom:"16%",right:"-28px",zIndex:2,
              background:"rgba(4,4,6,.84)",border:"1px solid var(--b2)",
              borderRadius:"6px",padding:"10px 16px",backdropFilter:"blur(16px)" }}>
              <p style={{ fontFamily:"JetBrains Mono,monospace",fontSize:"8.5px",
                color:"var(--red)",letterSpacing:".13em",marginBottom:"5px",textTransform:"uppercase" }}>
                SYS STATUS
              </p>
              <div style={{ display:"flex",alignItems:"center",gap:"7px" }}>
                <span style={{ width:"5px",height:"5px",borderRadius:"50%",
                  background:"#2ecc71",boxShadow:"0 0 7px #2ecc71",
                  animation:"pulse 2.2s ease infinite" }} />
                <span style={{ fontFamily:"JetBrains Mono,monospace",fontSize:"11px",color:"var(--t1)" }}>
                  Online · Available
                </span>
              </div>
            </div>

            {/* Corner brackets */}
            <div style={{ position:"absolute",top:"-10px",left:"-10px",width:"22px",height:"22px",
              borderTop:"1px solid var(--red)",borderLeft:"1px solid var(--red)",zIndex:2 }} />
            <div style={{ position:"absolute",bottom:"-10px",right:"-10px",width:"22px",height:"22px",
              borderBottom:"1px solid var(--red)",borderRight:"1px solid var(--red)",zIndex:2 }} />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position:"absolute",bottom:"28px",left:"50%",transform:"translateX(-50%)",
        zIndex:3,display:"flex",flexDirection:"column",alignItems:"center",gap:"8px" }}>
        <p style={{ fontFamily:"JetBrains Mono,monospace",fontSize:"9px",
          letterSpacing:".18em",color:"var(--t3)",textTransform:"uppercase" }}>SCROLL</p>
        <div style={{ width:"1px",height:"42px",
          background:"linear-gradient(to bottom,var(--red),transparent)",
          animation:"scrollbar 2.2s ease-in-out infinite",transformOrigin:"top" }} />
      </div>

      <style>{"@media(max-width:768px){#hero .wrap{grid-template-columns:1fr!important;}}"}</style>
    </section>
  );
}
