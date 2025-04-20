import { Mail } from "lucide-react";
import { GitMerge } from "lucide-react";
import { LuLinkedin } from "react-icons/lu";

const ContactMe = () => {
  return (
    <div className="bg-gradient-to-br from-rose-100 via-white to-rose-200 h-screen">
      <div className="flex flex-col justyfy-center items-start h-screen  w-full  ">
        <h1 className="text-[70px] font-arcade tracking-wider text-start text-rose-300 mt-40 ml-40">
          Contact{" "}
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
      </div>
      <img
        src="/photos/eusocial.png"
        className="absolute top-85 right-50 w-90"
      ></img>
    </div>
  );
};

export default ContactMe;
