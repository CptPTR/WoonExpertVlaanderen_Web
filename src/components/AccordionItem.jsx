import React, { useEffect, useState } from "react";

import styles from "./../styles/AccordionItem.module.css";

import { FiMinus, FiPlus } from "react-icons/fi";

const AccordionItem = ({ item, color }) => {
  const [showPanel, setShowPanel] = useState(false);

  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  return (
    <div
      className={styles.accordionWrapper}
      style={{ borderTop: `1px solid ${color}` }}
    >
      <button className={styles.accordionItem} onClick={togglePanel}>
        <div className={styles.icon}>
          {!showPanel ? (
            <FiPlus size={35} strokeWidth={1} />
          ) : (
            <FiMinus size={35} strokeWidth={1} />
          )}
        </div>
        <div className={styles.title}>{item.title}</div>
      </button>
      <div
        className={`${styles.accordionPanel} ${showPanel ? styles.show : ""}`}
      >
        {item.body.map(({ id, text }) => (
          <p key={id}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default AccordionItem;
