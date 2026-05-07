"use client"
import React, { useState } from "react";
import "./HomeConstructionLpPackage.css";
import HomeConstructionLpPackageList from "./HomeConstructionLpPackageList";

const HomeConstructionLpPackageMenu = () => {
  const [activePackage, setActivePackage] = useState(null);

  const headContent = [
    { head1: "Budget Home", head2: "1,2 & 3 BHK" },
    { head1: "Luxury Home", head2: "2,3,4 & 5 BHK" },
    { head1: "Villa & Bungalows", head2: "2,3,4 & 5 BHK" },
  ];

  const handleToggle = (index) => {
    setActivePackage(activePackage === index ? null : index);
  };

  return (
    <>
      <div className="lpPackageMenuCard-Container">
        {headContent.map((x, index) => (
          <div
            key={index}
            className="lpPackageMenuCard-content"
            onClick={() => handleToggle(index)}
          >
            <h3 className="lpPackageMenuCard-head2">{x.head1}</h3>
            <h2 className="lpPackageMenuCard-head1">{x.head2}</h2>
          </div>
        ))}
      </div>

      <HomeConstructionLpPackageList activePackage={activePackage} />
    </>
  );
};

export default HomeConstructionLpPackageMenu;