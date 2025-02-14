import Comment from "./Comment";
import React, { memo, useEffect, useMemo, useState } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../utils/theme";
import { GAK, VIDEO_COMMENT_THRES_API } from "../../utils/constants";
import { addComments } from "../../utils/videoSlice";
import CommentContainerShimmer from "../Shimmers/CommentContainerShimmer";

const CommentsContainer = memo(({ videoId, onCommentCountUpdate, onTimeClick }) => {
  console.log("comment Container")

  const dispatch = useDispatch();
  const [showReply, setShowReply] = useState(false);
  const [showFull, setShowFull] = useState(false);
  
  const comments = useSelector((store) => store.videos?.comments.find((comment) => comment.videoId === videoId )).comments;
  console.log("comments : ",comments);

  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;

  const showCommentReply = () => {
    setShowReply(!showReply);
  };

  const showFullComments = () => {
    setShowFull(!showFull);
  };

   useEffect(() => {
    if (comments.length > 0) return;
      const getComments = async () => {
          const data = await fetch(
            VIDEO_COMMENT_THRES_API + videoId + "&key=" + GAK
          );
          const json = await data.json();
          dispatch(addComments({ videoId, items: json.items }))
      };
      getComments();
    }, [videoId, dispatch, comments]);

  useEffect(() => {
    if (comments.length > 0) {
      onCommentCountUpdate(comments?.length);
    }
  }, [comments, onCommentCountUpdate]);


  return  !comments ?  <CommentContainerShimmer /> : (
    <>
      {!showFull && comments.length > 0 &&(
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
});

export default CommentsContainer;
