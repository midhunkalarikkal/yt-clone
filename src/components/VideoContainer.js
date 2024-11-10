import VideoCard from "./VideoCard";
import React, { memo } from "react";
import { useSelector } from "react-redux";

const VideoContainer = memo(() => {
  const videos = useSelector((store) => store.videos.items);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 p-4">
      {videos && videos.map((video) => <VideoCard key={video.id} info={video} />)}
    </div>
  );
});

export default VideoContainer;
