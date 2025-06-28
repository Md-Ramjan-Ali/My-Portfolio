import React from "react";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import MySkills from "../../Components/MySkills/MySkills";
import MyExperience from "../../Components/MyExperience/MyExperience";
import MyEducation from "../../Components/MyEducation/MyEducation";
import Contact from "../../Components/Contact/Contact";

const Home = () => {
  return (
    <div className=" text-white max-w-10/12 mx-auto">
      <Hero></Hero>
      <About></About>
      <MySkills></MySkills>
      <MyExperience></MyExperience>
      <MyEducation></MyEducation>
      <Contact></Contact>

    {/* <ContactWithMe></ContactWithMe> */}
      
    </div>
  );
};

export default Home;
