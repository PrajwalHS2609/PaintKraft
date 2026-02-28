import Script from "next/script";
import ServiceHeroSection from "../../components/ServiceComponents/ServiceHeroSection";
import LpPaintPartner from "../../components/PaintLandingPage/LpPaintPartner/LpPaintPartner";
import ServiceCal from "../../components/Service/ServiceCal/ServiceCal";
import ServiceKey from "../../components/Service/ServiceKey/ServiceKey";
import ServiceHow from "../../components/Service/ServiceHow/ServiceHow";
import PaintContact from "../../components/PaintLandingPage/PaintContact/PaintContact";
import CommercialPaintingTopContent from "../../components/CommercialPainting/CommercialPaintingTopContent";
import CommercialPaintingService from "../../components/CommercialPainting/CommercialPaintingService";
import CommercialPaintingFaq from "../../components/CommercialPainting/CommercialPaintingFaq";
import CommercialPaintingBottomContent from "../../components/CommercialPainting/CommercialPaintingBottomContent";
import commercialBanner from "@/images/ServiceBanner/OfficeSpacePaintingServices.png";
import HomeWorkWith from "../../components/PaintLandingPage/HomeWorkWith/HomeWorkWith";
import HomeTestimonialVid from "./../../components/PaintLandingPage/HomeTestimonialVid/HomeTestimonialVid";

export const metadata = {
  title:
    "Commercial Painting Service in Bangalore | Office Painting Price in Bangalore",
  description:
    "Commercial Painting Service in Bangalore has become a critical requirement for businesses that want to maintain a professional image, improve employee productivity, and create a welcoming environment for clients and visitors",
  canonical:
    "https://primecleanco.in/commercial-painting-services-in-bangalore",
};
export default function CommercialPage() {
  return (
    <>
      <Script
        id="commercial-painting-services-in-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What does Commercial Painting Service in Bangalore include?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Commercial Painting Service in Bangalore includes surface inspection, wall preparation, interior and exterior painting, brand color execution, cleanup, and final handover.",
                },
              },
              {
                "@type": "Question",
                name: "What properties are covered under Commercial Painting in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Paintkraft provides Commercial Painting in Bangalore for offices, IT parks, retail stores, hospitals, schools, hotels, warehouses, and commercial complexes.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer Office Painting Service Near Me across Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Paintkraft offers Office Painting Service Near Me across all major areas of Bangalore.",
                },
              },
              {
                "@type": "Question",
                name: "Can office painting be done outside business hours?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Office Space Painting in Bangalore can be scheduled during evenings, weekends, or in phases to avoid business disruption.",
                },
              },
              {
                "@type": "Question",
                name: "What is the Commercial Painting Price in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Commercial Painting Price in Bangalore depends on area size, paint type, surface condition, execution timeline, and customization requirements. Paintkraft provides transparent pricing.",
                },
              },
              {
                "@type": "Question",
                name: "What type of paints are used for commercial painting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Paintkraft uses durable, low-VOC, and easy-to-maintain paints suitable for high-traffic commercial environments.",
                },
              },
              {
                "@type": "Question",
                name: "How long does Office Space Painting in Bangalore take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Office Space Painting duration varies based on project size. Small offices may take 2–3 days, while larger spaces are executed in phases.",
                },
              },
              {
                "@type": "Question",
                name: "Is post-painting cleanup included?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Paintkraft includes complete cleanup and final inspection after completing commercial painting projects.",
                },
              },
            ],
          }),
        }}
      />
      <div>
        <ServiceHeroSection
          bannerImg={commercialBanner}
          title="Premium Paint for Productive Spaces"
          description="Professional commercial painting solutions enhancing aesthetics, durability, and workplace productivity. "
          mobTitle="Premium Paint for Productive Spaces"
          mobDescription="Professional commercial painting solutions enhancing aesthetics, durability, and workplace productivity. "
        />
        <CommercialPaintingTopContent />
        <LpPaintPartner />
        <CommercialPaintingService />
        <HomeTestimonialVid />
        <HomeWorkWith />
        <ServiceCal />
        <ServiceKey />
        <HomeTestimonialVid />
        <ServiceHow />
        <PaintContact />
        <CommercialPaintingFaq />
        <CommercialPaintingBottomContent />
      </div>
    </>
  );
}
