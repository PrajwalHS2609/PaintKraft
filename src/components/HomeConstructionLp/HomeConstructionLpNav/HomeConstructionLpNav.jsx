import LpPaintLogo from '@/components/LpPaintNavbar/LpPaintLogo'
import LpPaintTopbar from '@/components/LpPaintNavbar/LpPaintTopbar'
import React from 'react'
import HomeConstructionLpNavMenu from './HomeConstructionLpNavMenu';

const HomeConstructionLpNav = () => {
  return (
    <>
      <LpPaintTopbar />
      <div className="lpPaintNavbar-container">
        <LpPaintLogo />
        <HomeConstructionLpNavMenu/>
      </div>
    </>
  )
}

export default HomeConstructionLpNav
