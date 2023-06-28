import React, { useState } from "react";

import Logo from "./../assets/images/WoonExpertVlaanderen_Logo.png";

import { FaEnvelope, FaPhoneAlt, FaPlus } from "react-icons/fa";

import MainNavDropdown from "./MainNavDropdown";

import styles from "./../styles/AppHeader.module.css";

const AppHeader = () => {
  const [dropdownToggled, setDropdownToggled] = useState(false);

  const handleClick = () => {
    setDropdownToggled(!dropdownToggled);
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img className={styles.logo} src={Logo} />
        <div className={styles.contact}>
          <div className={styles.emailPhone}>
            <div className={styles.email}>
              <FaEnvelope size={16} className={"icon"} />
              <span>epc@woonexpertvlaanderen.be</span>
            </div>
            <div className={styles.phone}>
              <FaPhoneAlt size={16} className={"icon"} />
              <span>0479 20 30 54</span>
            </div>
          </div>
          <FaPlus
            size={20}
            onClick={handleClick}
            // className={styles.dropdownToggle}
            className={
              dropdownToggled
                ? styles.dropdownToggle + " " + styles.rotate
                : styles.dropdownToggle
            }
          />
        </div>
        <MainNavDropdown
          className={styles.mainNavDropdown}
          dropdownToggled={dropdownToggled}
        />
      </div>
    </header>
  );
};

export default AppHeader;
