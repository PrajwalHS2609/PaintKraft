import React from 'react'
import "./HomeConstructionLpHero.css"
import PaintkraftLpHeroForm from './PaintkraftLpHeroForm'
import HomeConstructionBanner from "././../../../images/HomeConstructionLp/HomeConstructionBanner.png"
import Image from 'next/image'
const HomeConstructionLpHero = () => {
  return (
    <div className='HomeConstructionLpHero-container'>
      <div className="HomeConstructionLpHero-Content">
        <Image src={HomeConstructionBanner} alt="HomeConstructionBanner" />
      </div>
      <PaintkraftLpHeroForm />
    </div>
  )
}

export default HomeConstructionLpHero
