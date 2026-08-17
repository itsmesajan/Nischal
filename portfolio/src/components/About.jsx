import aboutImg from "../assets/about.jpg";
import "./About.css";

export default function About() {
  return (
    <section className="about" aria-label="About Nischal">
      <div className="about__frame">
        <img
          src={aboutImg}
          alt="Hi, I'm Nischal — A graphic designer who loves turning ideas into clean, creative, and eye-catching visuals. I design with purpose, play with ideas, and always aim to make something that stands out."
          className="about__img"
        />
        <a
          href="https://instagram.com/designer_nis"
          target="_blank"
          rel="noreferrer noopener"
          className="about__qr-hotspot"
          aria-label="Open Nischal's Instagram, @designer_nis, in a new tab"
        >
          <span className="about__qr-ring" />
        </a>
      </div>
      <div className="sr-only">
        <h2>About Nischal</h2>
        <p>
          A Graphic Designer who loves turning ideas into clean, creative,
          and eye-catching visuals. I design with purpose, play with ideas,
          and always aim to make something that stands out.
        </p>
      </div>
    </section>
  );
}
