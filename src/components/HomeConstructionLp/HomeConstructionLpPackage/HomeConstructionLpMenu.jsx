"use client";
import React, { useState } from "react";
import "./HomeConstructionLpPackage.css";
import HomeConstructionLpPackageList from "./HomeConstructionLpPackageList";

const HomeConstructionLpPackageMenu = () => {
  const [activePackage, setActivePackage] = useState(null);

  const headContent = [
    { head1: "Standard Package", head2: "Rs 1850/*- Sq Ft" },
    { head1: "Classic", head2: "Rs 1999/*- Sq Ft" },
    { head1: "Premium", head2: "Rs 2099/*- Sq Ft" },
    { head1: "Elite", head2: "Rs 2249/*- Sq Ft" },
    { head1: "Exclusive", head2: "Rs 2499/*- Sq Ft" },
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
