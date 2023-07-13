import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // For demonstration purposes, logs the form data to the console
  };

  return (
    <div>
      <div></div>
      <div className="container-fluid m-4">
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Enter Details</h3>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <p>
            Lore Lorem ipsum dolor sit amet consectetur. Dolor non faucibus sed
            adipiscing lectus. Sit lacus porttitor magna molestie aliquet sapien
            vitae risus. Sit quam dui odio a libero velit. Sed viverra aenean
            dictumst mattis vestibulum nam. In pretium velit sed at. Pretium vel
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="container m-2">
        <div>
          <h3>Cancellation Policy</h3>
          <p className="small">
            Lorem ipsum dolor sit amet consectetur. Dolor non faucibus sed
            adipiscing lectus. Sit lacus porttitor magna molestie aliquet sapien
            vitae risus. Sit quam dui odio a libero velit. Sed viverra aenean
            dictumst mattis vestibulum nam.
          </p>
        </div>
        <div>
          <h3>About</h3>
          <p className="small">
            Lorem ipsum dolor sit amet consectetur. Dolor non faucibus sed
            adipiscing lectus. Sit lacus porttitor magna molestie aliquet sapien
            vitae risus. Sit quam dui odio a libero velit. Sed viverra aenean
            dictumst mattis vestibulum nam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
