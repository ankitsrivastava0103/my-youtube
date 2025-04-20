import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YT_VIDEO_API } from "../utils/constants";
import { getVideos } from "../utils/redux/videoSlice";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const dispatch = useDispatch();

  const videoList = useSelector((store) => store.video?.videoList);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YT_VIDEO_API);
    const json = await data.json();
    dispatch(getVideos(json.items));
  };
  return (
    <div className="flex flex-wrap overflow-y-auto m-2">
      {videoList?.map((video) => {
        return (
          <Link className="w-[25%]" to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
