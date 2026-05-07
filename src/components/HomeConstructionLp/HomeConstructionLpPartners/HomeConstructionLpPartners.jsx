"use client"
import React from "react";
import Marquee from "react-fast-marquee";
import tataSteel from "./../../../Images/HomeConstructionLp/BrandWeUse/Tata Steel.png";
import jindal from "./../../../Images/HomeConstructionLp/BrandWeUse/Jindal Steel.png";
import sail from "./../../../Images/HomeConstructionLp/BrandWeUse/SAIL.png";
import kamadhenu from "./../../../Images/HomeConstructionLp/BrandWeUse/kamadhenu.png";
import primeGold from "./../../../Images/HomeConstructionLp/BrandWeUse/primeGold.png";
import dalmia from "./../../../Images/HomeConstructionLp/BrandWeUse/dalmia.png";
import birla from "./../../../Images/HomeConstructionLp/BrandWeUse/Birla Cement.png";
import acc from "./../../../Images/HomeConstructionLp/BrandWeUse/ACC Cement.png";
import ultratec from "./../../../Images/HomeConstructionLp/BrandWeUse/Ultratech Cement.png";
import johnson from "./../../../Images/HomeConstructionLp/BrandWeUse/Johnson.png";
import somany from "./../../../Images/HomeConstructionLp/BrandWeUse/Somany.png";
import dulux from "./../../../Images/HomeConstructionLp/BrandWeUse/Dulux Paints.png";
import berger from "./../../../Images/HomeConstructionLp/BrandWeUse/Berger Paints.png";
import asian from "./../../../Images/HomeConstructionLp/BrandWeUse/Asian Paints.png";
import jaguar from "./../../../Images/HomeConstructionLp/BrandWeUse/Jaquar.png";
import ashirvad from "./../../../Images/HomeConstructionLp/BrandWeUse/Ashirvad Pipes.png";
import supreme from "./../../../Images/HomeConstructionLp/BrandWeUse/Supreme Pipes.png";
import astral from "./../../../Images/HomeConstructionLp/BrandWeUse/Astral Pipes.png";
import anchor from "./../../../Images/HomeConstructionLp/BrandWeUse/Anchor.png";
import hindware from "./../../../Images/HomeConstructionLp/BrandWeUse/Hindware.png";
import parryware from "./../../../Images/HomeConstructionLp/BrandWeUse/Parryware.png";
import cera from "./../../../Images/HomeConstructionLp/BrandWeUse/CERA.png";
import kohler from "./../../../Images/HomeConstructionLp/BrandWeUse/Kohler.png";
import finolex from "./../../../Images/HomeConstructionLp/BrandWeUse/Finolex.png";
import polycab from "./../../../Images/HomeConstructionLp/BrandWeUse/Polycab.png";
import kei from "./../../../Images/HomeConstructionLp/BrandWeUse/KEI.png";
import roma from "./../../../Images/HomeConstructionLp/BrandWeUse/Roma.png";
import legrand from "./../../../Images/HomeConstructionLp/BrandWeUse/Legrand.png";
import havells from "./../../../Images/HomeConstructionLp/BrandWeUse/Havells.png";
import century from "./../../../Images/HomeConstructionLp/BrandWeUse/Century Ply.png";
import godrej from "./../../../Images/HomeConstructionLp/BrandWeUse/Godrej.png";
import hettich from "./../../../Images/HomeConstructionLp/BrandWeUse/Hettich.png";
import ebco from "./../../../Images/HomeConstructionLp/BrandWeUse/Ebco.png";
import saint from "./../../../Images/HomeConstructionLp/BrandWeUse/Saint Gobain.png";
import plyneer from "./../../../Images/HomeConstructionLp/BrandWeUse/Plyneer.png";
import neemply from "./../../../Images/HomeConstructionLp/BrandWeUse/Neem Ply.png";
import Royale from "./../../../Images/HomeConstructionLp/BrandWeUse/Royale Touche.png";
import green from "./../../../Images/HomeConstructionLp/BrandWeUse/Greenlam.png";
import merino from "./../../../Images/HomeConstructionLp/BrandWeUse/Merino.png";
import Image from "next/image";
import "./HomeConstructionLpPartners.css"
const HomeConstructionLpPartners = () => {
  const brandLogos = [
    tataSteel,
    jindal,
    sail,
    primeGold,
    kamadhenu,
    dalmia,
    birla,
    acc,
    ultratec,
    johnson,
    somany,
    dulux,
    berger,
    asian,
    jaguar,
    ashirvad,
    supreme,
    astral,
    anchor,
    hindware,
    parryware,
    cera,
    kohler,
    finolex,
    polycab,
    kei,
    roma,
    legrand,
    havells,
    century,
    godrej,
    hettich,
    ebco,
    saint,
    plyneer,
    neemply,
    Royale,
    green,
    merino,
  ];
  return (
    <div className="partnersContainer">
      <div className="partnerHeadContainer">
        <h2>
          <span> BRANDS</span> WE USE
        </h2>
      </div>
      <div className="partnerMainContainer">
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          {brandLogos.map((logo, index) => (
            <div className="brandIcons" key={index}>
              <Image src={logo} alt={`brand-${index}`} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HomeConstructionLpPartners;
