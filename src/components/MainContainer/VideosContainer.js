import React from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import VideoCardShimmer from "../Shimmers/VideoCardShimmer";

const VideosContainer = () => {
  
  const videos = useSelector((store) => store.videos.items);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-y-6 md:p-4">
      {videos && videos.length > 0
        ? videos.map((video) => <VideoCard key={video.id} info={video} />)
        : Array.from({ length: 12 }).map((_, index) => (
            <VideoCardShimmer key={index} />
          ))}
          
    </div>
  );
};

export default VideosContainer;
