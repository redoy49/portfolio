import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <Link
          className="block py-2 px-3 rounded hover:bg-gray-700"
          to="/dashboard/add-project"
        >
          Add Project
        </Link>
        <Link
          className="block py-2 px-3 rounded hover:bg-gray-700"
          to="/dashboard/projects"
        >
          Project List
        </Link>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;