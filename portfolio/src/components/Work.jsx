import workImg from "../assets/work.jpg";
import FolderHotspot from "./FolderHotspot";
import "./Work.css";

const FOLDERS = [
  {
    label: "Social Media Post Design",
    style: { left: "5%", top: "15%", width: "18.3%", height: "13.9%" },
  },
  {
    label: "Package Design",
    style: { left: "28.3%", top: "15%", width: "18.3%", height: "13.9%" },
  },
  {
    label: "Logo Design",
    style: { left: "5%", top: "31.6%", width: "18.3%", height: "14.1%" },
  },
  {
    label: "Email Design",
    style: { left: "28.3%", top: "31.6%", width: "18.3%", height: "14.1%" },
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
