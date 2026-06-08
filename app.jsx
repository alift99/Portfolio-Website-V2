/* app.jsx — root: state, tweaks, scroll-reveal, render */

const { useState: useAppState, useEffect: useAppEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "editorial",
  "theme": "dark",
  "accentHue": 250,
  "motion": true
}/*EDITMODE-END*/;

const ACCENTS = [
  { name: "Electric blue", hue: 250 },
  { name: "Violet", hue: 295 },
  { name: "Emerald", hue: 158 },
  { name: "Amber", hue: 70 },
  { name: "Coral", hue: 30 },
  { name: "Magenta", hue: 350 },
];

function AccentSwatches({ value, onChange }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: "2px 0 4px" }}>
      {ACCENTS.map((a) => {
        const active = value === a.hue;
        return (
          <button
            key={a.hue}
            title={a.name}
            onClick={() => onChange(a.hue)}
            style={{
              width: 30, height: 30, borderRadius: 9, cursor: "pointer",
              background: `oklch(0.66 0.17 ${a.hue})`,
              border: active ? "2px solid #fff" : "2px solid transparent",
              boxShadow: active ? `0 0 0 2px oklch(0.66 0.17 ${a.hue})` : "none",
              outline: "none", transition: "transform .15s ease",
              transform: active ? "scale(1.08)" : "scale(1)",
            }}
          />
        );
      })}
    </div>
  );
}

function useScrollReveal(deps) {
  useAppEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((e, idx) => {
      e.style.transitionDelay = `${Math.min(idx % 6, 5) * 50}ms`;
      io.observe(e);
    });
    return () => io.disconnect();
  }, deps);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply theme / accent / motion to the document root
  useAppEffect(() => {
    const r = document.documentElement;
    r.setAttribute("data-theme", t.theme);
    r.setAttribute("data-motion", t.motion ? "on" : "off");
    r.style.setProperty("--accent-h", t.accentHue + "deg");
  }, [t.theme, t.accentHue, t.motion]);

  useScrollReveal([]);

  return (
    <>
      <div className="backdrop"></div>
      <div className="shell">
        <Nav />
        <Hero variant={t.heroVariant} motion={t.motion} />
        <Marquee />
        <About />
        <Experience />
        <Projects motion={t.motion} />
        <Skills />
        <Achievements />
        <Contact />
        <Footer />
      </div>

      <TweaksPanel>
        <TweakSection label="Hero layout" />
        <TweakRadio
          label="Variant" value={t.heroVariant}
          options={["editorial", "terminal", "split"]}
          onChange={(v) => setTweak("heroVariant", v)}
        />
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode" value={t.theme}
          options={["dark", "light"]}
          onChange={(v) => setTweak("theme", v)}
        />
        <TweakRow label="Accent">
          <AccentSwatches value={t.accentHue} onChange={(v) => setTweak("accentHue", v)} />
        </TweakRow>
        <TweakSection label="Motion" />
        <TweakToggle
          label="Animations" value={t.motion}
          onChange={(v) => setTweak("motion", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
