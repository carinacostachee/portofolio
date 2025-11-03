const Frameworks = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" text-xl sm:text-2xl font-arcade text-rose-800">
        I have used:
      </div>
      <ol className="flex flex-col justify-center items-center">
        <li className="font-arcade text-white font-bold text-xl sm:text-3xl">
          React
        </li>
        <li className="font-arcade text-white font-bold text-xl sm:text-3xl">
          Vue
        </li>
        <li className="font-arcade text-white font-bold text-xl sm:text-3xl">
          Angular
        </li>
        <li className="font-arcade text-white font-bold text-xl sm:text-3xl">
          Tailwind CSS
        </li>
      </ol>
    </div>
  );
};

export default Frameworks;
