import ApartmentService from "../../components/ApartmentPainting/ApartmentService";
import LpPaintTestimonial from "../../components/PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial";
import ServiceCal from "../../components/Service/ServiceCal/ServiceCal";
import ServiceHow from "../../components/Service/ServiceHow/ServiceHow";
import ServiceKey from "../../components/Service/ServiceKey/ServiceKey";
import ServiceHeroSection from "../../components/ServiceComponents/ServiceHeroSection";
import serviceImg from "@/images/subService.png";
export default function Apartment(){
    return(
        <div>
      <ServiceHeroSection
        bannerImg={serviceImg}
        title="Apartment Painting"
        description="Looking to refresh your home with a vibrant new look?"
      />
      <ApartmentService />
      <ServiceCal />
      <ServiceKey />
      <LpPaintTestimonial />
      <ServiceHow />
    </div>
    )
}