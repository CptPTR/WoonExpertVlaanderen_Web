import React, { useState } from "react";

import { motion } from "framer-motion";

import styles from "./../styles/Hero.module.css";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:5000/send_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: "",
          email: "",
          phone: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div>
            <motion.h1
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -200, opacity: 0 }}
              transition={{
                type: "tween",
                duration: 0.8,
              }}
            >
              Woning verkopen, verhuren of verbouwen?
            </motion.h1>
            <motion.p
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -200, opacity: 0 }}
              transition={{
                type: "tween",
                duration: 0.8,
                delay: 0.5,
              }}
            >
              Je EPC attest al vanaf $165.
              <br />
              Gegarandeerd binnen 48u na plaatsbezoek.
            </motion.p>
          </div>
          <form onSubmit={handleSubmit}>
            <span className={styles.name}>
              <label>Voornaam & Naam *</label>
              <br />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              ></input>
            </span>
            <br />
            <span className={styles.email}>
              <label>Email *</label>
              <br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              ></input>
            </span>
            <br />
            <span className={styles.phone}>
              <label>Telefoonnummer *</label>
              <br />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              ></input>
            </span>
            <br />
            <button type="submit">
              <span>Contacteer me vandaag</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
