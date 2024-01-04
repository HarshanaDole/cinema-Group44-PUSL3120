import React, { useEffect } from "react";
import styles from "../css/contact.module.css";

const ContactForm = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(`.${styles.input}`);

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add(styles.focus);
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove(styles.focus);
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);

      return () => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      };
    });
  }, []);

  return null;
};

export default ContactForm;
