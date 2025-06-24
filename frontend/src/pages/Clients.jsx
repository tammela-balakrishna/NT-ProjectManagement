import React from "react";
import "./Clients.css";

const Clients = () => {
  const clientList = [
    { name: "TechNova Solutions", contact: "tech@nova.com", status: "Active" },
    { name: "FutureSoft", contact: "hello@futuresoft.com", status: "Pending" },
    { name: "SmartEdge", contact: "info@smartedge.com", status: "Inactive" },
  ];

  return (
    <div className="clients-page">
      <div className="clients-header">
        <h2>👔 Clients</h2>
        <p>Explore all partnered clients and their status.</p>
      </div>

      <table className="clients-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {clientList.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.contact}</td>
              <td className={`status ${client.status.toLowerCase()}`}>{client.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
