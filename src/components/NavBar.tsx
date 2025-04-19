import { Ellipsis } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-between ">
      <Link to="/" className="text-2xl font-arcade text-rose-300 mt-6 ml-6">
        {"<"}Carina{"/>"}
      </Link>
      <Link to="/tablecontents">
        <Ellipsis className="text-2xl text-rose-300 mt-6 mr-6" />
      </Link>
    </div>
  );
};

export default NavBar;
