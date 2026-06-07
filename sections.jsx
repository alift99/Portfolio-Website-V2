/* sections.jsx — Nav, About, Experience, Skills, Contact, Footer, Marquee */

const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

function Nav() {
  const [stuck, setStuck] = useStateS(false);
  useEffectS(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className="nav" data-stuck={stuck}>
      <div className="nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">A</span>
          <span><b>Alif Daffa'</b> <span>/ AI Engineer</span></span>
        </a>
        <div className="nav-links">
          <a href="#about">about</a>
          <a href="#projects">work</a>
          <a href="#experience">experience</a>
          <a href="#skills">skills</a>
          <a className="nav-cta" href="#contact">contact ↗</a>
        </div>
      </div>
    </nav>
  );
}

function Marquee() {
  const items = [...TOOLS, ...TOOLS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

function About() {
  const facts = [
    { k: "Based in", v: <b>Remote · GMT+7</b> },
    { k: "Focus", v: "CV · GenAI · Data Science" },
    { k: "Currently", v: "Agentic retrieval systems" },
    { k: "Off-screen", v: "Climbing & film photography" },
  ];
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-no">01 — About</div>
        </div>
        <div className="about-grid">
          <div className="reveal">
            <p className="about-lede">
              I'm an AI engineer who lives in the space between <span className="hl">research
              and production</span> — happiest when a paper-shaped idea becomes
              something real people can use.
            </p>
            <div className="about-body">
              <p>
                My background is research-heavy: years spent reading, reproducing,
                and pushing on the literature in computer vision and representation
                learning. But I'm an engineer at heart — I'd rather ship a model
                that works than write about one that might.
              </p>
              <p>
                That mix makes me resourceful. Give me a vague problem, sparse data,
                and a tight deadline, and I'll find the path: the right baseline, the
                scrappy pipeline, the eval that tells the truth. I care about systems
                that stay reliable long after the demo.
              </p>
            </div>
          </div>
          <div className="about-side">
            {facts.map((f) => (
              <div className="fact reveal" key={f.k}>
                <div className="k">{f.k}</div>
                <div className="v">{f.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-no">03 — Experience</div>
          <h2 className="section-title">Where I've worked.</h2>
        </div>
        <div className="xp-list">
          {EXPERIENCE.map((x) => (
            <div className="xp reveal" key={x.role + x.org}>
              <div className="xp-when">
                {x.now ? <span className="now">● {x.when}</span> : x.when}
              </div>
              <div>
                <div className="xp-role">{x.role}</div>
                <div className="xp-org">@ <b>{x.org}</b></div>
                <p className="xp-desc">{x.desc}</p>
                <div className="xp-stack">
                  {x.stack.map((s) => <span className="tag" key={s}>{s}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-no">04 — Toolkit</div>
          <h2 className="section-title">What I work with.</h2>
        </div>
        <div className="skill-grid">
          {SKILLS.map((s, i) => (
            <div className="skill-card reveal" key={s.title}>
              <h3>
                <span className="ix">0{i + 1}</span>{s.title}
              </h3>
              <p>{s.note}</p>
              <div className="skill-tags">
                {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SOCIALS = [
  { label: "GitHub ↗", href: "https://github.com/alift99" },
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/alifdaffa" },
  { label: "Google Scholar ↗", href: "#" },
  { label: "Résumé (PDF) ↓", href: "#" },
];

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <span className="eyebrow no-rule reveal" style={{ justifyContent: "center", display: "flex" }}>
          05 — Contact
        </span>
        <h2 className="contact-big reveal">Let's build<br />something.</h2>
        <div className="reveal">
          <a className="contact-mail" href="mailto:alifdaffa.main@gmail.com">
            <span aria-hidden="true">✦</span> alifdaffa.main@gmail.com
          </a>
        </div>
        <div className="socials reveal">
          {SOCIALS.map((s) => (
            <a className="social" href={s.href} key={s.label}>{s.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} Alif Daffa' Yusof — built from scratch</span>
        <span className="to-top" onClick={toTop}>back to top ↑</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Marquee, About, Experience, Skills, Contact, Footer });
