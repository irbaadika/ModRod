import React from "react";
import Sidebar from "../../dashboard/sidebar/Sidebar";
import Navbar from "../../dashboard/navbar/Navbar";
import "./PHomeStyles.css";
import Widget from "../../dashboard/widget/Widget";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="pHome">
      <Sidebar />
      <div className="pHomeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default Home;
