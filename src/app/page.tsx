import LpPaintHeader from "@/components/PaintLandingPage/LpPaintHeader/LpPaintHeader";
import LpPaintPartner from "@/components/PaintLandingPage/LpPaintPartner/LpPaintPartner";
import LpPaintServices from "@/components/PaintLandingPage/LpPaintServices/LpPaintServices";
import LpPaintWhy from "@/components/PaintLandingPage/LpPaintWhy/LpPaintWhy";
import LpPaintTestimonial from "@/components/PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial";
import LpPaintFaq from "@/components/PaintLandingPage/LpPaintFaq/LpPaintFaq";
import PaintContact from './../components/PaintLandingPage/PaintContact/PaintContact';
import HomeBlog from "@/components/PaintLandingPage/HomeBlog/HomeBlog.jsx"
import ServiceCal from './../components/Service/ServiceCal/ServiceCal';
import HomeWorkWith from './../components/PaintLandingPage/HomeWorkWith/HomeWorkWith';
export const metadata = {
  title: "Home Painting Service in Bangalore | House Painting Price in Bangalore",
  description:
    "Home Painting Service in Bangalore have become an essential part of modern home improvement, as homeowners increasingly seek professional solutions to enhance the beauty, comfort, and value of their living spaces.",
  canonical:
    "https://primecleanco.in/home-painting-services-in-bangalore",

};
export default function LpPaint() {
  
  return (
    <div>
      <LpPaintHeader />
      <LpPaintPartner />
      <LpPaintServices />
            <HomeWorkWith/>
      <ServiceCal />
      <LpPaintWhy />
      <LpPaintTestimonial />
      {/* <LpPaintSteps /> */}
      <PaintContact />
      <LpPaintFaq />
      <HomeBlog/>
    </div>
  );
}
