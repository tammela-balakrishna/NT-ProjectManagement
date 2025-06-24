// src/components/Layout.jsx
import React from "react";
import Sidebar from "./Sidebar";
import "./Layout.css"; // Make sure to import the CSS

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="page-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
