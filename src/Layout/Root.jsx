import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Snowfall from "react-snowfall";

const Root = () => {
  return (
    <div className="relative">
      <Snowfall
        color="#E0F7FA"
        snowflakeCount={100}
        radius={[1, 2.2]}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <Navbar></Navbar>
      <main className=" bg-[#212428] min-h-screen">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Root;
