import { useState } from "react";
import Programming from "../components/Programming";
import Frameworks from "../components/Frameworks";
import Tools from "../components/Tools";
import SoftSkills from "../components/SoftSkills";
import CV from "../components/CV";
import { Link } from "react-router-dom";
const Work = () => {
  const [activeSection, setActiveSection] = useState("");
  return (
    <div className="bg-gradient-to-br from-rose-100 via-white to-rose-200 h-screen ">
      <Link
        to="/about"
        download
        type="button"
        className=" button w-80 h-17 bg-rose-300 rounded-lg cursor-pointer select-none
                        active:translate-y-2 
                        active:[box-shadow:0_0_0_0_#881337]
                        active:border-b-[0px]
                        transition-all duration-150 
                        shadow-4xl
                        border-b-[6px] border-rose-800 
                        font-arcade text-rose-800  text-[30px] 
                        absolute bottom-0 left-110
                                                                "
      >
        <span className="flex justify-center items-center mt-2">
          Go to About Me page
        </span>
      </Link>
      <Link
        to="/contact"
        download
        type="button"
        className=" button w-80 h-17 bg-rose-300 rounded-lg cursor-pointer select-none
                        active:translate-y-2 
                        active:[box-shadow:0_0_0_0_#881337]
                        active:border-b-[0px]
                        transition-all duration-150 
                        shadow-4xl
                        border-b-[6px] border-rose-800 
                        font-arcade text-rose-800  text-[30px] 
                        absolute bottom-0 left-210
                                                                "
      >
        <span className="flex justify-center items-center mt-2">
          Go to Contact Me page
        </span>
      </Link>
      <div className="flex flex-col justify-center items-center gap-10">
        <span className="text-[60px] font-arcade tracking-wider text-rose-300 mt-10">
          Work
        </span>
        <div
          className="flex bg-pink-400 
        items-stretch w-3/4  border-5 border-rose-300"
        >
          <div className="w-2/5  border-r-4 border-rose-300 flex flex-col">
            <div className="border-b-4 border-rose-300 cursor-pointer">
              <span
                className="text-[25px] font-arcade text-rose-300 whitespace-pre"
                onMouseEnter={() => setActiveSection("languages")}
              >
                {"Programming  Languages"}
              </span>
            </div>
            <div
              className="border-b-4 border-rose-300 cursor-pointer"
              onMouseEnter={() => setActiveSection("frameworks")}
            >
              <span className="text-[25px] font-arcade text-rose-300">
                Frameworks
              </span>
            </div>
            <div
              className="border-b-4 border-rose-300 cursor-pointer"
              onMouseEnter={() => setActiveSection("tools")}
            >
              <span className="text-[25px] font-arcade text-rose-300 cursor-pointer">
                Tools
              </span>
            </div>
            <div
              className="cursor-pointer border-b-4 border-rose-300"
              onMouseEnter={() => setActiveSection("skills")}
            >
              <span className="text-[25px] font-arcade text-rose-300">
                Soft Skills
              </span>
            </div>
            <div
              className="cursor-pointer "
              onMouseEnter={() => setActiveSection("cv")}
            >
              <span className="text-[25px] font-arcade text-rose-300 whitespace-pre">
                {"Curicullum  Vitae"}
              </span>
            </div>
          </div>
          <div className="flex-grow p-4">
            {activeSection === "languages" && <Programming />}
            {activeSection === "frameworks" && <Frameworks />}
            {activeSection === "tools" && <Tools />}
            {activeSection === "skills" && <SoftSkills />}
            {activeSection === "cv" && <CV />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
