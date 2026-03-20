import { useState, useEffect, useRef } from "react";
import type { ReactNode, CSSProperties } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Github, Linkedin, Zap, Users, Code, Globe } from "lucide-react";

const B = {
  bg: "#050913",
  surface: "#0D1526",
  card: "#101A2E",
  cyan: "#00D4FF",
  coral: "#FF5252",
  purple: "#A855F7",
  green: "#22D67A",
  text: "#F0F4FF",
  textSec: "#8899BB",
  textMuted: "#445577",
  border: "rgba(255,255,255,0.06)",
  cyanBorder: "rgba(0,212,255,0.18)",
};

const ease = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, style = {} }: { children: ReactNode; delay?: number; style?: CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease, delay }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

const EXPERTISE = [
  {
    icon: <Code size={28} />, color: B.cyan, bg: "rgba(0,212,255,0.06)",
    title: "Full-Stack Architecture", sub: "End-to-End Systems",
    desc: "From database schema to pixel-perfect UI — I design and build systems that scale from 100 to 200K users without breaking a sweat.",
    tags: ["React", "Node.js", "MongoDB", "Golang", "AWS"],
  },
  {
    icon: <Users size={28} />, color: B.coral, bg: "rgba(255,82,82,0.06)",
    title: "Engineering Leadership", sub: "Teams That Ship",
    desc: "I don't just manage people — I build cultures. 8+ years of growing junior devs into leads, removing blockers, and holding the technical vision.",
    tags: ["Team Building", "Mentorship", "CI/CD", "Agile"],
  },
  {
    icon: <Globe size={28} />, color: B.purple, bg: "rgba(168,85,247,0.06)",
    title: "Cloud & DevOps", sub: "Reliability at Scale",
    desc: "AWS-certified and Lean Six Sigma trained. I've cut deployment cycles by 80%, reduced infra costs by 35%, and built zero-downtime systems.",
    tags: ["AWS", "Kubernetes", "Docker", "Serverless"],
  },
  {
    icon: <Zap size={28} />, color: B.green, bg: "rgba(34,214,122,0.06)",
    title: "Product Delivery", sub: "Shipped, Not Just Built",
    desc: "20+ products shipped across fintech, healthcare, and e-commerce. I think in outcomes, not outputs — and I deliver on both.",
    tags: ["Product Strategy", "Agile", "Quality", "Impact"],
  },
];

const PROJECTS = [
  {
    name: "FinFlow", cat: "FINTECH · ENGINEERING LEAD",
    headline: "Payment infrastructure that processes $5M daily, serving 200,000 active users.",
    metrics: [{ v: "$5M+", l: "Daily Volume" }, { v: "200K+", l: "Active Users" }, { v: "65%", l: "Faster API" }],
    img: "https://images.unsplash.com/photo-1702479744048-0351261e1ac1?w=1000&q=80",
    accent: B.cyan, team: "Team of 8",
  },
  {
    name: "MediTrack", cat: "HEALTHCARE · MOBILE",
    headline: "A healthcare app with 50K downloads, 4.8-star rating, and 18 months bug-free.",
    metrics: [{ v: "50K+", l: "Downloads" }, { v: "4.8★", l: "App Store" }, { v: "18mo", l: "Bug-Free" }],
    img: "https://images.unsplash.com/photo-1586296221759-909c8bb73c5b?w=1000&q=80",
    accent: B.purple, team: "Team of 5",
  },
  {
    name: "ShopNow", cat: "E-COMMERCE · PLATFORM REBUILD",
    headline: "Rebuilt an e-commerce platform, driving 40% more conversions and $2M/yr revenue lift.",
    metrics: [{ v: "+40%", l: "Conversion" }, { v: "-70%", l: "Load Time" }, { v: "$2M+", l: "Revenue/yr" }],
    img: "https://images.unsplash.com/photo-1705234384435-e06172b6d2f9?w=1000&q=80",
    accent: B.coral, team: "Team of 6",
  },
];

const TICKS = [
  "8+ Years Engineering", "20+ Products Shipped", "200K+ Users Served",
  "$4M+ Value Delivered", "Tech Lead · Team of 12", "AWS Certified",
  "Lean Six Sigma", "Full-Stack · Cloud · Mobile",
];

