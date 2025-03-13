import React from "react";
import ErrorPage from "./ErrorPage";
import Sidebar from "./SideBars/Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import SmallSideBar from "./SideBars/SmallSideBar";
import { darkTheme, lightTheme } from "../utils/theme";
import useGetPopularVideos from "../utils/hooks/useGetPopularVideos";

const Body = () => {
  const limitReached = useSelector((store) => store.state.limitReached);
  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;

  useGetPopularVideos();

  return (
    <div className="flex" style={{ background: theme.mainBg }}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        theme={!themeMode ? "light" : "dark"}
      />
      <SmallSideBar />
      <Sidebar />
      {limitReached ? <ErrorPage /> : <Outlet />}
    </div>
  );
};

export default Body;
