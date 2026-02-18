import React, { useState } from "react";
import axios from "axios";

function TaskForm({ projectId }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    await axios.post("http://localhost:5000/api/tasks", {
      title,
      projectId,
    });

    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 items-center">
      
      <input
        type="text"
        placeholder="Enter task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-indigo-500
                   focus:border-indigo-500 transition"
      />

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg
                   hover:bg-indigo-700 transition duration-300
                   font-medium shadow-sm"
      >
        Add
      </button>

    </form>
  );
}

export default TaskForm;
