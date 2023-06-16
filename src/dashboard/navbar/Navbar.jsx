import React from "react";
import "./navbar.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

import { FiSearch } from "react-icons/fi"
import { FaLanguage } from "react-icons/fa"
import { BiExitFullscreen, BiChat } from "react-icons/bi"
import { GrNotification, GrLogout } from "react-icons/gr"


const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        navigate("/");
      })
      .catch((error) => {
        
      });
  };

  return (
    <div className="navbar-dashboard">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <FiSearch />
        </div>
        <div className="items">
          <div className="item">
            <FaLanguage className="icon" />
            English
          </div>
          <div className="item">
            <BiExitFullscreen className="icon" />
          </div>
          <div className="item">
            <GrNotification className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <BiChat className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <GrLogout onClick={handleLogout} className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
