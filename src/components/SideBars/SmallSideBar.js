import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import VideoStableOutlinedIcon from "@mui/icons-material/VideoStableOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { darkTheme, lightTheme } from "../../utils/theme";

const SmallSideBar = () => {
  const isSmallSidebarOpen = useSelector(
    (store) => store.state.isSmallSidebarOpen
  );
  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;

  return (
    isSmallSidebarOpen && (
      <div className={`w-[6%] py-2 px-2 h-screen fixed top-14 items-start justify-center hidden md:flex`} style={{ backgroundColor: theme.mainBg}}>
        <div>
          <ul style={{ color: theme.menuText }}>
            <Link to={"/"}>
              <li className="flex flex-col items-center mt-2 cursor-pointer p-2 rounded-lg custom-smallList-item" style={{ "--hover-bg": theme.menuHover}}>
                <HomeIcon fontSize="medium" />
                <span className="text-xs">Home</span>
              </li>
            </Link>
            <li className="flex flex-col items-center mt-2 cursor-pointer p-2 rounded-lg custom-smallList-item" style={{ "--hover-bg": theme.menuHover}}>
              <VideoStableOutlinedIcon fontSize="medium" />{" "}
              <span className="text-xs">Shorts</span>
            </li>
            <li className="flex flex-col items-center mt-2 cursor-pointer p-2 rounded-lg custom-smallList-item" style={{ "--hover-bg": theme.menuHover}}>
              <SubscriptionsOutlinedIcon fontSize="medium" />
              <span className="text-xs">Subscriptions</span>
            </li>
            <li className="flex flex-col items-center mt-2 cursor-pointer p-2 rounded-lg custom-smallList-item" style={{ "--hover-bg": theme.menuHover}}>
              <AccountCircleOutlinedIcon fontSize="medium" />
              <span className="text-xs">You</span>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default SmallSideBar;
