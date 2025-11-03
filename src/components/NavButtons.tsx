import { Link } from "react-router-dom";

const NavButtons = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-10 sm:mt-15 lg:mt-2">
      <Link
        to="/about"
        download
        type="button"
        className=" button w-20 h-10 sm:w-30 sm:h-17 bg-rose-300 rounded-lg cursor-pointer select-none
                        active:translate-y-2 
                        active:[box-shadow:0_0_0_0_#881337]
                        active:border-b-[0px]
                        transition-all duration-150 
                        shadow-4xl
                        border-b-[6px] border-rose-800 
                        font-arcade text-rose-800  text-xl sm:text-3xl 
                        
                                                                "
      >
        <span className="flex justify-center items-center  mt-1 sm:mt-4">
          Me
        </span>
      </Link>
      <Link
        to="/contact"
        download
        type="button"
        className=" button w-30 h-10 sm:w-50 sm:h-17 bg-rose-300 rounded-lg cursor-pointer select-none
                        active:translate-y-2 
                        active:[box-shadow:0_0_0_0_#881337]
                        active:border-b-[0px]
                        transition-all duration-150 
                        shadow-4xl
                        border-b-[6px] border-rose-800 
                        font-arcade text-rose-800  text-xl sm:text-3xl  
                        
                                                                "
      >
        <span className="flex justify-center items-center mt-1 sm:mt-4">
          Reach me
        </span>
      </Link>
    </div>
  );
};

export default NavButtons;
