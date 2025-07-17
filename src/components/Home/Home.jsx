import React, { useState, useEffect } from "react";
import "./home.css";
import { motion } from "framer-motion";

function Home({ id }) {
  const [explode, setExplode] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [loopStarted, setLoopStarted] = useState(false);

  const startExplosionLoop = () => {
    if (!loopStarted) {
      setLoopStarted(true);
      const id = setInterval(() => {
        setExplode(true);
        setTimeout(() => setExplode(false), 400);
      }, 2500);
      setIntervalId(id);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const renderWord = (text) => {
    return (
      <motion.div className="exploding-word" onMouseEnter={startExplosionLoop}>
        {Array.from(text).map((char, index) => {
          const explosionStyle = explode
            ? {
                x: Math.random() * 500 - 100,
                y: Math.random() * 200 - 100,
                rotate: Math.random() * 360,
                scale: 2,
                opacity: 0.5,
              }
            : {
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                opacity: 1,
              };

          return (
            <motion.span
              key={index}
              animate={explosionStyle}
              initial={false}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 12,
                duration: 0.6,
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div id={id}>
      <section className="Container">
        <div className="box_1">
          <div className="explosion">
            {renderWord("A")}
            {renderWord("MERN")}
            {renderWord("STACK")}
            {renderWord("DEVELOPER")}
          </div>
        </div>
        <div className="box_2">
          <p className="hello">Hello</p>
          <p className="para_one">
            My name is Shivam Gupta. I am an aspiring Python Developer and Full stack Web
            Developer based in India with additional experience in data analysis
            and front-end design. As a Developer, I enjoy building responsive,
            user-friendly web applications using technologies like React.js,
            Tailwind CSS, and the MERN stack. I also have experience creating
            real-world projects such as a Student Attendance Management System
            using Python, Tkinter, SQLite, and Pandas. Alongside development, I
            focus on improving my skills in modern UI design and data
            visualization to present information clearly and effectively. I
            believe in continuous learning and hands-on practice to grow my
            technical and communication skills for a successful career in tech.
          </p>
          <p className="para_two"></p>
        </div>
      </section>
    </div>
  );
}

export default Home;
