import React, { useEffect, useState } from "react";
import axios from "axios";

function TaskList({ projectId }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/tasks/${projectId}`
      );
      setTasks(res.data);
    };

    fetchTasks();
  }, [projectId]);

  const updateStatus = async (id) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, {
      status: "Completed",
    });

    const res = await axios.get(
      `http://localhost:5000/api/tasks/${projectId}`
    );
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);

    const res = await axios.get(
      `http://localhost:5000/api/tasks/${projectId}`
    );
    setTasks(res.data);
  };

  return (
    <div className="space-y-3">
      {tasks.length === 0 && (
        <p className="text-gray-500 text-sm">No tasks added yet.</p>
      )}

      {tasks.map((task) => (
        <div
          key={task._id}
          className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border hover:shadow-md transition"
        >
          <p
            className={`font-medium ${
              task.status === "Completed"
                ? "line-through text-gray-400"
                : "text-gray-800"
            }`}
          >
            {task.title}
          </p>

          <div className="flex items-center gap-3">
            <span
              className={`text-xs px-3 py-1 rounded-full font-semibold ${
                task.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {task.status}
            </span>

            {task.status === "Pending" && (
              <button
                onClick={() => updateStatus(task._id)}
                className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700 transition"
              >
                Complete
              </button>
            )}

            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
