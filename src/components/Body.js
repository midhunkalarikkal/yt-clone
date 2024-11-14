import React from "react";
import Sidebar from "./SideBars/Sidebar";
import { Outlet } from "react-router-dom";
import SmallSideBar from "./SideBars/SmallSideBar";
import useGetPopularVideos from '../utils/hooks/useGetPopularVideos';
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";

const Body = () => {
  // useGetPopularVideos();
  const limitReached = useSelector((store) => store.state.limitReached);
  return (
    <div className="flex">
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
