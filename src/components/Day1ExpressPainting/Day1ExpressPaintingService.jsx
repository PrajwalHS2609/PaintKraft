import React from "react";
import apartment from "@/images/LppaintServiceImgs/Apartment Painting.png";
import home from "@/images/LppaintServiceImgs/Home Painting.png";
import spray from "@/images/LppaintServiceImgs/Spray Painting.png";
import day1 from "@/images/LppaintServiceImgs/1 Day Express Painting.png";
import texture from "@/images/LppaintServiceImgs/Designer Walls.png";
import waterproofing from "@/images/LppaintServiceImgs/Waterproofing.png";
import ServiceCardProps from "../ServiceComponents/ServiceCardProps/ServiceCardProps";
import { IoWater } from "react-icons/io5";
import { TbTexture } from "react-icons/tb";
import {
  GiEmptyMetalBucketHandle,
  GiLargePaintBrush,
  GiSpray,
} from "react-icons/gi";
import "@/components/PaintLandingPage/LpPaintServices/LpPaintServices.css";
const Day1ExpressPaintingService = () => {
  return (
    <div className="lpPaintService-container">
      <div className="lpPaintService-heading">
        <h2>Trusted & Fast Home Painting Solutions</h2>
        <p>Experience Renovation That’s Quick, Neat, and Worry-Free</p>
      </div>
      <div className="lpPaintService-cardWrapper">
        <ServiceCardProps
          img={home}
          title="Home Painting"
          item={[
            "Transform your interiors with our expert painting services, delivering superior finish, lasting quality, and modern style tailored to your space.",
            "Our trained and certified painters bring precision, care, and craftsmanship to enhance the beauty and life of your interiors.",
          ]}
          icon={<GiEmptyMetalBucketHandle />}
          link="/home-painting-services-in-bangalore"
        />
        <ServiceCardProps
          img={apartment}
          title="Apartment Painting"
          item={[
            "Transform your interiors with our expert painting services, delivering superior finish, lasting quality, and modern style tailored to your space.",
            "Our trained and certified painters bring precision, care, and craftsmanship to enhance the beauty and life of your interiors.",
          ]}
          icon={<GiEmptyMetalBucketHandle />}
          link="/apartment-painting-services-in-bangalore"
        />
        <ServiceCardProps
          img={spray}
          title="Spray Painting"
          item={[
            "Spray painting delivers a smooth, even, and seamless finish, ensuring faster coverage and a premium look compared to traditional brush or roller methods.",
            "Ideal for large surfaces and modern interiors, spray painting reduces drying time and ensures uniform color consistency with minimal wastage.",
          ]}
          icon={<GiSpray />}
          link="/spray-painting-services-in-bangalore"
        />
        <ServiceCardProps
          img={texture}
          title="Texture & Designer Walls"
          item={[
            "Texture and designer walls add depth, character, and a premium aesthetic, transforming plain walls into stylish focal points for modern interiors.",
            "Customized patterns, finishes, and color combinations are expertly crafted to match your décor, enhancing elegance and long-lasting visual appeal.",
          ]}
          icon={<TbTexture />}
          link="/texture-and-designer-services-in-bangalore"
        />

        <ServiceCardProps
          img={waterproofing}
          title="Waterproofing"
          item={[
            "Waterproofing protects your home from leaks, dampness, and structural damage, ensuring long-term durability and a healthier living environment.",
            "Professional waterproofing solutions prevent costly repairs by creating a strong moisture barrier for terraces, walls, and bathrooms.",
          ]}
          icon={<IoWater />}
          link="/waterproofing-services-in-bangalore"
        />
        <ServiceCardProps
          img={home}
          title="Commercial Painting"
          item={[
            "Transform your commercial interiors with our professional painting solutions, delivering premium finishes, long-lasting durability, and a modern aesthetic designed for business spaces.",
            "Our trained and certified painters ensure precision, efficiency, and superior craftsmanship to elevate the appearance and functionality of your commercial environment.",
          ]}
          icon={<GiLargePaintBrush />}
          link="/commercial-painting-services-in-bangalore"
        />
      </div>
      <span id="why"></span>
    </div>
  );
};

export default Day1ExpressPaintingService;
