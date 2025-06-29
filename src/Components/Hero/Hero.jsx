// src/Pages/Home/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import heroImg from "../../assets/ramjans.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 md:pt-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-5  bg-[#212428] text-white "
    >
      {/* Left - Text Area */}
      <motion.div
        className="flex-1 space-y-10 text-center md:text-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          <p className="mb-4"> Hi, I'm</p>
          <p className="text-[#ff014f] font-bold uppercase lg:text-[4rem]">
            Md. Ramjan Ali
          </p>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          <Typewriter
            words={["Full Stack Web Developer", "MERN Stack Developer"]}
            loop={false}
            cursor
            cursorStyle="_"
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
          href="/resume.pdf"
          target="_blank"
          download="Ramjan_Resume.pdf"
          rel="noopener noreferrer"
          className="flex w-fit gap-2  px-6 py-3 font-medium text-white group bg-[#ff014f] overflow-hidden rounded-full "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>
            <RiDownloadLine size={24} />
          </span>
          Resume
        </motion.a>

        <div className="flex justify-between">
          {/* contact icon */}
          <div className="">
            <p className="mt-6 mb-3 uppercase">Find With Me</p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-[#17171d] p-2 rounded hover:scale-110 transition text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="https://web.facebook.com/gm.romjan.50"
                target="_blank"
                rel="noreferrer"
                className="bg-[#17171d] p-2 rounded hover:scale-110 transition text-white"
              >
                <FaFacebookF />
              </a>
              <a
                href="www.linkedin.com/in/md-ramjan-ali-1bb369324"
                target="_blank"
                rel="noreferrer"
                className="bg-[#17171d] p-2 rounded hover:scale-110 transition text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          {/* skill icon */}
          <div className="">
            <p className="mt-6 mb-3 uppercase">Best Skill On</p>
            <div className="flex gap-3 mt-2">
              <p className="bg-[#17171d] p-2 rounded hover:scale-110 transition text-white cursor-pointer">
                <FaReact />
              </p>
              <p className="bg-[#17171d] p-2 rounded hover:scale-110 transition text-white cursor-pointer">
                <FaNodeJs />
              </p>
              <p className="bg-[#17171d] p-2 rounded hover:scale-110 transition text-white cursor-pointer">
                <SiExpress />
              </p>
              <p className="bg-[#17171d] p-2 rounded hover:scale-110 transition text-white cursor-pointer">
                <SiMongodb />
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right - Image */}
      <motion.div
        className="flex-1 flex justify-center mb-10 md:mb-0"
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
      >
        <img
          src={heroImg}
          alt="Ramjan"
          className="h-full object-center rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
