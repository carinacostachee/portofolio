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
            <span className="font-bold text-3xl text-black mt-10">
              {" "}
              API stuff and to make the photo of me show when you load the page
            </span>
          </div>
        </div>
        <div className="col-span-6 flex justify-center items-center">
          <img
            src="/photos/IMG_8600.jpg"
            className="w-100 mt-20 rotatephoto"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
