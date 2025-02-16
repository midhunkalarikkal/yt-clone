import React from "react";
import { DEFAULT_PROFILE_IMG } from "../../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex p-2 m-1">
      <div className="flex-shrink-0">
        <img
          className="rounded-full w-6 h-6 object-cover"
          src={DEFAULT_PROFILE_IMG}
          alt="profile_image"
        />
      </div>
      <div className="ml-2 text-ellipsis whitespace-wrap">
        <p className="text-xs font-semibold">
          {name} {message}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
