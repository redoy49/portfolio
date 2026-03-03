import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const ProjectTable = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("projects").select("*");
    if (error) console.error(error);
    else setProjects(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Project List</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Slug</th>
            <th className="border p-2">Tech Stack</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50">
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.slug}</td>
              <td className="border p-2">{p.tech_stack.join(", ")}</td>
              <td className="border p-2">
                <button
                  onClick={() => alert("Edit/Delete coming soon")}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;