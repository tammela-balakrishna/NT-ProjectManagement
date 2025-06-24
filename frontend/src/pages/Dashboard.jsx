// src/pages/Dashboard.jsx
import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-container">
      <div className="main-content">
        <div className="topbar">
          <h1>Dashboard</h1>
          <div className="topbar-right">
            <input type="text" placeholder="Search..." />
            <span className="notification">🔔</span>
            <span className="profile">👤</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <h3>Total Employees</h3>
            <p>13</p>
          </div>
          <div className="card">
            <h3>Total Projects</h3>
            <p>6</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>₹ 0</p>
          </div>
        </div>

        <div className="activity-section">
          <h2>Recent Activities</h2>
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vROceY0zhVCN_pC1eo8KwEvW3c1i9ethdHGYz9yKrAeRtFPk_DoiEpkYdflyCRIJkfuMKG96wsH-5Sj/pubhtml?gid=0&single=true"
            width="100%"
            height="500"
            style={{ border: "none" }}
            title="Recent Activities"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
