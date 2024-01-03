import React, { useState } from "react";

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
          <div id="menu-btn" className="fas fa-bars" onClick={toggleNavbar}></div>

          <a href="index.html" className="logo">
            <img src="img/sample-logo.png" alt="sample logo" />
          </a>

          <nav className={`navbar ${navbarActive ? "active" : ""}`}>
            <a href="index.html">Home</a>
            <a href="#">Movies</a>
            <a href="#">Blog</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </nav>

          <div className="icons">
            <div className={`sign-in ${signinProfile ? "profile" : ""}`} onClick={toggleSigninProfile}>
              <span className="text">sign in</span>
              <div className="image-container">
                <img src="img/profile-pic.jpg" alt="" />
              </div>
            </div>
            <button className="book-btn">
              <span className="text">book a ticket</span>
            </button>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
