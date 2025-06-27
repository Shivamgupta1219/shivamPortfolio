// // import React from "react";
// // import { motion } from "framer-motion";
// // import "./skill.css";
// // import {
// //   SiC,
// //   SiCplusplus,
// //   SiPython,
// //   SiHtml5,
// //   SiCss3,
// //   SiJavascript,
// //   SiReact,
// //   SiNodedotjs,
// // } from "react-icons/si";
// // function Skills({ id }) {
// //   const boxVariants = {
// //     hidden: {},
// //     visible: {
// //       transition: {
// //         staggerChildren: 0.4,
// //       },
// //     },
// //   };

// //   const fadeSlideVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.6, ease: "easeInOut" },
// //     },
// //   };

// //   return (
// //     <motion.div className="skill-sec" id={id} variants={boxVariants}>
// //       <motion.div variants={fadeSlideVariants} className="container_2">
// //         <h1 className="top-heading">KNOWLEDGE & SKILLS</h1>
// //         <div className="box">
// //           <p className="heading">Programming Languages</p>
// //           <spa className="text">C,C++,Python</spa>
// //           <div className="bubble-icons">
// //             <span>
// //               <SiC />
// //             </span>
// //             <span>
// //               <SiCplusplus />
// //             </span>
// //             <span>
// //               <SiPython />
// //             </span>
// //           </div>
// //         </div>
// //         <div className="box">
// //           <p className="heading">Web Development</p>
// //           <p className="text">HTML,CSS,JS,REACT.JS,NODE.Js</p>
// //           <div className="bubble-icons">
// //             <span>
// //               <SiCss3 />
// //             </span>
// //             <span>
// //               <SiHtml5 />
// //             </span>
// //             <span>
// //               <SiJavascript />
// //             </span>
// //             <span>
// //               <SiNodedotjs />
// //             </span>
// //             <span>
// //               <SiReact />
// //             </span>
// //           </div>
// //         </div>
// //       </motion.div>
// //     </motion.div>
// //   );
// // }

// // export default Skills;
// import React from "react";
// import { motion } from "framer-motion";
// import "./skill.css";
// import {
//   SiC,
//   SiCplusplus,
//   SiPython,
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiReact,
//   SiNodedotjs,
// } from "react-icons/si";

// function Skills({ id }) {
//   // Section animation container
//   const boxVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   // Each item animation
//   const fadeSlideVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <motion.div
//       className="skill-sec"
//       id={id}
//       variants={boxVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       <motion.div variants={fadeSlideVariants} className="container_2">
//         <h1 className="top-heading">KNOWLEDGE & SKILLS</h1>

//         {/* Programming Section */}
//         <div className="box">
//           <p className="heading">Programming Languages</p>
//           <span className="text">C, C++, Python</span>
//           <div className="bubble-icons">
//             <span><SiC /></span>
//             <span><SiCplusplus /></span>
//             <span><SiPython /></span>
//           </div>
//         </div>

//         {/* Web Dev Section */}
//         <div className="box">
//           <p className="heading">Web Development</p>
//           <span className="text">HTML, CSS, JavaScript, React.js, Node.js</span>
//           <div className="bubble-icons">
//             <span><SiHtml5 /></span>
//             <span><SiCss3 /></span>
//             <span><SiJavascript /></span>
//             <span><SiReact /></span>
//             <span><SiNodedotjs /></span>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Skills;
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./skill.css";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

function Skills({ id }) {
  const [hoverSection, setHoverSection] = useState(null);

  const boxVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
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

  const iconVariants = {
    initial: { scale: 0, opacity: 0 },
    visible: {
      scale: 1.2,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 10 },
      padding: "3px",
    },
    exit: { scale: 0, opacity: 0 },
  };

  return (
    <motion.div
      className="skill-sec"
      id={id}
      variants={boxVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={fadeSlideVariants} className="container_2">
        <h1 className="top-heading">KNOWLEDGE & SKILLS</h1>

        <div className="box"
             onMouseEnter={() => setHoverSection("prog")}
            onMouseLeave={() => setHoverSection(null)}>
          <p
            className="heading"
       
          >
            Programming Languages
          </p>
          <span className="text">C, C++, Python</span>
          <div className="bubble-icons">
            {["prog"].includes(hoverSection) && (
              <>
                <motion.span
                  variants={iconVariants}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                >
                  <SiC />
                </motion.span>
                <motion.span
                  variants={iconVariants}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                >
                  <SiCplusplus />
                </motion.span>
                <motion.span
                  variants={iconVariants}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                >
                  <SiPython />
                </motion.span>
              </>
            )}
          </div>
        </div>

        <div className="box"     onMouseEnter={() => setHoverSection("web")}
            onMouseLeave={() => setHoverSection(null)}>
          <p
            className="heading"
         
          >
            Web Development
          </p>
          <span className="text">HTML, CSS, JavaScript, React.js, Node.js</span>
          <div className="bubble-icons">
            {["web"].includes(hoverSection) && (
              <>
                <motion.span
                  variants={iconVariants}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                >
                  <SiHtml5 />
                </motion.span>
                <motion.span
                  variants={iconVariants}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                >
                  <SiCss3 />
                </motion.span>
                <motion.span
                  variants={iconVariants}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                >
                  <SiJavascript />
                </motion.span>
                <motion.span
                  variants={iconVariants}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                >
                  <SiReact />
                </motion.span>
                <motion.span
                  variants={iconVariants}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                >
                  <SiNodedotjs />
                </motion.span>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
