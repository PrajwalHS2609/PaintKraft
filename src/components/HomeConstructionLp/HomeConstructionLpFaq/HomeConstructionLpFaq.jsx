"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import "./HomeConstructionLpFaq.css";
const HomeConstructionLpFaq = () => {
  return (
    <div className="HomeConstructionFaq-container">
      <h2>
        Frequently Asked <span>Questions</span>
      </h2>

      <div className="HomeConstructionFaq-wrapper">
        <div className="HomeConstructionFaq-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item
              className="HomeConstructionFaq-accItem"
              eventKey="0"
            >
              <Accordion.Header className="HomeConstructionFaq-accHeader">
                <h5>1. How much does home construction cost in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="HomeConstructionFaq-body">
                <p>
                  The cost of home construction in Bangalore depends on factors
                  such as plot size, design, materials, location, number of
                  floors, and construction specifications. Red Hills Infra
                  provides customized construction packages based on your budget
                  and requirements.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="HomeConstructionFaq-accItem"
              eventKey="1"
            >
              <Accordion.Header className="HomeConstructionFaq-accHeader">
                <h5>
                  2. How long does it take to complete a house construction
                  project?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="HomeConstructionFaq-body">
                <p>
                  The construction timeline usually ranges from 6 months to 14
                  months depending on the project size, approvals, weather
                  conditions, and design complexity.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="HomeConstructionFaq-accItem"
              eventKey="2"
            >
              <Accordion.Header className="HomeConstructionFaq-accHeader">
                <h5>
                  3. Does Red Hills Infra provide end-to-end home construction
                  services?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="HomeConstructionFaq-body">
                <p>
                  Yes, Red Hills Infra offers complete home construction
                  solutions including planning, design, approvals, structural
                  work, interior support, project management, and final
                  handover.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="HomeConstructionFaq-accItem"
              eventKey="3"
            >
              <Accordion.Header className="HomeConstructionFaq-accHeader">
                <h5>4. Can I customize my house design?</h5>
              </Accordion.Header>
              <Accordion.Body className="HomeConstructionFaq-body">
                <p>
                  Absolutely. We provide fully customized home designs based on
                  your lifestyle, plot dimensions, family requirements, and
                  budget preferences.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="HomeConstructionFaq-accItem"
              eventKey="4"
            >
              <Accordion.Header className="HomeConstructionFaq-accHeader">
                <h5>5. Do you help with BBMP and construction approvals?</h5>
              </Accordion.Header>
              <Accordion.Body className="HomeConstructionFaq-body">
                <p>
                  Yes, our team assists clients with required approvals, plan
                  sanctions, and documentation processes related to home
                  construction in Bangalore.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="HomeConstructionFaq-accItem"
              eventKey="5"
            >
              <Accordion.Header className="HomeConstructionFaq-accHeader">
                <h5>6. What types of homes do you construct?</h5>
              </Accordion.Header>
              <Accordion.Body className="HomeConstructionFaq-body">
                <p>
                  We construct independent houses, duplex homes, villas, modern
                  contemporary homes, luxury residences, and multi-floor
                  residential buildings.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="HomeConstructionFaq-accItem"
              eventKey="6"
            >
              <Accordion.Header className="HomeConstructionFaq-accHeader">
                <h5>7. Is there a warranty for construction work?</h5>
              </Accordion.Header>
              <Accordion.Body className="HomeConstructionFaq-body">
                <p>
                  Yes, Red Hills Infra provides structural warranty and quality
                  assurance for construction projects to ensure customer
                  confidence and long-term reliability.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="HomeConstructionFaq-accItem"
              eventKey="7"
            >
              <Accordion.Header className="HomeConstructionFaq-accHeader">
                <h5>8. Do you provide construction material transparency?</h5>
              </Accordion.Header>
              <Accordion.Body className="HomeConstructionFaq-body">
                <p>
                  Yes, we maintain complete transparency regarding construction
                  materials, brands, specifications, and project updates
                  throughout the construction process.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="HomeConstructionFaq-accItem"
              eventKey="8"
            >
              <Accordion.Header className="HomeConstructionFaq-accHeader">
                <h5>9. Can I monitor the project progress remotely?</h5>
              </Accordion.Header>
              <Accordion.Body className="HomeConstructionFaq-body">
                <p>
                  Yes, we provide regular construction updates, photos, videos,
                  and progress reports so clients can monitor their project from
                  anywhere.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="HomeConstructionFaq-accItem"
              eventKey="9"
            >
              <Accordion.Header className="HomeConstructionFaq-accHeader">
                <h5>
                  10. Why should I choose Red Hills Infra for home construction
                  in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="HomeConstructionFaq-body">
                <p>
                  Red Hills Infra focuses on quality construction, transparent
                  pricing, timely project completion, experienced professionals,
                  modern designs, and customer satisfaction, making us a trusted
                  choice for home construction in Bangalore.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default HomeConstructionLpFaq;
