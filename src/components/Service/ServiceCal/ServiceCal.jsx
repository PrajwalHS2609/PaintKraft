import Link from "next/link";
import React from "react";
import "./ServiceCal.css"
import PaintingQuotationCalculatorBanner from "./../../../images/PaintingQuotationCalculatorBanner.png"
import Image from "next/image";
const ServiceCal = () => {
  return (
    <div className="serviceCal-container">
      <Link href="/calculator">
        <Image
          src={PaintingQuotationCalculatorBanner}
          alt="Painting Quotation Calculator Banner"
        />
      </Link>
    </div>
  );
};

export default ServiceCal;
