import React from "react";
import { SPECIALITY } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const OurCraft = () => {
  return (
    <section id="specialty" className="py-24">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="heading-font mb-12 text-center text-5xl tracking-tighter lg:text-6xl"
      >
        Our Craft
      </motion.h2>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 max-w-6xl"
      >
        {SPECIALITY.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`flex flex-col gap-8 mb-16 last:mb-0 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <motion.div variants={imageVariants} className="lg:w-1/2">
              <motion.img
                src={item.image}
                alt={item.title}
                className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              variants={itemVariants}
              className="lg:w-1/2 flex flex-col justify-center"
            >
              <div className="text-5xl font-light text-neutral-500 mb-4">
                {item.number}
              </div>

              <h3 className="mb-4 text-3xl lg:text-4xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="text-neutral-400 text-lg leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OurCraft;
