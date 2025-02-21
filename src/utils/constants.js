
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY2;

export const YOUTUBE_POPULARVIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=40&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;

 export const DEFAULT_PROFILE_IMG = "https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000";

 export const CHANNEL_DETAILS_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=";

 export const VIDEO_COMMENT_THRES_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=";

 export const GAK = process.env.REACT_APP_GOOGLE_API_KEY2;

 export const YOUTUBE_SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

 export const LIVE_CHAT_COUNT=40;

 export const YT_SEARCH_API_START="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q="

 export const YT_SEARCH_API_END="&type=video&key="