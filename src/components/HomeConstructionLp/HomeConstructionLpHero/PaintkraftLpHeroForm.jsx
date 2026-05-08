"use client";

import React from "react";
import "./HomeConstructionLpHero.css";
import Swal from "sweetalert2";

const PaintkraftLpHeroForm = () => {
    const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // ✅ Add your Web3Forms access key
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
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
  };
  return (
    <div className="paintkraftHeroFormContainer" id="contact-us">
      <div className="paintkraftHeroFormWrapper">
        <div className="paintkraftHeroFormHead">
          <h2>
            Get Your <span>Free Consultation</span>
          </h2>
          <p>
            Fill in your details and our team will contact you shortly.
          </p>
        </div>

        <form className="paintkraftHeroForm" onSubmit={handleSubmit}>
          <div className="paintkraftHeroInputGroup">
            <input type="text" placeholder="Full Name" name="Name" />
          </div>

          <div className="paintkraftHeroInputGroup">
            <input type="email" placeholder="Email Address" name="Email" />
          </div>

          <div className="paintkraftHeroInputGroup">
            <input type="tel" placeholder="Phone Number" name="Phone No"/>
          </div>

          <div className="paintkraftHeroInputGroup">
            <select name="Service">
              <option>Select Package</option>
              <option value="Standard Package">Standard Package</option>
              <option value="Classic Package">Classic Package</option>
              <option value="Premium Package">Premium Package</option>
              <option value="Elite Package">Elite Package</option>
            </select>
          </div>

          <div className="paintkraftHeroInputGroup">
            <textarea name="Details"
              rows="5"
              placeholder="Enter Project Details"
            ></textarea>
          </div>

          <button type="submit" className="paintkraftHeroFormBtn">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaintkraftLpHeroForm;