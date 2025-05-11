/*  src/components/SoftSkills.tsx  */

const SoftSkills = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-2xl font-arcade text-rose-800">SKILLS I HAVE :</h3>

      <ul className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
        <li className="font-arcade text-white font-bold text-[25px]">
          Problem Solving
        </li>

        <li className="font-arcade text-white font-bold text-[25px]">
          {" "}
          Good Time Management
        </li>

        <li className="font-arcade text-white font-bold text-[25px]">
          Curiosity
        </li>

        <li className="font-arcade text-white font-bold text-[25px]">
          Teamwork
        </li>

        <li className="font-arcade text-white font-bold text-[25px]">
          Attention to Detail
        </li>

        <li className="font-arcade text-white font-bold text-[25px]">
          Empathy
        </li>
      </ul>
    </div>
  );
};

export default SoftSkills;
