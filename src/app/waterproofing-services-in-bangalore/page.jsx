import Script from "next/script";
import ServiceHeroSection from "../../components/ServiceComponents/ServiceHeroSection";
import LpPaintPartner from "../../components/PaintLandingPage/LpPaintPartner/LpPaintPartner";
import ServiceCal from "../../components/Service/ServiceCal/ServiceCal";
import ServiceKey from "../../components/Service/ServiceKey/ServiceKey";
import LpPaintTestimonial from "../../components/PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial";
import ServiceHow from "../../components/Service/ServiceHow/ServiceHow";
import PaintContact from "../../components/PaintLandingPage/PaintContact/PaintContact";
import WaterproofingTopContent from "../../components/Waterproofing/WaterproofingTopContent";
import WaterproofingService from "../../components/Waterproofing/WaterproofingService";
import WaterproofingBottomContent from "../../components/Waterproofing/WaterproofingBottomContent";
import waterproofingBanner from "@/images/ServiceBanner/WaterproofingService.png"
import WaterproofingFaq from "../../components/Waterproofing/WaterproofingFaq";
import HomeWorkWith from "../../components/PaintLandingPage/HomeWorkWith/HomeWorkWith";

export const metadata = {
  title:
    "Waterproofing Service in Bangalore | House Waterproofing Price in Bangalore",
  description:
    "Waterproofing Service in Bangalore has become an essential requirement for homeowners who want to protect their property from water damage, dampness, seepage, and structural deterioration.",
  canonical: "https://primecleanco.in/waterproofing-services-in-bangalore",
};
export default function Waterproofing() {
  return (
    <>
      <Script
        id="waterproofing-services-in-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Waterproofing Service in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Waterproofing Service in Bangalore involves applying protective treatments to prevent water leakage, dampness, and moisture damage in residential properties.",
                },
              },
              {
                "@type": "Question",
                name: "Why is House Waterproofing in Bangalore important?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "House Waterproofing in Bangalore is important due to heavy rainfall and humidity, which can cause wall dampness, mold growth, and structural damage.",
                },
              },
              {
                "@type": "Question",
                name: "Which areas of a home need waterproofing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Terraces, bathrooms, balconies, kitchens, basements, external walls, and roofs commonly require waterproofing.",
                },
              },
              {
                "@type": "Question",
                name: "What is the Home Waterproofing Price in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Home Waterproofing Price in Bangalore depends on the area size, surface condition, waterproofing method, and materials used. Paintkraft provides transparent pricing.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide Waterproofing Service Near Me in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Paintkraft provides Waterproofing Service Near Me across all major locations in Bangalore.",
                },
              },
              {
                "@type": "Question",
                name: "How long does Residential Waterproofing in Bangalore last?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Residential Waterproofing in Bangalore can last several years when applied professionally and maintained properly.",
                },
              },
              {
                "@type": "Question",
                name: "Is waterproofing required before painting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, waterproofing before painting prevents paint peeling, bubbling, and dampness, improving paint durability.",
                },
              },
              {
                "@type": "Question",
                name: "How long does waterproofing work take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most waterproofing projects are completed within 2 to 5 days depending on the severity and area covered.",
                },
              },
              {
                "@type": "Question",
                name: "Is post-service cleanup included?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Paintkraft includes final inspection, cleanup, and guidance after completing waterproofing services.",
                },
              },
            ],
          }),
        }}
      />
      <div>
        <ServiceHeroSection
          bannerImg={waterproofingBanner}
          title="Smart Waterproofing. Lasting Protection"
          description="Advanced waterproofing solutions ensuring long-term protection against leaks and dampness."
        />
        <WaterproofingTopContent />
        <LpPaintPartner />
        <WaterproofingService />
        <HomeWorkWith/>
        <ServiceCal />
        <ServiceKey />
        <LpPaintTestimonial />
        <ServiceHow />
        <PaintContact />
        <WaterproofingFaq />
        <WaterproofingBottomContent />
      </div>
    </>
  );
}
