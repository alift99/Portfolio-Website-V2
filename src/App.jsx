import { useEffect } from 'react';
import { Hero } from './Hero.jsx';
import { Projects } from './Projects.jsx';
import { Nav, Marquee, About, Experience, Skills, Achievements, Contact, Footer } from './Sections.jsx';

function useScrollReveal() {
  useEffect(() => {
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
  }, []);
}

export default function App() {
  useScrollReveal();

  return (
    <>
      <div className="backdrop"></div>
      <div className="shell">
        <Nav />
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects motion={true} />
        <Skills />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
