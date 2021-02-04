import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <ul>
          <li className="home-link">
            <Link to="/" style={{ textDecoration: "none" }}>
              HOME
            </Link>
          </li>
          <li className="about-link">
            <Link to="/about" style={{ textDecoration: "none" }}>
              ABOUT
            </Link>
          </li>
          <li className="projects-link">
            <Link to="/projects" style={{ textDecoration: "none" }}>
              PROJECTS
            </Link>
          </li>
        </ul>
        <button className="contact-button">CONTACT</button>
      </div>
    </div>
  );
};

export default Navbar;
