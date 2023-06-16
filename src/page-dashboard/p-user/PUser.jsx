import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import "./PUserStyles.css";
import Sidebar from "../../dashboard/sidebar/Sidebar";
import Navbar from "../../dashboard/navbar/Navbar";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const PUser = () => {
  
  return (
    <div className="p-user">
      <Sidebar />
      <div className="pUserContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
              <div className="item">
                <img src="" alt="" className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">tes</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">tes</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">tes</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">tes</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">tes</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PUser;
