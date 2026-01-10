import React from "react";
import { MISSION } from "../constants";
import mission from "../assets/mission.mp4";
import missionImg from "../assets/missionImg.jpg";
import { motion } from "framer-motion";
const Vision = () => {
  return (
    <section id="vision" className="py-24">
      <div className="container mx-auto text-center">
        <h2 className="mb-12 text-5xl heading-font tracking-tighter lg:text-6xl">
          Our Vision
        </h2>
        <div className="relative flex items-center justify-center ">
          <motion.video
            className="w-full rounded-3xl "
            autoPlay
            muted
            loop
            playsInline
            poster={missionImg}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <source src={mission} type="video/mp4" />
          </motion.video>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="absolute h-full w-full rounded-3xl bg-black/40"
          />

          <motion.p
            className="absolute  mission-font max-w-lg tracking-tighter  lg:text-3xl "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          >
            {MISSION}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
