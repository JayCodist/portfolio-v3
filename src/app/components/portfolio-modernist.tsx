import { useState, useEffect } from "react";
import type { ReactNode, CSSProperties } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Mail, Github, Linkedin, MapPin, ChevronRight, Menu, X } from "lucide-react";

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

function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

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
    tags: ["Engineering Lead", "Team of 8", "2022\u2013Present"],
    outcomes: "$5M+ processed daily \u00b7 200K active users \u00b7 65% faster API",
    stack: "React \u00b7 Node.js \u00b7 MongoDB \u00b7 AWS \u00b7 Kubernetes",
    img: "https://images.unsplash.com/photo-1702479744048-0351261e1ac1?w=800&q=80",
    color: C.green,
  },
  {
    num: "02", name: "MediTrack", sub: "Healthcare Mobile App",
    tags: ["Senior Engineer", "Team of 5", "2021"],
    outcomes: "50K downloads \u00b7 4.8 App Store rating \u00b7 Zero critical bugs, 18 months",
    stack: "React Native \u00b7 Express.js \u00b7 PostgreSQL \u00b7 AWS",
    img: "https://images.unsplash.com/photo-1586296221759-909c8bb73c5b?w=800&q=80",
    color: "#1A6FA8",
  },
  {
    num: "03", name: "ShopNow", sub: "E-commerce Platform",
    tags: ["Lead Engineer", "Team of 6", "2020"],
    outcomes: "+40% conversion \u00b7 \u221270% load time \u00b7 $2M+ annual revenue lift",
    stack: "Next.js \u00b7 Node.js \u00b7 Redis \u00b7 Elasticsearch",
    img: "https://images.unsplash.com/photo-1705234384435-e06172b6d2f9?w=800&q=80",
    color: "#6A1AF0",
  },
  {
    num: "04", name: "DevPortal", sub: "Internal Developer Platform",
    tags: ["Architect", "Team of 3", "2020"],
    outcomes: "200+ dev hours saved/month \u00b7 5 teams enabled \u00b7 2 days \u2192 2 hrs deployments",
    stack: "Golang \u00b7 React \u00b7 Docker \u00b7 Kubernetes",
    img: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?w=800&q=80",
    color: "#C9400A",
  },
];

const EXP = [
  { year: "2022\u2013Now", co: "TechVentures Africa", role: "Senior Engineer & Tech Lead", kpi: "Led 8 engineers \u00b7 200K users \u00b7 $5M/day platform" },
  { year: "2020\u20132022", co: "Digital Product Studio", role: "Lead Fullstack Engineer", kpi: "12-person team \u00b7 15+ products \u00b7 $4M+ revenue impact" },
  { year: "2018\u20132020", co: "CloudBase Systems", role: "Fullstack Developer", kpi: "65% performance boost \u00b7 \u221235% infra cost \u00b7 4 mentees" },
  { year: "2016\u20132018", co: "Innova Technology", role: "Junior \u2192 Mid Developer", kpi: "Promoted in 8 months \u00b7 500+ internal users \u00b7 10K launch" },
];

