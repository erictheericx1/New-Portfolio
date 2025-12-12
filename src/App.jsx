import React from 'react';
import { useState } from 'react';

const SECTIONS ={
  about: "About Me",
  uxui: "UX/UI Project",
  fullstack: "Full-Stack Projects"
};

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen bg-black text-green-400 p-10">
      <header>
        <h1>Eric Lopez</h1>
          <h2>UX/UI Designer + Full-Stack Developer</h2>
            <h3>I design and build accessible, user-centered web apps—often blending clean UI with practical engineering.</h3>
            <button>View Work</button>
            <button>Contact</button>
      </header>
    </div>
  )
}