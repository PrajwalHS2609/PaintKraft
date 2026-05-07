import React from "react";
import HumanCentric from "./../../../images/HomeConstructionLp/WhyChoose/Human-centric.png"
import NoHidden from "./../../../images/HomeConstructionLp/WhyChoose/No-hidden.png"
import Sqft from "./../../../images/HomeConstructionLp/WhyChoose/Sqft.png"
import Years from "./../../../images/HomeConstructionLp/WhyChoose/Years.png"
import Timely from "./../../../images/HomeConstructionLp/WhyChoose/Timely.png"
import NoSub from "./../../../images/HomeConstructionLp/WhyChoose/no-sub.png"
import Solution from "./../../../images/HomeConstructionLp/WhyChoose/Sol.png"
import Quality from "./../../../images/HomeConstructionLp/WhyChoose/Quality.png"
import "./HomeConstructionLpWhyChoose.css"
import Image from "next/image";
const HomeConstructionLpWhyChoose = () => {
  const why = [
    { img:HumanCentric, text:"Human-centric design" },
    { img:Solution, text:"End-to-end solution" },
    { img:Timely, text:"Timely Delivery" },
    { img:Quality, text:"Superior Quality check" },
    { img:NoHidden, text:"No hidden cost" },
    { img:Sqft, text:"72,000+ sq ft area constructed & delivered" },
    { img:Years, text:"10 years warranty* , 1-year service warranty" },
    { img:NoSub, text:"No sub-contracting" },
  ];
  return (
    <div className="homeWhyContainer">
      <div className="homeWhyContent">
        <div className="homeWhyHeadContainer">
          <h2>
            WHY CHOOSE <span>Paintkraft</span> ?
          </h2>
        </div>{" "}
        <div className="homeWhyMainContainer">
          {why.map((x, index) => (
            <div className="homeWhyCardContainer" key={index}>
              <div className="homeWhyCardImgContainer">
                <Image src={x.img} alt={x.text} />
              </div>
              <p>{x.text}</p>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default HomeConstructionLpWhyChoose;
