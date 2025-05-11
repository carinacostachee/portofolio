import { Mail } from "lucide-react";
import { GitMerge } from "lucide-react";
import { LuLinkedin } from "react-icons/lu";
import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <div className="bg-gradient-to-br from-rose-100 via-white to-rose-200 h-screen">
      <div className="flex flex-col  h-screen  w-full   ">
        <h1 className="text-[70px] font-arcade tracking-wider text-start text-rose-300 mt-40 ml-40">
          Contact
        </h1>
        <hr className="border-rose-800 border-t-[5px] w-1/2 " />
        <div className="flex flex-row gap-10">
          <Mail className="text-rose-800 ml-25 mt-10 " size={50} />
          <a
            href="mailto:carinacostache@gmail.com"
            className="font-inconsolata text-rose-300 hover:underline mt-10 text-[30px] font-bold "
          >
            carinacostache@gmail.com
          </a>
        </div>
        <div className="flex flex-row gap-10">
          <GitMerge className="text-rose-800 ml-25 mt-10" size={50} />
          <a
            href="https://github.com/carinacostachee"
            className="font-inconsolata text-rose-300 hover:underline mt-10 text-[30px] font-bold"
          >
            check my Github account
          </a>
        </div>
        <div className="flex flex-row gap-10">
          <LuLinkedin className="text-rose-800 ml-25 mt-10" size={50} />
          <a
            href="https://www.linkedin.com/in/carina-costache-1505a3247/"
            className="font-inconsolata text-rose-300 hover:underline mt-10 text-[30px] font-bold"
          >
            and my Linkedin account ;)
          </a>
        </div>
        <div className="flex flex-row justify-center items-center gap-15 mt-50">
          <Link
            to="/work"
            download
            type="button"
            className=" button w-80 h-17 bg-rose-300 rounded-lg cursor-pointer select-none
                        active:translate-y-2 
                        active:[box-shadow:0_0_0_0_#881337]
                        active:border-b-[0px]
                        transition-all duration-150 
                        shadow-4xl
                        border-b-[6px] border-rose-800 
                        font-arcade text-rose-800  text-[30px] 
                        
                                                                "
          >
            <span className="flex justify-center items-center mt-2">
              Go to Work page
            </span>
          </Link>
          <Link
            to="/about"
            download
            type="button"
            className=" button w-80 h-17 bg-rose-300 rounded-lg cursor-pointer select-none
                        active:translate-y-2 
                        active:[box-shadow:0_0_0_0_#881337]
                        active:border-b-[0px]
                        transition-all duration-150 
                        shadow-4xl
                        border-b-[6px] border-rose-800 
                        font-arcade text-rose-800  text-[30px] 
                        
                                                                "
          >
            <span className="flex justify-center items-center mt-2">
              Go to About Me page
            </span>
          </Link>
        </div>
      </div>
      <img
        src="/photos/eusocial.png"
        className="absolute top-85 right-50 w-90"
      ></img>
    </div>
  );
};

export default ContactMe;
