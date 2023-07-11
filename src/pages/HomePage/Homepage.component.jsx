import React from "react";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.splitScreen}>
      <div className={styles.topPane}>
        <img
          src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1689091649/group2_pq9o2m.svg"
          alt="Logo"
          className={`rounded mx-auto d-block ${styles.logo}`}
        />
        <div className={`text-center mx-auto ${styles.underLogoTextContainer}`}>
          <p className={styles.underLogoText}>Bar • Lounge • Shisha</p>
        </div>
        <div className={`text-center mx-auto ${styles.callToActionContainer}`}>
          <p className={styles.callToAction}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className={styles.bottomPane}>
        <img
          src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1689091275/unsplashpoi7delfiva_2x_g82rfo.png"
          alt="background"
          className={styles.backgroundImage}
        />
        <button className={`mx-auto ${styles.bookButton}`}>Book</button>
      </div>
    </div>
  );
};

export default Homepage;
