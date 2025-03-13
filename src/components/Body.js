import React from "react";
import Sidebar from "./SideBars/Sidebar";
import { Outlet } from "react-router-dom";
import SmallSideBar from "./SideBars/SmallSideBar";
import useGetPopularVideos from "../utils/hooks/useGetPopularVideos";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";
import { darkTheme, lightTheme } from "../utils/theme";
import { ToastContainer } from "react-toastify";

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
