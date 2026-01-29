import Script from "next/script";
import HomePaintingBottomContent from "../../components/HomePainting/HomePaintingBottomContent";
import HomePaintingTopContent from "../../components/HomePainting/HomePaintingTopContent";
import HomePaintingService from "../../components/HomePainting/HomeService";
import LpPaintTestimonial from "../../components/PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial";
import ServiceCal from "../../components/Service/ServiceCal/ServiceCal";
import ServiceHow from "../../components/Service/ServiceHow/ServiceHow";
import ServiceKey from "../../components/Service/ServiceKey/ServiceKey";
import ServiceHeroSection from "../../components/ServiceComponents/ServiceHeroSection";
import serviceImg from "@/images/subService.png";
import HomePaintingFaq from "../../components/HomePainting/HomePaintingFaq";
import PaintContact from "./../../components/PaintLandingPage/PaintContact/PaintContact";
import LpPaintPartner from "./../../components/PaintLandingPage/LpPaintPartner/LpPaintPartner";
export const metadata = {
  title:
    "Home Painting Service in Bangalore | House Painting Price in Bangalore",
  description:
    "Home Painting Service in Bangalore have become an essential part of modern home improvement, as homeowners increasingly seek professional solutions to enhance the beauty, comfort, and value of their living spaces.",
  canonical: "https://primecleanco.in/home-painting-services-in-bangalore",
};
export default function HomePainting() {
  return (
    <>
      <Script
        id="home-painting-services-in-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What does Home Painting Services in Bangalore include?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Home Painting Services in Bangalore include wall inspection, surface preparation, crack filling, primer application, interior and exterior painting, texture finishes, final cleanup, and site handover.",
                },
              },
              {
                "@type": "Question",
                name: "How do I book Home Painting in Bangalore with Paintkraft?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can book Home Painting in Bangalore by contacting Paintkraft online or via phone. Our executive schedules a site visit and provides a transparent digital quotation.",
                },
              },
              {
                "@type": "Question",
                name: "What is the average Home Painting Price in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Home Painting Price in Bangalore depends on area size, paint brand, number of coats, wall condition, and finish type. Paintkraft offers competitive and transparent pricing.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide House Painting Service Near Me across Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Paintkraft provides House Painting Service Near Me across all major areas of Bangalore for apartments, villas, and independent houses.",
                },
              },
              {
                "@type": "Question",
                name: "How long does Residential painting in Bangalore take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Residential painting in Bangalore usually takes between 2 to 7 days, depending on home size and scope of work.",
                },
              },
              {
                "@type": "Question",
                name: "Are your painters trained and certified?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Paintkraft painters are trained and certified professionals experienced in Residential painting in Bangalore.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer interior and exterior Home Painting in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Paintkraft provides both interior and exterior Home Painting in Bangalore using premium and weather-resistant paints.",
                },
              },
              {
                "@type": "Question",
                name: "Will furniture be protected during painting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all furniture and flooring are properly covered before starting Home Painting in Bangalore to avoid damage.",
                },
              },
              {
                "@type": "Question",
                name: "Is post-painting cleanup included?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, complete cleanup and site handover are included in all Home Painting Services in Bangalore by Paintkraft.",
                },
              },
            ],
          }),
        }}
      />
      <div>
        <ServiceHeroSection
          bannerImg={serviceImg}
          title="Beautiful Homes Start with Great Paint"
          description="Expert painting services that transform your home with flawless finishes"
        />
        <LpPaintPartner />
        <HomePaintingTopContent />
        <HomePaintingService />
        <ServiceCal />
        <ServiceKey />
        <LpPaintTestimonial />
        <ServiceHow />
        <PaintContact />
        <HomePaintingFaq />
        <HomePaintingBottomContent />
      </div>
    </>
  );
}
