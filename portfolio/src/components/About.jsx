import aboutImg from "../assets/about.jpg";
import "./About.css";

const EXPERIENCE = [
  { years: "2 Years", role: "Graphic Designer at Longtailemedia." },
  {
    years: "2 Years",
    role: "Fresskance Graphic Designer for Austrialian Client.",
  },
  { years: "2 Years", role: "Graphic Designer at Snowbird Studio." },
  { years: "2 Years", role: "Email Designer." },
];

const SKILLS = ["Photoshop", "Illustrator", "Canva", "After Effects", "Figma"];

export default function About() {
  return (
    <section className="about" aria-label="About Nischal">
      <div className="about__frame">
        <img
          src={aboutImg}
          alt="Hi, I'm Nischal — A graphic designer who loves turning ideas into clean, creative, and eye-catching visuals. Contact, experience and skills details follow."
          className="about__img"
          width={3006}
          height={1892}
          loading="lazy"
        />
        <a
          href="https://instagram.com/designer_nis"
          target="_blank"
          rel="noreferrer noopener"
          className="about__qr-hotspot"
          aria-label="Open Nischal's Instagram, @designer_nis, in a new tab"
        >
          <span className="about__ring" />
        </a>
        <a
          href="tel:+9779828844045"
          className="about__phone-hotspot"
          aria-label="Call Nischal at +977 9828844045"
        >
          <span className="about__ring about__ring--purple" />
        </a>
        <a
          href="mailto:mhjnischal@gmail.com"
          className="about__email-hotspot"
          aria-label="Email Nischal at mhjnischal@gmail.com"
        >
          <span className="about__ring about__ring--purple" />
        </a>
      </div>
      <div className="sr-only">
        <h2>About Nischal</h2>
        <p>
          A Graphic Designer who loves turning ideas into clean, creative,
          and eye-catching visuals. I design with purpose, play with ideas,
          and always aim to make something that stands out.
        </p>
        <h3>Contact</h3>
        <ul>
          <li>
            Phone: <a href="tel:+9779828844045">+977 9828844045</a>
          </li>
          <li>Location: Lalitpur/Sunakothi</li>
          <li>
            Email:{" "}
            <a href="mailto:mhjnischal@gmail.com">mhjnischal@gmail.com</a>
          </li>
        </ul>
        <h3>Experience</h3>
        <ul>
          {EXPERIENCE.map((e, i) => (
            <li key={i}>
              {e.years} — {e.role}
            </li>
          ))}
        </ul>
        <h3>Skills</h3>
        <ul>
          {SKILLS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
