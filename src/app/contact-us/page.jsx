import ServiceHeroSection from "../../components/ServiceComponents/ServiceHeroSection";
import ContactUsMain from "./../../components/ContactUsPage/ContactUsMain/ContactUsMain";
import ContactUsMap from "./../../components/ContactUsPage/ContactUsMap/ContactUsMap";
import contactBanner from "./../../images/contactBanner.png";

export default function ContactUs() {
  return (
    <div>
      <ServiceHeroSection
        bannerImg={contactBanner}
        title="Contact Us"
        description=""
      />

      <ContactUsMain />
      <ContactUsMap />
    </div>
  );
}
