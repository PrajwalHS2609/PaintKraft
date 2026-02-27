import React from 'react'
import CalculatorHeroSection from '../../components/Calculator/CalculatorHeroSection/CalculatorHeroSection'
import LpPaintPartner from '../../components/PaintLandingPage/LpPaintPartner/LpPaintPartner'
import HomePaintingService from '../../components/HomePainting/HomeService'
import HomeWorkWith from '../../components/PaintLandingPage/HomeWorkWith/HomeWorkWith'
import ServiceCal from '../../components/Service/ServiceCal/ServiceCal'
import ServiceKey from '../../components/Service/ServiceKey/ServiceKey'
import LpPaintTestimonial from '../../components/PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial'
import ServiceHow from '../../components/Service/ServiceHow/ServiceHow'
import PaintContact from '../../components/PaintLandingPage/PaintContact/PaintContact'

const calculator = () => {
  return (
    <div>
      <CalculatorHeroSection/>
       <LpPaintPartner />
        <HomePaintingService />
        <HomeWorkWith />
        <ServiceCal />
        <ServiceKey />
        <LpPaintTestimonial />
        <ServiceHow />
        <PaintContact/>
    </div>
  )
}

export default calculator
