import { Link } from "react-router-dom";
import { useState } from "react";

const HeroSectionHome = () => {
  const [showFolders, setShowFolders] = useState(false);

  const handleFolderClick = () => {
    setShowFolders(!showFolders);
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-100 via-white to-rose-200 overflow-hidden">
      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-center items-center h-screen gap-10">
        <div className="relative w-11/12 h-1/3 md:w-2/3 lg:w-1/2 xl:w-1/3 p-6 rounded-lg bg-terminal flex flex-col items-start gap-8 md:gap-20 overflow-hidden">
          <div className="flex space-x-2 mt-0">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-inconsolata text-white text-xl sm:text-2xl  lg:text-2xl xl:text-xl font-bold">
            <div>{">"}Hey, I am</div>
            <div className="w-max">
              <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-2xl sm:text-5xl text-rose-300 font-arcade">
                <span className="font-inconsolata text-white text-xl sm:text-2xl lg:text-3xl xl:text-2xl">
                  {">"}
                </span>
                Carina Costache,
              </h1>
            </div>
            <div>{">"}and I am excited to welcome you</div>
            <div>{">"}to my portofolio website!</div>

            <div>
              {" "}
              {">"}
              <span
                className="hover:underline cursor-pointer"
                onClick={handleFolderClick}
              >
                ls
              </span>
            </div>
          </div>
        </div>
        {showFolders && (
          <div className="mt-1  text-rose-300 flex flex-row sm:flex-col gap-4  justify-center items-center">
            <div className="flex flex-col items-center">
              <img
                src="/photos/pinkfolder.png"
                className="w-20 sm:w-28 h-auto"
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
