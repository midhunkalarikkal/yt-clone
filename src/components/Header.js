import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MicIcon from "@mui/icons-material/Mic";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { toggleSidebar } from "../utils/stateSlice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import useGetPopularVideos from "../utils/hooks/useGetPopularVideos";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{
        getSearchResults();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))
  };

  useGetPopularVideos();

  const handleSideBar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="flex w-full h-14 py-4 px-4 bg-white fixed top-0">
      <div className="flex w-3/12 items-center justify-start">
        <MenuIcon
          fontSize="large"
          className="cursor-pointer"
          onClick={handleSideBar}
        />
        <img
          className="w-8 ml-6 cursor-pointer"
          src="/icons/ytlogo.png"
          alt="ytlogo"
        />
        <h1 className="text-2xl font-bold cursor-pointer">
          Youtube<sup className="text-xs font-normal opacity-60">IN</sup>
        </h1>
      </div>
      <div className="flex w-6/12 items-center justify-center relative">
        <input
          className="w-7/12 h-10 rounded-l-full px-3"
          style={{ border: "1px solid gray", outline: "none" }}
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="w-1/12 h-10 bg-[#f0f0f0] rounded-r-full"
          style={{
            borderTop: "1px solid gray",
            borderRight: "1px solid gray",
            borderBottom: "1px solid gray",
          }}
        >
          <SearchIcon className="" />
        </button>
        <button className="w-[40px] ml-2 h-10 bg-[#f0f0f0] rounded-full">
          <MicIcon />
        </button>
        {suggestions.length > 0 && 
        <div className="absolute top-8 left-[124px] w-[57%] bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <ul className="py-2 px-4">
            {suggestions.map((item) => (
              <li key={item} className="p-1 hover:bg-[#f0f0f0] cursor-default"><SearchIcon /> {item}</li>
            ))}
          </ul>
        </div>
        }
      </div>
      <div className="flex w-3/12 items-center justify-end">
        <VideoCallIcon fontSize="large" className="mr-6 cursor-pointer" />
        <NotificationsNoneIcon
          fontSize="large"
          className="mr-6 cursor-pointer"
        />
        <img
          className="w-8 h-8 cursor-pointer"
          src="https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000"
          alt="userProfile"
        />
      </div>
    </div>
  );
};

export default Header;
