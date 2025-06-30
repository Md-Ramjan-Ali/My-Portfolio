import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Snowfall from "react-snowfall";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="relative overflow-hidden">
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
      <main className=" bg-[#212428]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
