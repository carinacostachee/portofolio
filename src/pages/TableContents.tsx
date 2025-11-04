import { Link } from "react-router-dom";

const TableContents = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-rose-100 via-white to-rose-200 flex flex-col justify-center items-center gap-4">
      <Link
        to="/about"
        className=" text-[60px] sm:text-[80px] font-arcade text-rose-300 hover:text-[70px] sm:hover:text-[100px] transition-all duration-300 ease-in-out hover:underline drop-shadow-x1/25"
      >
        About Me
      </Link>
      <Link
        to="/work"
        className="text-[60px] sm:text-[80px] font-arcade text-rose-300 hover:text-[70px] sm:hover:text-[100px] transition-all duration-300 ease-in-out hover:underline"
      >
        Work
      </Link>
      <Link
        to="/contact"
        className="text-[60px] sm:text-[80px] font-arcade text-rose-300 hover:text-[70px] sm:hover:text-[100px] transition-all duration-300 ease-in-out hover:underline"
      >
        Contact Me
      </Link>
    </div>
  );
};

export default TableContents;
