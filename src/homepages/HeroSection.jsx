import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import b1 from '../assets/images/bg1.jpg';
import b2 from '../assets/images/bg2.jpg';
import b3 from '../assets/images/bg3.jpg';
import b4 from '../assets/images/bg4.jpg';
import b5 from '../assets/images/bg5.jpg';

const images = [b1, b2, b3, b4, b5];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            zIndex: 0,
          }}
        />
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center text-white px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
          Unleash Your Inner Explorer
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mb-8 drop-shadow-md">
          Embark on unforgettable journeys and discover the wild beauty of Africa with Simba Adventure.
        </p>
        <a
          href="/adventures"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
          Explore Adventures
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
