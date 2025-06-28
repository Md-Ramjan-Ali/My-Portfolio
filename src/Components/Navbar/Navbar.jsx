import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = [
    "home",
    "about",
    "skills",
    "experience",
    "education",
    "projects",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#212428] text-white shadow-md py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Left - Logo */}
        <div className="text-2xl font-bold">
          <span className="text-green-400">Ramjan</span> | Portfolio
        </div>

        {/* Center - Nav Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-white"
              className="cursor-pointer capitalize text-gray-400 hover:text-green-400 transition"
            >
              {section}
            </Link>
          ))}
        </div>

        {/* Right - Resume Button */}
        <div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-sm transition"
          >
            View Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
