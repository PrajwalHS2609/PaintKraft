import LpPaintLogo from '@/components/LpPaintNavbar/LpPaintLogo'
import LpPaintTopbar from '@/components/LpPaintNavbar/LpPaintTopbar'
import React from 'react'
import BangaloreLpMenu from './BangaloreLpMenu';

const BangaloreLpNavbar = () => {
  return (
    <>
      <LpPaintTopbar />
      <div className="lpPaintNavbar-container">
        <LpPaintLogo />
        <BangaloreLpMenu/>
      </div>
    </>
  )
}

export default BangaloreLpNavbar
