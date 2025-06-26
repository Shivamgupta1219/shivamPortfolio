import React from "react";
import { motion } from "framer-motion";
import "./project.css";

const projectData = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built using React, showcasing my skills and projects.",
    tech: "React, CSS, JavaScript",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "Chatbot App",
    description:
      "An AI-powered chatbot built using Python and ChatterBot for conversation handling.",
    tech: "Python, Tkinter, NLP",
    link: "https://github.com/yourname/chatbot",
  },
  {
    title: "E-commerce Backend",
    description:
      "A RESTful API backend for an e-commerce application using Node.js and MongoDB.",
    tech: "Node.js, Express, MongoDB",
    link: "https://github.com/yourname/ecommerce-backend",
  },
];

export default function Projects({ id }) {
  const boxVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeSlideVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="projects-section"
      id={id}
      variants={boxVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={fadeSlideVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <p className="project-tech">
              <strong>Tech:</strong> {project.tech}
            </p>
            <a
              className="project-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
