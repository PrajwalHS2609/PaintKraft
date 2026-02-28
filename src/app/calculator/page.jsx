import React from "react";
import CalculatorHeroSection from "../../components/Calculator/CalculatorHeroSection/CalculatorHeroSection";
import LpPaintPartner from "../../components/PaintLandingPage/LpPaintPartner/LpPaintPartner";
import HomePaintingService from "../../components/HomePainting/HomeService";
import HomeWorkWith from "../../components/PaintLandingPage/HomeWorkWith/HomeWorkWith";
import ServiceCal from "../../components/Service/ServiceCal/ServiceCal";
import ServiceKey from "../../components/Service/ServiceKey/ServiceKey";
import ServiceHow from "../../components/Service/ServiceHow/ServiceHow";
import PaintContact from "../../components/PaintLandingPage/PaintContact/PaintContact";
import HomeTestimonialVid from "./../../components/PaintLandingPage/HomeTestimonialVid/HomeTestimonialVid";

const calculator = () => {
  return (
    <div>
      <CalculatorHeroSection />
      <LpPaintPartner />
      <HomePaintingService />
      <HomeTestimonialVid />
      <HomeWorkWith />
      <ServiceCal />
      <ServiceKey />
      <ServiceHow />
      <PaintContact />
    </div>
  );
};

export default calculator;
