import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";

const MainLayout = () => {
  return (
    <div className="flex  gap-1 w-full">
     <SideBar/>
      <main className="w-full py-3 pr-3">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
