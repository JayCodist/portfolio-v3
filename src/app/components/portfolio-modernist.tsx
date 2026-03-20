import { useState, useEffect } from "react";
import type { ReactNode, CSSProperties } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Github, Linkedin, MapPin, ChevronRight } from "lucide-react";

const C = {
  bg: "#F7F6F2",
  bgDark: "#EDECEA",
  ink: "#0C0C0C",
  inkMid: "#444444",
  inkLight: "#888888",
  inkFaint: "#BBBBBB",
  green: "#0A6E4A",
  greenLight: "#E8F4EE",
  greenMid: "#14A066",
  border: "rgba(12,12,12,0.10)",
  borderDark: "rgba(12,12,12,0.20)",
};

const ease = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, style = {} }: { children: ReactNode; delay?: number; style?: CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease, delay }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

const WORK = [
  {
    num: "01", name: "FinFlow", sub: "Fintech Infrastructure",
    tags: ["Engineering Lead", "Team of 8", "2022–Present"],
    outcomes: "$5M+ processed daily · 200K active users · 65% faster API",
    stack: "React · Node.js · MongoDB · AWS · Kubernetes",
    img: "https://images.unsplash.com/photo-1702479744048-0351261e1ac1?w=800&q=80",
    color: C.green,
  },
  {
    num: "02", name: "MediTrack", sub: "Healthcare Mobile App",
    tags: ["Senior Engineer", "Team of 5", "2021"],
    outcomes: "50K downloads · 4.8 App Store rating · Zero critical bugs, 18 months",
    stack: "React Native · Express.js · PostgreSQL · AWS",
    img: "https://images.unsplash.com/photo-1586296221759-909c8bb73c5b?w=800&q=80",
    color: "#1A6FA8",
  },
  {
    num: "03", name: "ShopNow", sub: "E-commerce Platform",
    tags: ["Lead Engineer", "Team of 6", "2020"],
    outcomes: "+40% conversion · −70% load time · $2M+ annual revenue lift",
    stack: "Next.js · Node.js · Redis · Elasticsearch",
    img: "https://images.unsplash.com/photo-1705234384435-e06172b6d2f9?w=800&q=80",
    color: "#6A1AF0",
  },
  {
    num: "04", name: "DevPortal", sub: "Internal Developer Platform",
    tags: ["Architect", "Team of 3", "2020"],
    outcomes: "200+ dev hours saved/month · 5 teams enabled · 2 days → 2 hrs deployments",
    stack: "Golang · React · Docker · Kubernetes",
    img: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?w=800&q=80",
    color: "#C9400A",
  },
];

const EXP = [
  { year: "2022–Now", co: "TechVentures Africa", role: "Senior Engineer & Tech Lead", kpi: "Led 8 engineers · 200K users · $5M/day platform" },
  { year: "2020–2022", co: "Digital Product Studio", role: "Lead Fullstack Engineer", kpi: "12-person team · 15+ products · $4M+ revenue impact" },
  { year: "2018–2020", co: "CloudBase Systems", role: "Fullstack Developer", kpi: "65% performance boost · −35% infra cost · 4 mentees" },
  { year: "2016–2018", co: "Innova Technology", role: "Junior → Mid Developer", kpi: "Promoted in 8 months · 500+ internal users · 10K launch" },
];

