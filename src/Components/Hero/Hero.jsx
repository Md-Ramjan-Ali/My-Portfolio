// src/Pages/Home/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import heroImg from "../../assets/portfolio image.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 md:pt-0 flex flex-col-reverse md:flex-row items-center justify-between px-4 lg:px-20 bg-[#212428] text-white "
    >
      {/* Left - Text Area */}
      <motion.div
        className="flex-1 space-y-5 text-center md:text-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-green-500">Md. Ramjan Ali</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          <Typewriter
            words={["Full Stack Web Developer", "MERN Stack Developer"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={20}
            delaySpeed={1000}
          />
        </h2>
        <p
          data-aos="fade-up"
          className="text-gray-300 text-base leading-relaxed max-w-md"
        >
          I build responsive, scalable web applications using the MERN stack and
          modern frontend tools.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition cursor-pointer"
        >
          Download CV
        </motion.a>
      </motion.div>

      {/* Right - Image */}
      <motion.div
        className="flex-1 flex justify-center mb-10 md:mb-0"
        initial={{ x: 60 , opacity: 0}}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
      >
        <img
          src={heroImg}
          alt="Ramjan"
          className="w-60 h-60 md:w-80 md:h-80 object-center rounded-full shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
