import React from "react";
import Sidebar from "./SideBars/Sidebar";
import { Outlet } from "react-router-dom";
import SmallSideBar from "./SideBars/SmallSideBar";
import useGetPopularVideos from '../utils/hooks/useGetPopularVideos';
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";
import { darkTheme, lightTheme } from "../utils/theme";

const Body = () => {
  console.log("Body rendered")
  const limitReached = useSelector((store) => store.state.limitReached);
  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;

  useGetPopularVideos();  

  return (
    <div className="flex" style={{ background: theme.mainBg}}>
      <SmallSideBar />
      <Sidebar />
      { limitReached ? (
        <ErrorPage />
      ) : (
        <Outlet />
      )
    }
    </div>
  );
};

export default Body;
