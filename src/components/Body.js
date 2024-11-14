import React from "react";
import Sidebar from "./SideBars/Sidebar";
import { Outlet } from "react-router-dom";
import SmallSideBar from "./SideBars/SmallSideBar";
import useGetPopularVideos from '../utils/hooks/useGetPopularVideos';

const Body = () => {
  useGetPopularVideos();
  return (
    <div className="flex">
      <SmallSideBar />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
