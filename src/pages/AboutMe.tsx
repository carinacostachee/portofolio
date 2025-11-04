import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-white to-rose-200 ">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-1 justify-center items-center ">
        <img src="/photos/mepoza.png" className="w-100 mt-5"></img>
        <div className="flex flex-col justify-center items-center gap 10 ">
          <span className="text-[70px] font-arcade tracking-wider text-rose-300  ">
            About
          </span>
          <div className="font-inconsolata text-rose-800 text-[16px] sm:text-[20px] self-start ml-5 mr-5 font-bold">
            Hi, my name is Carina Costache, I am currently 22 years old. I
            finished my Bachelor in Computing Science at Radboud University,
            Nijmegen this year, and I am currently a full-time student at
            University of Amsterdam, doing the Software Engineer Master.
            <br />
            <br />
            I have always been drawn towards technology and creating something
            beautiful, either by playing video games, abusing Paint, or making
            watermarks in Photoshop. When I was in high school, I've realized
            that I want to continue learning about technology and programming,
            so I started my journey in the world of programming.
            <br />
            <br />
            In university, I had the opportunity to learn in more depth about
            programming languages, algorithms, data structures, and software
            development. I enjoy learning new concepts and applying them in what
            I do.
          </div>
          <div className="font-inconsolata text-rose-800 text-[16px] sm:text-[20px] self-start ml-5 font-bold mt-8">
            Another important aspect about me is that I love cats. I have one
            cat, her name is Midzy, she is 1 year old. You can see some cute
            pictures of Midzy and one of my friend's cat, Jiji.{" "}
            <span className="font-arcade text-xl sm:text-2xl">Enjoy!</span>
          </div>
          <Carousel />
        </div>
      </div>

      <div className="flex flex-row justify-center items center gap-10 mt-10">
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
                        font-arcade text-rose-800 text-2xl sm:text-[40px] 
                        
                                                                "
        >
          <span className="flex justify-center items-center mt-2 mb-2">
            Work
          </span>
        </Link>
        <Link
          to="/contact"
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
          <span className="flex justify-center items-center mt-2">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
