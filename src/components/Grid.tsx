import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import TitlePart from "./TitlePart";

const Grid = () => {
  return (
    <div className="grid grid-cols-15  h-full w-full ">
      <div className="col-span-6 bg-white">
        <LeftSide />
      </div>
      <div className="col-span-9 bg-white">
        <RightSide />
      </div>
    </div>
  );
};

export default Grid;
