const GOOGLE_API_KEY = "AIzaSyAeXtix3AC_GXfQVylvtIaCmfAo-PuI11w";

export const YOUTUBE_POPULARVIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key="+GOOGLE_API_KEY;

export const CHANNEL_DETAILS_API = "https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCSo19KhHogXxu3sFsOpqrcQ&key="+GOOGLE_API_KEY;
