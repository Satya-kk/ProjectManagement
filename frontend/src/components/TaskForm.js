import React, { useState } from "react";
import axios from "axios";

function TaskForm({ projectId }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/tasks", {
      title,
      projectId
    });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Task Title" onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
