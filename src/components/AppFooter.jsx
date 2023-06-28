import React from "react";

import styles from "./../styles/AppFooter.module.css";

import WoonExpertVlaanderen from "./../assets/images/WoonExpertVlaanderen.png";

const AppFooter = () => {
  return (
    <footer>
      <img src={WoonExpertVlaanderen} />
      <p>BTW BE0797.223.994</p>
    </footer>
  );
};

export default AppFooter;
