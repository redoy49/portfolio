import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills";
import ProjectDetails from "./components/ProjectDetails";

import Dashboard from "./dashboard/Dashboard";
import DashboardAddProject from "./dashboard/AddProject";
import ProjectTable from "./dashboard/ProjectTable";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Skills />
              <Education />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/projects/:name" element={<ProjectDetails />} />

        {/* Dashboard Routes (no auth) */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-project" element={<DashboardAddProject />} />
          <Route path="projects" element={<ProjectTable />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;