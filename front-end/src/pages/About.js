import Header from "../components/header.js";
import Footer from "../components/footer.js";
import "../css/about.css";

export default function About() {
  return (
    <>
      <Header />
      <div>
        <div className="about-section">
          <div className="inner-container">
            <h1>About Us</h1>
            <p className="text">
              Welcome to Ticket Book – Where Entertainment Meets Convenience!
              <br />
              <br />
              At Ticket Book, we are passionate about bringing the magic of
              cinema to your fingertips. As avid movie lovers ourselves, we
              understand the thrill of watching the latest blockbusters on the
              big screen, and we strive to enhance that experience for you.
              <br />
              <br />
              Join us at Ticket Book and embark on a cinematic journey like
              never before. We are not just a ticketing platform; we are your
              companion in creating unforgettable movie moments. Your
              entertainment begins here!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
