const SoftSkills = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h3 className="text-2xl font-arcade text-rose-800">SKILLS I HAVE :</h3>

      <ul className="flex flex-col justify-center items-center">
        <li className="font-arcade text-white font-bold text-xl sm:text-3xl tracking-wider whitespace-pre">
          {"Problem  Solving"}
        </li>

        <li className="font-arcade text-white font-bold text-xl sm:text-3xl tracking-wider">
          Curiosity
        </li>

        <li className="font-arcade text-white font-bold text-xl sm:text-3xl tracking-wider">
          Teamwork
        </li>

        <li className="font-arcade text-white font-bold text-xl sm:text-3xl tracking-wider">
          Empathy
        </li>
      </ul>
    </div>
  );
};

export default SoftSkills;
