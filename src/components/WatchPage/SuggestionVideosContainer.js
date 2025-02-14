import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SuggestionVideoCard from "./SuggestionVideoCard";

const SuggestionVideosContainer = memo(() => {
  console.log("Suggestion video container");
  const suggestionVideos = useSelector((store) => store.videos.items);
  return (
    <div className="w-full lg:w-[27%] px-2 md:px-4">
      {suggestionVideos && suggestionVideos.map((video) => (
        <Link key={video.id} to={"/watch?v="+video.id}>
          <SuggestionVideoCard info={video}/>
        </Link>
      ))}
    </div>
  );
});

export default SuggestionVideosContainer;
