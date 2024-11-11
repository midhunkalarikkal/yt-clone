import React, { useEffect} from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import useGetCommentThreads from "../utils/hooks/useGetCommentThreads";
import { DEFAULT_PROFILE_IMG } from "../utils/constants";

const CommentsContainer = ({ videoId, onCommentCountUpdate }) => {
  const { comments, loading, error } = useGetCommentThreads(videoId);

  useEffect(() => {
    if(comments){
      onCommentCountUpdate(comments?.length)
    }
  },[comments, onCommentCountUpdate])

  if (loading || error) {
    return (
      <div className="w-full flex items-start mt-6 animate-pulse">
        <div className="w-12 h-12 rounded-full mr-4 bg-gray-400 shimmer"></div>
        <div>
          <div className="h-4 w-32 bg-gray-400 shimmer rounded mb-2"></div>
          <div className="h-3 w-72 bg-gray-400 shimmer rounded mb-2"></div>
          <div className="h-3 w-64 bg-gray-400 shimmer rounded mb-2"></div>
          <div className="flex gap-2 mt-2">
            <div className="w-8 h-4 bg-gray-400 shimmer rounded"></div>
            <div className="w-8 h-4 bg-gray-400 shimmer rounded"></div>
            <div className="w-12 h-4 bg-gray-400 shimmer rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id} className="w-full flex items-start mt-6">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || DEFAULT_PROFILE_IMG}
            alt=":)"
            onError={(e) => (e.target.src = DEFAULT_PROFILE_IMG)}
          />
          <div>
            <h4 className="text-md font-semibold">
              {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
            </h4>
            <p className="text-gray-700 mt-1 text-sm">
              {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
            </p>
            <div className="flex gap-2 mt-2">
              <button className="px-4 py-2 ">
                <ThumbUpOutlinedIcon fontSize="small" />{" "}
                <span className="text-xs">
                  {comment?.snippet?.topLevelComment?.snippet?.likeCount}
                </span>
              </button>
              <button className="px-4 py-2 ">
                <ThumbDownOutlinedIcon fontSize="small" />
              </button>
              <button className="px-4 py-2 text-sm font-semibold">Reply</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentsContainer;
