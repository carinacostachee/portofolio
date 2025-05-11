const CV = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <span className="font-arcade text-rose-800 text-[30px] whitespace-pre">
        {"Here  you  can  download  my  CV"}
      </span>
      <a
        href="/curriculumvitae.pdf"
        download
        type="button"
        className=" button w-50 h-17 bg-rose-300 rounded-lg cursor-pointer select-none
                        active:translate-y-2 
                        active:[box-shadow:0_0_0_0_#881337]
                        active:border-b-[0px]
                        transition-all duration-150 
                        shadow-4xl
                        border-b-[6px] border-rose-800 
                        font-arcade text-rose-800  text-[30px]
                                                                "
      >
        <span className="flex justify-center items-center mt-2">My CV</span>
      </a>
    </div>
  );
};

export default CV;
