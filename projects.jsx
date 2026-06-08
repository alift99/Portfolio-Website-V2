/* projects.jsx — filterable project grid + per-project carousel */

const { useState, useRef, useEffect, useCallback } = React;

function Placeholder({ slide }) {
  const icon = slide.kind === "gif" ? <span className="gif">◉ GIF</span>
             : slide.kind === "youtube" ? "▶ VID"
             : slide.kind === "video" ? "▶ MP4"
             : "▣ IMG";
  return (
    <div className="ph">
      <span className="ph-tag">{icon}&nbsp;· {slide.label}</span>
    </div>
  );
}

function Carousel({ images, motion }) {
  const [i, setI] = useState(0);
  const n = images.length;
  const go = useCallback((next) => setI((cur) => (next + n) % n), [n]);

  // keyboard support when focused
  const onKey = (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); go(i - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); go(i + 1); }
  };

  return (
    <div className="carousel" tabIndex={0} onKeyDown={onKey} aria-roledescription="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${i * 100}%)`, transition: motion ? undefined : "none" }}
      >
        {images.map((s, idx) => (
          <div className="slide" key={idx} aria-hidden={idx !== i}>
            {s.kind === "youtube" && s.src
              ? <iframe
                  src={s.src}
                  title={s.label}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              : s.kind === "video" && s.src
              ? <video src={s.src} controls preload="metadata" />
              : s.src
              ? <img src={s.src} alt={s.label} loading="lazy" />
              : <Placeholder slide={s} />}
          </div>
        ))}
      </div>

      {n > 1 && (
        <>
          <button className="car-btn prev" aria-label="Previous image" onClick={() => go(i - 1)}>‹</button>
          <button className="car-btn next" aria-label="Next image" onClick={() => go(i + 1)}>›</button>
          <div className="car-count">{i + 1} / {n}</div>
          <div className="dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                data-active={idx === i}
                aria-label={`Go to image ${idx + 1}`}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ p, motion }) {
  return (
    <article className="card entering">
      <Carousel images={p.images} motion={motion} />
      <div className="card-body">
        <div className="card-top">
          <div>
            <div className="card-cat">{p.categories.join(" · ")}</div>
            <h3 className="card-title">{p.title}</h3>
          </div>
          <div className="card-year">{p.year}</div>
        </div>
        <p className="card-desc">{p.desc}</p>
        <div className="card-tags">
          {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
        {p.links && p.links.length > 0 && (
          <div className="card-links">
            {p.links.map((l) => (
              <a className="card-link" href={l.href} key={l.label}>
                {l.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function Projects({ motion }) {
  const [filter, setFilter] = useState("All");
  const counts = {};
  PROJECTS.forEach((p) => p.categories.forEach((c) => { counts[c] = (counts[c] || 0) + 1; }));

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter));

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-no">03 — Selected work</div>
          <span className="eyebrow" style={{ marginTop: 14 }}>Filter by discipline</span>
          <h2 className="section-title">Things I've built &amp; researched.</h2>
        </div>

        <div className="filters reveal">
          <button
            className="chip" data-active={filter === "All"}
            onClick={() => setFilter("All")}
          >
            All <span className="ct">{PROJECTS.length}</span>
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c} className="chip" data-active={filter === c}
              onClick={() => setFilter(c)}
            >
              {c} <span className="ct">{counts[c] || 0}</span>
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {filtered.length === 0
            ? <div className="empty">// no projects in this category yet</div>
            : filtered.map((p) => <ProjectCard key={p.id} p={p} motion={motion} />)}
        </div>
      </div>
    </section>
  );
}

window.Projects = Projects;