export function PortfolioModernist() {
  const [activeWork, setActiveWork] = useState<number | null>(null);
  const [navOpen, setNavOpen] = useState(false);
  const isMobile = useMobile();

  const sp = isMobile ? "60px 20px" : "100px 56px";
  const navPx = isMobile ? "0 20px" : "0 56px";

  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>

      {/* \u2500\u2500 NAV \u2500\u2500 */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: navPx, height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(247,246,242,0.95)", backdropFilter: "blur(24px)",
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, background: C.ink, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>JU</span>
          </div>
          <span style={{ fontSize: isMobile ? 13 : 14, fontWeight: 600, letterSpacing: -0.3 }}>Johnson Ubaezuonu</span>
        </div>

        {isMobile ? (
          <button
            onClick={() => setNavOpen(!navOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: C.ink, padding: 6, display: "flex", alignItems: "center" }}
            aria-label="Toggle menu"
          >
            {navOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        ) : (
          <>
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
          </>
        )}
      </nav>

      {/* \u2500\u2500 MOBILE DROPDOWN \u2500\u2500 */}
      <AnimatePresence>
        {isMobile && navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed", top: 68, left: 0, right: 0, zIndex: 99,
              background: "rgba(247,246,242,0.98)", backdropFilter: "blur(24px)",
              borderBottom: `1px solid ${C.border}`,
              padding: "8px 20px 24px",
            }}
          >
            {["Work", "About", "Experience", "Contact"].map(n => (
              <div key={n}
                style={{ padding: "15px 0", fontSize: 16, fontWeight: 500, color: C.inkMid, borderBottom: `1px solid ${C.border}`, cursor: "pointer" }}
                onClick={() => setNavOpen(false)}
              >{n}</div>
            ))}
            <div style={{
              marginTop: 20, display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 20px", background: C.ink,
              color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer",
            }}>
              Available for Work <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", marginLeft: 4 }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* \u2500\u2500 HERO \u2500\u2500 */}
      <section style={{ paddingTop: 68 }}>
        <div style={{ padding: isMobile ? "56px 20px 44px" : "100px 56px 80px", borderBottom: `1px solid ${C.border}` }}>
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-end",
            gap: isMobile ? 28 : 40,
          }}>
            <div style={{ flex: "0 0 auto" }}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: isMobile ? 20 : 32 }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.green, flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: C.inkLight, letterSpacing: 0.5 }}>Senior Fullstack Engineer \u00b7 Nigeria</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease }}
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "clamp(46px, 10vw, 96px)",
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
              initial={{ opacity: 0, x: isMobile ? 0 : 30, y: isMobile ? 10 : 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease }}
              style={{ maxWidth: isMobile ? "100%" : 440, textAlign: isMobile ? "left" : "right" }}
            >
              <p style={{ fontSize: isMobile ? 15 : 18, color: C.inkMid, lineHeight: 1.65, marginBottom: 24 }}>
                I lead engineering teams to build software that scales, performs, and creates lasting business impact.
              </p>
              <a href="mailto:jaycodist@gmail.com" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 24px", background: C.green,
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
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
          borderBottom: `1px solid ${C.border}`,
        }}>
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
                padding: isMobile ? "24px 20px" : "36px 40px",
                borderLeft: (isMobile ? i % 2 === 0 : i === 0) ? "none" : `1px solid ${C.border}`,
                borderTop: isMobile && i >= 2 ? `1px solid ${C.border}` : "none",
              }}
            >
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: isMobile ? 34 : 44, fontWeight: 400, color: C.ink,
                lineHeight: 1, marginBottom: 6,
              }}>{n}</div>
              <div style={{ fontSize: 12, color: C.inkLight, letterSpacing: 0.3 }}>{l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* \u2500\u2500 WORK \u2500\u2500 */}
      <section style={{ padding: sp }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeUp>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "baseline",
              marginBottom: isMobile ? 36 : 64, paddingBottom: 20, borderBottom: `2px solid ${C.ink}`,
            }}>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(22px,3.5vw,44px)", margin: 0, letterSpacing: "-0.5px" }}>
                Selected Work
              </h2>
              <span style={{ fontSize: 12, color: C.inkLight }}>2016 \u2013 2025</span>
            </div>
          </FadeUp>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {WORK.map((w, i) => (
              <FadeUp key={w.num} delay={i * 0.07}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "28px 1fr auto" : "80px 1fr auto",
                    alignItems: "center",
                    gap: isMobile ? 12 : 32,
                    padding: isMobile ? "22px 0" : "32px 0",
                    borderBottom: `1px solid ${C.border}`,
                    cursor: "pointer", transition: "background 0.2s",
                    paddingLeft: activeWork === i ? (isMobile ? 10 : 16) : 0,
                    background: activeWork === i ? C.bgDark : "transparent",
                    paddingRight: activeWork === i ? (isMobile ? 10 : 16) : 0,
                  }}
                  onClick={() => setActiveWork(activeWork === i ? null : i)}
                >
                  <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: isMobile ? 12 : 18, color: C.inkFaint }}>{w.num}</span>
                  <div>
                    <div style={{
                      display: "flex",
                      flexDirection: isMobile ? "column" : "row",
                      alignItems: isMobile ? "flex-start" : "center",
                      gap: isMobile ? 2 : 16, marginBottom: 4,
                    }}>
                      <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: isMobile ? 19 : 28, margin: 0, letterSpacing: "-0.5px" }}>{w.name}</h3>
                      <span style={{ fontSize: 12, color: C.inkLight }}>{w.sub}</span>
                    </div>
                    {activeWork === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{
                          display: "grid",
                          gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
                          gap: 16, marginTop: 16,
                        }}>
                          <img src={w.img} alt={w.name} style={{ width: "100%", height: isMobile ? 200 : 160, objectFit: "cover", filter: "grayscale(20%)" }} />
                          <div>
                            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                              {w.tags.map(t => (
                                <span key={t} style={{ fontSize: 11, padding: "4px 10px", background: C.bgDark, border: `1px solid ${C.border}`, color: C.inkMid, letterSpacing: 0.3 }}>{t}</span>
                              ))}
                            </div>
                            <p style={{ fontSize: 13, color: C.green, fontWeight: 600, marginBottom: 8, lineHeight: 1.6 }}>
                              \u2192 {w.outcomes}
                            </p>
                            <p style={{ fontSize: 12, color: C.inkLight, margin: 0 }}>{w.stack}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", color: C.inkLight }}>
                    <motion.div animate={{ rotate: activeWork === i ? 90 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronRight size={18} />
                    </motion.div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* \u2500\u2500 ABOUT \u2500\u2500 */}
      <section style={{ padding: sp, background: C.ink, color: "#fff" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr",
          gap: isMobile ? 36 : 100,
          alignItems: "center",
        }}>
          {isMobile ? (
            <FadeUp>
              <div style={{ position: "relative", marginBottom: 4 }}>
                <img
                  src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?w=700&q=80"
                  alt="Johnson working"
                  style={{ width: "100%", height: 260, objectFit: "cover", objectPosition: "top", filter: "grayscale(30%)" }}
                />
                <div style={{
                  position: "absolute", bottom: 16, right: 16,
                  padding: "14px 18px", background: C.green,
                }}>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: "#fff", lineHeight: 1 }}>8+</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", letterSpacing: 1, marginTop: 2 }}>YEARS</div>
                </div>
              </div>
            </FadeUp>
          ) : (
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
          )}
          <FadeUp delay={0.1}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: isMobile ? 20 : 28 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.green }} />
                <span style={{ fontSize: 12, letterSpacing: 2, color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>About</span>
              </div>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(26px, 4vw, 52px)", fontWeight: 400,
                color: "#fff", letterSpacing: "-1px", lineHeight: 1.1, marginBottom: isMobile ? 20 : 32,
              }}>
                Engineering excellence,<br />
                <span style={{ color: C.greenMid }}>delivered through people</span>
              </h2>
              <p style={{ fontSize: isMobile ? 14 : 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 16 }}>
                I'm a Senior Fullstack Engineer with a B.Eng. in Computer Engineering from the University of Benin, and 8+ years of experience shipping production software across fintech, healthcare, and e-commerce.
              </p>
              <p style={{ fontSize: isMobile ? 14 : 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: isMobile ? 28 : 40 }}>
                What sets me apart isn't just technical depth \u2014 it's knowing when to go deep and when to delegate. I've led teams of 12, architected systems serving 200K+ users, and believe the most important engineering decisions are often people decisions.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {["AWS Certified", "Lean Six Sigma", "Serverless", "Fullstack", "Team Lead"].map(tag => (
                  <span key={tag} style={{
                    fontSize: 12, padding: "7px 13px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.6)", letterSpacing: 0.3,
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* \u2500\u2500 EXPERIENCE \u2500\u2500 */}
      <section style={{ padding: sp }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeUp>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(22px, 3.5vw, 44px)",
              marginBottom: isMobile ? 32 : 64, paddingBottom: 20,
              borderBottom: `2px solid ${C.ink}`,
            }}>
              Experience
            </h2>
          </FadeUp>
          {EXP.map((e, i) => (
            <FadeUp key={e.year} delay={i * 0.08}>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "160px 1fr",
                gap: isMobile ? 6 : 40,
                paddingBottom: isMobile ? 28 : 48,
                borderBottom: `1px solid ${C.border}`,
                marginBottom: isMobile ? 28 : 48,
              }}>
                <div>
                  <div style={{ fontSize: 13, color: C.green, fontWeight: 600, marginBottom: 2 }}>{e.year}</div>
                  <div style={{ fontSize: 12, color: C.inkLight, letterSpacing: 0.3 }}>{e.co}</div>
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: C.ink, marginBottom: 8, letterSpacing: -0.3 }}>{e.role}</h3>
                  <p style={{ fontSize: 14, color: C.inkMid, lineHeight: 1.7, margin: 0 }}>{e.kpi}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* \u2500\u2500 CONTACT \u2500\u2500 */}
      <section style={{ padding: sp, background: C.bgDark, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 700 }}>
          <FadeUp>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(30px, 5vw, 72px)",
              lineHeight: 1.05, letterSpacing: "-1.5px",
              marginBottom: isMobile ? 20 : 32, color: C.ink,
            }}>
              Have a challenge<br />worth solving?
            </h2>
            <p style={{ fontSize: isMobile ? 15 : 17, color: C.inkMid, lineHeight: 1.7, marginBottom: isMobile ? 32 : 48 }}>
              I'm selective about what I take on \u2014 I work best on hard problems that need both technical depth and strategic thinking. Let's see if we're a match.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <a href="mailto:jaycodist@gmail.com" style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: isMobile ? "14px 20px" : "18px 36px",
                background: C.ink,
                color: "#fff", fontSize: isMobile ? 13 : 15, fontWeight: 600, textDecoration: "none",
                transition: "background 0.2s", flexShrink: 0,
              }}
                onMouseEnter={e => e.currentTarget.style.background = C.green}
                onMouseLeave={e => e.currentTarget.style.background = C.ink}
              >
                <Mail size={15} /> jaycodist@gmail.com
              </a>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {[<Linkedin key="li" size={20} />, <Github key="gh" size={20} />].map((icon, idx) => (
                  <div key={idx} style={{
                    width: 48, height: 48, border: `1px solid ${C.borderDark}`,
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

      <footer style={{
        padding: isMobile ? "20px" : "24px 56px",
        borderTop: `1px solid ${C.border}`,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "flex-start" : "center",
        gap: isMobile ? 6 : 0,
      }}>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 17, color: C.ink }}>Johnson Ubaezuonu</div>
        <div style={{ fontSize: 12, color: C.inkFaint, letterSpacing: 0.5 }}>\u00a9 2025 \u00b7 Senior Fullstack Engineer</div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: C.inkLight }}>
          <MapPin size={12} /> Nigeria
        </div>
      </footer>
    </div>
  );
}
