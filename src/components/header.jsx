import { useState } from "react";
import gsap from "gsap";
import { AnimatePresence } from "framer-motion";
import {motion} from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [home,setHome] = useState(false)
const [about,setAbout] = useState(false)
const [projects,setProjects] = useState(false)
const [contact,setContact] = useState(false)
const [exp,setExp] = useState(false)
// const [resp,setResp] = useState(false)
  
const goToprojects = () => {
  setIsMenuOpen(!isMenuOpen)
 document.getElementById("projects").scrollIntoView()
}


  return (
    <header className="flex sticky z-40 top-0  justify-between p-6 bg-black text-white sm:bg-[#0F172A]">
      <h1 className="text-3xl font-semibold font-serif">
        Trafeh Zouhair
      </h1>

      <ul className="hidden sm:flex text-lg font-semibold gap-8">
  {/* <li
    className="cursor-pointer"
    onMouseEnter={() => setHome(true)}
    onMouseLeave={() => setHome(false)}
  >
    <a href="#home">Home</a>
    <div
      className={`bg-gradient-to-r from-[#0300ae] to-blue-500 h-2 rounded ${home ? "w-full" : "w-4"} transition-all duration-200 ease-out`}
    ></div>
  </li> */}

  <li
    className="cursor-pointer"
    onMouseEnter={() => setAbout(true)}
    onMouseLeave={() => setAbout(false)}
  >
    <a href="#about"onClick={() => document.getElementById("about").scrollIntoView()}>About</a>
    <div
      className={`bg-gradient-to-r from-[#0300ae] to-blue-500 h-2 rounded ${
        about ? "w-full" : "w-4"
      } transition-all duration-200 ease-out`}
    ></div>
  </li>
  <li
    className="cursor-pointer"
    onMouseEnter={() => setExp(true)}
    onMouseLeave={() => setExp(false)}
  >
    <a href="#skills" onClick={() => document.getElementById("skills").scrollIntoView()}>Skills</a>
    <div
      className={`bg-gradient-to-r from-[#0300ae] to-blue-500 h-2 rounded ${
        exp ? "w-full" : "w-4"
      } transition-all duration-200 ease-out`}
    ></div>
  </li>

  <li
    className="cursor-pointer"
    onMouseEnter={() => setProjects(true)}
    onMouseLeave={() => setProjects(false)}
  >
    <a href="#projects" onClick={() => document.getElementById("projects").scrollIntoView()}>Projects</a>
    <div
      className={`bg-gradient-to-r from-[#0300ae] to-blue-500 h-2 rounded ${
        projects ? "w-full" : "w-4"
      } transition-all duration-200 ease-out`}
    ></div>
  </li>


  <li
    className="cursor-pointer"
    onMouseEnter={() => setContact(true)}
    onMouseLeave={() => setContact(false)}
  >
    <a href="#contact" onClick={() => document.getElementById("contact").scrollIntoView()}>Contact</a>
    <div
      className={`bg-gradient-to-r from-[#0300ae] to-blue-500 h-2 rounded ${
        contact ? "w-full" : "w-4"
      } transition-all duration-200 ease-out`}
    ></div>
  </li>
</ul>

  <div className="relative sm:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <AnimatePresence mode="wait">
        {!isMenuOpen?(
    <motion.svg
    key="burger"
    className="h-6 w-6"
    fill="none"
    stroke="white"
    viewBox="0 0 24 24"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 10 }}
    transition={{ duration: 0.3 }}
  >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </motion.svg>)
:
<motion.svg key="close"
            className="h-6 w-6"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />


</motion.svg>
}

</AnimatePresence>
        </button>


        <ul
          className={`absolute -right-7 mt-4 bg-black text-whiteww w-32 flex flex-col gap-4 p-4 rounded-lg shadow-lg transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            {/* <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a> */}
          </li>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          </li>
          <li>
            <a href="#Experties" onClick={() => setIsMenuOpen(false)}>Skills</a>
          </li>
          <li>
            <a href="#projects"  onClick={goToprojects}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
