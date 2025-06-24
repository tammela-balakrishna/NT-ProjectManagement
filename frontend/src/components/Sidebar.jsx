import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import logo from "./2.png"; // Adjust the path as necessary

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Tasks", path: "/tasks" },
    { name: "Projects", path: "/projects" },
    { name: "Teams", path: "/teams" },
    { name: "Clients", path: "/clients" },
    { name: "Reports", path: "/reports" },
    { name: "Discord", path: "/discord" },
  ];

  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Nanny Tech</h2>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
