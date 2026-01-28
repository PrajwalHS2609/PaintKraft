import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCardProps = ({ img, title, item = [], icon,link }) => {
  return (
    <>
      <Link href={link}>
        <div className="lpPaintService-card">
          <div className="lpPaintService-cardImg">
            <Image src={img} alt={title} />
          </div>

          <div className="lpPaintService-cardContent">
            <div className="lpPaintService-cardTitle">
              <h3>{title}</h3>
            </div>

            <div className="lpPaintService-cardPara">
              <ul>
                {item.map((listItem, index) => (
                  <li key={index}>{listItem}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lpPaintService-cardIcon">
            <span>{icon}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ServiceCardProps;
