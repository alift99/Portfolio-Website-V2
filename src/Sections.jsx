import { useState, useEffect } from 'react';
import { TOOLS, EXPERIENCE, SKILLS, ACHIEVEMENTS } from './data.js';

const NAV_LINKS = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "work" },
  { href: "#skills", label: "skills" },
  { href: "#achievements", label: "achievements" },
];

export function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className="nav" data-stuck={stuck} data-menu-open={open}>
      <div className="nav-inner">
        <a className="brand" href="#top" onClick={close}>
          <img className="brand-mark" src="images/profile_pic.webp" alt="Alif Daffa'" />
          <span><b>Alif Daffa'</b></span>
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((l) => <a href={l.href} key={l.href}>{l.label}</a>)}
          <a className="nav-cta" href="#contact">contact ↗</a>
        </div>
        <button
          className="nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      {open && (
        <div className="nav-drawer" role="dialog" aria-label="Navigation menu">
          <div className="nav-drawer-backdrop" onClick={close} />
          <div className="nav-drawer-panel">
            {NAV_LINKS.map((l) => (
              <a href={l.href} key={l.href} onClick={close}>{l.label}</a>
            ))}
            <a className="nav-cta nav-drawer-cta" href="#contact" onClick={close}>contact ↗</a>
            <button className="nav-drawer-close" onClick={close} aria-label="Close menu">&#x25B2;</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Marquee() {
  const items = [...TOOLS, ...TOOLS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

export function About() {
  const facts = [
    { k: "Based in", v: <b>Singapore · Remote</b> },
    { k: "Focus", v: "Full stack · GenAI · Data Science" },
    { k: "Currently", v: "Cloud Architecture" },
    { k: "Off-screen", v: "Competitive Powerlifting / Streetlifting" }
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
              I'm an AI engineer who works across the full ML pipeline — from <span className="hl">data analysis 
              and modeling through to deployment</span> — happiest when I'm shipping something 
              real people use.
            </p>
            <div className="about-body">
              <p>
                Two things define how I work: comfort with ambiguity, and resourcefulness 
                in problem solving. I don't need a problem fully scoped to start making 
                progress on it. And once I'm in it, years of working independently have 
                made me good at finding a path forward on my own — figuring out what to 
                try, what to drop, and where to spend the effort.
              </p>
              <p>
                I work closely with stakeholders, non-technical domain experts, and 
                people from different disciplines, translating between what's technically 
                possible and what actually needs to ship. As a builder, I think in terms 
                of where things are headed, not just where they are now, and I plan my 
                approach accordingly.
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

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-no">02 — Experience</div>
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

export function Skills() {
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

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <span className="eyebrow no-rule reveal" style={{ justifyContent: "center", display: "flex" }}>
          06 — Contact
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

export function Footer() {
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

const ACHIEVEMENT_KIND_LABEL = {
  award: "Award",
  scholarship: "Scholarship",
  publication: "Publication",
  certification: "Certification",
};

export function Achievements() {
  const kinds = ["award", "scholarship", "publication", "certification"];
  return (
    <section className="section" id="achievements">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-no">05 — Recognition</div>
          <h2 className="section-title">Awards & credentials.</h2>
        </div>
        {kinds.map((kind) => {
          const items = ACHIEVEMENTS.filter((a) => a.kind === kind);
          if (!items.length) return null;
          return (
            <div className="ach-group reveal" key={kind}>
              <div className="ach-group-label">{ACHIEVEMENT_KIND_LABEL[kind]}s</div>
              <div className="ach-list">
                {items.map((a) => (
                  <div className="ach-item reveal" key={a.title}>
                    <div className="ach-meta">
                      {a.org && <span className="ach-org">{a.org}</span>}
                      {a.year && <span className="ach-year">{a.year}</span>}
                    </div>
                    <div className="ach-title">{a.title}</div>
                    <div className="ach-detail">{a.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
