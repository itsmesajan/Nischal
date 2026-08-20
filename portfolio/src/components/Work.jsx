import workImg from "../assets/work.jpg";
import FolderHotspot from "./FolderHotspot";
import "./Work.css";

const FOLDERS = [
  {
    label: "Social Media Post Design",
    style: { left: "7.3%", top: "28%", width: "39.5%", height: "30.5%" },
  },
  {
    label: "Package Design",
    style: { left: "52%", top: "28.5%", width: "39.5%", height: "29.5%" },
  },
  {
    label: "Logo Design",
    style: { left: "6%", top: "63.5%", width: "39.5%", height: "30%" },
  },
  {
    label: "Email Design",
    style: { left: "52.5%", top: "65%", width: "39.5%", height: "28.5%" },
  },
];

export default function Work() {
  return (
    <section className="work" aria-label="My Work">
      <div className="work__frame">
        <img
          src={workImg}
          alt="My Work — four folders labelled Social Media Post Design, Package Design, Logo Design, and Email Design, on a chalkboard backdrop"
          className="work__img"
          width={3006}
          height={3058}
          loading="lazy"
        />
        {FOLDERS.map((f) => (
          <FolderHotspot key={f.label} label={f.label} style={f.style} />
        ))}
      </div>
      <div className="sr-only">
        <h2>My Work</h2>
        <ul>
          {FOLDERS.map((f) => (
            <li key={f.label}>{f.label}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
