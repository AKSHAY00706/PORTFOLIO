"use client";
import { useReveal } from "@/lib/useReveal";

const LINKS = [
  {label:"GitHub",value:"@AKSHAY00706",href:"https://github.com/AKSHAY00706",
   icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>},
  {label:"LinkedIn",value:"Akshay Obulapuram",href:"https://www.linkedin.com/in/akshay-obulapuram-85973a307/",
   icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>},
  {label:"Email",value:"alphaaakshay@gmail.com",href:"mailto:alphaaakshay@gmail.com",
   icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 8.5 5.5a2 2 0 002 0L21 7"/></svg>},
  {label:"Portfolio",value:"akshay00706.github.io",href:"https://akshay00706.github.io/",
   icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>},
];

export default function Contact() {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  return (
    <section ref={ref} id="contact" className="section-pad"
      style={{background:"var(--bg-1)",position:"relative",overflow:"hidden"}}>
      <div aria-hidden="true" style={{position:"absolute",top:"30%",left:"50%",transform:"translate(-50%,-50%)",
        width:"700px",height:"350px",
        background:"radial-gradient(ellipse at center,rgba(192,57,43,.07) 0%,transparent 70%)",
        pointerEvents:"none",zIndex:0}}/>

      <div className="wrap" style={{position:"relative",zIndex:1}}>
        <div className="rv" style={{textAlign:"center",marginBottom:"80px"}}>
          <p className="lbl" style={{justifyContent:"center"}}>— Let's Build Together</p>
          <h2 style={{fontFamily:"Monument Extended,Syne,sans-serif",fontWeight:800,
            fontSize:"clamp(32px,6vw,84px)",color:"var(--t1)",lineHeight:.95,marginBottom:"20px"}}>
            LET'S BUILD<br/>
            <span style={{color:"var(--red)"}}>SOMETHING.</span>
          </h2>
          <p style={{fontFamily:"General Sans,Outfit,sans-serif",fontSize:"16px",
            color:"var(--t2)",maxWidth:"440px",margin:"0 auto",lineHeight:1.75}}>
            Open to full-time roles, freelance projects, and collaborations in AI, cybersecurity, and immersive tech.
          </p>
        </div>

        <div className="rv d1" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",
          gap:"14px",maxWidth:"920px",margin:"0 auto 60px"}}>
          {LINKS.map(l=>(
            <a key={l.label} href={l.href}
              target={l.href.startsWith("mailto")?"_self":"_blank"}
              rel="noopener noreferrer"
              style={{display:"flex",alignItems:"center",gap:"14px",padding:"20px 22px",
                background:"var(--bg-card)",border:"1px solid var(--b1)",borderRadius:"8px",
                textDecoration:"none",transition:"border-color .3s,background .3s,transform .25s"}}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="var(--ba)";el.style.background="var(--red-d)";el.style.transform="translateY(-3px)";}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="var(--b1)";el.style.background="var(--bg-card)";el.style.transform="translateY(0)";}}>
              <span style={{color:"var(--red)",flexShrink:0}}>{l.icon}</span>
              <div style={{flex:1,minWidth:0}}>
                <p style={{fontFamily:"JetBrains Mono,monospace",fontSize:"9px",letterSpacing:".13em",
                  textTransform:"uppercase",color:"var(--t3)",marginBottom:"3px"}}>{l.label}</p>
                <p style={{fontFamily:"General Sans,Outfit,sans-serif",fontSize:"12px",color:"var(--t1)",
                  whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{l.value}</p>
              </div>
              <span style={{color:"var(--t3)",fontSize:"11px",flexShrink:0}}>↗</span>
            </a>
          ))}
        </div>

        <div className="rv d2" style={{textAlign:"center",marginBottom:"80px"}}>
          <a href="/resume.pdf"
download="Akshay_Obulapuram_Resume.pdf" className="btn btn-r" style={{fontSize:"12px",padding:"14px 36px"}}>
            Download Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 15V3M6 9l6 6 6-6"/><path d="M3 20h18"/>
            </svg>
          </a>
        </div>

        <div className="rv d3" style={{borderTop:"1px solid var(--b1)",paddingTop:"32px",
          display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"}}>
          <p style={{fontFamily:"JetBrains Mono,monospace",fontSize:"10px",color:"var(--t3)",letterSpacing:".09em"}}>
            © 2025 AKSHAY OBULAPURAM
          </p>
          <p style={{fontFamily:"JetBrains Mono,monospace",fontSize:"10px",color:"var(--t3)",letterSpacing:".07em"}}>
            AI SYSTEMS · CYBERSECURITY · COMPUTER VISION
          </p>
        </div>
      </div>
    </section>
  );
}
