import { useState } from "react";
import Programming from "../components/Programming";
import Frameworks from "../components/Frameworks";
import Tools from "../components/Tools";
import SoftSkills from "../components/SoftSkills";
import CV from "../components/CV";
import { Link } from "react-router-dom";
import BackgroundStyle from "../components/BackgroundStyle";
const Work = () => {
  const [activeSection, setActiveSection] = useState("");
  return (
    <div className="bg-gradient-to-br from-rose-100 via-white to-rose-200 h-screen ">
      <BackgroundStyle />

      <div className="flex flex-col justify-center items-center gap-5 sm:gap-20 lg:gap-10 ">
        <span className="text-[60px] font-arcade tracking-wider text-rose-300 mt-10">
          Work
        </span>
        <div
          className="flex bg-pink-400 w-4/5
         sm:w-3/4   border-5 border-rose-300 overflow-hidden"
        >
          <div className="w-2/5  border-r-4 border-rose-300 flex flex-col">
            <div className="border-b-4 border-rose-300 cursor-pointer">
              <span
                className=" text-sm sm:text-3xl font-arcade text-rose-300  overflow-hidden"
                onMouseEnter={() => setActiveSection("languages")}
              >
                {"Programming  Languages"}
              </span>
            </div>
            <div
              className="border-b-4 border-rose-300 cursor-pointer"
              onMouseEnter={() => setActiveSection("frameworks")}
            >
              <span className="text-sm sm:text-3xl font-arcade text-rose-300">
                Frameworks
              </span>
            </div>
            <div
              className="border-b-4 border-rose-300 cursor-pointer"
              onMouseEnter={() => setActiveSection("tools")}
            >
              <span className="text-sm sm:text-3xl font-arcade text-rose-300 cursor-pointer">
                Tools
              </span>
            </div>
            <div
              className="cursor-pointer border-b-4 border-rose-300"
              onMouseEnter={() => setActiveSection("skills")}
            >
              <span className="text-sm sm:text-3xl font-arcade text-rose-300">
                Soft Skills
              </span>
            </div>
            <div
              className="cursor-pointer "
              onMouseEnter={() => setActiveSection("cv")}
            >
              <span className="text-sm sm:text-3xl font-arcade text-rose-300 ">
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

        <div className="flex flex-row justify-center items-center gap-10 mt-10 mb-10">
          <Link
            to="/about"
            download
            type="button"
            className=" button w-30 h-17 bg-rose-300 rounded-lg cursor-pointer select-none
                        active:translate-y-2 
                        active:[box-shadow:0_0_0_0_#881337]
                        active:border-b-[0px]
                        transition-all duration-150 
                        shadow-4xl
                        border-b-[6px] border-rose-800 
                        font-arcade text-rose-800  text-xl sm:text-3xl 
                        
                                                                "
          >
            <span className="flex justify-center items-center mt-2">
              Me page
            </span>
          </Link>
          <Link
            to="/contact"
            download
            type="button"
            className=" button w-50 h-17 bg-rose-300 rounded-lg cursor-pointer select-none
                        active:translate-y-2 
                        active:[box-shadow:0_0_0_0_#881337]
                        active:border-b-[0px]
                        transition-all duration-150 
                        shadow-4xl
                        border-b-[6px] border-rose-800 
                        font-arcade text-rose-800  text-xl sm:text-3xl  
                        
                                                                "
          >
            <span className="flex justify-center items-center mt-2">
              Reach me page
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
