import moment from "moment";
import numeral from "numeral";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { parseDescription } from "../utils/formaters";

const VideoDescription = ({ videoId, onSetVideoTitle }) => {
  const [isExapnd, setIsExpand] = useState(false);
  const data = useSelector((store) =>
    store.videos?.items?.find((item) => item.id === videoId)
  );

  useEffect(() => {
    if (data && data.snippet?.title) {
      onSetVideoTitle(data.snippet.title);
    }
  }, [data, onSetVideoTitle]);

  if (!data) {
    return (
      <div className="p-4  mr-4 bg-[#f2f2f2]">
        <p className="text-md font-semibold">
          <div>Loading</div>;
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
    <div className="p-4  mr-4 bg-[#f2f2f2] rounded-lg">
      <p className="text-md font-semibold">
        {views ? views : "00"} views {date ? date : "Loading..."}
      </p>
      <p className="text-md">
        {description ? (
          description.length > 300 ? (
            isExapnd ? (
              <>
                {parseDescription(description)}
                <span
                  className="font-semibold cursor-pointer"
                  onClick={handleDescription}
                >
                  {" "}
                  less...
                </span>
              </>
            ) : (
              <>
                {parseDescription(description)}
                <span
                  className="font-semibold cursor-pointer"
                  onClick={handleDescription}
                >
                  {" "}
                  more...
                </span>
              </>
            )
          ) : (
            parseDescription(description)
          )
        ) : (
          "Loading..."
        )}
      </p>
    </div>
  );
};

export default VideoDescription;
