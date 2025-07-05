import React from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

function App() {
  return (
   <div className="font-sans bg-ash min-h-screen">
      <nav className="bg-brown text-white shadow p-4 flex justify-between">
        <div className="font-bold text-xl">Deborah</div>
        <div className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#resume" className="hover:underline">Resume</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Profile section */}
      <Profile />

      <main>
        <section id="home"><Home /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;