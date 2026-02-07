import React from "react";
import "./ContactUsMap.css";
const ContactUsMap = () => {
  return (
    <div className="contactUsMap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.083305379993!2d77.65841807454457!3d12.837893217796735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d60143d6cc1%3A0xf4d9aedb9b82d3b8!2sPaintkraft!5e0!3m2!1sen!2sin!4v1766326411539!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ContactUsMap;
