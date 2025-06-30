import React from "react";
import img from "../../assets/logo.png";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#212428] text-gray-400 py-5 border-t-1 border-[#15171b]">
      <div className="max-w-screen-xl mx-auto flex justify-between px-5 lg:px-0">
        <div className="flex items-center gap-1">
          <span>© {new Date().getFullYear()} || </span>
          <div className="flex items-center">
            <span>
              <img className="w-5" src={img} alt="" />
            </span>
            <span>AMJAN</span>
          </div>
        </div>
        <div className="flex gap-3 mt-2">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-[#17171d] p-2 rounded hover:scale-110 transition text-white"
          >
            <FaTwitter />
          </a>
          <a
            href="https://web.facebook.com/gm.romjan.50"
            target="_blank"
            rel="noreferrer"
            className="bg-[#17171d] p-2 rounded hover:scale-110 transition text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/Md-Ramjan-Ali"
            target="_blank"
            rel="noreferrer"
            className="bg-[#17171d] p-2 rounded hover:scale-110 transition text-white"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/md-ramjan-ali-1bb369324"
            target="_blank"
            rel="noreferrer"
            className="bg-[#17171d] p-2 rounded hover:scale-110 transition text-white"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
