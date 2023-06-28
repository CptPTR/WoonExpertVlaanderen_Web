import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import styles from "./../styles/TypeWoning.module.css";

const TypeWoning = ({ type, price, image, extra, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className={styles.typeWoning}
      animate={{
        y: isInView ? 0 : 200,
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
        delay: delay / 15,
      }}
    >
      <img src={image} alt={type} draggable={false} />
      <h3>{type}</h3>
      <p>&euro;{price ?? "Prijs op aanvraag"}</p>
      {extra ? <p className={styles.extra}>{extra}</p> : null}
    </motion.div>
  );
};

export default TypeWoning;
