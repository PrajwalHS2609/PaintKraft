import Script from "next/script";
import LpPaintTestimonial from "../../components/PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial";
import ServiceCal from "../../components/Service/ServiceCal/ServiceCal";
import ServiceHow from "../../components/Service/ServiceHow/ServiceHow";
import ServiceKey from "../../components/Service/ServiceKey/ServiceKey";
import ServiceHeroSection from "../../components/ServiceComponents/ServiceHeroSection";
import serviceImg from "@/images/subService.png";
import Day1ExpressPaintingBottomContent from "./../../components/Day1ExpressPainting/Day1ExpressPaintingBottomContent";
import Day1ExpressPaintingTopContent from "../../components/Day1ExpressPainting/Day1ExpressPaintingTopContent";
import Day1ExpressPaintingFaq from "./../../components/Day1ExpressPainting/Day1ExpressPaintingFaq";
import Day1ExpressPaintingService from "../../components/Day1ExpressPainting/Day1ExpressPaintingService";
import PaintContact from "./../../components/PaintLandingPage/PaintContact/PaintContact";
import LpPaintServices from "./../../components/PaintLandingPage/LpPaintServices/LpPaintServices";
export const metadata = {
  title:
    "1 Day Express Painting Service in Bangalore | Same Day Painting Price in Bangalore",
  description:
    "1 Day Express Painting Service in Bangalore is a revolutionary solution for homeowners who want a fast, clean, and professional paint makeover without long waiting periods or prolonged disruption.",
  canonical:
    "https://primecleanco.in/1-day-express-painting-services-in-bangalore",
};
export default function Day1ExpressPainting() {
  return (
    <>
      <Script
        id="1-day-express-painting-services-in-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is 1 Day Express Painting Service in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "1 Day Express Painting Service in Bangalore is a fast-track painting solution where professional home painting is completed within 24 hours using skilled painters and quick-drying paints.",
                },
              },
              {
                "@type": "Question",
                name: "Is 1 Day Express Painting suitable for homes and apartments?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, this service is ideal for homes and apartments requiring fast painting with minimal disruption, especially rental and resale properties.",
                },
              },
              {
                "@type": "Question",
                name: "What type of Home Painting in Bangalore can be completed in one day?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Selective rooms, apartment interiors, or partial Home Painting in Bangalore can usually be completed within one day depending on scope and surface condition.",
                },
              },
              {
                "@type": "Question",
                name: "How does Paintkraft complete Residential painting in Bangalore within one day?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Paintkraft completes Residential painting in Bangalore within one day through advance planning, trained manpower, machine tools, and fast-drying premium paints.",
                },
              },
              {
                "@type": "Question",
                name: "What is the Apartment Painting Price in Bangalore for express service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Apartment Painting Price in Bangalore for express services depends on area size, paint type, and scope of work. Paintkraft offers transparent pricing with digital quotations.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide House Painting Service Near Me with express execution?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Paintkraft provides House Painting Service Near Me across Bangalore with 1 Day Express Painting options.",
                },
              },
              {
                "@type": "Question",
                name: "Will furniture and floors be protected during express painting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all furniture, flooring, and fixtures are properly covered before starting the express painting service.",
                },
              },
              {
                "@type": "Question",
                name: "Is post-painting cleanup included?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, complete cleanup and same-day site handover are included in Paintkraft’s 1 Day Express Painting Service.",
                },
              },
            ],
          }),
        }}
      />
      <div>
        <ServiceHeroSection
          bannerImg={serviceImg}
          title="Painted Today. Enjoy Tomorrow"
          description="Fast professional painting service delivering flawless results within one day"
        />
        <LpPaintServices />

        <Day1ExpressPaintingTopContent />
        <Day1ExpressPaintingService />
        <ServiceCal />
        <ServiceKey />
        <LpPaintTestimonial />
        <ServiceHow />
        <PaintContact />
        <Day1ExpressPaintingFaq />
        <Day1ExpressPaintingBottomContent />
      </div>
    </>
  );
}
