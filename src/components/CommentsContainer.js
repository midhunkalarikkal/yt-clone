import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import useGetCommentThreads from "../utils/hooks/useGetCommentThreads";

const CommentsContainer = ({ videoId }) => {
  const { comments, loading, error } = useGetCommentThreads(videoId);

  if (loading || error) {
    return (
      <div className="w-full flex items-start mt-6">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src="https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000"
          alt="Your_profile_image"
        />
        <div>
          <h4 className="text-lg font-semibold">Commenter Name</h4>
          <p className="text-gray-700 mt-1">
            This is the comment text that the user has posted.
          </p>
          <div className="flex gap-2 mt-2">
            <button className="px-4 py-2 ">
              <ThumbUpOutlinedIcon />
            </button>
            <button className="px-4 py-2 ">
              <ThumbDownOutlinedIcon />
            </button>
            <button className="px-4 py-2 ">Reply</button>
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
            src="https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000"
            alt="Your_profile_image"
          />
          <div>
            <h4 className="text-md font-semibold">{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h4>
            <p className="text-gray-700 mt-1 text-sm">
              {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
            </p>
            <div className="flex gap-2 mt-2">
              <button className="px-4 py-2 ">
                <ThumbUpOutlinedIcon fontSize="small"/> <span className="text-xs">{comment?.snippet?.topLevelComment?.snippet?.likeCount}</span>
              </button>
              <button className="px-4 py-2 ">
                <ThumbDownOutlinedIcon fontSize="small"/>
              </button>
              <button className="px-4 py-2 text-sm">Reply</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentsContainer;
