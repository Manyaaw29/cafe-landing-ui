import React from "react";
import { REVIEW } from "../constants";
import review1 from "../assets/review1.jpg";
import review2 from "../assets/review2.webp";
import review3 from "../assets/review3.webp";
import customer1 from "../assets/customer1.jpg";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.jpg";
import customer4 from "../assets/customer4.webp";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeInOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const Review = () => {
  const reviewImages = [review1, review2, review3];

  return (
    <section id="reviews" className="container mx-auto px-4 py-24">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="heading-font mb-12 text-center text-5xl tracking-tighter lg:text-6xl"
      >
        Stories From Our Corner
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {REVIEW.map((review, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -5,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-900/30 backdrop-blur-sm"
          >
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              src={reviewImages[index]}
              width={80}
              height={80}
              alt={review.name}
              className="rounded-full border-2 border-neutral-700 object-cover mb-4"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg italic text-neutral-300 mb-4 leading-relaxed"
            >
              "{review.content}"
            </motion.p>
            <motion.h6
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-semibold text-white"
            >
              {review.name}
            </motion.h6>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm text-neutral-500"
            >
              {review.profession}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16"
      >
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <motion.img
            key={index}
            variants={imageVariants}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            src={customer}
            alt="customer enjoying coffee"
            className="rounded-2xl object-cover h-[200px] w-full shadow-lg cursor-pointer"
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Review;
