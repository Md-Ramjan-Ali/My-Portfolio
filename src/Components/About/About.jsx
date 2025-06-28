import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import img from "../../assets/portfolio image.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-24 lg:pt-0 bg-[#212428] text-white flex flex-col lg:flex-row items-center gap-12"
    >
      {/* Left Side - Image */}
      <motion.div
        className="lg:w-1/2 w-full flex justify-center"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
      >
        <div className="bg-[#1e1f24] rounded-xl shadow-lg">
          <img
            src={img}
            alt="Md Ramjan Ali"
            className="w-[450px] h-full rounded-xl object-center"
          />
        </div>
      </motion.div>

      {/* Right Side - Content */}
      <div
        className="lg:w-1/2 space-y-6"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="false"
      >
        <p className="text-green-400 text-sm uppercase tracking-wide">
          About Me
        </p>
        <h2 className="text-3xl font-bold leading-snug">
          I Develop{" "}
          <span className="text-green-400">
            <Typewriter
              words={[
                "Full Stack Web App",
                "Secure Authentication",
                "MERN Stack Projects",
                "Real-World Solutions",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={20}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p className="text-gray-300 leading-relaxed">
          I'm a passionate full-stack web developer focused on building
          responsive and scalable applications using the MERN stack. I enjoy
          turning real-world problems into elegant digital solutions.
        </p>

        {/* Info Table */}
        <table className="w-full text-sm text-gray-300 border-t border-b border-gray-600 py-4 text-left">
          <tbody>
            <tr>
              <th className=" py-3 font-medium text-gray-400 ">Name:</th>
              <td className=" py-3 ">Md Ramjan Ali</td>
              <th className=" py-3 font-medium text-gray-400 ">Phone:</th>
              <td className=" py-3 ">+880 1928 294516</td>
            </tr>
            <tr>
              <th className=" py-3 font-medium text-gray-400">Age:</th>
              <td className=" py-3">22 Years</td>
              <th className=" py-3 font-medium text-gray-400">Email:</th>
              <td className=" py-3">gmramjanali8888.com</td>
            </tr>
            <tr>
              <th className=" py-3 font-medium text-gray-400">Occupation:</th>
              <td className=" py-3">Full Stack Developer</td>
              <th className=" py-3 font-medium text-gray-400">Nationality:</th>
              <td className=" py-3">Bangladeshi</td>
            </tr>
          </tbody>
        </table>

        <div className="pt-4">
          <p className="text-green-400 font-signature text-lg">Md Ramjan Ali</p>
          <p className="text-sm text-gray-400">MERN Stack Developer</p>
        </div>
      </div>
    </section>
  );
};

export default About;
