/*  src/components/SoftSkills.tsx  */

const SoftSkills = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <h3 className="text-2xl font-arcade text-rose-800">SKILLS I HAVE :</h3>

      <ul className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
        <li className="font-arcade text-rose-200 font-bold">Problem Solving</li>
        <p className="font-inconsolata">
          I enjoy breaking complex challenges into manageable pieces and finding
          smart, creative solutions.
        </p>
        <li className="font-arcade text-rose-200 font-bold">Time Management</li>
        <p className="font-inconsolata text-black">
          I organise tasks so deadlines are met comfortably and know when to ask
          for help.
        </p>
        <li className="font-arcade text-rose-200 font-bold">Curiosity</li>
        <p className="font-inconsolata">
          I’m eager to learn how things work and always hunt for ways to improve
          them.
        </p>
        <li className="font-arcade text-rose-200 font-bold">Teamwork</li>
        <p className="font-inconsolata">
          I love collaborating, sharing ideas, and building solutions together.
        </p>
        <li className="font-arcade text-rose-200 font-bold">
          Attention to Detail
        </li>
        <p className="font-inconsolata">
          I refine designs and code until the little things look ; work just
          right.
        </p>
        <li className="font-arcade text-rose-200 font-bold">Empathy</li>
        <p className="font-inconsolata">
          I listen actively and care about every user’s and teammate’s needs.
        </p>
      </ul>
    </div>
  );
};

export default SoftSkills;
