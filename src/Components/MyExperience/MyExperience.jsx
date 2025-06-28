import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import workLogo from "../../assets/ExprienceImg.jpg";

const experiences = [
  // {
  //   title: "Senior System Engineer",
  //   company: "eThemeStudio",
  //   duration: "2018 - Running",
  //   description:
  //     "Led the development and deployment of scalable systems with a focus on reliability and performance.",
  // },
  // {
  //   title: "Data Architect",
  //   company: "Easy Computers",
  //   duration: "2015 - 2018",
  //   description:
  //     "Designed and maintained data architecture and pipelines, ensuring data quality and accessibility across projects.",
  // },
  // {
  //   title: "Web Developer",
  //   company: "Bangla College",
  //   duration: "2012 - 2015",
  //   description:
  //     "Built dynamic websites and applications using modern web technologies with a user-focused approach.",
  // },
  {
    title: "Full Stack Web Development Learner",
    company: "Programming Hero Academy",
    duration: "2023 - Present",
    description:
      "Completed a professional full stack development course focusing on the MERN stack. Built real-world projects using React, Firebase, Node.js, and MongoDB. Gained practical skills in authentication, REST APIs, and responsive UI design.",
  },
];

const MyExperience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#212428] py-5 text-gray-300 "
    >
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <motion.div
          className="w-full lg:w-1/2 lg:pt-5 "
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <img
            src={workLogo}
            alt="Experience Visual"
            className="rounded-2xl w-full h-auto object-center shadow-xl"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
        >
          <p
            className="text-green-400 font-medium  uppercase "
            style={{ letterSpacing: "8px" }}
          >
            Learning Experience
          </p>
          {/* <p className="text-green-400 font-medium tracking-widest uppercase">
            Work Experience
          </p> */}
          {/* <h2 className="text-4xl font-bold text-white">
            I Worked As{" "}
            <span className="text-green-500">
              <Typewriter
                words={["Web Developer",]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={20}
                delaySpeed={1000}
              />
            </span>
          </h2> */}
          <h2 className="text-4xl font-bold text-white">
            I am Learning{" "}
            <span className="text-2xl text-green-400">
              <Typewriter
                words={[
                  "Modern Web Technologies",
                  "MERN Stack",
                  "Full Stack Development",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={20}
                delaySpeed={1500}
              />
            </span>
          </h2>
          <p className="">
            Though I am a fresher, I have hands-on experience through intensive
            project-based learning.
          </p>
          {/* <p className="">
            Over the years, I've gained valuable experience in developing,
            designing, and architecting software systems and web applications
            across different industries.
          </p> */}

          {/* Experience Cards */}
          <div className="">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-4 items-start group  p-2 rounded-lg transition cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: false }}
              >
                <div className="group-hover:bg-green-500 border border-gray-500  p-3 rounded-lg h-fit shadow-md">
                  <FaBriefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm font-medium ">
                    {item.company} <span className="">({item.duration})</span>
                  </p>
                  <p className="text-sm mt-2 ">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyExperience;
