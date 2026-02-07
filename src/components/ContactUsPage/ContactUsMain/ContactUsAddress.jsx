import React from "react";
import "./ContactUsMain.css";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelopeOpenText } from "react-icons/fa";

const ContactUsAddress = () => {
  return (
    <div className="contactUsAddress">
      <div className="contactUsAddressHead">
        <h6>Contact Us</h6>
        <h3>
          Get In <span>Touch</span>
        </h3>
      </div>
      <div className="contactUsAddressContent">
        <div className="contactUsAddressLocation">
          <div className="contactAddressItem1">
            <IoLocationSharp className="contactIco" />
          </div>
          <div className="contactAddressItem2">
            <h5>Office:</h5>
            <p>
              <a href="https://maps.app.goo.gl/zxmT47rZU97ZUuEQ8">
                3RD FLOOR, 1669, 27th Main Rd, PWD Quarters, Sector 2, HSR
                Layout, Bengaluru, Karnataka 560102
              </a>
            </p>
          </div>
        </div>
        <div className="contactUsAddressPhone">
          <div className="contactAddressItem1">
            <FaPhone className="contactIco" />
          </div>
          <div className="contactAddressItem2">
            {" "}
            <div className="contactAddressItem2">
              <h5>Phone:</h5>
              <p>
                <a href="tel:9071274446">(+91) 9071274446</a>
              </p>
              <p>
                <a href="tel:8792446647">(+91) 8792446647</a>
              </p>
              <p>
                <a href="tel:7090234446">(+91) 7090234446</a>
              </p>
            </div>
          </div>
        </div>
        <div className="contactUsAddressEmail">
          <div className="contactAddressItem1">
            <FaEnvelopeOpenText className="contactIco" />
          </div>
          <div className="contactAddressItem2">
            {" "}
            <div className="contactAddressItem2">
              <h5>Email:</h5>
              <p>
                <a href="info@paintkraft.in">info@paintkraft.in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsAddress;
