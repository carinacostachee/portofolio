/*  src/components/SoftSkills.tsx  */

const SoftSkills = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-2xl font-arcade text-rose-800">SKILLS I HAVE :</h3>

      <ul className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
        <li className="font-arcade text-white font-bold text-[30px] tracking-wider whitespace-pre">
          {"Problem  Solving"}
        </li>

        <li className="font-arcade text-white font-bold text-[30px] tracking-wider">
          Curiosity
        </li>

        <li className="font-arcade text-white font-bold text-[30px] tracking-wider">
          Teamwork
        </li>

        <li className="font-arcade text-white font-bold text-[30px] tracking-wider">
          Empathy
        </li>
        <li className="font-arcade text-white font-bold text-[30px] tracking-wider whitespace-pre">
          {"Good  Time  Management"}
        </li>
      </ul>
    </div>
  );
};

export default SoftSkills;
