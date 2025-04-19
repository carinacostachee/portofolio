import { Link } from "react-router-dom";

const TableContents = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link to="/about" className="text-lg font-arcade text-rose-300">
        About Me
      </Link>
      <Link to="/work" className="text-lg font-arcade text-rose-300">
        Work
      </Link>
      <Link to="/contact" className="text-lg font-arcade text-rose-300">
        Contact Me
      </Link>
    </div>
  );
};

export default TableContents;
