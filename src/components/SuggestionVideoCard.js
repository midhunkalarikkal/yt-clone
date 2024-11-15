import moment from "moment";
import numeral from "numeral";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../utils/theme";

const SuggestionContainer = memo(({ info }) => {

  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;

  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, publishedAt, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  const thumbnailUrl =
    thumbnails?.medium?.url ||
    thumbnails?.high?.url ||
    thumbnails?.maxres?.url ||
    thumbnails?.default?.url;
  const trimmedTitle = title.length > 55 ? title.slice(0, 55) + "..." : title;
  const date = moment(publishedAt).fromNow();
  const vc = numeral(viewCount).format("0.0a");

  return (
    <div className="flex h-[110px] mb-3">
      <div className="w-[40%]">
        <div className="w-full h-full">
          <img className="rounded-lg" src={thumbnailUrl} alt="thumbnail" />
        </div>
      </div>
      <div className="w-[60%] px-2">
        <h3 className="text-md" style={{ color: theme.textOne }}>{trimmedTitle}</h3>
        <p className="text-xs" style={{ color: theme.textTwo }}>{channelTitle}</p>
        <div className="flex items-center justify-start">
          <p className="text-xs" style={{ color: theme.textTwo }}>{vc} views</p>
           <p className="ml-4 text-xs" style={{ color: theme.textTwo }}>{date}</p>
        </div>
      </div>
    </div>
  );
});

export default SuggestionContainer;
