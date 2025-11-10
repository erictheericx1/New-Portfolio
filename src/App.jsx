import { useState } from 'react'

const SECTIONS ={
  about: "About Me",
  uxui: "UX/UI Project",
  fullstack: "Full-Stack Projects"
};

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="Sticky top-0 zz-20 flex items-center justify-between px-4 y-3 border-b border-slate-800 bg-[#05050a]/90 backdrop-blur">
      {/*HEADER */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#05050a]/90 backdrop-blur">

      </header>
    </div>
  )
}