const GOOGLE_API_KEY = "AIzaSyAeXtix3AC_GXfQVylvtIaCmfAo-PuI11w";

export const CHANNEL_DETAILS_API_PRE =
"https://www.googleapis.com/youtube/v3/channels?part=snippet&id="

export const CHANNEL_DETAILS_API_POST = "&key=" +
GOOGLE_API_KEY;

export const YOUTUBE_POPULARVIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;
