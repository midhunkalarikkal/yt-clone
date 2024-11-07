import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SuggestionVideoCard from "./SuggestionVideoCard";

const SuggestionVideosContainer = memo(() => {
  const suggestionVideos = useSelector((store) => store.videos.items);
  return (
    <div className="w-[30%] px-6 h-screen overflow-y-scroll no-scrollbar">
      {suggestionVideos && suggestionVideos.map((video) => (
        <Link key={video.id} to={"/watch?v="+video.id}>
          <SuggestionVideoCard info={video}/>
        </Link>
      ))}
    </div>
  );
});

export default SuggestionVideosContainer;
