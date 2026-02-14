import LpPaintFaq from "@/components/PaintLandingPage/LpPaintFaq/LpPaintFaq";
import LpPaintPartner from "@/components/PaintLandingPage/LpPaintPartner/LpPaintPartner";
import LpPaintTestimonial from "@/components/PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial";
import LpPaintWhy from "@/components/PaintLandingPage/LpPaintWhy/LpPaintWhy";
import PaintContact from "@/components/PaintLandingPage/PaintContact/PaintContact";
import BangaloreLpService from "./../../components/BangaloreLp/BangaloreLpService";
import HomeWorkWith from "@/components/PaintLandingPage/HomeWorkWith/HomeWorkWith";
import ServiceHeroSection from "./../../components/ServiceComponents/ServiceHeroSection";
import bannerImg from "@/images/LpBannerImg.png";

export default function BangaloreLp() {
  return (
    <div>
      <ServiceHeroSection
        bannerImg={bannerImg}
        title="No Body Does Spray Painting Like Us! "
        description="  Seamless finish, Flawless shine. The PaintKraft spray painting
                difference."
        mobTitle="On-Time Home Painting You Can Trust"
        mobDescription="   Seamless finish, Flawless shine. The PaintKraft Home painting
                difference."
      />
      <LpPaintPartner />
      <BangaloreLpService />
      <HomeWorkWith />
      <LpPaintWhy />
      <LpPaintTestimonial />
      <PaintContact />
      <LpPaintFaq />
    </div>
  );
}
