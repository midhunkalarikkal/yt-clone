import React, { useState } from "react";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../../utils/theme";
import { DEFAULT_PROFILE_IMG } from "../../../utils/constants";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const ChatMessage = React.memo(({ data }) => {
  const { profileImage, bgColor, name, message } = data;
  const themeMode = useSelector((store) => store.state?.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;
  const [showMoreButton, setShowMoreButton] = useState(false);

  const showButton = () => {
    setShowMoreButton(true);
  };

  const hideButton = () => {
    setShowMoreButton(false);
  };

  return (
    <div
      className="flex items-start py-1 px-4 cursor-pointer custom-searchSuggestion-bg"
      style={{ "--hover-bg": theme.descriptionBg }}
      onMouseEnter={showButton}
      onMouseLeave={hideButton}
    >
      <div className="flex">
        {profileImage ? (
          <img
            className="rounded-full w-7 h-7 object-cover"
            src={profileImage || DEFAULT_PROFILE_IMG}
            alt="profile_image"
          />
        ) : (
          <span
            className="rounded-full w-7 h-7 flex justify-center text-white"
            style={{ backgroundColor: bgColor }}
          >
            {name[0]}
          </span>
        )}
        <p className="flex-1 mx-2">
          <span className="font-medium" style={{ color: theme.chatName }}>
            {name}
          </span>
          <span className="mx-2" style={{ color: theme.textOne }}>
            {message}
          </span>
        </p>
      </div>
      <span className="ml-auto mt-1">
        {showMoreButton && <MoreVertOutlinedIcon />}
      </span>
    </div>
  );
});

export default ChatMessage;
