import moment from "moment";
import numeral from "numeral";
import { Link } from "react-router-dom";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { darkTheme, lightTheme } from "../../utils/theme";
import {
  CHANNEL_DETAILS_API,
  DEFAULT_PROFILE_IMG,
  GAK,
} from "../../utils/constants";
import { addChannelData } from "../../utils/videoSlice";

const VideoCard = memo(({ info }) => {
  const dispatch = useDispatch();
  const chId = info?.snippet?.channelId;  

  const chData = useSelector((store) =>
    store.videos.channelData.find((item) => item.chId === chId)
  );

  useEffect(() => {
    if(!chId || chData) return;
    const fetchChannelData = async () => {
      const response = await fetch(
        `${CHANNEL_DETAILS_API}${chId}&key=${GAK}`
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        dispatch(addChannelData({ ...data.items[0], chId }));
      }
    }
    fetchChannelData();
  }, [chId, dispatch, chData]);

  const channelProfileImage = chData?.snippet?.thumbnails?.default?.url;
  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;

  if (!info) return null;

  const { snippet, statistics, id } = info;
  const { channelTitle, publishedAt, title, thumbnails, channelId } = snippet;
  const viewCount = statistics?.viewCount;
  const thumbnailUrl =
    thumbnails?.maxres?.url ||
    thumbnails?.high?.url ||
    thumbnails?.medium?.url ||
    thumbnails?.default?.url;
  const trimmedTitle = title.length > 55 ? title.slice(0, 55) + "..." : title;
  const date = moment(publishedAt).fromNow();
  const vc = viewCount ? numeral(viewCount).format("0.0a") : null;

  return (
    <div className="flex flex-col overflow-hidden cursor-pointer">
      <Link to={`/watch?v=${id}&ch=${channelId}`}>
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
          <img
            className="rounded-full w-full h-full"
            src={channelProfileImage || DEFAULT_PROFILE_IMG}
            alt="channel_profile_image"
          />
        </div>

        <Link to={`/watch?v=${id}&ch=${channelId}`}>
          <div className="flex-grow ml-3 overflow-hidden">
            <h1
              className="text-sm md:text-md font-medium line-clamp-2"
              style={{ color: theme.textOne }}
            >
              {trimmedTitle}
            </h1>
            <p
              className="text-xs md:text-sm font-semibold"
              style={{ color: theme.textTwo }}
            >
              {channelTitle}{" "}
              <span className="md:hidden">
                {vc ? vc+" views" : ""} • {date}
              </span>
            </p>
            <p
              className="text-sm font-semibold hidden md:block"
              style={{ color: theme.textTwo }}
            >
              {vc ? vc+" views" : ""} • {date}
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
