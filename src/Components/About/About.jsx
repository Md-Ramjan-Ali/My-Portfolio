import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import about from "../../assets/heroPortfolio.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-24  lg:pt-0 bg-[#212428] text-white flex flex-col lg:flex-row items-center gap-5"
    >
      {/* Left Side - Image */}
      <motion.div
        className="lg:w-1/2 w-full flex justify-center"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
      >
        <div className="bg-[#202127] rounded-xl shadow-lg">
          <img
            src={about}
            alt="Md Ramjan Ali"
            className="w-[450px] h-full rounded-xl object-center"
          />
        </div>
      </motion.div>

      {/* Right Side - Content */}
      <div
        className="lg:w-1/2 space-y-6 px-2"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="false"
      >
        <p className="text-[#ff014f] text-sm uppercase tracking-wide">
          About Me
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          I Develop Web Applications.
        </h2>
        <p className="text-gray-300 leading-relaxed">
          I'm a passionate full-stack web developer focused on building
          responsive and scalable applications using the MERN stack. I enjoy
          turning real-world problems into elegant digital solutions.
        </p>

        {/* Info Table */}
        <table className="w-full text-sm text-gray-300 border-t border-b border-gray-600 py-4 text-left">
          {/* Responsive Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 text-sm text-gray-300">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="font-medium text-gray-400 md:w-32">Name:</span>
              <span className="">Md. Ramjan Ali</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="font-medium text-gray-400 md:w-32">Phone:</span>
              <span>+880 1928 294516</span>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="font-medium text-gray-400 md:w-32">Age:</span>
              <span>22 Years</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="font-medium text-gray-400 md:w-32">Email:</span>
              <span>gmramjanali8888@gamil.com</span>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="font-medium text-gray-400 md:w-32">
                Occupation:
              </span>
              <span>Full Stack Developer</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="font-medium text-gray-400 md:w-32">
                Nationality:
              </span>
              <span>Bangladeshi</span>
            </div>
          </div>
        </table>

        <div className="pt-4">
          <p className="text-gray-400 font-bold text-xl uppercase">
            Md.Ramjan Ali
          </p>
          <p className="text-sm text-gray-400">MERN Stack Developer</p>
        </div>
      </div>
    </section>
  );
};

export default About;
