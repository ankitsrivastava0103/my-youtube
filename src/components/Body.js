import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="grid grid-flow-col overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
