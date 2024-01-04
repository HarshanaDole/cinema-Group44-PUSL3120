import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [signinProfile, setSigninProfile] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive((prev) => !prev);
  };

  const toggleSigninProfile = () => {
    setSigninProfile((prev) => !prev);
  };

  return (
    <div>
      <header className="header">
        <section className="flex">
          <div
            id="menu-btn"
            className="fas fa-bars"
            onClick={toggleNavbar}
          ></div>

          <a href="/" className="logo">
            <img src="img/sample-logo.png" alt="sample logo" />
          </a>

          <nav className={`navbar ${navbarActive ? "active" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/">Movies</Link>
            <Link to="/">Blog</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="icons">
            <div
              className={`sign-in ${signinProfile ? "profile" : ""}`}
              onClick={toggleSigninProfile}
            >
              <span className="btn-text">sign in</span>
              <div className="image-container">
                <img src="img/profile-pic.jpg" alt="" />
              </div>
            </div>
            <button className="book-btn">
              <span className="btn-text">book a ticket</span>
            </button>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
