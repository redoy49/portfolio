import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiShadcnui,
  SiDaisyui,
  SiOpenai,
  SiVercel,
  SiFramer,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
  { name: "Express", icon: <SiExpress color="#000000" /> },
  { name: "Shadcn/UI", icon: <SiShadcnui color="#000000" /> },
  { name: "DaisyUI", icon: <SiDaisyui color="#EC4899" /> },
  { name: "Vercel", icon: <SiVercel color="#000000" /> },
  { name: "Framer Motion", icon: <SiFramer color="#FFBF00" /> },
  { name: "GitHub", icon: <SiGithub color="#181717" /> },
  { name: "OpenAI API", icon: <SiOpenai color="#09122C" /> },
];

const duplicatedSkills = [...skills, ...skills];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        My Skills
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex gap-14 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {duplicatedSkills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center min-w-[120px] group transition"
            >
              <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <p className="text-sm font-medium text-gray-700 group-hover:text-black transition">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;