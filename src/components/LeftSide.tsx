const LeftSide = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <div className="box-border size-70 border-4 mt-10"></div>
      <div className="">
        <ul>
          <li className="font-arcade text-xl hover:underline ">Who am I?</li>
          <li className="font-arcade text-xl hover:underline">
            What are my current skills?
          </li>
          <li className="font-arcade text-xl hover:underline">
            How to contact me?
          </li>
        </ul>
      </div>
    </div>
  );
};
export default LeftSide;
