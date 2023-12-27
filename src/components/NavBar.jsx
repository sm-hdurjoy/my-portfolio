import React, { useState } from "react";
import LOGO from "../assets/hd-logo/hd-logo.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Link } from "react-scroll";

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const handleClick = () => setShowMobileNav(!showMobileNav);

  // console.log(showMobileNav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-gray-300">
      <div>
        <img src={LOGO} alt="logo_image" style={{ width: "100px" }} />
      </div>

      {/* MENU */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to="onGoingProject" smooth={true} duration={500}>
            ON-GOING
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      {/* HAMBURGER MENU */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!showMobileNav ? <FaBars /> : <FaTimes />}
      </div>

      {/* MOBILE MENU */}
      <ul
        className={
          !showMobileNav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0A192F] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            PROJECTS
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="onGoingProject"
            smooth={true}
            duration={500}
          >
            ON-GOING
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      {/* SOCIAL ICONS */}
      <div className=" fixed flex-col top-[35%] left-0 hidden lg:flex">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/hazzaz-durjoy/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/sm-hdurjoy"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6FC2B0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com/durjoy.hazzaz"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565F69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1iahRv_kCuQrhxBxsOonU0Tj5M8lzkTEY/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
