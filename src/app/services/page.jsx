import ServiceHeroSection from "../../components/ServiceComponents/ServiceHeroSection";
import LpPaintServices from "../../components/PaintLandingPage/LpPaintServices/LpPaintServices";
import LpPaintPartner from "../../components/PaintLandingPage/LpPaintPartner/LpPaintPartner";
import ServiceCal from "../../components/Service/ServiceCal/ServiceCal";
import ServiceKey from "../../components/Service/ServiceKey/ServiceKey";
import ServiceHow from "../../components/Service/ServiceHow/ServiceHow";
import bannerImg from "@/images/LpBannerImg.png";
import HomeWorkWith from "../../components/PaintLandingPage/HomeWorkWith/HomeWorkWith";
import HomeTestimonialVid from "./../../components/PaintLandingPage/HomeTestimonialVid/HomeTestimonialVid";

export default function ServicePage() {
  return (
    <div>
      <ServiceHeroSection
        bannerImg={bannerImg}
        title="No Body Does Spray Painting Like Us!"
        description="Seamless finish, Flawless shine. The PaintKraft spray painting difference."
        mobTitle="No Body Does Spray Painting Like Us!"
        mobDescription="Seamless finish, Flawless shine. The PaintKraft spray painting difference."
      />
      <LpPaintPartner />
      <LpPaintServices />
      <HomeTestimonialVid />
      <HomeWorkWith />
      <ServiceCal />
      <ServiceKey />
      <ServiceHow />
    </div>
  );
}
