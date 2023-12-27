import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#0A192F] w-full h-screen">
      {/* CONTAINER */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#CCD6F6]">
          SM Hazzaz Durjoy
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892B0] my-4">
          I am a Full Stack Developer
        </h2>
        <p className="text-[#8892B0] py-4 max-w-[7000px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive front-end web applications.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white group gap-3 border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-700">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
