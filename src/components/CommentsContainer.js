import Comment from "./Comment";
import React, { useEffect, useState } from "react";
import useGetCommentThreads from "../utils/hooks/useGetCommentThreads";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../utils/theme";

const CommentsContainer = ({ videoId, onCommentCountUpdate, onTimeClick }) => {
  const [showReply, setShowReply] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const { comments, loading, error } = useGetCommentThreads(videoId);
  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;

  const showCommentReply = () => {
    setShowReply(!showReply);
  };

  const showFullComments = () => {
    setShowFull(!showFull);
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
      {!showFull && (

        <div className="xs-block md-hidden rounded-xl p-2 shadow-xl" onClick={showFullComments} style={{ backgroundColor: theme.buttonOneBg }}>
          <Comment
            key={comments[0].id}
            comment={comments[0]}
          />
          <div className="rounded-xl p-2 shadow-xl" style={{ backgroundColor: theme.buttonOneBg }}>
            <div className="rounded-xl p-2 shadow-xl" style={{ backgroundColor: theme.buttonOneBg }}>

            </div>
          </div>
        </div>
      )}
      {showFull &&
      <button className="px-4 py-2 w-full rounded-xl shadow-xl" onClick={showFullComments} style={{ backgroundColor: theme.buttonOneBg }}>Hide comments</button>
      }
      {showFull &&
        comments.map((comment) => (
          <div key={comment.id} className="w-full mt-6">
            <Comment
              key={comment.id}
              comment={comment}
              onTimeClick={onTimeClick}
            />
            {comment?.replies?.comments && (
              <div className="px-4 py-2">
                <button
                  className="text-[#065fd4] font-semibold cursor-pointer px-4 py-1 rounded-full custom-replybutton"
                  style={{ "--hover-bg": theme.replyButtonBgHover }}
                  onClick={showCommentReply}
                >
                  {showReply ? (
                    <KeyboardArrowUpOutlinedIcon />
                  ) : (
                    <KeyboardArrowDownOutlinedIcon />
                  )}
                  {comment?.snippet?.totalReplyCount}
                  {comment?.snippet?.totalReplyCount === 1
                    ? " reply"
                    : " replies"}
                </button>
                {showReply &&
                  comment?.replies?.comments.map((reply, index) => (
                    <Comment
                      key={reply.etag + index}
                      reply={reply}
                      onTimeClick={onTimeClick}
                    />
                  ))}
              </div>
            )}
          </div>
        ))}
    </>
  );
};

export default CommentsContainer;
