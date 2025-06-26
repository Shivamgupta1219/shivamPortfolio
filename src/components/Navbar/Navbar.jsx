
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./navbar.css";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navLinks = ["home", "about", "projects", "contact", "skill"];

  const menuDrop = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0 },
  };

  const menuItem = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <nav className="navbar">
      <motion.div
        className="navbar-logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
      >
        SHIVAM GUPTA
      </motion.div>

      <div className="navbar-links desktop">
        {navLinks.map((item, i) => (
          <motion.a
            key={i}
            href={`#${item}`}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 5px blue",
              padding: "5px",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </motion.a>
        ))}
        <motion.a
          href="/Resume.pdf"
          target="_blank"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 5px blue",
            padding: "5px",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <FaCloudDownloadAlt style={{ marginRight: "5px" }} />
          Resume
        </motion.a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="navbar-links mobile"
            variants={menuDrop}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((item, i) => (
              <motion.a
                key={i}
                href={`#${item}`}
                variants={menuItem}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
            <motion.a
              href="/Resume.pdf"
              target="_blank"
              variants={menuItem}
              onClick={() => setIsMenuOpen(false)}
            >
              <FaCloudDownloadAlt style={{ marginRight: "5px" }} />
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
