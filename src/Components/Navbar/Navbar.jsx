import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "home",
    "about",
    "skills",
    "experience",
    "education",
    "projects",
    "contact",
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#212428] text-white shadow-md py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Left - Logo */}
        <div className="text-2xl font-bold">Portfolio</div>

        {/* Center - Nav Links (Large screens) */}
        <div className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-white"
              className="cursor-pointer capitalize text-gray-400 hover:text-white transition"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Right - Resume Button (Large screens) */}
        <div className="hidden lg:block">
          <motion.a
            href="https://drive.google.com/file/d/18iUGYMzRqqTm0hUJa9i8-F8hyQaloMAi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className=" inline-block  px-6 py-2 font-extrabold text-white group bg-[#ff014f] overflow-hidden rounded-full "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden z-50" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#212428] px-6 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
              className="block text-lg capitalize text-gray-300 hover:text-green-400 transition"
              onClick={toggleMenu} // Close after click
            >
              {link}
            </Link>
          ))}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-sm transition"
          >
            View Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
