import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiFigma,
  SiPostman,
  SiCanva,
  SiNetlify,
  SiVercel,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiJsonwebtokens,
  SiMongoose,
  SiSocketdotio,
  SiPostgresql,
} from "react-icons/si";
import { TbApi, TbBrain, TbTargetArrow, TbRocket, TbSearch, TbLock } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-4xl" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400 text-4xl" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500 text-4xl" /> },
      { name: "RTK Query", icon: <SiRedux className="text-purple-400 text-4xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300 text-4xl" /> },
    ],
  },
  {
    category: "Backend & API",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300 text-4xl" /> },
      { name: "REST API", icon: <TbApi className="text-sky-400 text-4xl" /> },
      { name: "Socket.io", icon: <SiSocketdotio className="text-white text-4xl" /> },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
      { name: "Mongoose", icon: <SiMongoose className="text-red-500 text-4xl" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 text-4xl" /> },
    ],
  },
  {
    category: "Auth & Security",
    skills: [
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-4xl" /> },
      { name: "NextAuth", icon: <RiNextjsFill className="text-white text-4xl" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-pink-400 text-4xl" /> },
      { name: "Bcrypt", icon: <TbLock className="text-green-400 text-4xl" /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
      { name: "GitHub", icon: <FaGithub className="text-white text-4xl" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500 text-4xl" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500 text-4xl" /> },
      { name: "Canva", icon: <SiCanva className="text-cyan-400 text-4xl" /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-400 text-4xl" /> },
      { name: "Vercel", icon: <SiVercel className="text-white text-4xl" /> },
      { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-400 text-4xl" /> },
      { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-400 text-4xl" /> },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Quick Learner", icon: <TbBrain className="text-yellow-300 text-4xl" /> },
      { name: "Problem-solver", icon: <TbSearch className="text-green-400 text-4xl" /> },
      { name: "Self-motivated", icon: <TbRocket className="text-red-400 text-4xl" /> },
      { name: "Detail-oriented", icon: <TbTargetArrow className="text-purple-400 text-4xl" /> },
    ],
  },
];

const MySkills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-[#212428] text-white py-20"
    >
      <div className="text-center w-full">
        <motion.p
          className="text-[#ff014f] uppercase tracking-widest text-sm font-semibold mb-2"
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

        {/* Tab Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10 px-4 xl:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                activeTab === idx
                  ? "bg-[#ff014f] text-white border-[#ff014f] shadow-lg shadow-[#ff014f]/30"
                  : "bg-[#1e1f24] text-gray-400 border-gray-700 hover:border-[#ff014f] hover:text-white"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        {/* Skill Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 xl:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {skillCategories[activeTab].skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08, duration: 0.3 }}
                whileHover={{ scale: 1.08 }}
                className="bg-[#1e1f24] cursor-pointer w-full h-36 rounded-xl flex flex-col justify-center items-center gap-3 shadow-xl hover:shadow-[#ff014f]/20 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#ff014f]/40"
              >
                <div>{skill.icon}</div>
                <h4 className="text-lg font-semibold text-gray-100">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MySkills;
