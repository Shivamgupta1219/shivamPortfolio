import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./about.css";
import profile_img from "/src/assets/shivamDP.jpg";

export default function About({ id }) {
  const [isHovered, setIsHovered] = useState(false);
  const boxVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };
  const fadeSlideVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  return (
    <motion.div id={id}>
      <motion.h1   
      variants={fadeSlideVariants}
       className="title">About</motion.h1>
      <motion.section
        variants={boxVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="container"
      >
        <motion.div className="intro" variants={fadeSlideVariants}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          voluptates doloremque debitis cumque eos excepturi omnis sit neque,
          repellendus dolore soluta? Praesentium reprehenderit ullam nisi iste
          earum eligendi dignissimos enim! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eligendi nulla esse fugit in vitae,
          totam commodi consectetur modi, reiciendis repellat dolores deserunt
          corporis Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nulla incidunt dolores impedit? Incidunt repudiandae ex maiores
          repellendus omnis possimus exercitationem fuga repellat! Maxime
          laboriosam fugit, doloribus ea consequatur temporibus soluta nostrum
          possimus?
        </motion.div>

        <motion.div
          className="profile-img"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          variants={boxVariants}
        >
          <motion.img
            variants={fadeSlideVariants}
            whileHover={{
              scale: 1.05,
            }}
            src={profile_img}
            alt="Profile"
          />

          <AnimatePresence>
            {isHovered && (
              <motion.a
                href="/Resume.pdf"
                target="_blank"
                className="resume-button"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Download Resume
              </motion.a>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
