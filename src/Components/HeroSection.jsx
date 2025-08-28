import { useState, useEffect } from "react";
import baddie1 from "../assets/baddie1.png";
import baddie2 from "../assets/baddie2.png";
import baddie3 from "../assets/baddie3.png";
import baddie4 from "../assets/baddie4.png";
import bgVideo from "../assets/mondana.mp4";

function Hero() {
  const images = [baddie1, baddie2, baddie3, baddie4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-16 text-[#f5f5f5]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        video tag.
      </video>

      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="flex-1 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
        <div className="hidden lg:block bg-gradient-to-b from-[#fff]/30 to-[#ccc] rounded-3xl shadow-2xl p-4 w-[280px] md:w-[420px] transition-transform transform hover:-translate-y-2 hover:scale-105 duration-500">
          <img
            src={images[currentIndex]}
            alt="slideshow"
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>

        
        <img
          src={images[currentIndex]}
          alt="slideshow"
          className="block lg:hidden w-[220px] h-auto rounded-xl shadow-md"
        />
      </div>

     
      <div className="flex-1 text-center md:text-left order-2 md:order-1 relative z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight font-Akaya">
          PROJECT Quality Comes First
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0">
          We took our time to plan out everything and build our production
          pipeline for high-quality artworks. Experience creativity at its best.
        </p>
      </div>
    </section>
  );
}

export default Hero;
