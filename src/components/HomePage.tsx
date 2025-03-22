import Grid from "./Grid";
import TitlePart from "./TitlePart";

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-80">
        <TitlePart />
      </div>
      <div className="h-full">
        <Grid />
      </div>
    </div>
  );
};

export default HomePage;
