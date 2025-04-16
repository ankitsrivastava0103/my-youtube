import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YT_VIDEO_API } from "../utils/constants";
import { getVideos } from "../utils/redux/videoSlice";
import VideoCard from "./VideoCard";

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
    <div className="flex flex-wrap overflow-y-auto m-2 ">
      {videoList?.map((video) => {
        return <VideoCard key={video.id} info={video} />;
      })}
    </div>
  );
};

export default VideoContainer;
