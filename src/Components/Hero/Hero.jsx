// src/Pages/Home/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import heroImg1 from "../../assets/hero.png";
// import heroImg from "../../assets/ramjans.png";
import {
  FaFacebookF,
  FaGithub,
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
      className="min-h-screen pt-32 md:pt-26 bg-[#212428] text-white flex items-center justify-center w-full"
    >
      <div className="max-w-screen-xl mx-auto w-full px-4 xl:px-0 flex flex-col-reverse lg:flex-row items-center justify-between gap-5">
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
            <p className="text-[#ff014f] font-bold uppercase xl:text-[4rem]">
              Md. Ramjan Ali
            </p>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
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
            className="text-gray-300 text-base leading-relaxed max-w-md px-2 xl:px-0"
          >
            I build responsive, scalable web applications using the MERN stack and
            modern frontend tools.
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <motion.a
              href="https://drive.google.com/file/d/1csvW5YaPwyioHMecNtI0sQRg-exJQ2UG/view?usp=sharing"
              target="_blank"
              download="https://drive.google.com/file/d/1csvW5YaPwyioHMecNtI0sQRg-exJQ2UG/view?usp=sharing"
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
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center">
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
                  href="https://github.com/Md-Ramjan-Ali"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#17171d] p-2 rounded hover:scale-110 transition text-white"
                >
                  <FaGithub />
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
          className="flex-1 flex justify-center items-center mb-10 md:mb-0"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
        >
          <img
            src={heroImg1}
            alt="Ramjan"
            className="w-80 h-80 sm:w-96 sm:h-96 md:w-[440px] md:h-[440px] lg:w-[480px] lg:h-[480px] xl:w-[520px] xl:h-[520px] object-cover object-top rounded-full border-4 border-[#ff014f]/20 shadow-2xl shadow-black/50"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
