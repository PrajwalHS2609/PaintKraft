import React from 'react'
import "@/components/LpPaintNavbar/LpPaintNavbar.css"

import { FaWhatsapp } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
const HomeConstructionLpNavTop = () => {
  return (
    <div className="lpPaintTop-container">
      <div className="lpPaintTop-content"></div>
      <div className="lpPaintTop-content">
        {/* <h6>1-Hr Home Visit or Get 10% Off</h6> */}
      </div>
      <div className="lpPaintTop-content">
        <a href="https://api.whatsapp.com/send?phone=918792446647">
          <FaWhatsapp className="lpPaintTop-icon" />
        </a>
        <a href="tel:8792446647">
          <IoMdCall className="lpPaintTop-icon" id="lpPaintTop-icon2"/>
        </a>
      </div>
    </div>
  )
}

export default HomeConstructionLpNavTop