export function PortfolioModernist() {
  const [activeWork, setActiveWork] = useState<number | null>(null);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 56px", height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(247,246,242,0.92)", backdropFilter: "blur(24px)",
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, background: C.ink, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>JU</span>
          </div>
          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: -0.3 }}>Johnson Ubaezuonu</span>
        </div>
        <div style={{ display: "flex", gap: 36, fontSize: 14, color: C.inkMid }}>
          {["Work", "About", "Experience", "Contact"].map(n => (
            <span key={n} style={{ cursor: "pointer", fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = C.green}
              onMouseLeave={e => e.currentTarget.style.color = C.inkMid}
            >{n}</span>
          ))}
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "10px 20px", background: C.ink,
          color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer",
          letterSpacing: 0.3, transition: "background 0.2s",
        }}
          onMouseEnter={e => e.currentTarget.style.background = C.green}
          onMouseLeave={e => e.currentTarget.style.background = C.ink}
        >
          Available for Work <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", marginLeft: 4 }} />
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ paddingTop: 72 }}>
        <div style={{ padding: "100px 56px 80px", borderBottom: `1px solid ${C.border}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 40 }}>
            <div style={{ flex: "0 0 auto" }}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.green }} />
                <span style={{ fontSize: 13, color: C.inkLight, letterSpacing: 0.5 }}>Senior Fullstack Engineer · Nigeria</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease }}
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "clamp(52px, 7vw, 96px)",
                  fontWeight: 400, lineHeight: 0.95,
                  letterSpacing: "-2px", margin: 0,
                  color: C.ink,
                }}
              >
                Johnson<br />
                <span style={{ color: C.green }}>Ubaezuonu</span>
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease }}
              style={{ maxWidth: 440, textAlign: "right" }}
            >
              <p style={{ fontSize: 18, color: C.inkMid, lineHeight: 1.65, marginBottom: 32 }}>
                I lead engineering teams to build<br /> software that scales, performs, and<br /> creates lasting business impact.
              </p>
              <a href="mailto:jaycodist@gmail.com" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 28px", background: C.green,
                color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none",
                transition: "background 0.2s ease",
              }}
                onMouseEnter={e => e.currentTarget.style.background = C.greenMid}
                onMouseLeave={e => e.currentTarget.style.background = C.green}
              >
                Let's Talk <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderBottom: `1px solid ${C.border}` }}>
          {[
            { n: "8+", l: "Years of Experience" },
            { n: "20+", l: "Products Shipped" },
            { n: "200K+", l: "Users Served" },
            { n: "$4M+", l: "Revenue Impact" },
          ].map(({ n, l }, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.08, ease }}
              style={{
                padding: "36px 40px",
                borderLeft: i === 0 ? "none" : `1px solid ${C.border}`,
              }}
            >
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 44, fontWeight: 400, color: C.ink,
                lineHeight: 1, marginBottom: 8,
              }}>{n}</div>
              <div style={{ fontSize: 13, color: C.inkLight, letterSpacing: 0.3 }}>{l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WORK ── */}
      <section style={{ padding: "100px 56px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 64, paddingBottom: 24, borderBottom: `2px solid ${C.ink}` }}>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(28px,3.5vw,44px)", margin: 0, letterSpacing: "-0.5px" }}>
                Selected Work
              </h2>
              <span style={{ fontSize: 13, color: C.inkLight }}>2016 – 2025</span>
            </div>
          </FadeUp>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {WORK.map((w, i) => (
              <FadeUp key={w.num} delay={i * 0.07}>
                <div
                  style={{
                    display: "grid", gridTemplateColumns: "80px 1fr auto",
                    alignItems: "center", gap: 32,
                    padding: "32px 0", borderBottom: `1px solid ${C.border}`,
                    cursor: "pointer", transition: "background 0.2s",
                    paddingLeft: activeWork === i ? 16 : 0,
                    background: activeWork === i ? C.bgDark : "transparent",
                    paddingRight: activeWork === i ? 16 : 0,
                  }}
                  onClick={() => setActiveWork(activeWork === i ? null : i)}
                >
                  <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: C.inkFaint }}>{w.num}</span>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
                      <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, margin: 0, letterSpacing: "-0.5px" }}>{w.name}</h3>
                      <span style={{ fontSize: 13, color: C.inkLight }}>{w.sub}</span>
                    </div>
                    {activeWork === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 24, marginTop: 20 }}>
                          <img src={w.img} alt={w.name} style={{ width: "100%", height: 160, objectFit: "cover", filter: "grayscale(20%)" }} />
                          <div>
                            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                              {w.tags.map(t => (
                                <span key={t} style={{ fontSize: 11, padding: "4px 10px", background: C.bgDark, border: `1px solid ${C.border}`, color: C.inkMid, letterSpacing: 0.3 }}>{t}</span>
                              ))}
                            </div>
                            <p style={{ fontSize: 14, color: C.green, fontWeight: 600, marginBottom: 10, lineHeight: 1.6 }}>
                              → {w.outcomes}
                            </p>
                            <p style={{ fontSize: 13, color: C.inkLight, margin: 0 }}>{w.stack}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, color: C.inkLight, fontSize: 13 }}>
                    <motion.div
                      animate={{ rotate: activeWork === i ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight size={18} />
                    </motion.div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: "100px 56px", background: C.ink, color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 100, alignItems: "center" }}>
          <FadeUp>
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?w=700&q=80"
                alt="Johnson working"
                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", filter: "grayscale(30%)" }}
              />
              <div style={{
                position: "absolute", bottom: -20, right: -20,
                padding: "24px 28px", background: C.green,
              }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: "#fff", lineHeight: 1 }}>8+</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", letterSpacing: 1, marginTop: 4 }}>YEARS</div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.green }} />
                <span style={{ fontSize: 12, letterSpacing: 2, color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>About</span>
              </div>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400,
                color: "#fff", letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 32,
              }}>
                Engineering excellence,<br />
                <span style={{ color: C.greenMid }}>delivered through people</span>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 20 }}>
                I'm a Senior Fullstack Engineer with a B.Eng. in Computer Engineering from the University of Benin, and 8+ years of experience shipping production software across fintech, healthcare, and e-commerce.
              </p>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 40 }}>
                What sets me apart isn't just technical depth — it's knowing when to go deep and when to delegate. I've led teams of 12, architected systems serving 200K+ users, and believe the most important engineering decisions are often people decisions.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["AWS Certified", "Lean Six Sigma", "Serverless", "Fullstack", "Team Lead"].map(tag => (
                  <span key={tag} style={{
                    fontSize: 12, padding: "8px 16px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.6)", letterSpacing: 0.3,
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section style={{ padding: "100px 56px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeUp>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              marginBottom: 64, paddingBottom: 24,
              borderBottom: `2px solid ${C.ink}`,
            }}>
              Experience
            </h2>
          </FadeUp>
          {EXP.map((e, i) => (
            <FadeUp key={e.year} delay={i * 0.08}>
              <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 40, paddingBottom: 48, borderBottom: `1px solid ${C.border}`, marginBottom: 48 }}>
                <div>
                  <div style={{ fontSize: 13, color: C.green, fontWeight: 600, marginBottom: 4 }}>{e.year}</div>
                  <div style={{ fontSize: 12, color: C.inkLight, letterSpacing: 0.3 }}>{e.co}</div>
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: C.ink, marginBottom: 10, letterSpacing: -0.3 }}>{e.role}</h3>
                  <p style={{ fontSize: 14, color: C.inkMid, lineHeight: 1.7, margin: 0 }}>{e.kpi}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ padding: "100px 56px", background: C.bgDark, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 700 }}>
          <FadeUp>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(36px, 5vw, 72px)",
              lineHeight: 1.05, letterSpacing: "-1.5px",
              marginBottom: 32, color: C.ink,
            }}>
              Have a challenge<br />worth solving?
            </h2>
            <p style={{ fontSize: 17, color: C.inkMid, lineHeight: 1.7, marginBottom: 48 }}>
              I'm selective about what I take on — I work best on hard problems that need both technical depth and strategic thinking. Let's see if we're a match.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="mailto:jaycodist@gmail.com" style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "18px 36px", background: C.ink,
                color: "#fff", fontSize: 15, fontWeight: 600, textDecoration: "none",
                transition: "background 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = C.green}
                onMouseLeave={e => e.currentTarget.style.background = C.ink}
              >
                <Mail size={16} /> jaycodist@gmail.com
              </a>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                {[<Linkedin key="li" size={20} />, <Github key="gh" size={20} />].map((icon, i) => (
                  <div key={i} style={{
                    width: 52, height: 52, border: `1px solid ${C.borderDark}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", color: C.inkMid, transition: "all 0.2s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.ink; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.inkMid; }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <footer style={{ padding: "24px 56px", borderTop: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: C.ink }}>Johnson Ubaezuonu</div>
        <div style={{ fontSize: 12, color: C.inkFaint, letterSpacing: 0.5 }}>© 2025 · Senior Fullstack Engineer</div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: C.inkLight }}>
          <MapPin size={12} /> Nigeria
        </div>
      </footer>
    </div>
  );
}
