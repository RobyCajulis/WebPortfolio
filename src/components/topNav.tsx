import Logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { CiLight } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

function TopNav() {

   const [open, setOpen] = useState(false);

  return (
     <nav className="fixed top-0 left-0 w-full bg-gray-950 border-b border-gray-900 md:flex md:items-center md:justify-between z-50">

      <div className="flex justify-between items-center">
          <a href = "#landing" className="cursor-pointer h-10 inline">
          <img 
          src={Logo}
          alt= "My Logo"
          className="h-10 w-auto object-contain ps-10"
          /> 
          </a>

          <span
          className="text-3xl cursor-pointer mx-5 md:hidden block text-white"
          onClick={() => setOpen(!open)}
        >
          <RxHamburgerMenu />
        </span>
      </div>
      <ul
        className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 bg-gray-950 transition-all ease-in duration-300
        ${open ? "top-14 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"}`}
      >
        <li className="mx-4 my-6 md::my-0">
          <a href="#experience" className="text-xl hover:text-gray-400 transitions-colors text-white">Experience</a>
        </li>
        <li className="mx-4 my-6 md::my-0">
          <a href="#education" className="text-xl hover:text-gray-400 transitions-colors text-white">About</a>
        </li>
       <li className="mx-4 my-6 md::my-0">
          <a href="#project" className="text-xl hover:text-gray-400 transitions-colors text-white">Projects</a>
        </li>
        <li className="mx-4 my-6 md::my-0">
          <a href="#skills" className="text-xl hover:text-gray-400 transitions-colors text-white">Skills</a>
        </li>
        <li className="mx-4 my-6 md::my-0">
          <a href="#contact" className="text-xl hover:text-gray-400 transitions-colors text-white">Contact</a>
        </li>
        <div className="h-7 text-white size-1"></div>
        <li className="mx-4 my-6 md::my-0">
          <a href="https://github.com/RobyCajulis" target="_blank" rel="noreferrer" className="text-center text-lg text-white hover:text-gray-400 transition-colors cursor-pointer"> <LuGithub size ={30}/></a>
        </li>
        <li className="mx-4 my-6 md::my-0">
          <a href="https://www.linkedin.com/in/rossbrent-cajulis-90a691415/" target="_blank" rel="noreferrer" className="text-center text-lg text-white hover:text-gray-400 transition-colors cursor-pointer"> <FaLinkedin size ={30}/></a>
        </li>
       <li className="mx-4 my-6 md::my-0">
          <button className="h-7 text-white hover:text-gray-400 transition-colors cursor-pointer">
            <CiLight size={30}/>
          </button>
        </li>
      </ul>
    </nav>

  );
}

export default TopNav;



















/* 

import Logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { CiLight } from "react-icons/ci";

<div className="bg-gray-950 py-4"> old syntax for top nav
    <div className="fixed top-0 left-0 w-full bg-gray-950 py-4 z-50 border-b border-gray-900">
      <div className="flex items-center justify-between px-15">
        <div className="w-25">
          <a href = "#landing" className="cursor-pointer">
          <img 
          src={Logo}
          alt= "My Logo"
          className="h-15 w-auto object-contain pt-1.5"
          /> 
          </a>
        </div>
        <div className="flex space-x-15 ">
          <a href="#experience" className="text-center text-lg text-white hover:text-gray-400 transition-colors cursor-pointer">Experience</a>
          <a href="#education" className="text-center text-lg text-white hover:text-gray-400 transition-colors cursor-pointer">About</a>
          <a href="#projects" className="text-center text-lg text-white hover:text-gray-400 transition-colors cursor-pointer">Projects</a>
          <a href="#skills" className="text-center text-lg text-white hover:text-gray-400 transition-colors cursor-pointer">Skills</a>
          <a href="#contact" className="text-center text-lg text-white hover:text-gray-400 transition-colors cursor-pointer">Contact</a>
        </div>
        
        <div className="flex space-x-5">
          <div className="h-7 text-white size-1">|</div>
          <a href="https://github.com/RobyCajulis" target="_blank" rel="noreferrer" className="text-center text-lg text-white hover:text-gray-400 transition-colors cursor-pointer"> <LuGithub size ={30}/></a>
          <a href="https://www.linkedin.com/in/rossbrent-cajulis-90a691415/" target="_blank" rel="noreferrer" className="text-center text-lg text-white hover:text-gray-400 transition-colors cursor-pointer"> <FaLinkedin size ={30}/></a>
          <button className="h-7 text-white hover:text-gray-400 transition-colors cursor-pointer">
            <CiLight size={30}/>
          </button>
        </div>
      </div>
    </div> 
    */