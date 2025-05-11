import { Link } from "react-router-dom";

const HeroSectionHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-white to-rose-200 ">
      <img
        src="/public/photos/computer.png"
        className=" absolute top-50 left-30 animate-float w-20"
      ></img>
      <img
        src="/public/photos/cafea.png"
        className="absolute bottom-14 right-20 animate-float w-20"
      ></img>
      <img
        src="/public/photos/meme.png"
        className="absolute top-75 right-50 animate-float w-30"
      ></img>
      <img
        src="/public/photos/pisica.png"
        className="absolute bottom-20 left-30 animate-float w-30"
      ></img>
      <img
        src="/public/photos/cherries.png"
        className="absolute top-30 left-200 animate-float w-20"
      ></img>
      <img
        src="/public/photos/parfun.png"
        className="absolute bottom-90 left-70 animate-float w-20"
      ></img>
      <img
        src="/public/photos/pasta.png"
        className="absolute bottom-60 right-90 animate-float w-20"
      ></img>
      <img
        src="/public/photos/sunflower.png"
        className="absolute bottom-5 left-150 animate-float w-20"
      ></img>
      <img
        src="/public/photos/headphones.png"
        className="absolute top-20 left-100 animate-float w-20"
      ></img>
      <img
        src="/photos/bag.png"
        className="absolute top-20 right-20 animate-float w-20"
      ></img>
      <div className="flex flex-col justify-center items-center h-screen gap-10">
        <div className="relative w-full max-w-xl h-1/2 p-6 rounded-lg bg-terminal flex flex-col  items-start gap-20 overflow-hidden">
          <div className="flex space-x-2 mt-0">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-inconsolata text-white text-3xl text-bold  ">
            {">"}Hey, I am
            <div className="w-max">
              <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-rose-300 font-arcade">
                <span className="font-inconsolata text-white text-3xl">
                  {">"}
                </span>
                Carina Costache,
              </h1>
            </div>{" "}
            {">"}and I am excited to welcome you {">"}to my portofolio website!
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-10">
          <Link
            to="/about"
            className="text-3xl font-arcade text-rose-300 hover:underline "
          >
            more about me...
          </Link>
          <Link
            to="/work"
            className="text-3xl font-arcade text-rose-300 hover:underline"
          >
            my work,
          </Link>
          <Link
            to="/contact"
            className="text-3xl font-arcade text-rose-300 hover:underline"
          >
            or how you can reach me.
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeroSectionHome;
