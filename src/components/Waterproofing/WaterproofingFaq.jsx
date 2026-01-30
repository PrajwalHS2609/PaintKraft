"use client";
import Image from "next/image";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "@/images/faqImg.png";
const WaterproofingFaq = () => {
  return (
    <div className="paintFaq-container">
      <h2>Frequently Asked Questions</h2>

      <div className="paintFaq-wrapper">
        <div className="paintFaq-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="paintFaq-accItem" eventKey="0">
              <Accordion.Header className="paintFaq-accHeader">
                <h5> 1. What is Waterproofing Service in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Waterproofing Service in Bangalore involves applying
                  protective treatments to prevent water leakage, seepage,
                  dampness, and moisture damage in residential properties.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="1">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>2. Why is House Waterproofing in Bangalore important?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  House Waterproofing in Bangalore is essential due to heavy
                  monsoons and high humidity, which can cause wall dampness,
                  paint peeling, mold growth, and structural damage if left
                  untreated.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="2">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>3. Which areas of a home require waterproofing?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Common areas include terraces, bathrooms, balconies, kitchens,
                  basements, external walls, and roofs, as these zones are most
                  exposed to water and moisture.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="3">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>4. What is the Home Waterproofing Price in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Home Waterproofing Price in Bangalore depends on the affected
                  area, surface condition, waterproofing method, and materials
                  used. Paintkraft provides transparent pricing with digital
                  quotations.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="4">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  {" "}
                  5. Do you provide Waterproofing Service Near Me across
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, Paintkraft offers Waterproofing Service Near Me across
                  all major areas of Bangalore for apartments, villas, and
                  independent houses.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="5">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  6. How long does Residential Waterproofing in Bangalore last?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  When done professionally, Residential Waterproofing in
                  Bangalore can last several years depending on the treatment
                  type and maintenance.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="6">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>7. Can waterproofing be done on old buildings?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, Paintkraft provides House Waterproofing in Bangalore
                  solutions suitable for both new and old buildings, including
                  crack treatment and restoration waterproofing.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="7">
              <Accordion.Header className="paintFaq-accHeader">
                <h5> 8. Is waterproofing required before painting?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, waterproofing before painting helps prevent paint
                  peeling, bubbling, and damp patches, ensuring better
                  durability of paint finishes.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="8">
              <Accordion.Header className="paintFaq-accHeader">
                <h5> 9. How long does waterproofing work take?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Most waterproofing projects are completed within 2 to 5 days,
                  depending on the area size, severity of damage, and treatment
                  type.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="8">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>10. Is post-service inspection and cleanup included?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, Paintkraft includes final inspection, cleanup, and
                  guidance after completing all Residential Waterproofing in
                  Bangalore services.
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

export default WaterproofingFaq;
