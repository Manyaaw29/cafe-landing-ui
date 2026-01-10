import React from "react";
import video from "../assets/video.mp4";
import hero from "../assets/hero.avif";
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden" id="home">
      <video
        src={video}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        autoPlay
        loop
        playsInline
        poster={hero}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <motion.h1 
          className="logo-font text-6xl md:text-6xl lg:text-8xl tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            ease: "easeOut",
            delay: 0.2 
          }}
        >
          The Quiet Cup
        </motion.h1>

        <motion.p 
          className="mt-6 logo-line-font text-2xl italic text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            ease: "easeOut",
            delay: 0.5 
          }}
        >
          where silence tastes like coffee
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;