import { useState, useEffect } from "react";
import Nav from '../Components/Navbar.jsx';
import HeroSection from '../Components/HeroSection.jsx';
import BaddiePreview from '../Components/BaddiePreview.jsx';
import WhyChooseUs from '../Components/WhyChooseUs.jsx';
import AboutUs from '../Components/AboutUs.jsx';
import img1 from "../assets/baddie1.png";
import img2 from "../assets/baddie2.png";

function Home() {
  const images = [img1, img2];

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Nav />
      <HeroSection />
      <AboutUs />
      <BaddiePreview />
      <WhyChooseUs images={images} />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default Home;
