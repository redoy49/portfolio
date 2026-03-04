import { useState } from "react";
import { supabase } from "../lib/supabase";
import { toast } from "react-hot-toast";

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

  const generateSlug = (value) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "name" && { slug: generateSlug(value) }),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("projects").insert([
      {
        ...form,
        tech_stack: form.tech_stack.split(",").map((i) => i.trim()),
        challenges: form.challenges.split(",").map((i) => i.trim()),
        future_plans: form.future_plans.split(",").map((i) => i.trim()),
      },
    ]);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Project Added Successfully!");
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
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white shadow-xl shadow-gray-100 border border-gray-100 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Add New Project
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 text-sm">
            <Input
              label="Project Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <Input
              label="Slug (Auto-generated)"
              name="slug"
              value={form.slug}
              readOnly
            />

            <TextArea
              label="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
            />

            <Input
              label="Image URL"
              name="image_url"
              value={form.image_url}
              onChange={handleChange}
            />

            <Input
              label="Live Link"
              name="live_link"
              value={form.live_link}
              onChange={handleChange}
            />

            <Input
              label="GitHub Link"
              name="github_link"
              value={form.github_link}
              onChange={handleChange}
            />

            <Input
              label="Tech Stack (comma separated)"
              name="tech_stack"
              value={form.tech_stack}
              onChange={handleChange}
            />

            <Input
              label="Challenges (comma separated)"
              name="challenges"
              value={form.challenges}
              onChange={handleChange}
            />

            <Input
              label="Future Plans (comma separated)"
              name="future_plans"
              value={form.future_plans}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2.5 rounded-full font-medium text-white transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#7081C8] hover:bg-[#5a6bb5] hover:scale-[1.02]"
              }`}
            >
              {loading ? "Adding..." : "Add Project"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Input = ({ label, ...props }) => (
  <div>
    <label className="block mb-1 font-medium text-gray-700">
      {label}
    </label>
    <input
      {...props}
      required={!props.readOnly}
      className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl 
      focus:outline-none focus:ring-2 focus:ring-[#7081C8] 
      focus:border-[#7081C8] transition"
    />
  </div>
);

const TextArea = ({ label, ...props }) => (
  <div>
    <label className="block mb-1 font-medium text-gray-700">
      {label}
    </label>
    <textarea
      {...props}
      rows="4"
      required
      className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl 
      focus:outline-none focus:ring-2 focus:ring-[#7081C8] 
      focus:border-[#7081C8] transition"
    />
  </div>
);

export default DashboardAddProject;