/* hero.jsx — hero section with 3 switchable layout variants */

const NAME = "Alif Daffa' Yusof";
const ROLE = "AI Engineer";

function StatusPill({ motion }) {
  return (
    <span className="status">
      <span className={"dot" + (motion ? " pulse" : "")}></span>
      Available for select projects
    </span>
  );
}

function HeroActions() {
  return (
    <div className="hero-actions">
      <a className="btn btn-primary" href="#projects">
        View selected work
        <span className="arr">↗</span>
      </a>
      <a className="btn btn-ghost" href="#contact">Get in touch</a>
    </div>
  );
}

const HERO_METRICS = [
  { b: "6+", s: "Years building" },
  { b: "20+", s: "Models shipped" },
  { b: "4", s: "Research papers" },
];

function HeroEditorial({ motion }) {
  return (
    <div className="hero-grid">
      <div className="reveal in">
        <StatusPill motion={motion} />
        <h1 className="hero-name">{NAME}</h1>
        <div className="hero-role">
          <b>{ROLE}</b> · research-driven · resourceful by default
        </div>
      </div>
      <div className="hero-foot">
        <div className="reveal in">
          <p className="hero-lede">
            I build <b>intelligent systems that ship</b> — from computer-vision
            pipelines and generative-AI products to the data platforms that keep
            them honest. Equal parts researcher and engineer.
          </p>
          <div style={{ marginTop: 26 }}><HeroActions /></div>
        </div>
        <div className="metric-row reveal in">
          {HERO_METRICS.map((m) => (
            <div className="metric" key={m.s}>
              <b>{m.b}</b><span>{m.s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroSplit({ motion }) {
  return (
    <div className="hero-grid">
      <div className="reveal in">
        <StatusPill motion={motion} />
        <h1 className="hero-name">{NAME}</h1>
        <div className="hero-role"><b>{ROLE}</b> — research background, builder's instincts</div>
        <p className="hero-lede" style={{ marginTop: 22 }}>
          I turn research into <b>products people use</b> — computer vision,
          generative AI, and the data systems underneath. Resourceful, fast, and
          allergic to undefined behavior.
        </p>
        <div className="stat-row">
          {HERO_METRICS.map((m) => (
            <div className="metric" key={m.s}><b>{m.b}</b><span>{m.s}</span></div>
          ))}
        </div>
        <div style={{ marginTop: 30 }}><HeroActions /></div>
      </div>
      <div className="reveal in">
        <div className="portrait">
          <div className="ph">
            <span className="ph-tag">portrait.jpg · drop image</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroTerminal({ motion }) {
  return (
    <div className="hero-grid">
      <div className="reveal in" style={{ marginBottom: 30 }}>
        <StatusPill motion={motion} />
      </div>
      <div className="term reveal in">
        <div className="term-bar">
          <i></i><i></i><i></i>
          <span>~/alif — whoami</span>
        </div>
        <div className="term-body">
          <div><span className="cm"># identity</span></div>
          <div><span className="pr">name</span> <span className="va">= "{NAME}"</span></div>
          <h1 className="hero-name">{NAME}</h1>
          <div><span className="pr">role</span> <span className="va">= "{ROLE}"</span></div>
          <div><span className="pr">focus</span> <span className="va">= ["computer-vision", "generative-ai", "data-science", "full-stack"]</span></div>
          <div><span className="pr">traits</span> <span className="va">= ["research-driven", "resourceful", "ships-fast"]</span></div>
          <div style={{ marginTop: 8 }}><span className="cm"># run portfolio</span></div>
          <div><span className="pr">$</span> <span className="va">open ./selected-work</span><span className="caret"></span></div>
        </div>
      </div>
      <div className="reveal in" style={{ marginTop: 30 }}><HeroActions /></div>
    </div>
  );
}

function Hero({ variant, motion }) {
  const Body =
    variant === "split" ? HeroSplit :
    variant === "terminal" ? HeroTerminal :
    HeroEditorial;
  return (
    <header className={"hero section v-" + variant} id="top">
      <div className="wrap">
        <Body motion={motion} />
      </div>
    </header>
  );
}

window.Hero = Hero;
