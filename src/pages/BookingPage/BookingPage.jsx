import { useState } from "react";
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

function DateInput() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return <DatePicker onChange={onChange} value={date} />;
}

function TimeInput() {
  const [time, setTime] = useState({ hours: 15, minutes: 30 });

  const onChange = (newTime) => {
    setTime(newTime);
  };

  return <TimePicker onChange={onChange} value={time} />;
}

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
  return (
    <>
      {topComponent}
      <div className="container d-flex justify-content-center">
        <div>
          <h3>Select Date</h3>
          <DateInput />
          <h3>Select Time</h3>
          <TimeInput />
          {bottomComponent}
        </div>
      </div>

      {footer}
    </>
  );
}
