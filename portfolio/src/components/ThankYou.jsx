import thanksImg from "../assets/thanks.jpg";
import "./ThankYou.css";

export default function ThankYou() {
  return (
    <section className="thanks" aria-label="Thank you">
      <img
        src={thanksImg}
        alt="Thank you! Illustrated with a small fish and a frog on a scrapbook paper background."
        className="thanks__img"
      />
      <div className="thanks__bar">
        <a
          className="thanks__link"
          href="https://instagram.com/designer_nis"
          target="_blank"
          rel="noreferrer noopener"
        >
          @designer_nis on Instagram
        </a>
        <span className="thanks__dot" aria-hidden="true">
          •
        </span>
        <span className="thanks__made">Made with React</span>
      </div>
    </section>
  );
}
