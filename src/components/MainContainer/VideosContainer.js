import VideoCard from "./VideoCard";
import React, { memo } from "react";
import { useSelector } from "react-redux";

const VideosContainer = memo(() => {
  const videos = useSelector((store) => store.videos.items);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-y-6 md:p-4">
      {videos && videos.map((video) => <VideoCard key={video.id} info={video} />)}
    </div>
  );
});

export default VideosContainer;
