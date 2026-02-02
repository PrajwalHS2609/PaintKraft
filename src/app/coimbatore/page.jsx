import LpPaintHeader from "./../../components/PaintLandingPage/LpPaintHeader/LpPaintHeader";
import LpPaintWhy from "./../../components/PaintLandingPage/LpPaintWhy/LpPaintWhy";
import PaintContact from "./../../components/PaintLandingPage/PaintContact/PaintContact";
import LpCoimbatoreFaq from "../../components/LpCoimbatorePage/LpCoimbatoreFaq";
import LpCoimbatorePartner from "../../components/LpCoimbatorePage/LpCoimbatorePartner";
import LpCoimbatoreTestimonial from "../../components/LpCoimbatorePage/LpCoimbatoreTestimonial";
import LpCoimbatoreService from "../../components/LpCoimbatorePage/LpCoimbatoreService";
export default function CoimbatorePage() {
  return (
    <div>
      <LpPaintHeader />
      <LpCoimbatorePartner />
      <LpCoimbatoreService />
      {/* <LpPaintBeforeAfter/> */}
      <LpPaintWhy />
      <LpCoimbatoreTestimonial />
      {/* <LpPaintSteps /> */}
      <PaintContact />
      <LpCoimbatoreFaq />
    </div>
  );
}
