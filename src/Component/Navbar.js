import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import './dark-mode.css'
import YoutubeImage from "./Youtube.png";
import InstagramImage from "./Instagram.png";
import FacebookImage from "./Facebook.png";
import TikTokImage from "./TikTok.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
  }, [darkMode]);
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${darkMode ? "dark-mode" : ""}`}>
      <NavLink className="navbar-brand" to="/">
        <h1 className="theme">
          Haider vibes
        </h1>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/tutorial">
              Tutorials
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/preset">
              Presets
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About us
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Contact
            </NavLink>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a
                  className="dropdown-item"
                  href="http://www.facebook.com/editingvibe"
                >
                  <img src={FacebookImage} alt="" width="25px" /> Facebook
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.instagram.com/a_haider1214/"
                >
                  <img src={InstagramImage} alt="" width="25px" /> Instagram
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://youtube.com/@haidervibes"
                >
                  <img src={YoutubeImage} alt="" width="25px" /> YouTube
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.tiktok.com/@alithunter1?lang=en"
                >
                  <img src={TikTokImage} alt="" width="25px" /> TikTok
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <button className="theme-toggle-btn btn" onClick={toggleTheme}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
      </div>
    </nav>
  );
};

export default Navbar;
