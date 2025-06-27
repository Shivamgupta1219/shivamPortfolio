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
      }, 1000);
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            molestias, nihil ipsam et minus doloremque labore iusto eum? Vel
            earum et vero veritatis itaque blanditiis repudiandae tempora
            aliquam repellat qui. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates asperiores accusamus reiciendis nobis
            ducimus rem, non debitis optio iste, cupiditate facere nihil
            expedita quasi. Ratione obcaecati natus, magni culpa eum accusantium
            mollitia optio officia earum illum excepturi a veritatis nesciunt
            voluptatibus quis explicabo exercitationem ut cupiditate rerum
            repudiandae expedita quod quisquam, quibusdam sed. Necessitatibus
            aliquam architecto incidunt neque quisquam animi et sunt sapiente
            tempore! Delectus mollitia pariatur doloremque est repellat aperiam
            omnis numquam quibusdam tempore amet aliquam velit nulla earum
            deleniti qui, accusantium, exercitationem id repudiandae? Veritatis
            repellendus soluta placeat adipisci doloribus sequi molestias
            corrupti incidunt molestiae iste nostrum eveniet neque, aliquam
            cupiditate a velit eligendi distinctio, eum maxime. Ad, ab nam,
            similique amet rerum nihil, laborum odit quidem doloremque sapiente
            itaque tenetur.
          </p>
          <p className="para_two">
            Laboriosam ipsa enim voluptatum minima aspernatur molestiae. Minima,
            itaque. Sunt aperiam ipsum, quos autem eveniet reiciendis illum
            veniam? Eaque eligendi eius officia. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti ipsa pariatur fugit
            consequatur culpa obcaecati inventore nihil omnis deserunt, quod
            illum quos ipsam.
          </p>
        </div>
      </section>
      <hr className="line" />
    </div>
  );
}

export default Home;
