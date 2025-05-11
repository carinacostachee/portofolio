import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-white to-rose-200 ">
      <div className="grid grid-cols-12 ">
        <div className="col-span-6">
          <div className="flex flex-col justify-center items-center gap 10 ">
            <span className="text-[70px] font-arcade tracking-wider text-rose-300  ">
              About
            </span>
            <div className="font-inconsolata text-rose-800 text-[20px] self-start ml-10">
              Hi, my name is Carina Costache, I am currently 22 years old, in
              the final year of my Bachelor in Computing Science at Radboud
              University, in the Netherlands. I have always been drawn towards
              technology and creating something beautiful, either by playing
              video games, abusing Paint, or making watermarks in Photoshop.
              When I was in high school, I've realized that I want to continue
              learning about technology and programming, so I started my journey
              in the world of programming. In university, I had the opportunity
              to learn in more depth about programming languages, algorithms,
              data structures, and software development. I enjoy learning new
              concepts and applying them in what I do.
            </div>
            <div className="font-inconsolata text-rose-800 text-[20px] self-start ml-10">
              Another important aspect about me is that I love cats. I own one
              cat, her name is Midzy, she is 1 year old, and another cat, her
              name is Jiji, she is my friend's cat, but I love her just as much.
              You can see some photos of them below.
            </div>
            <Carousel />
          </div>
        </div>
        <div className="col-span-6 flex flex-col justify-center items-center gap-30">
          <img src="/photos/IMG_8600.jpg" className="w-100 mt-10"></img>
          <div className="flex flex-row justify-center items center gap-10">
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
              to="/contact"
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
                Go to Contact Me page
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
