import { useRef, useState } from "react";
import heroImg from "../assets/hero.jpg";
import "./Hero.css";

export default function Hero() {
  const wrapRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMove(e) {
    const rect = wrapRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * -3, y: py * 3 });
  }

  function handleLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section className="hero" aria-label="Introduction">
      <h1 className="sr-only">Nischal&rsquo;s Portfolio</h1>
      <div
        ref={wrapRef}
        className="hero__frame"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      >
        <img
          src={heroImg}
          alt="Nischal's Portfolio — hand-lettered title on a scrapbook desk, with a taped polaroid photo and a portrait of Nischal in a red suit"
          className="hero__img"
          width={3006}
          height={1672}
          fetchPriority="high"
        />
      </div>
      <div className="hero__scroll-cue" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
