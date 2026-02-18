import React, { useState } from "react";
import axios from "axios";

function ProjectForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/projects", {
      name,
      description,
      deadline
    });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Project Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <input type="date" onChange={(e) => setDeadline(e.target.value)} />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
