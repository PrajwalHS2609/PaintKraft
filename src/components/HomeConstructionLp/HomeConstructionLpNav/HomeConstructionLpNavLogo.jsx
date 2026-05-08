import React from 'react'
import "./../../LpPaintNavbar/LpPaintNavbar.css"
import Image from 'next/image'
import logo from "./../../../images/HomeConstructionLp/homeConstruction-Logo.png"
const HomeConstructionLpNavLogo = () => {
  return (
    <div className="HomeConstructionLpLogo-logo">
      <Image src={logo} alt="logo" width={1000} height={1000}/>
    </div>
  )
}

export default HomeConstructionLpNavLogo
