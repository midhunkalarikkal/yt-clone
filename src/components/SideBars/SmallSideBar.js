import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import VideoStableOutlinedIcon from "@mui/icons-material/VideoStableOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const SmallSideBar = () => {
  const isSmallSidebarOpen = useSelector(
    (store) => store.state.isSmallSidebarOpen
  );
  return (
    isSmallSidebarOpen && (
      <div className={`w-[6%] py-2 px-2 h-screen fixed top-14 bg-white`}>
        <div style={{ borderBottom: "1px solid #f0f0f0" }}>
          <ul>
            <Link to={"/"}>
              <li className="flex flex-col items-center mt-2">
                <HomeIcon fontSize="medium" />
                <span className="text-xs">Home</span>
              </li>
            </Link>
            <li className="flex flex-col items-center mt-8">
              <VideoStableOutlinedIcon fontSize="medium" />{" "}
              <span className="text-xs">Shorts</span>
            </li>
            <li className="flex flex-col items-center mt-8">
              <SubscriptionsOutlinedIcon fontSize="medium" />
              <span className="text-xs">Subscriptions</span>
            </li>
            <li className="flex flex-col items-center mt-8">
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
