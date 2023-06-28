import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import styles from "./../styles/MainNavDropdown.module.css";

const MainNavDropdown = ({ dropdownToggled }) => {
  return (
    <div
      className={
        !dropdownToggled
          ? styles.dropdown + " " + styles.slideUp
          : styles.dropdown
      }
    >
      <div className={styles.email}>
        <FaEnvelope size={16} className={styles.icon} />
        <span>epc@woonexpertvlaanderen.be</span>
      </div>
      <div className={styles.phone}>
        <FaPhoneAlt size={16} className={styles.icon} />
        <span>0479 20 30 54</span>
      </div>
    </div>
  );
};

export default MainNavDropdown;
