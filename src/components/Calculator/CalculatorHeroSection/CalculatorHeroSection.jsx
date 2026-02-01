import Image from "next/image";
import Link from "next/link";
import React from "react";
import Calculator from "../Calculator";
import {
  MdCurrencyRupee,
  MdOutlineCleaningServices,
  MdOutlineShield,
} from "react-icons/md";
import mobileBannerImg from "@/images/lpMobileBannerImg.jpg";
import bannerImg from "@/images/calBanner.png";

import { LuBadgeCheck, LuPaintbrush } from "react-icons/lu";
const CalculatorHeroSection = () => {
  const content = [
    {
      id: 1,
      icon: <LuBadgeCheck />,
      text: "Quality of Materials Used",
    },
    {
      id: 2,
      icon: <MdOutlineShield />,
      text: "Surface Preparation & Protection",
    },
    {
      id: 3,
      icon: <LuPaintbrush />,
      text: "Skilled & Professional Painters",
    },
    { id: 4, icon: <MdCurrencyRupee />, text: "Clear Pricing & Timeline" },
    {
      id: 5,
      icon: <MdOutlineCleaningServices />,
      text: "Clean Finish & Post-Service Cleanup",
    },
  ];
  return (
    <div className="lpPaintHeader-container">
      <div className="lpPaintHeader-content">
        <Image
          src={bannerImg}
          alt="Paintkraft Banner"
          className="lpPaintHeader-desktopImg"
          priority
        />

        <Image
          src={mobileBannerImg}
          alt="Paintkraft Mobile Banner"
          className="lpPaintHeader-mobileImg"
          priority
        />

        <div className="lpPaintHeader-cover">
          <div className="lpPaintHeader-heading">
            <span className="lpPaintHeader-desktop">
              <h2>Painting Quotation Calculator </h2>
              <p>
                Fill in your details and get a personalised quotation for
                Beautiful Homes Painting Services by Asian Paints.
              </p>
            </span>
            <span className="lpPaintHeader-mobile">
              <h2>Painting Quotation Calculator</h2>
              <p>
                {" "}
                Fill in your details and get a personalised quotation for
                Beautiful Homes Painting Services by Asian Paints.
              </p>
            </span>
            <div className="lpPaintHeader-btn">
              <Link href="#services">
                <button>Explore Now</button>
              </Link>
              <a href="tel:9071274446">
                <button>Contact Us</button>
              </a>
            </div>
          </div>
            <Calculator />
        </div>
      </div>
      <div className="lpPaintHeader-wrapper">
        <div className="lpPaintHeader-itemContent">
          {content.map((x) => (
            <div className="lpPaintHeader-item" key={x.id}>
              <span className="lpPaintHeader-icon">{x.icon}</span>
              <p>{x.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatorHeroSection;
