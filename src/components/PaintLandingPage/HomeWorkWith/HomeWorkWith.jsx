import Image from "next/image";
import React from "react";
import adarsh from "@/images/WorkWith/adarsh.png";
import build4uInfra from "@/images/WorkWith/Build4uInfra.png";
import fortune from "@/images/WorkWith/fortune.png";
import natura from "@/images/WorkWith/natura.png";
import redHill from "@/images/WorkWith/redHill.png";
import "./HomeWorkWith.css"
const HomeWorkWith = () => {
  return (
    <div className="homeWorkWith-container">
      <div className="homeWorkWith-content">
        <h2>Builders and Developers We Partner With</h2>
      </div>
      <div className="homeWorkWith-content">
        <div className="homeWorkWith-item">
          <Image src={adarsh} alt="adarsh" />
        </div>
        <div className="homeWorkWith-item">
          <Image src={build4uInfra} alt="build4uInfra" />
        </div>
        <div className="homeWorkWith-item">
          <Image src={fortune} alt="fortune" />
        </div>
        <div className="homeWorkWith-item">
          <Image src={natura} alt="natura" />
        </div>
        <div className="homeWorkWith-item">
          <Image src={redHill} alt="redHill" />
        </div>
      </div>
      <span id="services"></span>
    </div>
  );
};

export default HomeWorkWith;
