import React from "react";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <Layout>
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Project Management Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Manage your projects efficiently and track progress.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="mb-8">
        <Dashboard />
      </div>

      {/* Project Form Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Add New Project
        </h2>
        <ProjectForm />
      </div>

      {/* Project List Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Project List
        </h2>
        <ProjectList />
      </div>
    </Layout>
  );
}

export default App;
