import moment from "moment";
import numeral from "numeral";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../utils/theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { memo } from "react";
import { DEFAULT_PROFILE_IMG } from "../../utils/constants";

const SuggestionContainer = memo(({ info }) => {
  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;

  if (!info) return null;

  const { snippet, statistics} = info;
  const { channelTitle, publishedAt, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  const thumbnailUrl =
    thumbnails?.medium?.url ||
    thumbnails?.high?.url ||
    thumbnails?.maxres?.url ||
    thumbnails?.default?.url;
  const date = moment(publishedAt).fromNow();
  const vc = numeral(viewCount).format("0.0a");

  return (
    <>
      <div className="mt-2 lg:mb-1 hidden sm:flex">
        <div className="w-[30%] lg:w-[50%]">
          <div className="w-full h-full">
            <img className="rounded-lg" src={thumbnailUrl} alt="thumbnail" />
          </div>
        </div>
        <div className="w-[70%] lg:w-[50%] px-1">
          <h3
            className="hidden xl:block text-md"
            style={{ color: theme.textOne }}
          >
            {title.length > 50 ? `${title.slice(0, 50)}...` : title}
          </h3>
          <h3
            className="hidden lg:block xl:hidden text-sm"
            style={{ color: theme.textOne }}
          >
            {title.length > 35 ? `${title.slice(0, 35)}...` : title}
          </h3>
          <h3
            className="hidden md:block lg:hidden text-sm md:text-md"
            style={{ color: theme.textOne }}
          >
            {title}
          </h3>
          <h3
            className="block md:hidden text-sm"
            style={{ color: theme.textOne }}
          >
           {title.length > 35 ? `${title.slice(0, 35)}...` : title}
          </h3>

          <p className="text-sm lg:text-xs" style={{ color: theme.textTwo }}>
            {channelTitle}
          </p>
          <div className="flex items-center justify-start">
            <p className="text-xs" style={{ color: theme.textTwo }}>
              {vc} views
            </p>
            <p className="ml-4 text-xs" style={{ color: theme.textTwo }}>
              {date}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col overflow-hidden cursor-pointer sm:hidden">
        <div className="h-[200px]">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={thumbnailUrl}
            alt="thumbnail"
          />
        </div>

      <div className="flex py-4">
        <div className="flex-grow ml-3 overflow-hidden">
          <h1 className="text-sm md:text-md font-medium line-clamp-2" style={{ color: theme.textOne }}>{title}</h1>
          <p className="text-xs md:text-sm font-semibold" style={{ color: theme.textTwo }}>{channelTitle} <span className="md:hidden">{vc} views • {date}</span></p>
          <p className="text-sm font-semibold hidden md:block" style={{ color: theme.textTwo }}>
            {vc} views • {date}
          </p>
        </div>

        <div className="flex-shrink-0 ml-auto">
          <MoreVertIcon className="text-[#797979] cursor-pointer" />
        </div>
      </div>
    </div>
    </>
  );
});

export default SuggestionContainer;
