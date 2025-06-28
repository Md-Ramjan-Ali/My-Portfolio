import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className=" bg-[#212428] min-h-screen">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Root;
