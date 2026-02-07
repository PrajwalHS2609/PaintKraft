"use client";

import React from "react";
import "./ContactUsMain.css";
import Swal from "sweetalert2";

const ContactUsForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target; // this will now be the <form>
    const formData = new FormData(form);
    formData.append("access_key", "2e63432e-e411-4617-8563-fa5f8bb00932");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mail Sent successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div className="contactUsForm">
      {/* Attach onSubmit to form */}
      <form onSubmit={onSubmit}>
        <div className="firstInput">
          <input type="text" name="name" placeholder="Name*" required />
          <input type="email" name="email" placeholder="Email*" required />
        </div>
        <div className="secondInput">
          <input type="text" name="phone" placeholder="Phone*" required />
          <select name="course" required>
            <option value="">Select Service</option>
            <option value="Home Painting">Home Painting</option>
            <option value="Apartment Painting">Apartment Painting</option>
            <option value="Spray Painting">Spray Painting</option>
            <option value="1 Day Express Painting">1 Day Express Painting</option>
            <option value="Texture & Designer Walls">Texture & Designer Walls</option>
            <option value="Waterproofing">Waterproofing</option>
            <option value="Commercial Painting">Commercial Painting</option>
          </select>
        </div>
        <div className="thirdInput">
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="contactFormBtn">
          {/* Button should be type="submit" */}
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
