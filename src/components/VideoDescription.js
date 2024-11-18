import moment from "moment";
import numeral from "numeral";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { parseDescription } from "../utils/formaters";
import { darkTheme, lightTheme } from "../utils/theme";

const VideoDescription = ({ videoId, onSetVideoTitle }) => {
  const [isExapnd, setIsExpand] = useState(false);
  const data = useSelector((store) =>
    store.videos?.items?.find((item) => item.id === videoId)
  );
  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;

  useEffect(() => {
    if (data && data.snippet?.title) {
      onSetVideoTitle(data.snippet.title);
    }
  }, [data, onSetVideoTitle]);

  if (!data) {
    return (
      <div
        className="p-4  mr-4 rounded-lg"
        style={{ backgroundColor: theme.descriptionBg }}
      >
        <p className="text-md font-semibold"
           style={{ color: theme.textOne }}>Loading
        </p>
      </div>
    );
  }

  const handleDescription = () => {
    setIsExpand(!isExapnd);
  };

  const { snippet, statistics } = data;
  const { description, publishedAt } = snippet;
  const { viewCount } = statistics;
  const views = numeral(viewCount).format("0.0a");
  const date = moment(publishedAt).fromNow();

  return (
    <div
      className="p-4 md:mr-4 rounded-lg"
      style={{ backgroundColor: theme.descriptionBg }}
    >
      <div
        className="text-sm md:text-md font-semibold pb-2"
        style={{ color: theme.textOne }}
      >
        {views ? views : "00"} views {date ? date : "Loading..."}
      </div>
      <div className="text-sm md:text-md" style={{ color: theme.textOne }}>
        {description ? (
          description.length > 200 ? (
            <>
              {isExapnd
                ? parseDescription(description, themeMode)
                : parseDescription(description.slice(0, 200), themeMode)}
              <span
                className="font-semibold cursor-pointer"
                onClick={handleDescription}
              >
                {isExapnd ? " less..." : " more..."}
              </span>
            </>
          ) : (
            parseDescription(description, themeMode)
          )
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default VideoDescription;
