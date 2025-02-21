import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../utils/theme";
import React, { useEffect, useRef, useState } from "react";
import { DEFAULT_PROFILE_IMG } from "../../utils/constants";
import VideoDescription from "../WatchPage/VideoDescription";
import ChannelDetailSmall from "../WatchPage/ChannelDetailSmall";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentsContainer from "../WatchPage/Comment/CommentsContainer";
import { closeSidebar, closeSmallSidebar } from "../../utils/stateSlice";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import ChatWithSuggestionVideos from "../WatchPage/ChatWithSuggestionVideos";

const WatchPage = () => {
  const dispatch = useDispatch();
  const playerRef = useRef(null);
  const [searchParams] = useSearchParams();
  const [player, setPlayer] = useState(null);
  const [ commentsCount, setCommentsCount ] = useState(null);
  const [videoTitle, setVideoTitle] = useState(null);
  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;

  const videoId = searchParams.get("v");
  const channelId = searchParams.get("ch");
  
  const user = useSelector((store) => store.state.user);

  const handleCommentCount = (data) => {
    setCommentsCount(data)
  }

  useEffect(() => {
    dispatch(closeSidebar());
    dispatch(closeSmallSidebar());
  }, [dispatch]);

   const handleTimeClick = (seconds) => {
    if (player) {
      player.seekTo(seconds, true);
    }
  };

  const handleVideoTitle = (title) => {
    setVideoTitle(title);
  }

  const onPlayerReady = (event) => {
    setPlayer(event.target);
  };

  window.onYouTubePlayerAPIReady = () => {
    new window.YT.Player(playerRef.current, {
      videoId,
      events: {
        onReady: onPlayerReady,
      },
    });
  };

  return (
    <div className="flex flex-col lg:flex-row px-1 md:px-6 mt-14 md:pt-4 w-full">
      <div className="w-full lg:w-[73%] overflow-hidden">
        <div>
          <iframe
            ref={playerRef}
            className="w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[650px] lg:rounded-lg"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?si=axB2wPjrFHkbGZFr?autoplay=1&enablejsapi=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-1 md:p-4">
          <h3 className="text-md md:text-xl font-bold mb-2" style={{ color: theme.textOne }}>{videoTitle || "Loading...."}</h3>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
           <ChannelDetailSmall id={channelId}/>

            <div className="flex items-center gap-2 md:gap-4 overflow-x-scroll no-scrollbar w-full md:w-auto">
              <button className="flex items-center justify-stretch px-4 py-2 rounded-full transition text-xs md:text-sm gap-x-1" style={{ backgroundColor: theme.buttonOneBg, color: theme.textOne}}>
                <ThumbUpOutlinedIcon sx={{ fontSize: {xs:".9rem", md:"1.1rem", lg:"1.3rem"}}}/> <span className="font-semibold">100k</span> <ThumbDownOutlinedIcon sx={{ fontSize: {xs:".9rem", md:"1.1rem", lg:"1.3rem"}}}/>
              </button>
              <button className="flex items-center justify-stretch px-4 py-2 rounded-full transition text-xs md:text-sm gap-x-1" style={{ backgroundColor: theme.buttonOneBg, color: theme.textOne}}>
                <ReplyOutlinedIcon sx={{ fontSize: {xs:".9rem", md:"1.1rem", lg:"1.3rem"}}}/> <span className="font-semibold">Share</span>
              </button>
              <button className="flex items-center justify-stretch px-4 py-2 rounded-full transition text-xs md:text-sm gap-x-1" style={{ backgroundColor: theme.buttonOneBg, color: theme.textOne}}>
                <GetAppOutlinedIcon sx={{ fontSize: {xs:".9rem", md:"1.1rem", lg:"1.3rem"}}}/> <span className="font-semibold">Download</span>
              </button>
              <button className="flex items-center justify-stretch px-4 py-2 rounded-full transition text-xs md:text-sm gap-x-1" style={{ backgroundColor: theme.buttonOneBg, color: theme.textOne}}>
                <ContentCutOutlinedIcon sx={{ fontSize: {xs:".9rem", md:"1.1rem", lg:"1.3rem"}}}/> <span className="font-semibold">Cut</span>
              </button>
              <button className="px-4 py-2 rounded-full transition text-xs md:text-sm" style={{ backgroundColor: theme.buttonOneBg, color: theme.textOne}}>
                <MoreHorizOutlinedIcon sx={{ fontSize: {xs:".9rem", md:"1.1rem", lg:"1.3rem"}}}/>
              </button>
            </div>
            
          </div>
        </div>
        <VideoDescription videoId={videoId} onSetVideoTitle={handleVideoTitle}/>
        <div className="p-4">
          <h3 className="font-bold text-xl" style={{ color: theme.textOne }}>{commentsCount} Comments</h3>
          <div className="flex w-full mt-6 mb-10">
            <img
              className="w-8 h-8 md:w-12 md:h-12 rounded-full mr-4"
              src={ user?.photoURL ||DEFAULT_PROFILE_IMG }
              alt="Your_profile_image"
            />
            <input
              className="mx-4 w-full"
              type="text"
              placeholder="Add a comment"
              style={{ border: 0, borderBottom: `1px solid ${theme.buttonOneBorder}`, outline:"none", backgroundColor: theme.mainBg, color: theme.textOne }}
            />
          </div>
            <CommentsContainer videoId={videoId} onCommentCountUpdate={handleCommentCount} onTimeClick={handleTimeClick}/>
        </div>
      </div>
      <ChatWithSuggestionVideos />
    </div>
  );
};

export default WatchPage;
