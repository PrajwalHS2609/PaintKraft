"use client"
import React from "react";
import "./HomeConstructionLpWhatsApp.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "./../../../images/HomeConstructionLp/homeConstruction-Logo.png";

const HomeConstructionLpWhatsApp = () => {
  // let [visible, setVisible] = useState();
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setVisible(true);
  //     setTimeout(() => {
  //       setVisible(false);
  //     }, 10000); // Hide after 5 seconds
  //   }, 10000); // Show every 10 seconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);
  return (
    <div className="whatsAppContainer">
      {/* <div className="whatsAppContent">Hello</div> */}
      {/* <a href="https://wa.me/919742232700?text=Hello" >
        <img src={whatsApp} alt="" />
      </a> */}
      <FloatingWhatsApp
        phoneNumber="918792446647"
        accountName="Red Hill Infra"
        avatar={logo.src} // Optional
        statusMessage="Typically replies within 5 min" // Optional
        chatMessage="Welcome to Red Hill Infra! Building strong foundations for a better tomorrow with trusted infrastructure solutions and quality excellence! Call Now ~ +91 8792446647" // Optional
        placeholder="Type a message..." // Optional
      />
    </div>
  );
};

export default HomeConstructionLpWhatsApp;
