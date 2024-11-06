import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from "moment";
import numeral from "numeral";

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const {
    channelTitle,
    publishedAt,
    title,
    thumbnails: {
      default: { url: profileUrl },
      maxres: { url: thumbnailUrl },
    },
  } = snippet;
  const { viewCount } = statistics;
  const trimmedTitle = title.length > 55 ? title.slice(0, 55) + '...' : title;
  const date = moment(publishedAt).fromNow();
  const vc = numeral(viewCount).format('0.0a');

  return (
    <div className="flex flex-col overflow-hidden cursor-pointer">
      <div className="h-[180px]">
        <img className="rounded-lg w-full h-full object-cover" src={thumbnailUrl} alt="thumbnail" />
      </div>

      <div className="flex p-4">
        <div className="flex-shrink-0 w-10 h-10">
          <img className="rounded-full w-full h-full" src={profileUrl} alt="channel_profile_image" />
        </div>

        <div className="flex-grow ml-3 overflow-hidden">
          <h1 className="text-md font-medium line-clamp-2">{trimmedTitle}</h1>
          <p className="text-[#797979] text-sm font-semibold">{channelTitle}</p>
          <p className="text-[#797979] text-sm font-semibold">{vc} views • {date}</p>
        </div>

        <div className="flex-shrink-0 ml-auto">
          <MoreVertIcon className="text-[#797979] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
