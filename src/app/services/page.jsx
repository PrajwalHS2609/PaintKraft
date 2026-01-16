import ServiceHeroSection from "../../components/ServiceComponents/ServiceHeroSection";
import LpPaintServices from "../../components/PaintLandingPage/LpPaintServices/LpPaintServices";
import LpPaintPartner from "../../components/PaintLandingPage/LpPaintPartner/LpPaintPartner";
import ServiceCal from "../../components/Service/ServiceCal/ServiceCal";
import ServiceKey from "../../components/Service/ServiceKey/ServiceKey";
import ServiceHow from "../../components/Service/ServiceHow/ServiceHow";
import LpPaintTestimonial from '../../components/PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial';

export default function ServicePage() {
  return (
    <div>
      <ServiceHeroSection />
      <LpPaintPartner />
      <LpPaintServices />
      <ServiceCal />
      <ServiceKey />
      <LpPaintTestimonial />

      <ServiceHow />
    </div>
  );
}
