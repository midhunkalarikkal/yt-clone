import React from "react";
import moment from "moment";
import { DEFAULT_PROFILE_IMG } from "../utils/constants";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

const Comment = ({ comment, reply }) => {
  const imageUrl =
    comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl ||
    reply?.snippet?.authorProfileImageUrl ||
    DEFAULT_PROFILE_IMG;

  const authorDisplayName =
    comment?.snippet?.topLevelComment?.snippet?.authorDisplayName ||
    reply?.snippet?.authorDisplayName ||
    "Anonymous";

  const textDisplay =
    comment?.snippet?.topLevelComment?.snippet?.textDisplay ||
    reply?.snippet?.textDisplay ||
    "";

  const likeCount =
    comment?.snippet?.topLevelComment?.snippet?.likeCount ||
    reply?.snippet?.likeCount;

  const publishedAt =
    comment?.snippet?.topLevelComment?.snippet?.publishedAt ||
    reply?.snippet?.publishedAt;

  const time = moment(publishedAt).fromNow();

  return (
    <div className={`w-full flex items-start ${reply ? "mt-2" : "mt-1"}`}>
      <img
        className="w-12 h-12 rounded-full mr-4 cursor-pointer"
        src={imageUrl}
        alt=":)"
        onError={(e) => (e.target.src = DEFAULT_PROFILE_IMG)}
      />
      <div>
        <h4 className="text-md font-semibold cursor-pointer">
          {authorDisplayName}{" "}
          <span className="text-sm text-[#8c8c8c] hover:text-[#0f0f0f]">
            {time}
          </span>
        </h4>
        <p className="text-gray-700 mt-1 text-sm">{textDisplay}</p>
        <div className="flex gap-2 mt-1">
          <button className="px-4 py-1 cursor-pointer">
            <ThumbUpOutlinedIcon fontSize="small" />{" "}
            <span className="text-xs">{likeCount}</span>
          </button>
          <button className="px-4 py-1 cursor-pointer">
            <ThumbDownOutlinedIcon fontSize="small" />
          </button>
          <button className="px-4 py-1 text-sm font-semibold text-[#0f0f0f] hover:[#e5e5e5] cursor-pointer">
            Reply
          </button>
        </div>
      </div>
      <div className="ml-auto">
        <MoreVertOutlinedIcon />
      </div>
    </div>
  );
};

export default Comment;
