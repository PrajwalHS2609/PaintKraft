"use client"

import { PortableText, PortableTextBlock } from "next-sanity";
import React from "react";
import { portableTextComponents } from "../PortableTextComponents";
import SanityHeroSection from "./SanityHeroSection";
import Swal from "sweetalert2";
import ServiceCal from "../Service/ServiceCal/ServiceCal";
import LpPaintTestimonial from "../PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial";
import LpPaintWhy from "../PaintLandingPage/LpPaintWhy/LpPaintWhy";
import SanitySeoKeywords from "./SanitySeoKeyword";
import LpPaintPartner from "../PaintLandingPage/LpPaintPartner/LpPaintPartner";
import LpPaintServices from "../PaintLandingPage/LpPaintServices/LpPaintServices";
import HomeWorkWith from "../PaintLandingPage/HomeWorkWith/HomeWorkWith";

export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type CustomTable = {
  title?: string;
  description?: string;

  headers?: string[];
  rows?: { cells: string[] }[];
};

export type CarouselImage = {
  asset?: { url?: string };
  alt?: string;
  caption?: string;
  link?: string; // ✅ Added link field
};

export type ServiceContentType = {
  _id: string;
  title: string;
  description: string;
  slug: string | { current: string };
  body1?: PortableTextBlock[];
  body2?: PortableTextBlock[];
  mainImage?: { asset?: { url?: string } };
  mobImage?: { asset?: { url?: string } };
  seoKeywords?: {
    keywords?: string[];
  };
  youtubeVideoUrl?: string;
  faq?: FaqItem[];
  customTable?: CustomTable;
  carouselBlock?: {
    title?: string;
    images?: CarouselImage[];
  };

};

export default function ServiceContent({
  content,
}: {
  content: ServiceContentType;
}) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // ✅ Add your Web3Forms access key
    formData.append("access_key", "2e63432e-e411-4617-8563-fa5f8bb00932");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mail Sent successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
  };
  const imageUrl = content?.mainImage?.asset?.url;
  const mobImageUrl = content?.mobImage?.asset?.url;


  return (
    <div className="main-container service-wrapper1">
      {imageUrl && <SanityHeroSection title={content.title} bannerImg={imageUrl} mobBanner={mobImageUrl} description={content.description} />}

      <div className="componentDivider-container">
        <div className="componentDivider-content">

          <h1 className="service-heading">{content.title}</h1>

          {content.body1 && (
            <div className="slugContent-wrapper">
              <div className="head-container">
                <PortableText
                  value={content.body1}
                  components={portableTextComponents}
                />
              </div>
            </div>
          )}
        </div>
        <LpPaintPartner />
        <LpPaintServices />
        <HomeWorkWith />
        <ServiceCal />
        <LpPaintWhy />
        <LpPaintTestimonial />
        {content.seoKeywords?.keywords && (
          <SanitySeoKeywords keywords={content.seoKeywords.keywords} />
        )}
        <div className="componentDivider-content">
          {content.body2 && (
            <div className="slugContent-wrapper">
              <div className="slugContent-container">
                <PortableText
                  value={content.body2}
                  components={portableTextComponents}
                />


              </div>

              {/* {Array.isArray(content?.faq) && content.faq.length > 0 && (
              <FaqComponent faqs={content.faq} />
            )} */}
            </div>
          )}
        </div>
      </div>

    </div>


  );
}
