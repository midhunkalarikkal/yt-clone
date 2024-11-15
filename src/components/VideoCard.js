import React, { memo, useEffect, useState } from "react";
import moment from "moment";
import numeral from "numeral";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import useGetChannelData from "../utils/hooks/useGetChannelData";
import { DEFAULT_PROFILE_IMG } from "../utils/constants";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../utils/theme";

const VideoCard = memo(({ info }) => {

  const [ channelProfileUrl, setChannelProfileUrl ] = useState(null);
  const {channelData, loading, error} = useGetChannelData(info?.snippet?.channelId);

  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;
  
  useEffect(() => {
    if (channelData) {
      const profileUrl = channelData.snippet?.thumbnails?.default?.url;
      if (profileUrl) {
        setChannelProfileUrl(profileUrl);
      }
    }
  }, [channelData]);
  

  if (!info) return null;

  const { snippet, statistics, id } = info;
  const { channelTitle, publishedAt, title, thumbnails, channelId } = snippet;
  const { viewCount } = statistics;
  const thumbnailUrl =
    thumbnails?.maxres?.url ||
    thumbnails?.high?.url ||
    thumbnails?.medium?.url ||
    thumbnails?.default?.url;
  const trimmedTitle = title.length > 55 ? title.slice(0, 55) + "..." : title;
  const date = moment(publishedAt).fromNow();
  const vc = numeral(viewCount).format("0.0a");

  return (
    <div className="flex flex-col overflow-hidden cursor-pointer">
      <Link  to={`/watch?v=${id}&ch=${channelId}`}>
        <div className="h-[200px]">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={thumbnailUrl}
            alt="thumbnail"
          />
        </div>
      </Link>

      <div className="flex py-4">
        <div className="flex-shrink-0 w-10 h-10">
          {loading || error ? (
            <img
            className="rounded-full w-full h-full"
            src={DEFAULT_PROFILE_IMG}
            alt="channel_profile_image"
            />
          ) : (
            <img
            className="rounded-full w-full h-full"
            src={channelProfileUrl}
            alt="channel_profile_image"
            />
          )}
        </div>

        <Link  to={`/watch?v=${id}&ch=${channelId}`}>
        <div className="flex-grow ml-3 overflow-hidden">
          <h1 className="text-md font-medium line-clamp-2" style={{ color: theme.textOne }}>{trimmedTitle}</h1>
          <p className="text-[#797979] text-sm font-semibold">{channelTitle}</p>
          <p className="text-[#797979] text-sm font-semibold">
            {vc} views • {date}
          </p>
        </div>
        </Link>

        <div className="flex-shrink-0 ml-auto">
          <MoreVertIcon className="text-[#797979] cursor-pointer" />
        </div>
      </div>
    </div>
  );
});

export default VideoCard;
