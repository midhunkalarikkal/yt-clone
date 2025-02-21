import React from "react";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../utils/theme";
import { DEFAULT_PROFILE_IMG } from "../../utils/constants";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const ChatMessage = ({ name, message }) => {
  const themeMode = useSelector((store) => store.state?.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;

  return (
    <div
      className="flex items-start py-1 px-4 cursor-pointer custom-searchSuggestion-bg"
      style={{ "--hover-bg": theme.descriptionBg }}
    >
      <img
        className="rounded-full w-7 h-7 object-cover mt-1"
        src={DEFAULT_PROFILE_IMG}
        alt="profile_image"
      />
      <div className="flex mt-1 mx-2">
        <p>
          <span className="font-medium" style={{ color: theme.chatName }}>
            {name}
          </span>{" "}
          <span className="mx-2" style={{ color: theme.textOne }}>
            {message}
          </span>
        </p>
        <span>
          <MoreVertOutlinedIcon />
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
