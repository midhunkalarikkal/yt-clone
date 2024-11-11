import React from "react";
import Sidebar from "./SideBars/Sidebar";
import { Outlet } from "react-router-dom";
import SmallSideBar from "./SideBars/SmallSideBar";

const Body = () => {
  return (
    <div className="flex">
      <SmallSideBar />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
