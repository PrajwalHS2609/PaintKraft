import LpPaintWhy from "./../../components/PaintLandingPage/LpPaintWhy/LpPaintWhy";
import PaintContact from "./../../components/PaintLandingPage/PaintContact/PaintContact";
import HomeWorkWith from "../../components/PaintLandingPage/HomeWorkWith/HomeWorkWith";
import ServiceHeroSection from "../../components/ServiceComponents/ServiceHeroSection";
import day1ExpressBanner from "@/images/ServiceBanner/1DayExpterssPaintingService.png";
import HomeTestimonialVid from "./../../components/PaintLandingPage/HomeTestimonialVid/HomeTestimonialVid";
import LpHyderabadPartner from "../../components/LpHyderabadPage/LpHyderabadPartner";
import LpHyderabadService from "../../components/LpHyderabadPage/LpHyderabadService";
import LpHyderabadFaq from "../../components/LpHyderabadPage/LpHyderabadFaq";

export default function HyderabadPage() {
  return (
    <div>
      <ServiceHeroSection
        bannerImg={day1ExpressBanner}
        title="Painted Today. Enjoy Tomorrow"
        description="Fast professional painting service delivering flawless results within one day"
        mobTitle="Painted Today. Enjoy Tomorrow"
        mobDescription="Fast professional painting service delivering flawless results within one day"
      />
      <LpHyderabadPartner />
      <LpHyderabadService />
      <HomeTestimonialVid />
      <HomeWorkWith />
      <LpPaintWhy />
      <PaintContact />
      <LpHyderabadFaq />
    </div>
  );
}
