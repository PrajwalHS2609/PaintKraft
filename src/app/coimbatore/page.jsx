import LpPaintHeader from "./../../components/PaintLandingPage/LpPaintHeader/LpPaintHeader";
import LpPaintServices from "./../../components/PaintLandingPage/LpPaintServices/LpPaintServices";
import LpPaintWhy from "./../../components/PaintLandingPage/LpPaintWhy/LpPaintWhy";
import PaintContact from "./../../components/PaintLandingPage/PaintContact/PaintContact";
import LpCoimbatoreFaq from "../../components/LpCoimbatorePage/LpCoimbatoreFaq";
import LpCoimbatorePartner from "../../components/LpCoimbatorePage/LpCoimbatorePartner";
import LpCoimbatoreTestimonial from "../../components/LpCoimbatorePage/LpCoimbatoreTestimonial";
export default function CoimbatorePage() {
  return (
    <div>
      <LpPaintHeader />
      <LpCoimbatorePartner />
      <LpPaintServices />
      {/* <LpPaintBeforeAfter/> */}
      <LpPaintWhy />
      <LpCoimbatoreTestimonial />
      {/* <LpPaintSteps /> */}
      <PaintContact />
      <LpCoimbatoreFaq />
    </div>
  );
}