function TickerBand() {
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", borderTop: `1px solid ${B.border}`, borderBottom: `1px solid ${B.border}`, padding: "16px 0", background: "rgba(0,212,255,0.03)" }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        style={{ display: "inline-flex", gap: 48 }}
      >
        {[...TICKS, ...TICKS].map((t, i) => (
          <span key={i} style={{ fontSize: 13, color: B.textSec, letterSpacing: 2, textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 20 }}>
            {t} <span style={{ color: B.cyan, fontSize: 16 }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function PortfolioBold() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div style={{ background: B.bg, color: B.text, fontFamily: "'Space Grotesk', sans-serif", overflowX: "hidden" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "20px 56px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(5,9,19,0.85)", backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${B.border}`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, background: `linear-gradient(135deg, ${B.cyan}, ${B.purple})`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>JU</span>
          </div>
          <span style={{ fontSize: 15, fontWeight: 600 }}>Johnson Ubaezuonu</span>
        </div>
        <div style={{ display: "flex", gap: 32, fontSize: 14, color: B.textSec }}>
          {["Expertise", "Work", "Story", "Contact"].map(n => (
            <span key={n} style={{ cursor: "pointer", fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = B.cyan}
              onMouseLeave={e => e.currentTarget.style.color = B.textSec}
            >{n}</span>
          ))}
        </div>
        <div style={{
          padding: "10px 24px",
          background: "transparent",
          border: `1px solid ${B.cyanBorder}`,
          color: B.cyan, fontSize: 13, fontWeight: 600,
          cursor: "pointer", letterSpacing: 0.5,
          transition: "all 0.2s",
          borderRadius: 4,
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,212,255,0.1)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
        >
          Open to Work
        </div>
      </nav>

      {/* ── HERO ── */}
      <section ref={heroRef} style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "120px 56px 60px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: mousePos.x * 0.03 - 100,
          top: mousePos.y * 0.03 - 100,
          width: 600, height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 60%)`,
          pointerEvents: "none",
          transition: "left 0.8s ease, top 0.8s ease",
        }} />
        <div style={{
          position: "absolute", right: "8%", bottom: "20%",
          width: 400, height: 400, borderRadius: "50%",
          background: `radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 60%)`,
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", maxWidth: 1100 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              {[B.cyan, B.coral, B.purple].map(c => (
                <motion.div
                  key={c}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: c === B.cyan ? 0 : c === B.coral ? 0.4 : 0.8 }}
                  style={{ width: 8, height: 8, borderRadius: "50%", background: c }}
                />
              ))}
            </div>
            <span style={{ fontSize: 13, color: B.textSec, letterSpacing: 1.5, textTransform: "uppercase" }}>Available · Senior Fullstack Engineer · Nigeria</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease }}
          >
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(60px, 10vw, 140px)",
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "-4px",
              marginBottom: 8,
            }}>
              <span style={{ color: B.text }}>JOHNSON</span>
            </div>
            <div style={{
              fontSize: "clamp(60px, 10vw, 140px)",
              fontWeight: 700, lineHeight: 0.9,
              letterSpacing: "-4px", marginBottom: 48,
              background: `linear-gradient(90deg, ${B.cyan}, ${B.purple})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              UBAEZUONU
            </div>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "flex-end" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease }}
            >
              <p style={{ fontSize: 20, color: B.textSec, lineHeight: 1.6, marginBottom: 40 }}>
                Senior Engineer. Engineering Lead.<br />
                <span style={{ color: B.text }}>I build the systems. I build the teams.</span><br />
                Both at scale.
              </p>
              <div style={{ display: "flex", gap: 16 }}>
                <motion.a
                  href="mailto:jaycodist@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "16px 32px",
                    background: `linear-gradient(135deg, ${B.cyan}, ${B.purple})`,
                    color: "#fff", fontSize: 14, fontWeight: 700,
                    textDecoration: "none", letterSpacing: 0.3, borderRadius: 4,
                  }}
                >
                  <Mail size={16} /> Let's Work Together
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "16px 28px", background: "transparent",
                    border: `1px solid ${B.border}`, color: B.textSec,
                    fontSize: 14, fontWeight: 500, cursor: "pointer",
                    transition: "all 0.2s", borderRadius: 4,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = B.cyanBorder; e.currentTarget.style.color = B.cyan; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = B.border; e.currentTarget.style.color = B.textSec; }}
                >
                  See My Work <ArrowUpRight size={16} />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
            >
              {[
                { v: "8+", l: "Years", c: B.cyan },
                { v: "20+", l: "Products", c: B.purple },
                { v: "200K+", l: "Users", c: B.coral },
                { v: "$4M+", l: "Impact", c: B.green },
              ].map(({ v, l, c }) => (
                <div key={l} style={{
                  padding: "24px", background: B.surface,
                  border: `1px solid ${B.border}`,
                  borderTop: `3px solid ${c}`,
                  borderRadius: 8,
                }}>
                  <div style={{ fontSize: 32, fontWeight: 700, color: c, lineHeight: 1, marginBottom: 6 }}>{v}</div>
                  <div style={{ fontSize: 13, color: B.textSec }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <TickerBand />

      {/* ── EXPERTISE ── */}
      <section style={{ padding: "100px 56px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 3, height: 24, background: B.cyan }} />
              <span style={{ fontSize: 12, letterSpacing: 3, color: B.cyan, textTransform: "uppercase" }}>What I Do</span>
            </div>
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 700,
              letterSpacing: "-1.5px", marginBottom: 64, lineHeight: 1.1,
            }}>
              Four disciplines.<br />
              <span style={{ color: B.textSec }}>One engineer.</span>
            </h2>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {EXPERTISE.map((ex, i) => (
              <FadeUp key={ex.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, borderColor: ex.color + "55" }}
                  transition={{ duration: 0.25 }}
                  style={{
                    padding: "40px", background: B.card,
                    border: `1px solid ${B.border}`, borderRadius: 12,
                    cursor: "default",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
                    <div style={{ color: ex.color, padding: 12, background: ex.bg, borderRadius: 10 }}>{ex.icon}</div>
                    <span style={{ fontSize: 11, color: ex.color, letterSpacing: 1.5, textTransform: "uppercase", padding: "4px 12px", border: `1px solid ${ex.color}33`, borderRadius: 20 }}>{ex.sub}</span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: B.text, marginBottom: 14, letterSpacing: -0.5 }}>{ex.title}</h3>
                  <p style={{ fontSize: 14, color: B.textSec, lineHeight: 1.7, marginBottom: 24 }}>{ex.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {ex.tags.map(t => (
                      <span key={t} style={{ fontSize: 11, padding: "4px 10px", background: "rgba(255,255,255,0.04)", border: `1px solid ${B.border}`, color: B.textMuted, borderRadius: 4 }}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section style={{ padding: "100px 56px", background: B.surface, borderTop: `1px solid ${B.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 3, height: 24, background: B.coral }} />
              <span style={{ fontSize: 12, letterSpacing: 3, color: B.coral, textTransform: "uppercase" }}>Selected Projects</span>
            </div>
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 700,
              letterSpacing: "-1.5px", marginBottom: 64, lineHeight: 1.1,
            }}>
              Shipped. Scaled. Celebrated.
            </h2>
          </FadeUp>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {PROJECTS.map((proj, i) => (
              <FadeUp key={proj.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ borderColor: proj.accent + "44" }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: "grid", gridTemplateColumns: "1fr 1.4fr",
                    gap: 0, background: B.card, border: `1px solid ${B.border}`,
                    borderRadius: 12, overflow: "hidden",
                  }}
                >
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <img src={proj.img} alt={proj.name} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 240, filter: "brightness(0.55) saturate(0.7)", transition: "transform 0.5s ease" }}
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    />
                    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${proj.accent}22, transparent)` }} />
                    <div style={{ position: "absolute", top: 20, left: 20 }}>
                      <div style={{ fontSize: 32, fontWeight: 700, color: "#fff", opacity: 0.2, letterSpacing: -1 }}>0{i + 1}</div>
                    </div>
                  </div>
                  <div style={{ padding: "40px 48px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                      <span style={{ fontSize: 11, letterSpacing: 2, color: proj.accent, textTransform: "uppercase" }}>{proj.cat}</span>
                      <span style={{ fontSize: 11, color: B.textMuted }}>· {proj.team}</span>
                    </div>
                    <h3 style={{ fontSize: 32, fontWeight: 700, color: B.text, marginBottom: 16, letterSpacing: -1 }}>{proj.name}</h3>
                    <p style={{ fontSize: 15, color: B.textSec, lineHeight: 1.7, marginBottom: 32 }}>{proj.headline}</p>
                    <div style={{ display: "flex", gap: 24 }}>
                      {proj.metrics.map(m => (
                        <div key={m.l}>
                          <div style={{ fontSize: 26, fontWeight: 700, color: proj.accent, marginBottom: 4 }}>{m.v}</div>
                          <div style={{ fontSize: 12, color: B.textMuted, letterSpacing: 0.5 }}>{m.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section style={{ padding: "100px 56px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
              <div style={{ width: 3, height: 24, background: B.purple }} />
              <span style={{ fontSize: 12, letterSpacing: 3, color: B.purple, textTransform: "uppercase" }}>My Story</span>
            </div>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-1.5px", marginBottom: 48, lineHeight: 1.1, color: B.text }}>
              From <span style={{ color: B.cyan }}>first commit</span> to<br />
              <span style={{ color: B.coral }}>engineering lead</span> — in 8 years.
            </h2>
            <div style={{ fontSize: 17, color: B.textSec, lineHeight: 1.85 }}>
              <p>
                I started coding out of curiosity — a B.Eng. student at the University of Benin who wanted to understand how the internet worked. Eight years later, I've shipped 20+ products, led teams of 12, and built software serving hundreds of thousands of users daily.
              </p>
              <p style={{ marginTop: 24 }}>
                I'm <strong style={{ color: B.text }}>AWS-certified</strong>, <strong style={{ color: B.text }}>Lean Six Sigma certified</strong>, and trained in serverless architecture. But my real edge isn't certifications — it's the combination of deep technical skills and the ability to build teams that execute.
              </p>
              <p style={{ marginTop: 24 }}>
                I believe the best engineers are force multipliers. That's what I aim to be everywhere I work.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ padding: "100px 56px", background: B.surface, borderTop: `1px solid ${B.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <FadeUp>
            <h2 style={{
              fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 700,
              letterSpacing: "-2px", lineHeight: 1.0, marginBottom: 32,
            }}>
              Ready to ship<br />
              <span style={{ background: `linear-gradient(90deg, ${B.cyan}, ${B.purple})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                something great?
              </span>
            </h2>
            <p style={{ fontSize: 16, color: B.textSec, lineHeight: 1.7, marginBottom: 48 }}>
              I'm open to senior engineering and leadership roles where there's a hard problem to solve and a team to build it with.
            </p>
            <a href="mailto:jaycodist@gmail.com" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "18px 40px",
              background: `linear-gradient(135deg, ${B.cyan}, ${B.purple})`,
              color: "#fff", fontSize: 15, fontWeight: 700,
              textDecoration: "none", borderRadius: 4,
              letterSpacing: 0.3,
            }}>
              <Mail size={16} /> Send a Message
            </a>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: <Mail size={18} />, label: "Email", val: "jaycodist@gmail.com", color: B.cyan },
                { icon: <Linkedin size={18} />, label: "LinkedIn", val: "Johnson Ubaezuonu", color: B.purple },
                { icon: <Github size={18} />, label: "GitHub", val: "@johnsonubaezuonu", color: B.coral },
              ].map(({ icon, label, val, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 8, borderColor: color + "44" }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 20,
                    padding: "20px 24px", background: B.card,
                    border: `1px solid ${B.border}`, borderRadius: 8, cursor: "pointer",
                  }}
                >
                  <div style={{ color, padding: 10, background: `${color}15`, borderRadius: 8 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 12, color: B.textMuted, letterSpacing: 0.5, marginBottom: 2 }}>{label}</div>
                    <div style={{ fontSize: 15, color: B.text, fontWeight: 600 }}>{val}</div>
                  </div>
                  <ArrowUpRight size={16} color={B.textMuted} style={{ marginLeft: "auto" }} />
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <footer style={{ padding: "24px 56px", borderTop: `1px solid ${B.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, background: `linear-gradient(135deg, ${B.cyan}, ${B.purple})`, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 11, fontWeight: 700 }}>JU</span>
          </div>
          <span style={{ fontSize: 13, color: B.textSec }}>Johnson Ubaezuonu</span>
        </div>
        <div style={{ fontSize: 12, color: B.textMuted }}>© 2025 · All rights reserved</div>
        <div style={{ fontSize: 12, color: B.textMuted }}>Built with precision.</div>
      </footer>
    </div>
  );
}
