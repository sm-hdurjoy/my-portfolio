import React from "react";
import PROJECT1 from "../assets/projects/realestate.jpg";
import PROJECT2 from "../assets/projects/workImg.jpeg";
import A2Z_CNS from "../assets/projects/a2z-cns-img.jpg";
import TODO_TASK_MANAGER from "../assets/projects/todo-task-manager.jpg";

const Projects = () => {
  return (
    <div name="projects" className="bg-[#0a192f] w-full h-screen text-gray-300">
      {/* CONTAINER */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 ">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects . . </p>
        </div>

        {/* CONTAINER */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* GRID ITEM CARD */}
          <div
            style={{ backgroundImage: `url(${A2Z_CNS})` }}
            className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* HOVER EFFECT */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                A2Z CNS Landing Page
              </span>
              <div className="pt-8 text-center">
                <a href="http://a2zcns.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a> */}
              </div>
            </div>
          </div>

          {/* GRID ITEM CARD */}
          <div
            style={{ backgroundImage: `url(${TODO_TASK_MANAGER})` }}
            className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* HOVER EFFECT */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                TODO TASK MANAGER
              </span>
              <div className="pt-8 text-center">
                <a href="https://todo-task-manager-spa.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/sm-hdurjoy/TODO-task-manager-SPA">
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

export default Projects;
