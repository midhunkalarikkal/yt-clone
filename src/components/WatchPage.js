import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import SuggestionVideosContainer from "./SuggestionVideosContainer";
import { closeSidebar, closeSmallSidebar } from "../utils/stateSlice";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import VideoDescription from "./VideoDescription";
import ChannelDetailSmall from "./ChannelDetailSmall";
import { DEFAULT_PROFILE_IMG } from "../utils/constants";

const WatchPage = () => {
  const [player, setPlayer] = useState(null);
  const [ commentsCount, setCommentsCount ] = useState(null);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const playerRef = useRef(null);
  
  const videoId = searchParams.get("v");
  const channelId = searchParams.get("ch");

  const handleCommentCount = (data) => {
    setCommentsCount(data)
  }

  useEffect(() => {
    dispatch(closeSidebar());
    dispatch(closeSmallSidebar());
  }, []);

   // Handle time click for seeking the video
   const handleTimeClick = (seconds) => {
    console.log("time clicked: ", seconds);
    if (player) {
      player.seekTo(seconds, true); // Seek to the timestamp
    }
  };

  // When the player is ready, set the player instance
  const onPlayerReady = (event) => {
    setPlayer(event.target);
  };

  // YouTube API iframe callback to initialize the player
  window.onYouTubePlayerAPIReady = () => {
    new window.YT.Player(playerRef.current, {
      videoId,
      events: {
        onReady: onPlayerReady, // When player is ready, call onPlayerReady
      },
    });
  };

  return (
    <div className="flex px-4 mt-14 pt-1 w-full">
      <div className="w-[70%] overflow-hidden">
        <div>
          <iframe
          ref={playerRef}
            className="w-full h-[600px] lg:rounded-lg"
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
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">Video Title</h3>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
           <ChannelDetailSmall id={channelId}/>

            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-[#f0f0f0] hover:bg-gray-200 rounded-md transition">
                <ThumbUpOutlinedIcon />
              </button>
              <button className="px-4 py-2 bg-[#f0f0f0] hover:bg-gray-200 rounded-md transition">
                <ThumbDownOutlinedIcon />
              </button>
              <button className="px-4 py-2 bg-[#f0f0f0] hover:bg-gray-200 rounded-md transition">
                <ReplyOutlinedIcon /> <span>Sahre</span>
              </button>
              <button className="px-4 py-2 bg-[#f0f0f0] hover:bg-gray-200 rounded-md transition">
                <GetAppOutlinedIcon /> <span>Download</span>
              </button>
              <button className="px-4 py-2 bg-[#f0f0f0] hover:bg-gray-200 rounded-md transition">
                <ContentCutOutlinedIcon /> <span>Cut</span>
              </button>
              <button className="px-4 py-2 bg-[#f0f0f0] hover:bg-gray-200 rounded-md transition">
                <MoreHorizOutlinedIcon />
              </button>
            </div>
          </div>
        </div>
        <VideoDescription videoId={videoId}/>
        <div className="p-4">
          <h3 className="font-bold text-xl">{commentsCount} Comments</h3>
          <div className="flex w-full mt-6 mb-10">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={DEFAULT_PROFILE_IMG}
              alt="Your_profile_image"
            />
            <input
              className="mx-4 w-full"
              type="text"
              placeholder="Add a comment"
              style={{ border: 0, borderBottom: "1px solid black", borderColor: "#f2f2f2", outline:"none" }}
            />
          </div>
            <CommentsContainer videoId={videoId} onCommentCountUpdate={handleCommentCount} onTimeClick={handleTimeClick}/>
        </div>
      </div>
      <SuggestionVideosContainer />
    </div>
  );
};

export default WatchPage;
