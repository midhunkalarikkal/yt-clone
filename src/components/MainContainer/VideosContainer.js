import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import VideoCardShimmer from "../Shimmers/VideoCardShimmer";

const VideosContainer = () => {
  const [showShimmer, setShowShimmer] = useState(true);
  const videos = useSelector((store) => store.videos.items);
  const searchedVideos = useSelector((store) => store.videos?.searchedItems);
  const content = searchedVideos ? searchedVideos : videos;
  useEffect(() => {
    if (content && content.length > 0) {
      setShowShimmer(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowShimmer(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [content]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-y-6 md:p-4">
      {showShimmer
        ? Array.from({ length: 12 }).map((_, index) => (
            <VideoCardShimmer key={index} />
          ))
        : content &&
          content.map((video, index) => <VideoCard key={index} info={video} />)}
    </div>
  );
};

export default VideosContainer;
