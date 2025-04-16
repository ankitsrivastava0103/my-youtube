import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="grid grid-flow-col overflow-hidden">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
