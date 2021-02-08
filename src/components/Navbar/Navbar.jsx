import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <ul>
          <img className="logo" src={Logo} alt="Logo"></img>
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
        <Link to="/contact">
          <button className="contact-button">CONTACT</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
