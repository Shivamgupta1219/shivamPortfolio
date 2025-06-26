import React, { useState } from "react";
import { motion } from "framer-motion";
import "./contact.css";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import emailjs from "@emailjs/browser";

export default function Contact({ id }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_uedlcgo";
    const templateId = "template_ubyc9vg";
    const publicKey = "65D0UocwBmAwXoOed";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "shivam",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log("email sent successfully ", res);
        alert("Email was sent!!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((er) => {
        console.error("Error sending email", er);
        alert("Facing some issue at this time");
      });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="contact-section"
      id={id}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="contact-container" variants={containerVariants}>
        <motion.h1 className="contact-title" variants={itemVariants}>
          Let's Connect
        </motion.h1>
        <motion.p className="contact-subtitle" variants={itemVariants}>
          I'd love to hear from you!
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          variants={containerVariants}
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            variants={itemVariants}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variants={itemVariants}
          />
          <motion.textarea
            rows="5"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variants={itemVariants}
          ></motion.textarea>
          <motion.button type="submit" variants={itemVariants}>
            Send Message
          </motion.button>
        </motion.form>

        <motion.div className="contact-socials" variants={containerVariants}>
          <motion.a
            href="https://github.com/Shivamgupta1219"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shivam-gupta-42087a255/"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
          >
            <CiLinkedin />
          </motion.a>
          <motion.a
            href="mailto:sgshivamgupta206@gmail.com"
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
          >
            <MdMarkEmailUnread />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
