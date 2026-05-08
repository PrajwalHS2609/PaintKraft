import LpPaintTopbar from '@/components/LpPaintNavbar/LpPaintTopbar'
import React from 'react'
import HomeConstructionLpNavMenu from './HomeConstructionLpNavMenu';
import HomeConstructionLpNavLogo from './HomeConstructionLpNavLogo';

const HomeConstructionLpNav = () => {
  return (
    <>
      <LpPaintTopbar />
      <div className="lpPaintNavbar-container">
        <HomeConstructionLpNavLogo />
        <HomeConstructionLpNavMenu/>
      </div>
    </>
  )
}

export default HomeConstructionLpNav
