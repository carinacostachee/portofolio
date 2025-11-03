const Tools = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-xl sm:text-2xl font-arcade text-rose-800">
        I have used:
      </div>
      <ol className="flex flex-col justify-center items-center">
        <li className="font-arcade text-white font-bold text-xl sm:text-3xl tracking-wider">
          Git
        </li>
        <li className="font-arcade text-white font-bold text-xl sm:text-3xl tracking-wider">
          GitHub
        </li>
        <li className="font-arcade text-white font-bold text-xl sm:text-3xl tracking-wider">
          VsCode
        </li>
        <li className="font-arcade text-white font-bold text-xl sm:text-3xl tracking-wider">
          Vite
        </li>
      </ol>
    </div>
  );
};

export default Tools;
