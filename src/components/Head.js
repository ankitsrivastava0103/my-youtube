import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/redux/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 shadow-sm">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="Menu-Icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          onClick={toggleMenuClick}
        />
        <a href="/">
          <img
            className="h-8 ml-2"
            alt="Youtube-Icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 flex justify-center items-center">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full p-2 -ml-52"
          type="text"
        />
        <button className="border border-gray-400 rounded-r-full p-2 bg-gray-100">
          Search
        </button>
      </div>
      <div className="flex ustify-center items-center col-span-1">
        <img
          className="h-8"
          alt="User-Icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
