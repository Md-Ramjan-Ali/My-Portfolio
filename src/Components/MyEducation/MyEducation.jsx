import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import educationImg from "../../assets/education-img.jpg";

const educationData = [
  {
    degree: "Complete Web Development Course",
    institute: "Programming Hero",
    duration: "2023 - Running",
    description:
      "Currently pursuing a complete web development course focusing on modern technologies including React, Node.js, MongoDB, Firebase, and Express.",
  },
  {
    degree: "Bachelor of Arts (BA)",
    institute: "National University",
    duration: "2021 - Running",
    description:
      "Completed Bachelor's degree under National University of Bangladesh while learning programming alongside.",
  },
];

const MyEducation = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#212428] py-16 px-4 text-gray-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left - Education Content */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
        >
          <p className="text-[#ff014f]  text-sm tracking-[5px] uppercase">
            Education
          </p>
          <h2 className="text-4xl font-bold text-white">My Education</h2>
          <p className="text-gray-400">
            My academic background helped shape my logical mindset, while my web
            development journey gave me hands-on skills with real-world
            projects.
          </p>

          <div className="space-y-6">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-4 group cursor-pointer"
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 4 }}
                viewport={{ once: false }}
              >
                <div className="border border-gray-600 p-3 rounded-lg h-fit transition-all duration-300 group-hover:bg-[#ff014f] ">
                  <FaGraduationCap size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-medium text-gray-400">
                    {item.institute} <span>({item.duration})</span>
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
        >
          <img
            src={educationImg}
            alt="Education"
            className="rounded-2xl w-full object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MyEducation;
