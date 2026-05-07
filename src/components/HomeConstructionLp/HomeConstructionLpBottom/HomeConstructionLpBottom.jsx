import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import"./HomeConstructionLpBottom.css"
import bottomBanner from "../../../images/HomeConstructionLp/Bottom-Banner.png"
const HomeConstructionLpBottom = () => {
  return (
    <div className="HomeConstructionImg">
      <Link href={"/"}>
        <Image src={bottomBanner} alt="bottom_Banner" />
      </Link>
    </div>
  )
}

export default HomeConstructionLpBottom
