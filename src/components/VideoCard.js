const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, publishedAt, title, thumbnails } = snippet;

  // const

  return (
    <div className="m-3 p-2 shadow-sm cursor-pointer">
      <img
        className="rounded-lg"
        alt="thumbnails"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-2 line-clamp-2 h-14">{title}</li>
        <li className="text-gray-800">{channelTitle}</li>
        <li>{Math.round(statistics.viewCount / 1000)}K Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
