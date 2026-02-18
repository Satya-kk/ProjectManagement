import React, { useEffect, useState } from "react";
import axios from "axios";

function TaskList({ projectId }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/tasks/${projectId}`)
      .then(res => setTasks(res.data));
  }, [projectId]);

  const updateStatus = async (id) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, {
      status: "Completed"
    });
    window.location.reload();
  };

  return (
    <div>
      {tasks.map(task => (
        <div key={task._id}>
          <span>{task.title} - {task.status}</span>
          {task.status === "Pending" && (
            <button onClick={() => updateStatus(task._id)}>Complete</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
