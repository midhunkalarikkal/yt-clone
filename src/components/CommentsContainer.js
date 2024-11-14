import Comment from './Comment';
import React, { useEffect, useState } from "react";
import useGetCommentThreads from "../utils/hooks/useGetCommentThreads";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const CommentsContainer = ({ videoId, onCommentCountUpdate, onTimeClick }) => {
  const [showReply, setShowReply] = useState(false);
  const { comments, loading, error } = useGetCommentThreads(videoId);

  const showCommentReply = () => {
    setShowReply(!showReply);
  };

  useEffect(() => {
    if (comments) {
      onCommentCountUpdate(comments?.length);
    }
  }, [comments, onCommentCountUpdate]);

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
        <div key={comment.id} className="w-full mt-6">
          <Comment key={comment.id} comment={comment} onTimeClick={onTimeClick}/>
            {comment?.replies?.comments && (
              <div className="px-4 py-2">
                <button
                  className="text-[#065fd4] font-semibold cursor-pointer hover:bg-[#def1ff] px-4 py-1 rounded-full"
                  onClick={showCommentReply}
                >
                  {showReply ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />}
                  {comment?.snippet?.totalReplyCount}
                  {comment?.snippet?.totalReplyCount === 1
                    ? " reply"
                    : " replies"}
                </button>
                {showReply &&
                  comment?.replies?.comments.map((reply, index) => (
                    <Comment key={reply.etag+index} reply={reply}/>
                  ))}
              </div>
            )}
          </div>
      ))}
    </>
  );
};

export default CommentsContainer;
