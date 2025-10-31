import { Link } from "react-router-dom";
import { useState } from "react";

const HeroSectionHome = () => {
  const [showFolders, setShowFolders] = useState(false);

  const handleFolder = () => {
    setShowFolders(!showFolders);
  };

  const triggerFolderDisplay = () => {
    const input = document.getElementById("ls_folders") as HTMLInputElement;
    if (input && input.value.toLocaleLowerCase() === "ls") {
      handleFolder();
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-100 via-white to-rose-200 overflow-hidden ">
      <div
        className="fixed inset-0 z-10 opacity-15 w-full h-full pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #ff69b4, #ff69b4 1px, transparent 1px, transparent 26px), repeating-linear-gradient(90deg, #ff69b4, #ff69b4 1px, transparent 1px, transparent 26px)",
          backgroundSize: "26px 26px",
        }}
      ></div>
      <div className="flex flex-col lg:flex-row justify-center items-center h-screen gap-10 p-4 z-12">
        <div className="flex flex-col items-center gap-4">
          <div className="font-inconsolata text-rose-300 font-bold text-2xl sm:4xl">
            Type 'ls' in the terminal to see secret folders!
          </div>
          <div className="relative w-11/12 md:w-full p-6 rounded-lg bg-terminal flex flex-col items-start gap-8 md:gap-20 overflow-hidden z-12">
            <div className="flex space-x-2 mt-0">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-inconsolata text-white text-xl sm:text-2xl lg:text-2xl xl:text-xl font-bold">
              <div>{">"} Hey, I am</div>
              <div className="w-max">
                <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-2xl sm:text-5xl text-rose-300 font-arcade">
                  <span className="font-inconsolata text-white text-xl sm:text-2xl lg:text-3xl xl:text-2xl">
                    {">"}
                  </span>
                  Carina Costache,
                </h1>
              </div>
              <div>{">"} and I am excited to welcome you</div>
              <div>{">"} to my portofolio website!</div>

              <div>
                {" "}
                {">"}user@123~
                <span>
                  <label
                    htmlFor="ls_folders"
                    className="text-white font-inconsolata"
                  ></label>
                  <input
                    className="focus:outline-none"
                    type="text"
                    id="ls_folders"
                    placeholder="..."
                    onInput={triggerFolderDisplay}
                    required
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        {showFolders && (
          <div className="mt-1  text-rose-300 flex flex-row sm:flex-col gap-4  justify-center items-center">
            <div className="flex flex-col items-center">
              <img
                src="/photos/pinkfolder.png"
                className="w-20 sm:w-28 h-auto "
              ></img>
              <Link
                to="/about"
                className="text-xl sm:text-3xl font-arcade text-rose-300 hover:underline text-center"
              >
                Me
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/photos/pinkfolder.png"
                className="w-20 sm:w-28 h-auto"
              ></img>
              <Link
                to="/work"
                className="text-xl sm:text-3xl font-arcade text-rose-300 hover:underline text-center"
              >
                Work
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/photos/pinkfolder.png"
                className="w-20 sm:w-28 h-auto"
              ></img>
              <Link
                to="/contact"
                className="text-xl sm:text-3xl font-arcade text-rose-300 hover:underline text-center"
              >
                Reach me
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default HeroSectionHome;
