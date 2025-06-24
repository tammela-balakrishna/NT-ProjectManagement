import React from "react";
import "./Projects.css"; 

const Projects = () => {
  const dummyProjects = [
    { id: 1, name: "Inventory System", status: "In Progress", team: "Alpha" },
    { id: 2, name: "Task Manager", status: "Completed", team: "Beta" },
    { id: 3, name: "Chatbot App", status: "Pending", team: "Delta" },
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h2>📁 Projects</h2>
        <p>Manage all your ongoing and completed projects in one place.</p>
      </div>

      <div className="projects-list">
        <table className="projects-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Project Name</th>
              <th>Status</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {dummyProjects.map((project) => (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.status}</td>
                <td>{project.team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
