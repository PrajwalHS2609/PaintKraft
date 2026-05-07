import Image from "next/image";
import React from "react";
import handover from "../../../images/HomeConstructionLp/Process/Hand-over.png";
import signoff from "../../../images/HomeConstructionLp/Process/Sign-off.png";
import consultation from "../../../images/HomeConstructionLp/Process/Consultation.png";
import design from "../../../images/HomeConstructionLp/Process/Design-Develop.png";
import construction from "../../../images/HomeConstructionLp/Process/Construction.png";
import "./HomeConstructionLpProcess.css"
const HomeConstructionLpProcess = () => {
  const process = [
    {
      img: consultation,
      text: "FREE CONSULTATION",
    },
    {
      img: signoff,
      text: "SIGN OFF",
    },
    {
      img: design,
      text: "DESIGN DEVELOPMENT",
    },
    {
      img: construction,
      text: "CONSTRUCTION",
    },
    {
      img: handover,
      text: "HANDOVER",
    },
  ];
  return (
    <div className="ourProcessContainer">
      <div className="ourProcessHeadContainer">
        <h2>
          OUR <span>PROCESS</span>
        </h2>
      </div>{" "}
      <div className="ourProcessMainContainer">
        {process.map((x, index) => (
          <div className="ourProcessCardContainer" key={index}>
            <div className="ourProcessImg">
              <Image src={x.img} alt="" />
            </div>
            <div className="ourProcessTxt">
              <h3>{x.text}</h3>
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default HomeConstructionLpProcess;
