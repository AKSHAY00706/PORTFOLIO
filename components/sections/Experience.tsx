"use client";
import { useReveal } from "@/lib/useReveal";

const INTERNSHIPS = [
  {
    role:"Data Analytics Intern",company:"ExcelR",period:"2024",
    desc:"Built data analysis pipelines, statistical models, and visualization dashboards for business intelligence.",
    tags:["Python","Pandas","Matplotlib","SQL","Statistical Modeling"],color:"#e74c3c",
  },
  {
    role:"Full Stack Java Intern",company:"Skill Dezire",period:"2023",
    desc:"Developed full-stack web applications using Java Spring Boot and React, focusing on scalable backend architecture.",
    tags:["Java","Spring Boot","React","REST APIs","MySQL"],color:"#c0392b",
  },
  {
    role:"Python Full Stack Intern",company:"ScholarLogic",period:"2023",
    desc:"Built Python-based backend systems and dynamic frontend interfaces for educational technology platforms.",
    tags:["Python","Django","JavaScript","HTML/CSS","EdTech"],color:"#95a5a6",
  },
];

const CERTS = [
  {name:"AI & Prompt Engineering",icon:"⬡",color:"#3498db"},
  {name:"Cybersecurity Fundamentals",icon:"⬢",color:"#e74c3c"},
  {name:"Python & APIs",icon:"◈",color:"#2ecc71"},
  {name:"OpenCV / Computer Vision",icon:"◉",color:"#f39c12"},
];

