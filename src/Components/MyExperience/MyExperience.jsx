import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import workLogo from "../../assets/ExprienceImg.jpg";

const experiences = [
  {
    title: "Full-stack Developer",
    company: "Softvence Agency",
    location: "99 Bir Uttam A.K. Khandakar Road, Mohakhali C/A, Dhaka-1212",
    duration: "Jun 2024 – Aug 2026",
    description:
      "Front-End Development with React.js, emphasizing UI maintenance and responsiveness. Building reusable and maintainable UI components. Integrating REST APIs and managing async data efficiently. Optimizing performance using code splitting and lazy loading. Working closely with designers and backend developers.",
    responsibilities: [
      "Full-Stack Architecture: Engineered and deployed full-stack web applications using Next.js, React, Node.js, and Express.js, ensuring high performance and scalable system design.",
      "Backend & API Design: Designed and integrated secure RESTful APIs with JWT authentication and efficient MongoDB queries to streamline data processing.",
      "UI/UX & Component Architecture: Built modular, reusable, and accessible UI components using TypeScript and Tailwind CSS, improving code maintainability.",
      "Performance Optimization: Optimized web application speed by implementing dynamic imports, code splitting, and caching strategies, reducing load times significantly.",
      " Cross-Functional Collaboration: Partnered with UI/UX designers and product managers to deliver seamless client-facing features from concept to deployment.",
    ],
  },
];

const MyExperience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#212428] py-20 text-gray-300 flex items-center justify-center w-full"
    >
      <div className="max-w-screen-xl mx-auto w-full px-4 xl:px-0 flex flex-col lg:flex-row items-center gap-12">
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
            className="text-[#ff014f]  font-medium  uppercase text-center md:text-left tracking-widest"
            style={{ letterSpacing: "8px" }}
          >
            Work Experience
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left">
            I Worked As{" "}
            <span className="text-[#ff014f]">
              <Typewriter
                words={["Full-stack Developer"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={20}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="text-center md:text-left">
            Over the months, I've gained valuable professional experience in developing
            and architecting modern web applications at Softvence Agency.
          </p>

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
                <div className="group-hover:bg-[#ff014f]  border border-gray-500  p-3 rounded-lg h-fit shadow-md">
                  <FaBriefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-[#ff014f]">
                    {item.company}{" "}
                    <span className="text-gray-400">({item.duration})</span>
                  </p>
                  {item.location && (
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <MapPin size={12} className="text-[#ff014f]" />
                      {item.location}
                    </p>
                  )}
                  {item.responsibilities ? (
                    <ul className="text-sm mt-2 space-y-2 list-none">
                      {item.responsibilities.map((resp, i) => {
                        const colonIndex = resp.indexOf(":");
                        const hasColon = colonIndex !== -1;
                        const title = hasColon ? resp.substring(0, colonIndex + 1) : "";
                        const description = hasColon ? resp.substring(colonIndex + 1) : resp;

                        return (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#ff014f] mt-0.5 flex-shrink-0">☛</span>
                            <span>
                              {hasColon && (
                                <strong className="font-bold text-white mr-1.5">
                                  {title.trim()}
                                </strong>
                              )}
                              {description}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="text-sm mt-2">{item.description}</p>
                  )}
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
