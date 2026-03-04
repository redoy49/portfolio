import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  const linkStyle = (path) =>
    `block px-4 py-2.5 rounded-full text-sm font-medium transition ${
      location.pathname === path
        ? "bg-[#7081C8] text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Manage your projects easily
          </p>
        </div>

        <div className="grid md:grid-cols-[220px_1fr] gap-10">

          {/* Sidebar */}
          <aside className="bg-white shadow-xl shadow-gray-100 border border-gray-100 rounded-2xl p-6 space-y-3 h-fit">
            <Link
              to="/dashboard/add-project"
              className={linkStyle("/dashboard/add-project")}
            >
              Add Project
            </Link>

            <Link
              to="/dashboard/projects"
              className={linkStyle("/dashboard/projects")}
            >
              Project List
            </Link>
          </aside>

          {/* Main Content */}
          <main className="bg-white shadow-xl shadow-gray-100 border border-gray-100 rounded-2xl p-8">
            <Outlet />
          </main>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;