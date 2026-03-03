// ProjectDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { FaLink, FaArrowLeft, FaGithub } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { name } = useParams(); // slug of project
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", name)
        .single(); // get single project by slug

      if (error) {
        console.error(error);
        setProject(null);
      } else {
        setProject(data);
      }

      setLoading(false);
    };

    fetchProject();
  }, [name]);

  if (loading)
    return <p className="text-center mt-20 text-xl">Loading...</p>;

  if (!project)
    return (
      <div className="w-full h-screen flex items-center justify-center text-2xl text-red-500">
        Project not found.
      </div>
    );

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 10 } },
  };

  return (
    <motion.section
      className="w-full max-w-[1200px] mx-auto px-5 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Back Button */}
      <motion.button
        onClick={() => navigate("/#projects")}
        className="mb-6 inline-flex items-center gap-2 text-[#7081C8] hover:underline"
        variants={itemVariants}
        whileHover={{ x: -5 }}
      >
        <FaArrowLeft /> Back to Projects
      </motion.button>

      {/* Project Title */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-6 text-[#7081C8]"
        variants={itemVariants}
      >
        {project.name}
      </motion.h1>

      {/* Project Image */}
      {project.image_url && (
        <motion.img
          src={project.image_url}
          alt={project.name}
          className="w-full rounded-lg mb-6 object-contain aspect-video"
          variants={itemVariants}
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* Description */}
      <motion.p
        className="text-gray-700 text-lg mb-6 leading-relaxed"
        variants={itemVariants}
      >
        {project.description}
      </motion.p>

      {/* Tech Stack */}
      <motion.div className="mb-6" variants={containerVariants}>
        <h3 className="text-xl font-semibold text-[#7081C8] mb-3">Technologies Used</h3>
        <div className="flex flex-wrap gap-2">
          {project.tech_stack?.map((tech, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Live & GitHub Links */}
      <motion.div className="flex flex-wrap gap-4 mb-10" variants={itemVariants}>
        {project.live_link && (
          <a
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#7081C8] hover:bg-[#5a6bb5] text-white px-4 py-2 rounded-full transition"
          >
            <FaLink /> Live Site
          </a>
        )}
        {project.github_link && (
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition"
          >
            <FaGithub /> GitHub Code
          </a>
        )}
      </motion.div>

      {/* Challenges & Future Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {project.challenges && (
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <h3 className="text-xl font-semibold text-[#7081C8] mb-4 border-b pb-2 border-gray-200">
              Challenges Faced
            </h3>
            <ul className="text-base text-gray-700 space-y-2 flex-grow">
              {project.challenges.map((ch, i) => (
                <li key={i} className="flex items-start gap-2">
                  <HiOutlineLightBulb className="mt-1 text-[#7081C8] flex-shrink-0" />
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {project.future_plans && (
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <h3 className="text-xl font-semibold text-[#7081C8] mb-4 border-b pb-2 border-gray-200">
              Future Improvements
            </h3>
            <ul className="text-base text-gray-700 space-y-2 flex-grow">
              {project.future_plans.map((fp, i) => (
                <li key={i} className="flex items-start gap-2">
                  <HiOutlineLightBulb className="mt-1 text-[#7081C8] flex-shrink-0" />
                  <span>{fp}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default ProjectDetails;