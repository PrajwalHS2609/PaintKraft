import LpPaintHeader from "@/components/PaintLandingPage/LpPaintHeader/LpPaintHeader";
import LpPaintPartner from "@/components/PaintLandingPage/LpPaintPartner/LpPaintPartner";
import LpPaintServices from "@/components/PaintLandingPage/LpPaintServices/LpPaintServices";
import LpPaintWhy from "@/components/PaintLandingPage/LpPaintWhy/LpPaintWhy";
import LpPaintTestimonial from "@/components/PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial";
import LpPaintFaq from "@/components/PaintLandingPage/LpPaintFaq/LpPaintFaq";
import PaintContact from './../components/PaintLandingPage/PaintContact/PaintContact';

export default function LpPaint() {
  
  return (
    <div>
      <LpPaintHeader />
      <LpPaintPartner />
      <LpPaintServices />
      {/* <LpPaintBeforeAfter/> */}
      <LpPaintWhy />
      <LpPaintTestimonial />
      {/* <LpPaintSteps /> */}
      <PaintContact />
      <LpPaintFaq />
    </div>
  );
}
