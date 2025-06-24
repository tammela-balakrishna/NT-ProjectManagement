import React from "react";
import "./Tasks.css"; // Optional if you have styles

const Tasks = () => {
  const dummyTasks = [
    { id: 1, title: "Design Login Page", status: "In Progress", deadline: "2025-04-15" },
    { id: 2, title: "API Integration", status: "Completed", deadline: "2025-04-10" },
    { id: 3, title: "Fix Bugs", status: "Pending", deadline: "2025-04-20" },
  ];

  return (
    <div className="tasks-page">
      <div className="tasks-header">
        <h2>📝 Tasks</h2>
        <p>Track your ongoing and upcoming tasks here.</p>
      </div>

      <div className="tasks-list">
        <table className="tasks-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Task Title</th>
              <th>Status</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {dummyTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td>{task.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;
