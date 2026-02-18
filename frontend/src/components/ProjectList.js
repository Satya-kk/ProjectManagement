import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data));
  }, []);

  return (
    <div>
      {projects.map(project => (
        <div key={project._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>Deadline: {new Date(project.deadline).toDateString()}</p>

          <TaskForm projectId={project._id} />
          <TaskList projectId={project._id} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
