"use client";

import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import SanityHeroSection from "./SanityHeroSection";


// Types
export interface Shade {
    name: string;
    bg: string;
}
export interface HeroSection {
    title: string;
    description: string;
    bannerImg: SanityImageSource;
}
export interface ShadeCategory {
    key: string;
    displayName: string;
    color: string;
    shades: Shade[];
}

export interface PaintShadesData {
    hero?: HeroSection;
    title: string;
    categories: ShadeCategory[];
}

// Carousel responsive
const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 10 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
};

// Props
interface Props {
    data: PaintShadesData;
}
const builder = imageUrlBuilder(client);

const urlFor = (source: SanityImageSource) => {
    return builder.image(source).url();
};

const SanityColorShade = ({ data }: Props) => {
    const [activeTab, setActiveTab] = useState(data.categories[0].key);

    const activeCategory = data.categories.find((cat) => cat.key === activeTab);
  const hero = data.hero;

    return (
        <>
      {hero && (
        <SanityHeroSection
          bannerImg={hero.bannerImg ? urlFor(hero.bannerImg) : ""}
          title={hero.title ?? ""}
          description={hero.description ?? ""}
        />
      )}
            <div className="shadeEssentials-container">

                <h2>{data.title}</h2>

                {/* Color navbar */}
                <div className="shadeEssentials-navbar">
                    <Carousel responsive={responsive} infinite swipeable>
                        {data.categories.map((cat) => (
                            <div key={cat.key} className="shadeEssentials-inner">
                                <button
                                    className={`shade-btn ${activeTab === cat.key ? "routeActives" : ""
                                        }`}
                                    onClick={() => setActiveTab(cat.key)}
                                    style={{ backgroundColor: cat.color }}
                                />
                                <p>{cat.displayName}</p>
                            </div>
                        ))}
                    </Carousel>
                </div>

                <h2>Colour Shades You Might Like</h2>

                {/* Shades content */}
                <div className="shadeEssentials-content">
                    <ul className="shadeEssentials-wrapper">
                        {activeCategory?.shades.map((shade, index) => (
                            <div key={index} className="shadeEssentials-item">
                                <li
                                    className="shade-item"
                                    style={{ backgroundColor: shade.bg }}
                                    title={shade.name}
                                />
                                <p>{shade.name}</p>
                                <p>{shade.bg}</p>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SanityColorShade;
