"use client";
import Image from "next/image";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "@/images/faqImg.png";
const TextureDesignFaq = () => {
  return (
    <div className="paintFaq-container">
      <h2>Frequently Asked Questions</h2>

      <div className="paintFaq-wrapper">
        <div className="paintFaq-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="paintFaq-accItem" eventKey="0">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  1. What are Texture & Designer Walls Services in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Texture & Designer Walls Services in Bangalore involve
                  applying decorative wall textures and designer finishes to
                  create stylish, premium-looking interiors for homes and
                  apartments.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="1">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>2. Where can texture walls be applied in a home?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Texture walls are commonly applied in living rooms, bedrooms,
                  TV units, dining areas, foyers, and feature walls to create a
                  focal point and enhance aesthetics.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="2">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  3. What types of Texture Walls in Bangalore do you offer?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Paintkraft offers a wide range of Texture Walls in Bangalore,
                  including marble textures, concrete finishes, metallic
                  textures, stucco designs, abstract patterns, and modern
                  designer wall finishes.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="3">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  4. How much does Wall Texture Painting Price in Bangalore
                  cost?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Wall Texture Painting Price in Bangalore depends on wall size,
                  texture type, design complexity, and material quality.
                  Paintkraft provides transparent pricing with detailed digital
                  quotations.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="4">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  {" "}
                  5. Do you provide Texture Designer Walls Service Near Me
                  across Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, Paintkraft offers Texture Designer Walls Service Near Me
                  across all major areas of Bangalore for apartments, villas,
                  and independent houses.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="5">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>6. Is texture painting suitable for apartments?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, texture painting is ideal for apartments as it adds style
                  and depth without taking up space. Paintkraft ensures clean
                  execution and compliance with apartment society rules.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="6">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>7. How long does texture wall painting take?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Most texture wall projects are completed within 1 to 3 days,
                  depending on wall size, design complexity, and drying time.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="7">
              <Accordion.Header className="paintFaq-accHeader">
                <h5> 8. Are textured walls difficult to maintain?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  No, modern textured walls are durable and easy to maintain.
                  Paintkraft uses high-quality materials that resist dust and
                  minor wear.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="8">
              <Accordion.Header className="paintFaq-accHeader">
                <h5> 9. Will texture walls hide wall imperfections?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, Texture Walls in Bangalore help conceal minor wall
                  imperfections such as uneven surfaces and hairline cracks,
                  making them ideal for renovation projects.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="8">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>10. Is post-service cleanup included?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, complete site cleanup and final handover are included in
                  all Texture & Designer Walls Services in Bangalore provided by
                  Paintkraft.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="paintFaq-content">
          <Image src={faqImg} alt="faqImg" />
        </div>
      </div>
    </div>
  );
};

export default TextureDesignFaq;
