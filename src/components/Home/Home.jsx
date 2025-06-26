
import React, { useState, useEffect } from "react";
import "./home.css";
import { motion } from "framer-motion";

function Home({ id }) {
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

  const [explode, setExplode] = useState(false);

  useEffect(() => {
    if (explode) {
      const timer = setTimeout(() => setExplode(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [explode]);

  const getRandomExplosion = () => ({
    x: Math.random() * 300 - 150,
    y: Math.random() * 300 - 150,
    rotate: Math.random() * 360,
    opacity: 0.5,
  });

  return (
    <div id={id}>
      <section className="Container">
        <motion.div
          className="box_1"
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            className="exploding-word"
            onMouseEnter={() => setExplode(true)}
            onMouseLeave={() => setExplode(false)}
          >
            {Array.from("A").map((char, index) => (
              <motion.span
                key={index}
                animate={
                  explode
                    ? getRandomExplosion()
                    : { x: 0, y: 0, rotate: 2, opacity: 1 }
                }
                transition={{ type: "spring", stiffness: 100, damping: 12 }}
                style={{
                  fontSize: "7rem",
                  fontWeight: "bold",
                  display: "inline-block",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="exploding-word"
            onMouseEnter={() => setExplode(true)}
            onMouseLeave={() => setExplode(false)}
          >
            {Array.from("MERN").map((char, index) => (
              <motion.span
                key={index}
                animate={
                  explode
                    ? getRandomExplosion()
                    : { x: 0, y: 0, rotate:1, opacity: 1 }
                }
                transition={{ type: "spring", stiffness: 100, damping: 12 }}
                style={{
                  fontSize: "7rem",
                  fontWeight: "bold",
                  display: "inline-block",
                  color: "#514e4e",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="exploding-word"
            onMouseEnter={() => setExplode(true)}
            onMouseLeave={() => setExplode(false)}
          >
            {Array.from("STACK").map((char, index) => (
              <motion.span
                key={index}
                animate={
                  explode
                    ? getRandomExplosion()
                    : { x: 0, y: 0, rotate: 0, opacity: 1 }
                }
                transition={{ type: "spring", stiffness: 100, damping: 12 }}
                style={{
                  fontSize: "7rem",
                  fontWeight: "bold",
                  display: "inline-block",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="exploding-word"
            onMouseEnter={() => setExplode(true)}
            onMouseLeave={() => setExplode(false)}
          >
            {Array.from("DEVELOPER").map((char, index) => (
              <motion.span
                key={index}
                animate={
                  explode
                    ? getRandomExplosion()
                    : { x: 0, y: 0, rotate: 1, opacity: 1 }
                }
                transition={{ type: "spring", stiffness: 100, damping: 12 }}
                style={{
                  fontSize: "6rem",
                  fontWeight: "bold",
                  display: "inline-block",
                  color: "#514e4e",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Paragraph box_2 */}
        <motion.div
          className="box_2"
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.p className="hello" variants={fadeSlideVariants}>
            Hello
          </motion.p>
          <motion.p className="para_one" variants={fadeSlideVariants}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quam molestias,
            nihil ipsam et minus doloremque labore iusto eum? Vel earum et vero
            veritatis itaque blanditiis repudiandae tempora aliquam repellat
            qui. Optio molestias eos dolorem. .
          </motion.p>
          <motion.p className="para_two" variants={fadeSlideVariants}>
            Laboriosam ipsa enim voluptatum minima aspernatur molestiae Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Minima, itaque.
            Sunt aperiam ipsum, quos autem eveniet reiciendis illum veniam?
            Eaque eligendi eius officia.
          </motion.p>
        </motion.div>
      </section>
      <hr className="line" />
    </div>
  );
}

export default Home;
