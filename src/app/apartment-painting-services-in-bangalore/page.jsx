import Script from "next/script";
import ApartmentPaintingBottomContent from "../../components/ApartmentPainting/ApartmentPaintingBottomContent";
import ApartmentPaintingFaq from "../../components/ApartmentPainting/ApartmentPaintingFaq";
import ApartmentPaintingTopContent from "../../components/ApartmentPainting/ApartmentPaintingTopContent";
import ApartmentService from "../../components/ApartmentPainting/ApartmentService";
import LpPaintTestimonial from "../../components/PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial";
import ServiceCal from "../../components/Service/ServiceCal/ServiceCal";
import ServiceHow from "../../components/Service/ServiceHow/ServiceHow";
import ServiceKey from "../../components/Service/ServiceKey/ServiceKey";
import ServiceHeroSection from "../../components/ServiceComponents/ServiceHeroSection";
import serviceImg from "@/images/subService.png";
import LpPaintPartner from "./../../components/PaintLandingPage/LpPaintPartner/LpPaintPartner";
import PaintContact from "./../../components/PaintLandingPage/PaintContact/PaintContact";
import apartmentBanner from "@/images/ServiceBanner/ApartmentPaintingService.png"

export const metadata = {
  title:
    "Apartment Painting Service in Bangalore | Flats Painting Price in Bangalore",
  description:
    "Apartment Painting Services in Bangalore have become an essential part of modern home maintenance and interior enhancement, especially with the rapid growth of apartment living across the city.",
  canonical: "https://primecleanco.in/apartment-painting-services-in-bangalore",
};

export default function Apartment() {
  return (
    <>
      <Script
        id="apartment-painting-services-in-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What does Apartment Painting Services in Bangalore include?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Apartment Painting Services in Bangalore include wall inspection, surface preparation, crack filling, primer application, interior painting, optional texture finishes, final cleaning, and site handover.",
                },
              },
              {
                "@type": "Question",
                name: "How do I book Apartment Painting in Bangalore with Paintkraft?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can book Apartment Painting in Bangalore by contacting Paintkraft online or via phone. A site visit and digital quotation will be provided.",
                },
              },
              {
                "@type": "Question",
                name: "What is the Apartment Painting Price in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Apartment Painting Price in Bangalore depends on apartment size, paint brand, wall condition, number of coats, and finish type. Paintkraft offers transparent and competitive pricing.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide Flats Painting Service Near Me across Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Paintkraft provides Flats Painting Service Near Me across all major areas in Bangalore, including gated communities and high-rise apartments.",
                },
              },
              {
                "@type": "Question",
                name: "How long does Apartment Painting in Bangalore take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Apartment Painting in Bangalore usually takes 2 to 5 days depending on the size of the apartment and scope of work.",
                },
              },
              {
                "@type": "Question",
                name: "Are furniture and floors protected during painting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all furniture, flooring, and fixtures are properly covered before Residential painting in Bangalore begins.",
                },
              },
              {
                "@type": "Question",
                name: "What type of paints are used for apartment painting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Paintkraft uses premium, eco-friendly, and low-VOC paints suitable for Residential painting in Bangalore.",
                },
              },
              {
                "@type": "Question",
                name: "Is post-painting cleanup included?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, complete cleanup and final handover are included in all Apartment Painting Services in Bangalore by Paintkraft.",
                },
              },
            ],
          }),
        }}
      />
      <div>
        <ServiceHeroSection
          bannerImg={apartmentBanner}
          title="Perfect Paint for Perfect Apartments"
          description="Professional painting services designed to enhance modern apartment living spaces."
        />
        <ApartmentPaintingTopContent />
        <LpPaintPartner />
        <ApartmentService />
        <ServiceCal />
        <ServiceKey />
        <LpPaintTestimonial />
        <ServiceHow />
        <PaintContact />
        <ApartmentPaintingFaq />
        <ApartmentPaintingBottomContent />
      </div>
    </>
  );
}
