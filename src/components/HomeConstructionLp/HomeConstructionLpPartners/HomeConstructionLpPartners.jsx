"use client"
import React from "react";
import Marquee from "react-fast-marquee";
import tataSteel from "@/images/HomeConstructionLp/BrandWeUse/Tata Steel.png";
import jindal from "@/images/HomeConstructionLp/BrandWeUse/Jindal Steel.png";
import sail from "@/images/HomeConstructionLp/BrandWeUse/SAIL.png";
import kamadhenu from "@/images/HomeConstructionLp/BrandWeUse/kamadhenu.png";
import primeGold from "@/images/HomeConstructionLp/BrandWeUse/primeGold.png";
import dalmia from "@/images/HomeConstructionLp/BrandWeUse/dalmia.png";
import birla from "@/images/HomeConstructionLp/BrandWeUse/Birla Cement.png";
import acc from "@/images/HomeConstructionLp/BrandWeUse/ACC Cement.png";
import ultratec from "@/images/HomeConstructionLp/BrandWeUse/Ultratech Cement.png";
import johnson from "@/images/HomeConstructionLp/BrandWeUse/Johnson.png";
import somany from "@/images/HomeConstructionLp/BrandWeUse/Somany.png";
import dulux from "@/images/HomeConstructionLp/BrandWeUse/Dulux Paints.png";
import berger from "@/images/HomeConstructionLp/BrandWeUse/Berger Paints.png";
import asian from "@/images/HomeConstructionLp/BrandWeUse/Asian Paints.png";
import jaguar from "@/images/HomeConstructionLp/BrandWeUse/Jaquar.png";
import ashirvad from "@/images/HomeConstructionLp/BrandWeUse/Ashirvad Pipes.png";
import supreme from "@/images/HomeConstructionLp/BrandWeUse/Supreme Pipes.png";
import astral from "@/images/HomeConstructionLp/BrandWeUse/Astral Pipes.png";
import anchor from "@/images/HomeConstructionLp/BrandWeUse/Anchor.png";
import hindware from "@/images/HomeConstructionLp/BrandWeUse/Hindware.png";
import parryware from "@/images/HomeConstructionLp/BrandWeUse/Parryware.png";
import cera from "@/images/HomeConstructionLp/BrandWeUse/CERA.png";
import kohler from "@/images/HomeConstructionLp/BrandWeUse/Kohler.png";
import finolex from "@/images/HomeConstructionLp/BrandWeUse/Finolex.png";
import polycab from "@/images/HomeConstructionLp/BrandWeUse/Polycab.png";
import kei from "@/images/HomeConstructionLp/BrandWeUse/KEI.png";
import roma from "@/images/HomeConstructionLp/BrandWeUse/Roma.png";
import legrand from "@/images/HomeConstructionLp/BrandWeUse/Legrand.png";
import havells from "@/images/HomeConstructionLp/BrandWeUse/Havells.png";
import century from "@/images/HomeConstructionLp/BrandWeUse/Century Ply.png";
import godrej from "@/images/HomeConstructionLp/BrandWeUse/Godrej.png";
import hettich from "@/images/HomeConstructionLp/BrandWeUse/Hettich.png";
import ebco from "@/images/HomeConstructionLp/BrandWeUse/Ebco.png";
import saint from "@/images/HomeConstructionLp/BrandWeUse/Saint Gobain.png";
import plyneer from "@/images/HomeConstructionLp/BrandWeUse/Plyneer.png";
import neemply from "@/images/HomeConstructionLp/BrandWeUse/Neem Ply.png";
import Royale from "@/images/HomeConstructionLp/BrandWeUse/Royale Touche.png";
import green from "@/images/HomeConstructionLp/BrandWeUse/Greenlam.png";
import merino from "@/images/HomeConstructionLp/BrandWeUse/Merino.png";
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
