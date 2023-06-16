import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

import { MdSettingsInputComponent, MdDashboard } from "react-icons/md";
import { FaUser, FaStore } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ModRod</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <MdDashboard className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/dashboard/users" style={{ textDecoration: "none" }}>
            <li>
              <FaUser className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <Link to="/dashboard/products" style={{ textDecoration: "none" }}>
            <li>
              <FaStore className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <Link to="/dashboard/parts" style={{ textDecoration: "none" }}>
              <MdSettingsInputComponent className="icon" />
              <span>Parts</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
