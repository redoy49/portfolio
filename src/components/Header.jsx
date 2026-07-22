import React from "react";
import profilePhoto from "../assets/images/redoy-profile.png";
import arrowIcon from "../assets/images/arrow-icon-dark.png";

const Header = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-5 lg:px-8 xl:px-[8%] min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-12 xl:gap-14 py-20">
      {/* Left content: intro */}
      <div className="w-full lg:w-[60%] text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
          Hi, I'm Ridoy
        </h1>

        <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-[#7081C8] mb-6">
          MERN Stack Developer
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
          I build Full-stack web applications using MongoDB, Express, React, and
          Node.js crafting clean user interfaces and scalable backend solutions
          tailored to business goals and user experience.
        </p>

        <a
          href="/Resume_of_Ridoy.pdf"
          download="Redoy_Resume.pdf"
          className="inline-flex items-center gap-3 bg-[#7081C8] hover:bg-[#5a6bb5] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition"
        >
          Download Resume
          <img src={arrowIcon} alt="Arrow icon" className="w-4" />
        </a>
      </div>

      {/* Right content: profile photo */}
      <div className="flex justify-center lg:justify-end w-full lg:w-[40%] -rotate-1">
        <img
          src={profilePhoto}
          alt="Ridoy"
          className="w-48 h-48 sm:w-56 sm:h-56 lg:w-82 lg:h-82 rounded-full object-cover shadow-lg border-4 border-[#7081C8]"
        />
      </div>
    </section>
  );
};

export default Header;
