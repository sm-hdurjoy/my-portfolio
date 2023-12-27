import React from "react";
import LOGO from "../assets/hd-logo/hd-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
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
      <div className="hidden">
        <FaBars />
      </div>

      {/* MOBILE MENU */}
      <ul className="hidden">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SKILLS</li>
        <li>WORK</li>
        <li>CONTACT</li>
      </ul>

      {/* SOCIAL ICONS */}
      <div className="hidden"></div>
    </div>
  );
};

export default NavBar;
