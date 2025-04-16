export const BUTTON_LIST = [
  "All",
  "Live",
  "Football",
  "News",
  "Physics",
  "Cooking",
  "Memes",
  "Gamming",
  "Cricket",
  "Music",
  "Comedy",
  "Chess",
  "SmartPhone",
  "Random",
  "Recently Uploaded",
  "Watched",
  "New to you",
];

export const YT_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;