export default function Experience() {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  return (
    <section ref={ref} id="experience" className="section-pad" style={{background:"var(--bg-0)"}}>
      <div className="wrap">
        <div className="rv" style={{marginBottom:"56px"}}>
          <p className="lbl">— Section 06 / Field Record</p>
          <h2 style={{fontFamily:"Monument Extended,Syne,sans-serif",fontWeight:800,
            fontSize:"clamp(26px,4vw,50px)",color:"var(--t1)"}}>EXPERIENCE</h2>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(32px,5vw,70px)",alignItems:"start"}} className="exp-grid">
          {/* Internships timeline */}
          <div>
            <p className="rv lbl" style={{marginBottom:"24px"}}>Internships</p>
            <div style={{display:"flex",flexDirection:"column"}}>
              {INTERNSHIPS.map((e,i) => (
                <div key={e.company} className="rv" style={{position:"relative",paddingLeft:"28px",
                  paddingBottom:i<INTERNSHIPS.length-1?"40px":"0"}}>
                  {i<INTERNSHIPS.length-1 && <div style={{position:"absolute",left:"8px",top:"18px",bottom:0,width:"1px",
                    background:"linear-gradient(to bottom,"+e.color+",transparent)"}}/>}
                  <div style={{position:"absolute",left:"2px",top:"8px",width:"14px",height:"14px",
                    borderRadius:"50%",border:"1px solid "+e.color,background:e.color+"22",
                    display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"5px",height:"5px",borderRadius:"50%",background:e.color}}/>
                  </div>
                  <div style={{padding:"18px 20px",background:"var(--bg-card)",border:"1px solid var(--b1)",
                    borderRadius:"8px",transition:"border-color .3s,background .3s"}}
                    onMouseEnter={el=>{(el.currentTarget as HTMLElement).style.borderColor=e.color+"55";(el.currentTarget as HTMLElement).style.background="var(--bg-card-h)";}}
                    onMouseLeave={el=>{(el.currentTarget as HTMLElement).style.borderColor="var(--b1)";(el.currentTarget as HTMLElement).style.background="var(--bg-card)";}}>
                    <h3 style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"14px",color:"var(--t1)",marginBottom:"3px"}}>{e.role}</h3>
                    <p style={{fontFamily:"JetBrains Mono,monospace",fontSize:"10px",color:e.color,letterSpacing:".08em",marginBottom:"8px"}}>{e.company} · {e.period}</p>
                    <p style={{fontFamily:"General Sans,Outfit,sans-serif",fontSize:"12px",color:"var(--t2)",lineHeight:1.62,marginBottom:"10px"}}>{e.desc}</p>
                    <div style={{display:"flex",gap:"5px",flexWrap:"wrap"}}>
                      {e.tags.map(t=><span key={t} style={{fontFamily:"JetBrains Mono,monospace",fontSize:"9px",color:"var(--t3)",padding:"2px 6px",border:"1px solid var(--b1)",borderRadius:"2px"}}>{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="rv lbl" style={{marginBottom:"24px"}}>Certifications</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginBottom:"36px"}}>
              {CERTS.map((c,i) => (
                <div key={c.name} className={"rv d"+(i+1)}
                  style={{padding:"18px",background:"var(--bg-card)",border:"1px solid var(--b1)",
                    borderRadius:"8px",position:"relative",overflow:"hidden",transition:"border-color .3s"}}
                  onMouseEnter={e=>(e.currentTarget as HTMLElement).style.borderColor=c.color+"55"}
                  onMouseLeave={e=>(e.currentTarget as HTMLElement).style.borderColor="var(--b1)"}>
                  <div style={{position:"absolute",top:0,right:0,width:"60px",height:"60px",
                    background:"radial-gradient(ellipse at top right,"+c.color+"20,transparent 70%)",borderRadius:"0 8px 0 0"}}/>
                  <span style={{fontSize:"18px",color:c.color,display:"block",marginBottom:"10px"}}>{c.icon}</span>
                  <p style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"12px",color:"var(--t1)",lineHeight:1.3,marginBottom:"4px"}}>{c.name}</p>
                  <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
                    <span style={{width:"5px",height:"5px",borderRadius:"50%",background:c.color,boxShadow:"0 0 6px "+c.color}}/>
                    <p style={{fontFamily:"JetBrains Mono,monospace",fontSize:"9px",color:"var(--t3)",letterSpacing:".08em"}}>VERIFIED</p>
                  </div>
                  <div style={{position:"absolute",top:"10px",right:"10px",width:"16px",height:"16px",
                    borderRadius:"50%",background:c.color+"20",border:"1px solid "+c.color+"50",
                    display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",color:c.color}}>✓</div>
                </div>
              ))}
            </div>

            {/* Live projects quick links */}
            <p className="rv lbl" style={{marginBottom:"14px"}}>Live Deployments</p>
            <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
              {[
                {name:"CRISPCV",url:"https://crispcv.vercel.app/",desc:"AI Resume Analyzer"},
                {name:"PANICPLAN",url:"https://panicplan.vercel.app/",desc:"Emergency Planning AI"},
                {name:"NULLTRACE",url:"https://nulltrace-uorw.onrender.com/",desc:"Anonymization Tool"},
              ].map(p=>(
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{display:"flex",alignItems:"center",gap:"14px",padding:"12px 16px",
                    background:"var(--bg-card)",border:"1px solid var(--b1)",borderRadius:"6px",
                    textDecoration:"none",transition:"border-color .3s,background .3s"}}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--ba)";(e.currentTarget as HTMLElement).style.background="var(--red-d)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--b1)";(e.currentTarget as HTMLElement).style.background="var(--bg-card)";}}>
                  <span style={{width:"5px",height:"5px",borderRadius:"50%",background:"#2ecc71",boxShadow:"0 0 6px #2ecc71",flexShrink:0}}/>
                  <div style={{flex:1}}>
                    <span style={{fontFamily:"Monument Extended,Syne,sans-serif",fontWeight:800,fontSize:"11px",color:"var(--t1)",letterSpacing:".04em"}}>{p.name}</span>
                    <span style={{fontFamily:"General Sans,Outfit,sans-serif",fontSize:"11px",color:"var(--t2)",marginLeft:"10px"}}>{p.desc}</span>
                  </div>
                  <span style={{fontFamily:"JetBrains Mono,monospace",fontSize:"10px",color:"var(--red)"}}>LIVE ↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{"@media(max-width:768px){.exp-grid{grid-template-columns:1fr!important;}}"}</style>
    </section>
  );
}
