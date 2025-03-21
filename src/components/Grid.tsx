import TitlePart from "./TitlePart";

const Grid = () => {
  return (
    <div className="grid grid-rows-12 gap-4 h-full w-full ">
      <div className="row-span-4 bg-blue-100 border border-blue-300">
        <TitlePart />
      </div>
    </div>
  );
};

export default Grid;
