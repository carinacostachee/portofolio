import { Ellipsis } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center border-2 border-rose-800 sticky top-0 z-20 bg-white">
      <Link to="/" className="text-2xl font-arcade text-rose-300  ml-5">
        {"<"}Carina{"/>"}
      </Link>
      <Link to="/tablecontents">
        <Ellipsis className=" text-rose-300 mr-5" size={60} />
      </Link>
    </div>
  );
};

export default NavBar;
