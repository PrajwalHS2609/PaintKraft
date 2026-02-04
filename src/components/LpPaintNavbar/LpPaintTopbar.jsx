import React from "react";
import "./LpPaintNavbar.css";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
const LpPaintTopbar = () => {
  return (
    <div className="lpPaintTop-container">
      <div className="lpPaintTop-content"></div>
      <div className="lpPaintTop-content">
        <h6>1-Hr Home Visit or Get 10% Off</h6>
      </div>
      <div className="lpPaintTop-content">
        <a href="https://api.whatsapp.com/send?phone=917090234446">
          <FaWhatsapp className="lpPaintTop-icon" />
        </a>
        <a href="tel:9071274446">
          <IoMdCall className="lpPaintTop-icon" id="lpPaintTop-icon2"/>
        </a>
      </div>
    </div>
  );
};

export default LpPaintTopbar;
