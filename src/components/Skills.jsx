import React from "react";
import CSS from "../assets/skills-logo/css.png";
import FIREBASE from "../assets/skills-logo/firebase.png";
import HTML from "../assets/skills-logo/html.png";
import JAVASCRIPT from "../assets/skills-logo/javascript.png";
import MONGODB from "../assets/skills-logo/mongo.png";
import NODE from "../assets/skills-logo/node.png";
import REACT from "../assets/skills-logo/react.png";
import TAILWIND from "../assets/skills-logo/tailwind.png";
import GITHUB from "../assets/skills-logo/github.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* CONTAINER */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">
            These are the technologies I've worked with . . .
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={REACT} alt="react icon" />
            <p className="my-4">REACT</p>
          </div>
          
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={HTML} alt="html icon" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={CSS} alt="css icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-4"
              src={JAVASCRIPT}
              alt="javascript icon"
            />
            <p className="my-4">JAVA SCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={NODE} alt="node icon" />
            <p className="my-4">NODE JS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={GITHUB} alt="github icon" />
            <p className="my-4">GITHUB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-4"
              src={FIREBASE}
              alt="firebase icon"
            />
            <p className="my-4">FIREBASE</p>
          </div>

          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-4"
              src={MONGODB}
              alt="mongoDB icon"
            />
            <p className="my-4">MONGO DB</p>
          </div> */}

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-4"
              src={TAILWIND}
              alt="tailwind icon"
            />
            <p className="my-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
