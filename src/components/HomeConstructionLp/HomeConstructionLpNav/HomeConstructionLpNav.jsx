import React from 'react'
import HomeConstructionLpNavMenu from './HomeConstructionLpNavMenu';
import HomeConstructionLpNavLogo from './HomeConstructionLpNavLogo';
import HomeConstructionLpNavTop from './HomeConstructionLpNavTop';

const HomeConstructionLpNav = () => {
  return (
    <>
      <HomeConstructionLpNavTop />
      <div className="lpPaintNavbar-container">
        <HomeConstructionLpNavLogo />
        <HomeConstructionLpNavMenu/>
      </div>
    </>
  )
}

export default HomeConstructionLpNav
