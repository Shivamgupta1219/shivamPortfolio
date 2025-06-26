import React from "react";
import { motion } from "framer-motion";

function HeadingProjects() {
  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        backgroundColor: "#222",
        color: "#e6e6e6",
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          },
        }}
        style={{ display: "inline-flex" }}
      >
        <span
          style={{ fontSize: "5rem", fontWeight: "bold", marginRight: "4rem" }}
        >
          PROJECTS PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECTS
          PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT
        </span>
      </motion.div>
    </div>
  );
}

export default HeadingProjects;
