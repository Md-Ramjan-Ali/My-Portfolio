// src/Pages/Home/Hero.jsx
import React from "react";
import heroImg from "../../assets/portfolio image.png"; 

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 lg:px-20 bg-[#212428] text-white"
    >
      {/* Left - Text Area */}
      <div className="flex-1 space-y-5 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I’m <span className="text-green-500">Md. Ramjan Ali</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Full Stack Web Developer
        </h2>
        <p className="text-gray-300 max-w-md">
          I build responsive, scalable web applications using the MERN stack and
          modern frontend tools.
        </p>
        <a
          href="/Ramjan-Ali-Resume.pdf"
          download
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition"
        >
          Download Resume
        </a>
      </div>

      {/* Right - Image */}
      <div className="flex-1 flex justify-center mb-10 md:mb-0">
        <img
          src={heroImg}
          alt="Ramjan"
          className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
