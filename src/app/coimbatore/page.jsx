import LpPaintWhy from "./../../components/PaintLandingPage/LpPaintWhy/LpPaintWhy";
import PaintContact from "./../../components/PaintLandingPage/PaintContact/PaintContact";
import LpCoimbatoreFaq from "../../components/LpCoimbatorePage/LpCoimbatoreFaq";
import LpCoimbatorePartner from "../../components/LpCoimbatorePage/LpCoimbatorePartner";
import LpCoimbatoreTestimonial from "../../components/LpCoimbatorePage/LpCoimbatoreTestimonial";
import LpCoimbatoreService from "../../components/LpCoimbatorePage/LpCoimbatoreService";
import HomeWorkWith from "../../components/PaintLandingPage/HomeWorkWith/HomeWorkWith";
import ServiceHeroSection from "../../components/ServiceComponents/ServiceHeroSection";
import day1ExpressBanner from "@/images/ServiceBanner/1DayExpterssPaintingService.png";

export default function CoimbatorePage() {
  return (
    <div>
      <ServiceHeroSection
        bannerImg={day1ExpressBanner}
        title="Painted Today. Enjoy Tomorrow"
        description="Fast professional painting service delivering flawless results within one day"
        mobTitle="Painted Today. Enjoy Tomorrow"
        mobDescription="Fast professional painting service delivering flawless results within one day"
      />
      <LpCoimbatorePartner />
      <LpCoimbatoreService />
      <HomeWorkWith />
      <LpPaintWhy />
      <LpCoimbatoreTestimonial />
      {/* <LpPaintSteps /> */}
      <PaintContact />
      <LpCoimbatoreFaq />
    </div>
  );
}
