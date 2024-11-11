import React, { useEffect } from "react";
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
import useGetCommentThreads from "../utils/hooks/useGetCommentThreads";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  
  const videoId = searchParams.get("v");
  const channelId = searchParams.get("ch");

  useGetCommentThreads(videoId)

  useEffect(() => {
    dispatch(closeSidebar());
    dispatch(closeSmallSidebar());
  }, []);

  return (
    <div className="flex px-4 mt-14 pt-1 w-full">
      <div className="w-[70%] overflow-hidden">
        <div>
          <iframe
            className="w-full h-[600px] lg:rounded-lg"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?si=axB2wPjrFHkbGZFr"
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
          <h3>Count of comments</h3>
          <div className="flex w-full mt-6">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={DEFAULT_PROFILE_IMG}
              alt="Your_profile_image"
            />
            <input
              className="mx-4 w-full"
              type="text"
              placeholder="Add a comment"
              style={{ border: 0, borderBottom: "1px solid black" }}
            />
          </div>
            <CommentsContainer videoId={videoId}/>
        </div>
      </div>
      <SuggestionVideosContainer />
    </div>
  );
};

export default WatchPage;
