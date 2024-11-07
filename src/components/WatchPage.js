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

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeSidebar());
    dispatch(closeSmallSidebar());
  }, []);

  return (
    <div className="flex px-4 pt-20 w-full">
      <div className="w-[70%] overflow-hidden rounded-lg overflow-y-scroll no-scrollbar">
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
            <div className="flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000"
                alt="Your_profile_image"
              />
              <div>
                <h4 className="text-lg font-medium">Channel Name</h4>
                <p className="text-sm text-gray-500">Subscriber count</p>
              </div>

              <button className="ml-4 px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition">
                Subscribe
              </button>
            </div>

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
        <div className="p-4  mr-4 bg-[#f0f0f0]">
          <p>Views</p>
          <p>
            Use coupon code : CODE72 and register now by link below. Only valid
            for first 500 students. Namaste React Website Link -
            https://namastedev.com/learn/namaste-... Namaste React web series
            will take you from Zero to Hero in React. After watching this
            series, you will be able to develop production-ready react frontend
            web applications from scratch. Use coupon code : CODE72 and register
            now by link below. Only valid for first 500 students. Namaste React
            Website Link - https://namastedev.com/learn/namaste-... Namaste
            React web series will take you from Zero to Hero in React. After
            watching this series, you will be able to develop production-ready
            react frontend web applications from scratch. Use coupon code :
            CODE72 and register now by link below. Only valid for first 500
            students. Namaste React Website Link -
          </p>
        </div>
        <div className="p-4">
          <h3>Count of comments</h3>
          <div className="flex w-full mt-6">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src="https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000"
              alt="Your_profile_image"
            />
            <input
              className="mx-4 w-full"
              type="text"
              placeholder="Add a comment"
              style={{ border: 0, borderBottom: "1px solid black" }}
            />
          </div>
          <CommentsContainer />
        </div>
      </div>
      <SuggestionVideosContainer />
    </div>
  );
};

export default WatchPage;
