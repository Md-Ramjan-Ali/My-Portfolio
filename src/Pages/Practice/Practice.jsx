import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-4xl" />,
  },
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-4xl" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-300 text-4xl" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300 text-4xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-400 text-4xl" />,
  },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-[#212428] text-white px-6 py-20"
    >
      <div className="max-w-6xl w-full text-center">
        <motion.p
          className="text-pink-500 uppercase tracking-widest text-sm font-semibold mb-2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
        >
          Visit My Skill & Hire Me
        </motion.p>
        <motion.h2
          className="text-5xl font-bold text-gray-100 mb-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1e1f24] hover:scale-105 delay-100 cursor-pointer w-full h-36 rounded-xl flex flex-col justify-center items-center gap-3 shadow-xl hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: idx * 0.2 }}
              viewport={{ once: false }}
            >
              <div>{skill.icon}</div>
              <h4 className="text-lg font-semibold text-gray-100">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
