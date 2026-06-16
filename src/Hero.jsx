const NAME = "Alif Daffa' Yusof";
const ROLE = "AI Engineer";

const HERO_METRICS = [
  { b: "6+", s: "Years building" },
  { b: "20+", s: "Models shipped" },
  { b: "4", s: "Research papers" },
];

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

export function Hero() {
  return (
    <header className="hero section v-editorial" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div className="reveal in">
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
      </div>
    </header>
  );
}
