import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app?.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="col-span-2 overflow-y-auto">
      <div className="p-3">
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subsrciptions</li>
        </ul>
      </div>
      <div className="p-3">
        <h1 className="font-bold">Subsrciptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gamming</li>
        </ul>
      </div>
      <div className="p-3">
        <h1 className="font-bold">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gamming</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
