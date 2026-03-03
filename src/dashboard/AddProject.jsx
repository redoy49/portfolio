import { useState } from "react";
import { supabase } from "../lib/supabase";

const DashboardAddProject = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    image_url: "",
    live_link: "",
    github_link: "",
    tech_stack: "",
    challenges: "",
    future_plans: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "name" && { slug: value.toLowerCase().replace(/\s+/g, "-") })
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("projects").insert([
      {
        name: form.name,
        slug: form.slug,
        description: form.description,
        image_url: form.image_url,
        live_link: form.live_link,
        github_link: form.github_link,
        tech_stack: form.tech_stack.split(",").map((i) => i.trim()),
        challenges: form.challenges.split(",").map((i) => i.trim()),
        future_plans: form.future_plans.split(",").map((i) => i.trim()),
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      alert("Project Added Successfully!");
      setForm({
        name: "",
        slug: "",
        description: "",
        image_url: "",
        live_link: "",
        github_link: "",
        tech_stack: "",
        challenges: "",
        future_plans: "",
      });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Add New Project</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input label="Project Name" name="name" value={form.name} onChange={handleChange} />
        <Input label="Slug (auto-generated)" name="slug" value={form.slug} onChange={handleChange} />
        <TextArea label="Description" name="description" value={form.description} onChange={handleChange} />
        <Input label="Image URL" name="image_url" value={form.image_url} onChange={handleChange} />
        <Input label="Live Link" name="live_link" value={form.live_link} onChange={handleChange} />
        <Input label="GitHub Link" name="github_link" value={form.github_link} onChange={handleChange} />
        <Input label="Tech Stack (comma separated)" name="tech_stack" value={form.tech_stack} onChange={handleChange} />
        <Input label="Challenges (comma separated)" name="challenges" value={form.challenges} onChange={handleChange} />
        <Input label="Future Plans (comma separated)" name="future_plans" value={form.future_plans} onChange={handleChange} />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
        >
          {loading ? "Adding..." : "Add Project"}
        </button>
      </form>
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div>
    <label className="block mb-2 font-medium">{label}</label>
    <input
      {...props}
      required
      className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none px-4 py-2 rounded-lg transition"
    />
  </div>
);

const TextArea = ({ label, ...props }) => (
  <div>
    <label className="block mb-2 font-medium">{label}</label>
    <textarea
      {...props}
      required
      rows="4"
      className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none px-4 py-2 rounded-lg transition"
    />
  </div>
);

export default DashboardAddProject;