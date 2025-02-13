import numeral from "numeral";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChannelData } from "../../utils/videoSlice";
import { darkTheme, lightTheme } from "../../utils/theme";
import { CHANNEL_DETAILS_API, GAK } from "../../utils/constants";

const ChannelDetailSmall = ({ id }) => {
  
  const dispatch = useDispatch();
  const chId = id; 

  const chData = useSelector((store) =>
    store.videos.channelData.find((item) => item.chId === chId)
  );

  useEffect(() => {
    console.log("before channel data fetching")
    if(!chId || chData) return;
    const fetchChannelData = async () => {
      const response = await fetch(
        `${CHANNEL_DETAILS_API}${chId}&key=${GAK}`
      );
      console.log("Channel data fetched");
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        dispatch(addChannelData({ ...data.items[0], chId }));
      }
    }
    fetchChannelData();
  }, [chId, dispatch, chData]);

  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;

  if (!chData) {
    return (
      <div className="flex items-center gap-4 animate-pulse">
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>

        <div className="flex-1">
          <p className="h-4 bg-gray-300 rounded w-6/12 mb-2"></p>
          <p className="h-3 bg-gray-300 rounded w-8/12"></p>
        </div>

        <div className="ml-4">
          <button className="px-4 py-2 h-8 w-24 bg-gray-300 rounded-full"></button>
        </div>
      </div>

    );
  }

  const { snippet, statistics } = chData;
  const { localized, thumbnails } = snippet;
  const { subscriberCount } = statistics;
  const { title } = localized;
  const {
    default: { url },
  } = thumbnails;
  const subscribers = numeral(subscriberCount).format("0.0a");

  return (
    <div className="flex items-center gap-2">

      <img
        className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4"
        src={url}
        alt="Your_profile_image"
      />

      <div>
        <h4 className="text-md md:text-lg font-medium" style={{ color: theme.textOne }}>{title}</h4>
        <p className="text-sm" style={{ color: theme.textTwo }}>{subscribers} subscribers</p>
      </div>

      <button className="ml-8 md:ml-4 px-4 py-2 md:px-4 md:py-2 font-medium rounded-full transition flex items-center justify-center text-sm md:text-md" style={{ color: theme.subButtonText, backgroundColor: theme.subButtonBg }}>
        Subscribe
      </button>

    </div>
  );
};

export default ChannelDetailSmall;
