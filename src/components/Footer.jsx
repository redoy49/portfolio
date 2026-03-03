import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-10">
      <div className="max-w-[1600px] mx-auto px-5 lg:px-8 xl:px-[8%] flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Text */}
        <p className="text-sm text-gray-600 text-center md:text-left">
          &copy; {new Date().getFullYear()} Redoy Al Hasan. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center md:justify-start gap-5">
          <a
            href="https://www.linkedin.com/in/redoy49"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <ImLinkedin size={24} />
          </a>
          <a
            href="https://github.com/redoy49"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/mdredoyhasan49"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-500 transition transform hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;