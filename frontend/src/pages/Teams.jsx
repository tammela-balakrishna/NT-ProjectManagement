import React from "react";
import "./Teams.css";

const Teams = () => {
  const teamData = [
    { name: "Frontend Team", members: 5, lead: "Sai Kumar" },
    { name: "Backend Team", members: 4, lead: "Balakrishna" },
    { name: "QA Team", members: 2, lead: "Ravi Teja" },
  ];

  return (
    <div className="teams-page">
      <div className="teams-header">
        <h2>👥 Teams</h2>
        <p>Here’s an overview of all active teams and their leads.</p>
      </div>

      <div className="teams-grid">
        {teamData.map((team, index) => (
          <div className="team-card" key={index}>
            <h3>{team.name}</h3>
            <p><strong>Members:</strong> {team.members}</p>
            <p><strong>Team Lead:</strong> {team.lead}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
