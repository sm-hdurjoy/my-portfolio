import React from "react";
import PROJECT1 from "../assets/projects/realestate.jpg";
import PROJECT2 from "../assets/projects/workImg.jpeg";

const OnGoingProjects = () => {
  return (
    <div
      className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4"
      name="onGoingProject"
    >
      {/* CONTAINER */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 ">
            On-Going Projects
          </p>
          <p className="py-6 text-gray-300">
            Check out some of  projects . . .
          </p>
        </div>

        {/* CONTAINER */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* GRID ITEM CARD */}
          <div
            style={{ backgroundImage: `url(${PROJECT2})` }}
            className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* HOVER EFFECT */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                REACT JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* GRID ITEM CARD */}
          <div
            style={{ backgroundImage: `url(${PROJECT1})` }}
            className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* HOVER EFFECT */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                REACT JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnGoingProjects;
