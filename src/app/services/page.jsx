import ServiceHeroSection from "../../components/ServiceComponents/ServiceHeroSection";
import LpPaintServices from "../../components/PaintLandingPage/LpPaintServices/LpPaintServices";
import LpPaintPartner from "../../components/PaintLandingPage/LpPaintPartner/LpPaintPartner";
import ServiceCal from "../../components/Service/ServiceCal/ServiceCal";
import ServiceKey from "../../components/Service/ServiceKey/ServiceKey";
import ServiceHow from "../../components/Service/ServiceHow/ServiceHow";
import LpPaintTestimonial from "../../components/PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial";
import bannerImg from "@/images/LpBannerImg.png";
import HomeWorkWith from "../../components/PaintLandingPage/HomeWorkWith/HomeWorkWith";
// import mobileBannerImg from "@/images/lpMobileBannerImg.jpg";
export default function ServicePage() {
  return (
    <div>
      <ServiceHeroSection
        bannerImg={bannerImg}
        title="No Body Does Spray Painting Like Us!"
        description="Seamless finish, Flawless shine. The PaintKraft spray painting difference."
      />
      <LpPaintPartner />
      <LpPaintServices />
      <HomeWorkWith/>
      <ServiceCal />
      <ServiceKey />
      <LpPaintTestimonial />
      <ServiceHow />
    </div>
  );
}
