import React from "react";
import about from "../assets/about.avif";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="container mx-auto py-24" id="about">
      <motion.h2
        className="heading-font mb-12 text-center text-5xl tracking-tighter lg:text-6xl"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.1,
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        About Us
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          className="w-full p-4 lg:w-1/2"
          initial={{ opacity: 0, x: -60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3,
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.img
            src={about}
            alt="About Us"
            className="rounded-3xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>
        <div className="w-full px-2 lg:w-1/2">
          <motion.h2
            className="text-3xl tracking-tighter lg:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.5,
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {ABOUT.header}
          </motion.h2>
          <motion.div
            className="mb-8 mt-1 h-2 w-36 bg-rose-300 lg:-rotate-3"
            initial={{ opacity: 0, scaleX: 0, originX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.8,
            }}
            viewport={{ once: true, margin: "-100px" }}
          />
          <motion.p
            className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
              delay: 1,
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {ABOUT.content}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
