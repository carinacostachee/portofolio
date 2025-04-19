import { Link } from "react-router-dom";

const TableContents = () => {
  return (
    <div className="grid grid-cols-12 h-screen bg-gradient-to-br from-rose-100 via-white to-rose-200">
      <div className="col-span-7 ">
        <img
          src="/photos/pngegg.png"
          className="absolute top-70 left-100 animate-float w-20"
        ></img>
        <img
          src="/photos/eu.png"
          className="absolute  w-80 top-90 left-70"
        ></img>
      </div>
      <div className=" col-span-5 flex flex-col justify-center items-start gap-4">
        <Link
          to="/about"
          className="text-[80px] font-arcade text-rose-300 hover:text-[100px] transition-all duration-300 ease-in-out hover:underline"
        >
          About Me
        </Link>
        <Link
          to="/work"
          className="text-[80px] font-arcade text-rose-300 hover:text-[100px] transition-all duration-300 ease-in-out hover:underline"
        >
          Work
        </Link>
        <Link
          to="/contact"
          className="text-[80px] font-arcade text-rose-300 hover:text-[100px] transition-all duration-300 ease-in-out hover:underline"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default TableContents;
