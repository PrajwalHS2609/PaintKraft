import Script from "next/script";
import ServiceCal from "../../components/Service/ServiceCal/ServiceCal";
import ServiceHow from "../../components/Service/ServiceHow/ServiceHow";
import ServiceKey from "../../components/Service/ServiceKey/ServiceKey";
import ServiceHeroSection from "../../components/ServiceComponents/ServiceHeroSection";
import SprayPaintingBottomContent from "../../components/SprayPainting/SprayPaintingBottomContent";
import SprayPaintingFaq from "../../components/SprayPainting/SprayPaintingFaq";
import SprayPaintingService from "../../components/SprayPainting/SprayPaintingService";
import SprayPaintingTopContent from "../../components/SprayPainting/SprayPaintingTopContent";
import sprayBanner from "@/images/ServiceBanner/HomeSprayPaintingService.png";
import LpPaintPartner from "./../../components/PaintLandingPage/LpPaintPartner/LpPaintPartner";
import PaintContact from "./../../components/PaintLandingPage/PaintContact/PaintContact";
import HomeWorkWith from "../../components/PaintLandingPage/HomeWorkWith/HomeWorkWith";
import HomeTestimonialVid from "./../../components/PaintLandingPage/HomeTestimonialVid/HomeTestimonialVid";
export const metadata = {
  title:
    "Spray Painting Service in Bangalore | House Painting Price in Bangalore",
  description:
    "Spray Painting Services in Bangalore are rapidly becoming the preferred choice for homeowners who want superior finish quality, faster execution, and long-lasting results.",
  canonical: "https://primecleanco.in/spray-painting-services-in-bangalore",
};
export default function SprayPainting() {
  return (
    <>
      <Script
        id="spray-painting-services-in-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are Spray Painting Services in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Spray Painting Services in Bangalore use advanced spray machines to apply paint evenly, delivering a smooth, professional finish faster than traditional painting methods.",
                },
              },
              {
                "@type": "Question",
                name: "Is Home Spray Painting in Bangalore better than roller painting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Home Spray Painting in Bangalore offers uniform coverage, faster completion, and a smoother finish compared to roller painting.",
                },
              },
              {
                "@type": "Question",
                name: "What is the Spray Painting Price in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Spray Painting Price in Bangalore depends on home size, surface condition, paint type, and number of coats. Paintkraft provides transparent pricing with no hidden charges.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide House Painting Service Near Me using spray painting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Paintkraft offers House Painting Service Near Me across Bangalore using professional spray painting technology.",
                },
              },
              {
                "@type": "Question",
                name: "Is spray painting suitable for Residential painting in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, spray painting is ideal for Residential painting in Bangalore, especially for modern homes requiring smooth and premium finishes.",
                },
              },
              {
                "@type": "Question",
                name: "Are furniture and floors protected during spray painting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all furniture, floors, and fixtures are fully covered and masked before Home Spray Painting in Bangalore begins.",
                },
              },
              {
                "@type": "Question",
                name: "How long does spray painting take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most spray painting projects are completed within 1 to 3 days depending on the size of the home and scope of work.",
                },
              },
              {
                "@type": "Question",
                name: "Is post-painting cleanup included?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, complete cleanup and site handover are included in all Spray Painting Services in Bangalore by Paintkraft.",
                },
              },
            ],
          }),
        }}
      />
      <div>
        <ServiceHeroSection
          bannerImg={sprayBanner}
          title="Perfect Finish with Spray Technology"
          description="Advanced spray painting delivering smooth, flawless, and long-lasting professional finishes"
          mobTitle="Perfect Finish with Spray Technology"
          mobDescription="Advanced spray painting delivering smooth, flawless, and long-lasting professional finishes"
        />
        <SprayPaintingTopContent />
        <LpPaintPartner />
        <SprayPaintingService />
        <HomeTestimonialVid />
        <HomeWorkWith />
        <ServiceCal />
        <ServiceKey />
        <HomeTestimonialVid />
        <ServiceHow />
        <PaintContact />
        <SprayPaintingFaq />
        <SprayPaintingBottomContent />
      </div>
    </>
  );
}
