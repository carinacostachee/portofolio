import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import HeroSectionHome from "../components/HeroSectionHome";

const HomePage = () => {
  return (
    <div className="grid grid-rows-10 h-screen">
      <HeroSectionHome />
    </div>
  );
};

export default HomePage;
