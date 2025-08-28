import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import art1 from "../assets/baddie1.png";
import community from "../assets/baddie2.png";
import events from "../assets/baddie3.png";
import future from "../assets/baddieEye3.avif";
import bgTexture from "../assets/baddieEye7.avif";

function AboutUs() {
  const [current, setCurrent] = useState(0);

  const cards = [
    {
      image: art1,
      title: "Unique Art",
      description:
        "Mondana NFTs are hand-crafted and represent individuality through rare traits.",
      bg: bgTexture,
    },
    {
      image: community,
      title: "Community First",
      description:
        "A strong culture of collaboration and creativity fuels our growth.",
      bg: bgTexture,
    },
    {
      image: events,
      title: "Exclusive Access",
      description:
        "Get early access to Web3 drops, events, and insider knowledge.",
      bg: bgTexture,
    },
    {
      image: future,
      title: "Shaping the Future",
      description:
        "We’re bridging the gap between digital identity and real-world culture.",
      bg: bgTexture,
    },
  ];

  const nextSlide = () =>
    setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));

  return (
    <section id="about" className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-12 bg-black text-white overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${cards[current].bg})`,
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      <div className="relative text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-extrabold">
          About <span className="text-purple-400">Mondana</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
          Discover our culture, vision, and community. Use the arrows below to
          explore what makes Mondana unique.
        </p>
      </div>
      <div className="relative w-full max-w-lg flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white/10 rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center border border-purple-400/30"
          >
            <img
              src={cards[current].image}
              alt={cards[current].title}
              className="w-32 h-32 object-cover rounded-full border-4 border-purple-400/50 mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{cards[current].title}</h3>
            <p className="text-gray-300">{cards[current].description}</p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-[-2rem] md:left-[-3rem] p-2 rounded-full bg-white/10 hover:bg-purple-400/30 transition"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-[-2rem] md:right-[-3rem] p-2 rounded-full bg-white/10 hover:bg-purple-400/30 transition"
        >
          ›
        </button>
      </div>

      <div className="flex mt-6 space-x-3">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-purple-400" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
