import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hamburgerMenu}>
        {/* Insert your hamburger menu component here */}
      </div>

      <div className={styles.formContainer}>
        <form>
          <h3>Enter details</h3>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Last Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <p style={{ fontSize: "10px" }}>
            Lore Lorem ipsum dolor sit amet consectetur. Dolor non faucibus sed
            adipiscing lectus. Sit lacus porttitor magna molestie aliquet sapien
            vitae risus. Sit quam dui odio a libero velit. Sed viverra aenean
            dictumst mattis vestibulum nam. In pretium velit sed at. Pretium vel
          </p>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginBottom: "20px", width: "40%" }}
          >
            Book
          </button>
        </form>

        <div className={styles.cancellation}>
          <h3>Cancellation Policy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dolor non faucibus sed
            adipiscing lectus. Sit lacus porttitor magna molestie aliquet sapien
            vitae risus. Sit quam dui odio a libero velit. Sed viverra aenean
            dictumst mattis vestibulum nam. In pretium velit sed at. Pretium vel
            quam dui adipiscing amet diam platea nunc. Ultrices quis accumsan
            cras sed eleifend quis bibendum. Id metus phasellus odio nulla. Et
            commodo eu ac rhoncus mi. Non metus sed eleifend convallis ornare.
            Rhoncus maecenas lacinia pellentesque augue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
