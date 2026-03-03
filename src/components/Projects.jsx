// Projects.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { FaLink } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*") // Fetch all columns
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      } else {
        setProjects(data || []);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (projects.length === 0)
    return <p className="text-center mt-20 text-red-500">No projects found.</p>;

  return (
    <section
      id="projects"
      className="w-full max-w-[1600px] mx-auto px-5 lg:px-8 xl:px-[8%] py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="space-y-12">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row items-center md:gap-8 bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden"
          >
            {/* Project Image */}
            {project.image_url && (
              <div className="w-full lg:w-1/2">
                <img
                  src={project.image_url}
                  alt={project.name}
                  className="w-full h-full aspect-video object-contain p-2 md:px-4 rounded-md"
                />
              </div>
            )}

            {/* Project Info */}
            <div className="w-full lg:w-1/2 p-6 space-y-4 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-semibold text-[#7081C8]">
                {project.name}
              </h3>
              <p className="text-gray-700 text-justify">
                {project.description}
              </p>

              {/* Tech Stack */}
              {project.tech_stack && project.tech_stack.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech_stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-sm font-medium px-3 py-1.5 rounded-full bg-[#E0E7FF] text-[#3730A3] hover:bg-[#C7D2FE] transition cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mt-4 sm:mt-6">
                {project.live_link && (
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium transition bg-[#7081C8] hover:bg-[#5a6bb5] text-white"
                  >
                    <FaLink size={14} className="text-base sm:text-lg" />
                    Live Site
                  </a>
                )}

                {project.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium transition bg-gray-800 hover:bg-gray-700 text-white"
                  >
                    GitHub Code
                  </a>
                )}

                <Link
                  to={`/projects/${project.slug}`}
                  className="text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition border border-[#7081C8] text-[#7081C8] hover:bg-[#7081C8] hover:text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
