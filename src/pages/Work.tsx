import { useState } from "react";
import Programming from "../components/Programming";
import Frameworks from "../components/Frameworks";
import Tools from "../components/Tools";
import SoftSkills from "../components/SoftSkills";

const Work = () => {
  const [activeSection, setActiveSection] = useState("");
  return (
    <div className="bg-gradient-to-br from-rose-100 via-white to-rose-200 h-screen ">
      <div className="flex flex-col justify-center items-center gap-10">
        <span className="text-[60px] font-arcade tracking-wider text-rose-300 mt-10">
          Work
        </span>
        <div className="flex bg-pink-400 w-3/4 h-200px border-5 border-rose-300">
          <div className="w-2/5 h-full border-r-4 border-rose-300">
            <div className="border-b-4 border-rose-300 cursor-pointer">
              <span
                className="text-[25px] font-arcade text-rose-300"
                onMouseEnter={() => setActiveSection("languages")}
              >
                Programming Languages
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
              className="border-b-4 border-rose-300 cursor pointer"
              onMouseEnter={() => setActiveSection("tools")}
            >
              <span className="text-[25px] font-arcade text-rose-300">
                Tools
              </span>
            </div>
            <div
              className="cursor-pointer"
              onMouseEnter={() => setActiveSection("skills")}
            >
              <span className="text-[25px] font-arcade text-rose-300">
                Soft Skills
              </span>
            </div>
          </div>
          <div className="flex-grow p-4">
            {activeSection === "languages" && <Programming />}
            {activeSection === "frameworks" && <Frameworks />}
            {activeSection === "tools" && <Tools />}
            {activeSection === "skills" && <SoftSkills />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
