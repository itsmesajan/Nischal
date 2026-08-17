import { motion } from "framer-motion";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import ThankYou from "./components/ThankYou";
import "./App.css";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function Reveal({ children }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="page">
      <ScrollProgress />
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Work />
      </Reveal>
      <Reveal>
        <ThankYou />
      </Reveal>
    </div>
  );
}
