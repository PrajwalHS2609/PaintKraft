"use client";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const shadesData = {
  red: {
    color: "red",
    shades: [
      { name: "Crimson Red", bg: "#DC143C" },
      { name: "Rose Red", bg: "#FF007F" },
      { name: "Brick Red", bg: "#8B0000" },
      { name: "Cherry Red", bg: "#B22222" },
    ],
  },
  blue: {
    color: "blue",
    shades: [
      { name: "Sky Blue", bg: "#87CEEB" },
      { name: "Royal Blue", bg: "#4169E1" },
      { name: "Navy Blue", bg: "#000080" },
    ],
  },
  yellow: {
    color: "yellow",
    shades: [
      { name: "Sunflower Yellow", bg: "#FFD700" },
      { name: "Mustard Yellow", bg: "#FFDB58" },
    ],
  },
  green: {
    color: "green",
    shades: [
      { name: "Mint Green", bg: "#98FF98" },
      { name: "Olive Green", bg: "#808000" },
      { name: "Forest Green", bg: "#228B22" },
    ],
  },
  teal: {
    color: "teal",
    shades: [
      { name: "Light Teal", bg: "#cfecec" },
      { name: "Soft Teal", bg: "#afeeee" },
      { name: "Dark Teal", bg: "#008080" },
    ],
  },
  orange: {
    color: "orange",
    shades: [
      { name: "Deep Orange", bg: "#f28500" },
      { name: "Bright Orange", bg: "#ff7900" },
      { name: "Pumpkin", bg: "#ff7518" },
    ],
  },
  violet: {
    color: "violet",
    shades: [
      { name: "Lavender", bg: "#e0b0ff" },
      { name: "Plum", bg: "#dda0dd" },
      { name: "Orchid", bg: "#da70d6" },
    ],
  },
  brown: {
    color: "brown",
    shades: [
      { name: "Light Brown", bg: "#D2B48C" },
      { name: "Sandy Brown", bg: "#C4A484" },
      { name: "Chocolate Brown", bg: "#7B3F00" },
    ],
  },
  grey: {
    color: "grey",
    shades: [
      { name: "Light Grey", bg: "#D3D3D3" },
      { name: "Silver Grey", bg: "#C0C0C0" },
      { name: "Medium Grey", bg: "#808080" },
      { name: "Light Grey", bg: "#D3D3D3" },
      { name: "Silver Grey", bg: "#C0C0C0" },
      { name: "Medium Grey", bg: "#808080" },
      { name: "Light Grey", bg: "#D3D3D3" },
      { name: "Silver Grey", bg: "#C0C0C0" },
      { name: "Medium Grey", bg: "#808080" },
      { name: "Light Grey", bg: "#D3D3D3" },
      { name: "Silver Grey", bg: "#C0C0C0" },
      { name: "Medium Grey", bg: "#808080" },
      { name: "Light Grey", bg: "#D3D3D3" },
      { name: "Silver Grey", bg: "#C0C0C0" },
      { name: "Medium Grey", bg: "#808080" },
      { name: "Light Grey", bg: "#D3D3D3" },
      { name: "Silver Grey", bg: "#C0C0C0" },
      { name: "Medium Grey", bg: "#808080" },
    ],
  },
  purple: {
    color: "purple",
    shades: [
      { name: "Lavender", bg: "#E6E6FA" },
      { name: "Amethyst", bg: "#9966CC" },
      { name: "Royal Purple", bg: "#6A0DAD" },
    ],
  },
};

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 10 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
};

const AsianPaintShadesEssentials = () => {
  const [activeTab, setActiveTab] = useState("red");

  return (
    <div className="shadeEssentials-container">
      <h2>Discover Stunning Shades with the Asian Paints Colour Catalogue</h2>
      {/* ========= COLOR NAVBAR ========= */}
      <div className="shadeEssentials-navbar">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={false}
          ssr={true} // Server-side rendering
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
        >
          {Object.entries(shadesData).map(([key, value]) => (
            <div key={key} className="shadeEssentials-inner">
              <button
                className={`shade-btn ${
                  activeTab === key ? "routeActives" : ""
                }`}
                onClick={() => setActiveTab(key)}
                style={{ backgroundColor: value.color }}
              />
              <p>{key}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <h2>Colour Shades You Might Like</h2>

      {/* ========= SHADES CONTENT ========= */}
      <div className="shadeEssentials-content">
        <ul className="shadeEssentials-wrapper">
          {shadesData[activeTab].shades.map((shade, index) => (
            <div key={index} className="shadeEssentials-item">
              <li
                className="shade-item"
                style={{ backgroundColor: shade.bg }}
                title={shade.name}
              ></li>
              <p>{shade.name}</p>
              <p>{shade.bg}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AsianPaintShadesEssentials;
