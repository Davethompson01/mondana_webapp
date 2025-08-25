import { motion } from "framer-motion";

function WhyChooseUs({ images, videoSrc }) {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-black text-white">
      {/* Background Video */}
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />

      <div className="relative z-10 flex-1 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Why Choose <span className="text-purple-400">Remilo</span> Culture?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl leading-relaxed max-w-xl"
        >
          Remilo is more than just an NFT. It’s a lifestyle, a movement, and a
          culture of Web3 pioneers. Owning a Remilo means joining a community
          where art, rarity, and innovation merge with identity.  
          Together, we’re building bridges between creativity, ownership, and
          the future of decentralized culture.
        </motion.p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 font-medium">
          <li className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition">
            Unique Remilo-inspired art that defines individuality.
          </li>
          <li className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition">
            Strong community-driven culture & collaborations.
          </li>
          <li className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition">
             Early access to Web3 drops, events, and alpha insights.
          </li>
          <li className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition">
             A future where digital identity meets real-world culture.
          </li>
        </ul>
      </div>

      {/* Image / Visuals */}
      <div className="relative z-10 flex-1 flex justify-center mt-10 md:mt-0">
        <motion.img
          src={images[0]} // choose one of your Remilo-styled images
          alt="Remilo Culture"
          className="w-[320px] md:w-[500px] rounded-3xl shadow-2xl border-4 border-purple-400/40"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}

export default WhyChooseUs;
