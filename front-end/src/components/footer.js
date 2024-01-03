import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <section className="grid">
          <div className="box">
            <h3>Ticket Book</h3>
            <span className="about">
              Ticket Book is a cinema booking site done by group 44 in order to
              survive PUSL3120 full stack development module.
            </span>
            <div className="credit">
              copyright &copy; 2024&nbsp;<span>Ticket Book</span>. All rights
              reserved.
            </div>
          </div>

          <div className="box1">
            <h3>quick links</h3>
            <a href="index.html">
              {" "}
              <i className="fas fa-angle-right"></i> home
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-angle-right"></i> movies
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-angle-right"></i> terms
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-angle-right"></i> about
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-angle-right"></i> contact us
            </a>
          </div>

          <div className="box2">
            <h3>social media</h3>
            <a href="#">
              <i className="fab fa-facebook-f"></i>facebook
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>twitter
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>instagram
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>linkedin
            </a>
          </div>

          <div className="box3">
            <h3>newsletter</h3>
            <span className="news">
              Sign up for our newsletter and get the latest updates on your
              favourite movies.
            </span>
            <div className="input-field">
              <input
                className="email"
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
              />
              <input className="btn" type="submit" value="SIGN UP" />
            </div>
          </div>
        </section>

        <div className="credit-end">
          copyright &copy; 2024&nbsp;<span>Ticket Book</span>. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
