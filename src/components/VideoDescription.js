import moment from "moment";
import numeral from "numeral";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const VideoDescription = ({ videoId }) => {
  const [isExapnd, setIsExpand] = useState(false);
  const data = useSelector((store) =>
    store.videos?.items?.find((item) => item.id === videoId)
  );

  if (!data) {
    return <div>Loading</div>;
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
    <div className="p-4  mr-4 bg-[#f0f0f0]">
      <p className="text-md font-semibold">
        {views} views {date}
      </p>
      <p className="text-md">
        {isExapnd ? (
          <>
            {description}
            <span
              className="font-semibold cursor-pointer"
              onClick={handleDescription}
            >
              {" "}
              less...
            </span>
          </>
        ) : description.length > 300 ? (
          <>
            {description.slice(0, 300)}
            <span
              className="font-semibold cursor-pointer"
              onClick={handleDescription}
            >
              {" "}
              more...
            </span>
          </>
        ) : (
          <>
            {description}
            <span
              className="font-semibold cursor-pointer"
              onClick={handleDescription}
            >
              {" "}
              less...
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default VideoDescription;
