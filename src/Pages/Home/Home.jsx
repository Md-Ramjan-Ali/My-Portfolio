import React from "react";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import MySkills from "../../Components/MySkills/MySkills";

const Home = () => {
  return (
    <div className=" text-white max-w-10/12 mx-auto">
      <Hero></Hero>
      <About></About>
      <MySkills></MySkills>
      {/* <Skills></Skills> */}
    </div>
  );
};

export default Home;
