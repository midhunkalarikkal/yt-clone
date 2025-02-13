import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const VideoCardShimmer = () => {
  return (
    <div className="flex flex-col overflow-hidden cursor-pointer animate-pulse">
      <div className="h-[200px] bg-gray-400 rounded-lg shimmer"></div>

      <div className="flex py-4">
        <div className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full shimmer"></div>

        <div className="flex-grow ml-3 overflow-hidden">
          <div className="h-5 w-3/4 bg-gray-400 rounded shimmer"></div>
          <div className="h-3 w-1/2 bg-gray-400 rounded shimmer mt-2"></div>
        </div>

        <div className="flex-shrink-0 ml-auto">
          <MoreVertIcon className="text-[#797979]" />
        </div>
      </div>
    </div>
  );
};

export default VideoCardShimmer;
