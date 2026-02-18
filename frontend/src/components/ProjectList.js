import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data));
  };

  const deleteProject = async (id) => {
    await axios.delete(`http://localhost:5000/api/projects/${id}`);
    fetchProjects(); // refresh without reloading page
  };

  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <div
          key={project._id}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              {project.name}
            </h3>

            <div className="flex items-center gap-3">
              <span className="bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full font-medium">
                {new Date(project.deadline).toDateString()}
              </span>

              {/* Delete Project Button */}
              <button
                onClick={() => deleteProject(project._id)}
                className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            {project.description}
          </p>

          {/* Task Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-xl border">
              <h4 className="font-semibold text-gray-700 mb-3">
                Add Task
              </h4>
              <TaskForm projectId={project._id} />
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border">
              <h4 className="font-semibold text-gray-700 mb-3">
                Tasks
              </h4>
              <TaskList projectId={project._id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
