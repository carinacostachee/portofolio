import { Mail } from "lucide-react";
import { GitMerge } from "lucide-react";
import { LuLinkedin } from "react-icons/lu";
import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <div className="bg-gradient-to-br from-rose-100 via-white to-rose-200 h-screen">
      <div className="flex flex-col  min-h-screen  w-full   ">
        <h1 className="text-5xl sm:text-[70px] font-arcade tracking-wider text-start text-rose-300 mt-40 ml-20 sm:ml-40">
          Contact
        </h1>
        <hr className="border-rose-800 border-t-[5px] w-2/3" />
        <div className="flex flex-row items-start justify-start gap-2 sm:gap-5">
          <Mail className="text-rose-800 ml-10 sm:ml-25 mt-10 w-8 h-8 sm:w-10 sm:h-10" />
          <a
            href="mailto:carinacostache@gmail.com"
            className="font-inconsolata text-rose-300 hover:underline mt-10 text-[20px] sm:text-[30px] font-bold "
          >
            carinacostache@gmail.com
          </a>
        </div>
        <div className="flex flex-row items-center gap-2 sm:gap-5">
          <GitMerge className="text-rose-800 ml-10 sm:ml-25 mt-10 w-8 h-8 sm:w-10 sm:h-10" />
          <a
            href="https://github.com/carinacostachee"
            className="font-inconsolata text-rose-300 hover:underline mt-10 text-[18px] sm:text-[30px] font-bold"
          >
            check my Github account
          </a>
        </div>
        <div className="flex flex-row items-start justify-start gap-2 sm:gap-5">
          <LuLinkedin className="text-rose-800 ml-10 sm:ml-25 mt-10 w-8 h-8 sm:w-10 sm:h-10" />
          <a
            href="https://www.linkedin.com/in/carina-costache-1505a3247/"
            className="font-inconsolata text-rose-300 hover:underline mt-10 text-[20px] sm:text-[30px] font-bold"
          >
            and my Linkedin account ;)
          </a>
        </div>
        <div className="flex flex-row justify-center items-center gap-20 mt-25 sm:gap-15 sm:mt-50">
          <Link
            to="/work"
            download
            type="button"
            className=" button w-30 h-12 sm:w-80 sm:h-17 bg-rose-300 rounded-lg cursor-pointer select-none
                        active:translate-y-2 
                        active:[box-shadow:0_0_0_0_#881337]
                        active:border-b-[0px]
                        transition-all duration-150 
                        shadow-4xl
                        border-b-[6px] border-rose-800 
                        font-arcade text-rose-800  text-2xl sm:text-[40px] 
                        
                                                                "
          >
            <span className="flex justify-center items-center mt-1">Work</span>
          </Link>
          <Link
            to="/about"
            download
            type="button"
            className=" button w-30 h-12 sm:w-80 sm:h-17 bg-rose-300 rounded-lg cursor-pointer select-none
                        active:translate-y-2 
                        active:[box-shadow:0_0_0_0_#881337]
                        active:border-b-[0px]
                        transition-all duration-150 
                        shadow-4xl
                        border-b-[6px] border-rose-800 
                        font-arcade text-rose-800  text-2xl text-[40px] 
                        
                                                                "
          >
            <span className="flex justify-center items-center mb-2">Me</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
