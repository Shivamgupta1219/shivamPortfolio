import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About-Me/About";
import Project from "./components/Project/Project";
import Skills from "./components/Skill/Skills";
import Contact from "./components/Contact-Me/Contact";
import HeadingProjects from "./components/Project/HeadingProjects";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Skills id="skill" />
      <HeadingProjects />
      <Project id="projects" />
      <Contact id="contact" />
    </div>
  );
}
