import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const ProjectTable = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load projects");
    } else {
      setProjects(data);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Delete this project?");
    if (!confirmDelete) return;

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (error) {
      toast.error("Delete failed");
    } else {
      toast.success("Project deleted");
      fetchProjects();
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white shadow-xl shadow-gray-100 border border-gray-100 rounded-2xl p-8">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Project List
            </h2>

            <Link
              to="/dashboard/add-project"
              className="px-5 py-2.5 rounded-full bg-[#7081C8] text-white text-sm font-medium hover:bg-[#5a6bb5] transition"
            >
              + Add Project
            </Link>
          </div>

          {loading ? (
            <p className="text-center text-gray-500">
              Loading projects...
            </p>
          ) : projects.length === 0 ? (
            <p className="text-center text-gray-400">
              No projects added yet.
            </p>
          ) : (
            <div className="space-y-4">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="bg-gray-50 rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-gray-100 transition"
                >
                  {/* Left Info */}
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {p.slug}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {p.tech_stack?.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-white rounded-full shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      className="px-4 py-1.5 text-xs rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(p.id)}
                      className="px-4 py-1.5 text-xs rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ProjectTable;