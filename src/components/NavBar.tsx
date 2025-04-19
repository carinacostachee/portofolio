import { Ellipsis } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-between border-2 border-rose-800 ">
      <Link
        to="/"
        className="text-2xl font-arcade text-rose-300 mt-6  size={50}"
      >
        {"<"}Carina{"/>"}
      </Link>
      <Link to="/tablecontents">
        <Ellipsis className=" text-rose-300 mt-6" size={50} />
      </Link>
    </div>
  );
};

export default NavBar;
