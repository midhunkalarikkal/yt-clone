import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import SmallSideBar from "./SmallSideBar";

const Body = () => {
  return (
    <div className="flex h-screen">
      <SmallSideBar />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
