import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-opacity-80 w-full h-screen"> {/* Adjusted padding at the top */}
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('src/assets/images/blue-beach.png')",
        }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center text-white">
        <motion.h1
          className="text-white text-4xl md:text-7xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="src/assets/images/sea (1).png" alt="" />
          Ocean Nation
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-6 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Help us protect our oceans.
        </motion.p>
        <motion.a
          href="#shop"
          className="border-2 border-accent-color text-white py-2 px-6 rounded-lg hover:bg-accent-color transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Shop Now
        </motion.a>
      </div>

      {/* Optional Light Overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
    </section>
  );
};

export default Hero;
