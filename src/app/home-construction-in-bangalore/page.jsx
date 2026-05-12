import React from "react";
import HomeConstructionLpHero from "../../components/HomeConstructionLp/HomeConstructionLpHero/HomeConstructionLpHero";
import HomeConstructionLpPackage from "../../components/HomeConstructionLp/HomeConstructionLpPackage/HomeConstructionLpPackage";
import HomeConstructionLpWelcome from "../../components/HomeConstructionLp/HomeConstructionLpHero/HomeConstructionLpWelcome";
import HomeConstructionLpBottom from "../../components/HomeConstructionLp/HomeConstructionLpBottom/HomeConstructionLpBottom";
import HomeConstructionLpProcess from "../../components/HomeConstructionLp/HomeConstructionLpProcess/HomeConstructionLpProcess";
import HomeConstructionLpWhyChoose from "../../components/HomeConstructionLp/HomeConstructionLpWhyChoose/HomeConstructionLpWhyChoose";
import HomeConstructionLpTestimonials from "../../components/HomeConstructionLp/HomeConstructionLpTestimonials/HomeConstructionLpTestimonials";
import HomeConstructionLpPartners from "../../components/HomeConstructionLp/HomeConstructionLpPartners/HomeConstructionLpPartners";
import HomeConstructionLpFaq from "../../components/HomeConstructionLp/HomeConstructionLpFaq/HomeConstructionLpFaq";
import HomeConstructionLpFooter from "../../components/HomeConstructionLp/HomeConstructionLpFooter/HomeConstructionLpFooter";
import HomeConstructionLpWhatsApp from "../../components/HomeConstructionLp/HomeConstructionLpWhatsApp/HomeConstructionLpWhatsApp";

const PaintkraftLp = () => {
  return (
    <div>
      <HomeConstructionLpHero />
      <HomeConstructionLpWelcome />
      <HomeConstructionLpPackage />
      <HomeConstructionLpProcess />
      <HomeConstructionLpWhyChoose />
      <HomeConstructionLpTestimonials/>
      <HomeConstructionLpPartners/>
      <HomeConstructionLpFaq/>
      <HomeConstructionLpBottom />
      <HomeConstructionLpFooter/>
      <HomeConstructionLpWhatsApp/>
    </div>
  );
};

export default PaintkraftLp;
