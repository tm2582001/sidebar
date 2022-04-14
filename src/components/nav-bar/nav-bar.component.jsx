import React from "react";
import "./nav-bar.styles.css";

const NavBar = () => (
  <div className="nav-bar">
    <div className="logo-div">
      <h1 className="logo">Mentor Plus</h1>
    </div>
    <div className="nav-bar-icon-div">
      <div className="nav-bar-icon">
        <h3>Home</h3>
      </div>
      <div className="nav-bar-icon">
        <h3>Profile</h3>
      </div>
      <div className="nav-bar-icon">
        <h3> </h3>
      </div>
      <div className="nav-bar-icon">
        <h3> </h3>
      </div>
      <div className="nav-bar-icon">
        <h3> </h3>
      </div>
    </div>
  </div>
);

export default NavBar;
