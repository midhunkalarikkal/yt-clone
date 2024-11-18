import React from "react";
import moment from "moment";
import { DEFAULT_PROFILE_IMG } from "../utils/constants";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../utils/theme";

const Comment = ({ comment, reply, onTimeClick }) => {

  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;

const extractTimestampFromLink = (link) => {
  const timestampRegex = /t=(\d+)/;
  const match = link.match(timestampRegex);
  return match ? parseInt(match[1], 10) : null;
};

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

  const renderTextWithLinks = (text, extractTimestampFromLink, onTimeClick) => {
    const linkRegex = /<a href="([^"]+)">([^<]+)<\/a>/g;
    const parts = [];
    let lastIndex = 0;
    let match;
  
    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        const plainText = text.substring(lastIndex, match.index).replace(/<br\s*\/?>/g, "\n");
        parts.push(plainText);
      }
  
      const link = match[1];
      const linkText = match[2];
      const seconds = extractTimestampFromLink(link);
  
      if (seconds !== null) {
        parts.push(
          <a
            key={seconds}
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onTimeClick(seconds);
            }}
            className="text-[#065fd4]"
          >
            {linkText}
          </a>
        );
      } else {
        parts.push(linkText);
      }
  
      lastIndex = linkRegex.lastIndex;
    }
  
    if (lastIndex < text.length) {
      const remainingText = text.substring(lastIndex).replace(/<br\s*\/?>/g, "\n");
      parts.push(remainingText);
    }
  
    return parts.map((part, index) =>
      typeof part === "string"
        ? part.split("\n").map((line, i) => (
            <React.Fragment key={`${index}-${i}`}>
              {line}
              {i < part.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))
        : part
    );
  };

  return (
    <div className={`w-full flex items-start ${reply ? "mt-2" : "mt-1"}`}>
      <img
        className="w-8 h-8 md:w-12 md:h-12 rounded-full mr-4 cursor-pointer"
        src={imageUrl}
        alt=":)"
        onError={(e) => (e.target.src = DEFAULT_PROFILE_IMG)}
      />
      <div>
        <h4 className="text-md font-semibold cursor-pointer" style={{ color: theme.textOne }}>
          {authorDisplayName}{" "}
          <span className="text-sm" style={{ color: theme.commentTime }}>
            {time}
          </span>
        </h4>
        <p className="mt-1 text-sm" style={{ color: theme.textOne }}>
        {renderTextWithLinks(textDisplay, extractTimestampFromLink, onTimeClick)}
        </p>
        <div className="flex gap-2 mt-1" style={{ color: theme.textOne }}>
          <button className="px-4 py-1 cursor-pointer">
            <ThumbUpOutlinedIcon fontSize="small" />{" "}
            <span className="text-xs">{likeCount}</span>
          </button>
          <button className="px-4 py-1 cursor-pointer">
            <ThumbDownOutlinedIcon fontSize="small" />
          </button>
          <button className="px-4 py-1 text-sm font-semibold hover:[#e5e5e5] cursor-pointer">
            Reply
          </button>
        </div>
      </div>
      <div className="ml-auto" style={{ color: theme.textOne }}>
        <MoreVertOutlinedIcon />
      </div>
    </div>
  );
};

export default Comment;
