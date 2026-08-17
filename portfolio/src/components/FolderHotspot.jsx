import { useState } from "react";
import "./FolderHotspot.css";

export default function FolderHotspot({ label, style }) {
  const [bounced, setBounced] = useState(false);

  function handleClick() {
    setBounced(true);
    window.setTimeout(() => setBounced(false), 500);
  }

  return (
    <button
      type="button"
      className={`folder-hotspot ${bounced ? "is-bounced" : ""}`}
      style={style}
      onClick={handleClick}
      aria-label={`${label} folder`}
    >
      <span className="folder-hotspot__pin" aria-hidden="true" />
    </button>
  );
}
