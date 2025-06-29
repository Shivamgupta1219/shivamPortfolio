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
      <motion.h1 variants={fadeSlideVariants} className="title">
        About
      </motion.h1>
      <motion.section
        variants={boxVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="container"
      >
        <motion.div className="intro" variants={fadeSlideVariants}>
          Hi! I’m  
          <b className="About-text">  Shivam Gupta</b>, an aspiring Python developer and  
          <b className="About-text">  Full stack developer</b> with a strong desire to learn, grow, and
          build real-world projects. I hold a Cisco networking certificate and a
          web development certificate from Skill Craft, and I’m currently
          working as a part-time software intern at Blue Stock. I enjoy bringing
          ideas to life through clean, responsive, and user-friendly interfaces.
          I’ve developed projects like a portfolio website and a to-do list app
          using React.js. I’m also exploring Python for data analysis and have
          built a Student Attendance Management System using Tkinter, SQLite,
          Pandas, and Matplotlib. I love working with modern tools like Tailwind
          CSS and Framer Motion to make my projects more engaging. Alongside
          technical skills, I focus on improving my English communication and
          teamwork, which I believe are key for any successful career in tech.
          Outside work, I enjoy playing cricket and photography — they keep me
          creative and balanced. My goal is to keep learning, gain hands-on
          experience, and contribute to meaningful projects. I’m always open to
          new opportunities and collaborations, so feel free to connect with me.
          Let’s create something impactful together!
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
