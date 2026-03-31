import LpPaintWhy from "./../../components/PaintLandingPage/LpPaintWhy/LpPaintWhy";
import PaintContact from "./../../components/PaintLandingPage/PaintContact/PaintContact";
import HomeWorkWith from "../../components/PaintLandingPage/HomeWorkWith/HomeWorkWith";
import ServiceHeroSection from "../../components/ServiceComponents/ServiceHeroSection";
import day1ExpressBanner from "@/images/ServiceBanner/1DayExpterssPaintingService.png";
import HomeTestimonialVid from "./../../components/PaintLandingPage/HomeTestimonialVid/HomeTestimonialVid";
import LpMysorePartner from "../../components/LpMysorePage/LpMysorePartner";
import LpMysoreService from "../../components/LpMysorePage/LpMysoreService";
import LpMysoreFaq from "../../components/LpMysorePage/LpMysoreFaq";

export default function MysorePage() {
  return (
    <div>
      <ServiceHeroSection
        bannerImg={day1ExpressBanner}
        title="Painted Today. Enjoy Tomorrow"
        description="Fast professional painting service delivering flawless results within one day"
        mobTitle="Painted Today. Enjoy Tomorrow"
        mobDescription="Fast professional painting service delivering flawless results within one day"
      />
      <LpMysorePartner />
      <LpMysoreService />
      <HomeTestimonialVid />
      <HomeWorkWith />
      <LpPaintWhy />
      {/* <LpPaintSteps /> */}
      <PaintContact />
      <LpMysoreFaq />
    </div>
  );
}
