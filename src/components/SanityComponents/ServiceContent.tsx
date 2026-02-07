"use client"

import { PortableText, PortableTextBlock } from "next-sanity";
import React from "react";
import { portableTextComponents } from "../PortableTextComponents";
import SanityHeroSection from "./SanityHeroSection";

export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type CustomTable = {
  title?: string;
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
  slug: string | { current: string };
  body1?: PortableTextBlock[];
  body2?: PortableTextBlock[];
  mainImage?: { asset?: { url?: string } };
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
  const imageUrl = content?.mainImage?.asset?.url;

  return (
    <div className="main-container service-wrapper1">
      {imageUrl && <SanityHeroSection headTitle={content.title} bannerImg={imageUrl} />}

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
          {content.body2 && (
            <div className="slugContent-wrapper">
              <div className="slugContent-container">
                <PortableText
                  value={content.body2}
                  components={portableTextComponents}
                />

                {content.customTable && (
                  <div className="custom-table">
                    {content.customTable.title && (
                      <h3>{content.customTable.title}</h3>
                    )}
                    <table>
                      <thead>
                        <tr>
                          {content.customTable.headers?.map((header, idx) => (
                            <th key={idx}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {content.customTable.rows?.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {row.cells.map((cell, cellIndex) => (
                              <td key={cellIndex}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* {Array.isArray(content?.faq) && content.faq.length > 0 && (
              <FaqComponent faqs={content.faq} />
            )} */}
            </div>
          )}
        </div>
        <div className="componentDivider-content">
          <div className="componentDivider-item">
            <div className="componentDivider-formContainer">
              <div className="componentDivider-formContent">
                <h2>Get in Touch</h2>
                <form className="componentDivider-form" >
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                  />

                  <select name="course" id="" required>
                    <option value="">Select Course</option>
                    <option value="SEO">
                      SEO
                    </option>
                    <option value="Website">Website</option>
                    <option value="Google Ads">Google Ads</option>
                    <option value="Social Media Marketing">
                      Social Media Marketing
                    </option>
                    <option value="Content Writing">
                      Content Writing
                    </option>
                    <option value="Payment Gateway">
                      Payment Gateway
                    </option>
                    <option value="Email Marketing">
                      Email Marketing
                    </option>
                    <option value="Sms & WhatsApp Marketing">
                      Sms & WhatsApp Marketing
                    </option>
                  </select>

                  <textarea
                    name="message"
                    placeholder="Your Message"
                  ></textarea>

                  <button type="submit">Submit</button>
                </form>
              </div>

            </div>{" "}



          </div>
        </div>
      </div>
    </div>
  );
}
