import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./ReservationPage.module.css";
import { Button } from "react-bootstrap";
const occation = [
  { id: 1, name: "Anniversary" },
  { id: 2, name: "Birthday" },
  { id: 3, name: "Business" },
  { id: 4, name: "Graduation" },
  { id: 5, name: "Just a good time" },
];
export default function ReservationPage() {
  const topComponent = (
    <>
      <div className={styles.top}>
        <h1>Reservation Booked</h1>
        <p>Please check your inbox for a confirmation email</p>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.imganddetails}>
          <img
            src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1689113410/rectangle-32_2x_wvklz8.png"
            alt=""
            className={styles.image}
          />
        </div>
        <div className={styles.details}>
          <h3 className={styles.h3Style}>Atlantis</h3>
          <p>Bar • Lounge • Shisha</p>
          <faCalendar />
          <p>Fri, Jun 30 2023 7:45PM</p>
          <faUser />
          <p>2 Guests, Dining Room</p>
        </div>
      </div>
    </>
  );

  const buttonsComponent = (
    <div className={`${styles.button} d-grid gap-2`}>
      <h1 className={`${styles.title}`}>What is the occation?</h1>
      <h3>Celebrating Something Special?</h3>
      {occation.map(({ id, name }, index) => {
        return (
          <button className={styles.occasionButton} key={index} id={id}>
            {name}
          </button>
        );
      })}
    </div>
  );

  const formComponent = (
    <div className={styles.form}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Any allergies or restrictions?
        </label>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
          dolore.
        </p>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea2" className="form-label">
          Any Special Requests?
        </label>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
          dolore.
        </p>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea2"
          rows="3"
        ></textarea>
      </div>
      <Button type="submit" variant="primary">
        Done
      </Button>
    </div>
  );

  return (
    <>
      {topComponent}
      {buttonsComponent}
      {formComponent}
    </>
  );
}
