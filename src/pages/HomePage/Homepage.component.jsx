import React from "react";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img
            className={styles.logoImage}
            src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1689091649/group2_pq9o2m.svg"
            alt="Logo"
          />
        </div>

        <div className={styles.bar}>
          <p>Bar • Lounge • Shisha</p>
        </div>

        <div className={styles.paragraph}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <button className={styles.button}>Book</button>
      </div>
    </div>
  );
};

export default Homepage;
