import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-10 overflow-hidden">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
