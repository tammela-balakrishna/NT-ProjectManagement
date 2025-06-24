import React from 'react';
import './Reports.css'; // Import your CSS file for styling
const Reports  = () => {
  return (
    <div className="reports-page">
      <h1 className="page-title">Reports</h1>
      
      <div className="report-summary">
        <div className="card">
          <h2>Total Tasks</h2>
          <p>128</p>
        </div>
        <div className="card">
          <h2>Projects Completed</h2>
          <p>34</p>
        </div>
        <div className="card">
          <h2>Active Clients</h2>
          <p>12</p>
        </div>
      </div>

      <div className="report-table">
        <h2>Recent Activity</h2>
        <table>
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Date</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#RPT123</td>
              <td>2025-04-10</td>
              <td>Weekly sprint completed</td>
              <td>✅ Completed</td>
            </tr>
            <tr>
              <td>#RPT124</td>
              <td>2025-04-08</td>
              <td>Client feedback update</td>
              <td>🕒 Pending</td>
            </tr>
            <tr>
              <td>#RPT125</td>
              <td>2025-04-06</td>
              <td>Bug Fixes</td>
              <td>✅ Done</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
