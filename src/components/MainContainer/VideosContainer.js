import React from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import VideoCardShimmer from "../Shimmers/VideoCardShimmer";

const VideosContainer = () => {
  
  const videos = useSelector((store) => store.videos.items);
  const searchedVideos = useSelector((store) => store.videos?.searchedItems);
  const content = searchedVideos ? searchedVideos : videos;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-y-6 md:p-4">
      {content && content.length > 0
        ? content.map((video, index) => <VideoCard key={index} info={video} />)
        : Array.from({ length: 12 }).map((_, index) => (
            <VideoCardShimmer key={index} />
          ))}
          
    </div>
  );
};

export default VideosContainer;
