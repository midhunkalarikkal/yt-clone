import React from "react";
import useGetChannelData from "../utils/hooks/useGetChannelData";
import numeral from "numeral";
import { DEFAULT_PROFILE_IMG } from "../utils/constants";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../utils/theme";

const ChannelDetailSmall = ({ id }) => {
  const { channelData, loading, error } = useGetChannelData(id);
  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;

  if (loading || error) {
    return (
      <div className="flex items-center gap-4">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src={DEFAULT_PROFILE_IMG}
          alt="Your_profile_image"
        />
        <div>
          <h4 className="text-lg font-medium" style={{ color: theme.textOne }}>Channel Name</h4>
          <p className="text-sm" style={{ color: theme.textTwo }}>Subscriber count</p>
        </div>

        <button className="ml-4 px-4 py-2 bg-black text-white font-medium rounded-full hover:bg-[#272727] transition">
          Subscribe
        </button>
      </div>
    );
  }

  const { snippet, statistics } = channelData;
  const { localized, thumbnails } = snippet;
  const { subscriberCount } = statistics;
  const { title } = localized;
  const {
    default: { url },
  } = thumbnails;
  const subscribers = numeral(subscriberCount).format("0.0a");

  return (
    <div className="flex items-center gap-4">
      <img
        className="w-12 h-12 rounded-full mr-4"
        src={url}
        alt="Your_profile_image"
      />
      <div>
        <h4 className="text-lg font-medium" style={{ color: theme.textOne }}>{title}</h4>
        <p className="text-sm" style={{ color: theme.textTwo }}>{subscribers} subscribers</p>
      </div>

      <button className="ml-4 px-4 py-2 font-medium rounded-full transition flex items-center justify-center" style={{ color: theme.subButtonText, backgroundColor: theme.subButtonBg }}>
        Subscribe
      </button>
    </div>
  );
};

export default ChannelDetailSmall;
