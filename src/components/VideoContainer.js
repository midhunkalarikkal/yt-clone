import VideoCard from "./VideoCard";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = memo(() => {
  const videos = useSelector((store) => store.videos.items);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 p-4">
      {videos &&
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
});

export default VideoContainer;
