import Script from "next/script";
import ServiceHeroSection from "../../components/ServiceComponents/ServiceHeroSection";
import TextureDesignTopContent from "../../components/TextureDesign/TextureDesignTopContent";
import LpPaintPartner from "../../components/PaintLandingPage/LpPaintPartner/LpPaintPartner";
import ServiceCal from "../../components/Service/ServiceCal/ServiceCal";
import ServiceKey from "../../components/Service/ServiceKey/ServiceKey";
import LpPaintTestimonial from "../../components/PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial";
import ServiceHow from "../../components/Service/ServiceHow/ServiceHow";
import PaintContact from "../../components/PaintLandingPage/PaintContact/PaintContact";
import TextureDesignBottomContent from "../../components/TextureDesign/TextureDesignBottomContent";
import TextureDesignFaq from "./../../components/TextureDesign/TextureDesignFaq";
import serviceImg from "@/images/subService.png";
import TextureDesignService from "../../components/TextureDesign/TextureDesignService";
import textureAndDesignBanner from "@/images/ServiceBanner/Texture&DesignerWallService.png";
import HomeWorkWith from "../../components/PaintLandingPage/HomeWorkWith/HomeWorkWith";

export const metadata = {
  title:
    "Texture & Designer Walls Service in Bangalore | Texture Walls Price in Bangalore",
  description:
    "Texture & Designer Walls Service in Bangalore has become one of the most sought-after interior enhancement solutions for modern homes.",
  canonical:
    "https://primecleanco.in/texture-and-designer-services-in-bangalore",
};
export default function TextureDesignPage() {
  return (
    <>
      <Script
        id="texture-and-designer-services-in-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are Texture & Designer Walls Services in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Texture & Designer Walls Services in Bangalore involve applying decorative wall textures and designer finishes to create premium and stylish home interiors.",
                },
              },
              {
                "@type": "Question",
                name: "Where can texture walls be applied in a home?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Texture walls are commonly applied in living rooms, bedrooms, dining areas, TV units, foyers, and feature walls.",
                },
              },
              {
                "@type": "Question",
                name: "What types of Texture Walls in Bangalore do you offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Paintkraft offers marble textures, concrete finishes, metallic textures, stucco designs, abstract patterns, and modern designer wall finishes.",
                },
              },
              {
                "@type": "Question",
                name: "What is the Wall Texture Painting Price in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Wall Texture Painting Price in Bangalore depends on wall size, texture type, design complexity, and material quality. Paintkraft provides transparent pricing.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide Texture Designer Walls Service Near Me?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Paintkraft provides Texture Designer Walls Service Near Me across all major locations in Bangalore.",
                },
              },
              {
                "@type": "Question",
                name: "Is texture painting suitable for apartments?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, texture painting is suitable for apartments and adds a premium look without occupying extra space.",
                },
              },
              {
                "@type": "Question",
                name: "How long does texture wall painting take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most texture wall painting projects are completed within 1 to 3 days depending on wall size and design complexity.",
                },
              },
              {
                "@type": "Question",
                name: "Are textured walls easy to maintain?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, modern textured walls are durable, easy to maintain, and resistant to minor wear and dust.",
                },
              },
              {
                "@type": "Question",
                name: "Is post-painting cleanup included?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Paintkraft includes complete cleanup and site handover after completing texture and designer wall services.",
                },
              },
            ],
          }),
        }}
      />
      <div>
        <ServiceHeroSection
          bannerImg={textureAndDesignBanner}
          title="Bold Textures, Beautiful Spaces"
          description="Designer texture walls that add depth, style, and elegance instantly"
          mobTitle="Bold Textures, Beautiful Spaces"
          mobDescription="Designer texture walls that add depth, style, and elegance instantly"
        />
        <TextureDesignTopContent />
        <TextureDesignService />
        <HomeWorkWith />
        <LpPaintPartner />
        <ServiceCal />
        <ServiceKey />
        <LpPaintTestimonial />
        <ServiceHow />
        <PaintContact />
        <TextureDesignFaq />
        <TextureDesignBottomContent />
      </div>
    </>
  );
}
