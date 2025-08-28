import { motion } from "framer-motion";

function WhyChooseUs({ images }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8 },
    }),
  };

  return (
    <section id="team" className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-black text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[1]})`,
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex-1 space-y-6">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Why Choose <span className="text-purple-400">Mondana</span> Culture?
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg md:text-xl leading-relaxed max-w-xl"
        >
          Mondana is more than just an NFT. It’s a lifestyle, a movement, and a
          culture of Web3 pioneers. Owning a Mondana means joining a community
          where art, rarity, and innovation merge with identity. Together,
          we’re building bridges between creativity, ownership, and the future
          of decentralized culture.
        </motion.p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 font-medium">
          {[
            "Unique Mondana-inspired art that defines individuality.",
            "Strong community-driven culture & collaborations.",
            "Early access to Web3 drops, events, and alpha insights.",
            "A future where digital identity meets real-world culture.",
          ].map((point, i) => (
            <motion.li
              key={i}
              variants={fadeInUp}
              custom={i + 2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition"
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.div
        variants={fadeInUp}
        custom={5}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 flex-1 flex justify-center mt-10 md:mt-0"
      >
        <img
          src={images[0]} 
          alt="Mondana Culture"
          className="w-[320px] md:w-[500px] rounded-3xl shadow-2xl border-4 border-purple-400/40"
        />
      </motion.div>
    </section>
  );
}

export default WhyChooseUs;
