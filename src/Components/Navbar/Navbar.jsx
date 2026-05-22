import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { GrView } from "react-icons/gr";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    "home",
    "about",
    "skills",
    "experience",
    "education",
    "projects",
    "contact",
  ];

  const playClickSound = () => {
    const audio = new Audio("/mouse-click-153941.mp3");
    audio.play();
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#212428] text-white shadow-md py-5">
      <div className="flex justify-between items-center max-w-11/12 mx-auto px-5 lg:px-0">
        {/* Left - Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          onClick={playClickSound}
        >
          <div className="flex items-end gap-1 cursor-pointer">
            <span>
              <img className="w-10" src={logo} alt="" />
            </span>{" "}
            <span className="text-2xl font-extrabold">AMJAN</span>
          </div>
        </Link>

        {/* Center - Nav Links (Large screens) */}
        <div className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-white"
              onClick={playClickSound}
              className="cursor-pointer capitalize text-gray-400 hover:text-white transition"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Right - Resume Button (Large screens) */}
        <div className="hidden lg:block">
          <motion.a
            href="https://drive.google.com/file/d/1r6pl0VnQBx5URty53eZPHowWIkCHJ170/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex justify-center items-center gap-1  px-4 py-3 font-extrabold text-white group bg-[#ff014f] overflow-hidden rounded-full "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>
              <GrView />
            </span>
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Icon */}
        <div className=" lg:hidden z-50 cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Slide-in Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 left-0 h-full w-72 bg-[#1e1f24] z-50 lg:hidden shadow-2xl shadow-black/50 flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-gray-700/50">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  onClick={() => {
                    playClickSound();
                    toggleMenu();
                  }}
                >
                  <div className="flex items-end gap-1 cursor-pointer">
                    <img className="w-8" src={logo} alt="" />
                    <span className="text-xl font-extrabold text-white">AMJAN</span>
                  </div>
                </Link>
                <button
                  onClick={toggleMenu}
                  className="text-gray-400 hover:text-[#ff014f] transition cursor-pointer"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Sidebar Nav Links */}
              <div className="flex flex-col px-6 py-6 space-y-1 flex-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      spy={true}
                      activeClass="!text-[#ff014f] !bg-[#ff014f]/10"
                      className="block text-lg capitalize text-gray-300 hover:text-[#ff014f] hover:bg-[#ff014f]/10 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer"
                      onClick={() => {
                        playClickSound();
                        toggleMenu();
                      }}
                    >
                      {link}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Sidebar Footer - Resume Button */}
              <div className="px-6 py-6 border-t border-gray-700/50">
                <motion.a
                  href="https://drive.google.com/file/d/1r6pl0VnQBx5URty53eZPHowWIkCHJ170/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 w-full bg-[#ff014f] px-4 py-3 rounded-full text-white font-bold transition hover:opacity-90"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <GrView />
                  View Resume
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
