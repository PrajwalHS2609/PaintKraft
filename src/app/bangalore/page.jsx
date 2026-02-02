import LpPaintFaq from "@/components/PaintLandingPage/LpPaintFaq/LpPaintFaq";
import LpPaintHeader from "@/components/PaintLandingPage/LpPaintHeader/LpPaintHeader";
import LpPaintPartner from "@/components/PaintLandingPage/LpPaintPartner/LpPaintPartner";
import LpPaintTestimonial from "@/components/PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial";
import LpPaintWhy from "@/components/PaintLandingPage/LpPaintWhy/LpPaintWhy";
import PaintContact from "@/components/PaintLandingPage/PaintContact/PaintContact";
import BangaloreLpService from './../../components/BangaloreLp/BangaloreLpService';
import HomeWorkWith from "@/components/PaintLandingPage/HomeWorkWith/HomeWorkWith";

export default function BangaloreLp() {
  return (
    <div>
      <LpPaintHeader />
      <LpPaintPartner />
      <BangaloreLpService/>
      <HomeWorkWith/>
      <LpPaintWhy />
      <LpPaintTestimonial />
      <PaintContact />
      <LpPaintFaq />
    </div>
  );
}
