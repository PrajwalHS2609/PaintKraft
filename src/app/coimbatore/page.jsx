import LpPaintHeader from "./../../components/PaintLandingPage/LpPaintHeader/LpPaintHeader";
import LpPaintServices from "./../../components/PaintLandingPage/LpPaintServices/LpPaintServices";
import LpPaintWhy from "./../../components/PaintLandingPage/LpPaintWhy/LpPaintWhy";
import LpPaintTestimonial from "./../../components/PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial";
import PaintContact from "./../../components/PaintLandingPage/PaintContact/PaintContact";
import LpCoimbatoreFaq from "../../components/LpCoimbatorePage/LpCoimbatoreFaq";
import LpCoimbatorePartner from "../../components/LpCoimbatorePage/LpCoimbatorePartner";
export default function CoimbatorePage() {
  return (
    <div>
      <LpPaintHeader />
      <LpCoimbatorePartner />
      <LpPaintServices />
      {/* <LpPaintBeforeAfter/> */}
      <LpPaintWhy />
      <LpPaintTestimonial />
      {/* <LpPaintSteps /> */}
      <PaintContact />
      <LpCoimbatoreFaq />
    </div>
  );
}
