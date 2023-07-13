import { useState, useRef } from "react";
import { Dropdown } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPumpMedical,
  faFingerprint,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker, { TimePicker } from "sassy-datepicker";
import styles from "./BookingPage.module.css";

const topComponent = (
  <div className={`${styles.topComp} flex-column`}>
    <div className="d-flex justify-content-center">
      <button className={styles.button1}>VIP</button>
    </div>
    <div className="d-flex align-items-start justify-content-around">
      <button className={styles.button2}>Private</button>
      <button className={styles.button3}>Regular</button>
    </div>
  </div>
);

const bottomComponent = (
  <div className={styles.drop}>
    <Dropdown className={styles.dropdown}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Number of Guests
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {[...Array(15)].map((e, i) => (
          <Dropdown.Item key={i}> {i + 1} Guests </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    <div className={styles.arrow}>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  </div>
);

const footer = (
  <div className={styles.footer}>
    <div className={styles.footerText}>
      <h3>Safety Measures</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
        magni earum neque, cupiditate molestiae dolore ipsa.
      </p>
    </div>

    <div className={styles.footerImages}>
      <div className={styles.footerImage}>
        <FontAwesomeIcon icon={faPeopleArrows} />
        <h4>Social Distancing</h4>
      </div>
      <div className={styles.footerImage}>
        <FontAwesomeIcon icon={faFingerprint} />
        <h4>Contactless Policies</h4>
      </div>
      <div className={styles.footerImage}>
        <FontAwesomeIcon icon={faPumpMedical} />
        <h4>Cleaning and Prevention</h4>
      </div>
    </div>
  </div>
);

export default function BookingPage() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState({ hours: 15, minutes: 30 });
  const timeRef = useRef(null);

  if (!timeRef.current) {
    timeRef.current = document.getElementById("time-picker");
  }

  const onDateChange = (newDate) => {
    setDate(newDate);
  };

  const onTimeChange = (newTime) => {
    setTime(newTime);
  };

  return (
    <>
      {topComponent}
      <h3>Select Date</h3>
      <DatePicker onChange={onDateChange} value={date} />
      <h3>Select Time</h3>
      <TimePicker
        id="time-picker"
        ref={timeRef}
        onChange={onTimeChange}
        value={time}
        className="absolute mt-2"
      />
      {bottomComponent}
      {footer}
    </>
  );
}
