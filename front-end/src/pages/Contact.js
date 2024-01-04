import React, { useEffect } from "react";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import styles from "../css/contact.module.css";
import ContactForm from "../js/contactScript.js";

export default function Contact() {
  return (
    <>
      <Header />
      <div>
        <div className={styles.container}>
          <span className={styles["big-circle"]}></span>
          <img src="img/shape.png" className={styles.square} alt="" />
          <div className={styles.form}>
            <div className={styles["contact-info"]}>
              <h3 className={styles.title}>Let's get in touch</h3>
              <p className={styles.text}>
                If you wish to contact us via email, please fill the following
                form, and we will get in touch with you at the earliest.
              </p>

              <div className={styles.info}>
                <div className={styles.information}>
                  <img src="img/location.png" className={styles.icon} alt="" />
                  <p>Pitipana - Thalagala Rd, Homagama</p>
                </div>
                <div className={styles.information}>
                  <img src="img/email.png" className={styles.icon} alt="" />
                  <p>helpdesk@booking.com</p>
                </div>
                <div className={styles.information}>
                  <img src="img/phone.png" className={styles.icon} alt="" />
                  <p>123-456-789</p>
                </div>
              </div>

              <div className={styles["social-media"]}>
                <p>Connect with us:</p>
                <div className={styles["social-icons"]}>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles["contact-form"]}>
            <ContactForm />
              <span className={`${styles.circle} ${styles.one}`}></span>
              <span className={`${styles.circle} ${styles.two}`}></span>

              <form action="index.html" autoComplete="off">
                <h3 className={styles.title}>Contact us</h3>
                <div className={styles["input-container"]}>
                  <input type="text" name="name" className={styles.input} />
                  <label htmlFor="">Username</label>
                  <span>Username</span>
                </div>
                <div className={styles["input-container"]}>
                  <input type="email" name="email" className={styles.input} autoComplete="off" />
                  <label htmlFor="">Email</label>
                  <span>Email</span>
                </div>
                <div className={styles["input-container"]}>
                  <input type="tel" name="phone" className={styles.input} autoComplete="off" />
                  <label htmlFor="">Phone</label>
                  <span>Phone</span>
                </div>
                <div
                  className={`${styles["input-container"]} ${styles.textarea}`}
                >
                  <textarea name="message" className={styles.input}></textarea>
                  <label htmlFor="">Message</label>
                  <span>Message</span>
                </div>
                <input type="submit" value="Send" className={styles.btn} />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
