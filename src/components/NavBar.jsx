import React, { useState } from "react";
import LOGO from "../assets/hd-logo/hd-logo.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

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
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SKILLS</li>
        <li>WORK</li>
        <li>CONTACT</li>
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
        <li className="py-6 text-4xl">HOME</li>
        <li className="py-6 text-4xl">ABOUT</li>
        <li className="py-6 text-4xl">SKILLS</li>
        <li className="py-6 text-4xl">WORK</li>
        <li className="py-6 text-4xl">CONTACT</li>
      </ul>

      {/* SOCIAL ICONS */}
      <div className=" fixed flex-col top-[35%] left-0 hidden lg:flex">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6FC2B0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565F69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
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
