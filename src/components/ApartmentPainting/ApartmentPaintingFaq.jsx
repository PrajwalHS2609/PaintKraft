"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "@/images/faqImg.png";
import Image from "next/image";

const ApartmentPaintingFaq = () => {
  return (
    <div className="paintFaq-container">
      <h2>Frequently Asked Questions</h2>

      <div className="paintFaq-wrapper">
        <div className="paintFaq-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="paintFaq-accItem" eventKey="0">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  1. What does Apartment Painting Services in Bangalore include?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Apartment Painting Services in Bangalore include wall
                  inspection, surface preparation, crack filling, primer
                  application, interior painting, optional texture finishes,
                  final cleaning, and site handover.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="1">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  {" "}
                  2. How do I book Apartment Painting in Bangalore with
                  Paintkraft?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  You can book Apartment Painting in Bangalore by contacting
                  Paintkraft online or via phone. Our executive will schedule a
                  site visit and provide a detailed digital quotation.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="2">
              <Accordion.Header className="paintFaq-accHeader">
                <h5> 3. What is the Apartment Painting Price in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Apartment Painting Price in Bangalore depends on factors such
                  as carpet area, paint brand, wall condition, number of coats,
                  and finish type. Paintkraft offers transparent pricing with no
                  hidden costs.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="3">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  4. Do you provide Flats Painting Service Near Me across
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, Paintkraft provides Flats Painting Service Near Me across
                  all major locations in Bangalore, covering apartments, gated
                  communities, and high-rise flats.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="4">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  {" "}
                  5. How long does Apartment Painting in Bangalore usually take?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Most Apartment Painting in Bangalore projects are completed
                  within 2 to 5 days, depending on apartment size and scope of
                  work.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="5">
              <Accordion.Header className="paintFaq-accHeader">
                <h5> 6. Are furniture and floors protected during painting?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, before starting Residential painting in Bangalore,
                  Paintkraft ensures complete protection of furniture, flooring,
                  and fixtures to prevent damage.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="6">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>7. What type of paints are used for apartment painting?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Paintkraft uses premium, eco-friendly, and low-VOC paints
                  suitable for Residential painting in Bangalore, ensuring
                  safety and durability.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="7">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  8. Can I choose custom colors and finishes for my apartment?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Absolutely. Our team assists with shade selection, texture
                  options, and finish recommendations based on lighting and
                  interior design.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="8">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>9. Do you follow apartment society rules and timings?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, Paintkraft coordinates painting work according to
                  apartment association guidelines, approved timings, and noise
                  regulations.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="8">
              <Accordion.Header className="paintFaq-accHeader">
                <h5> 10. Is post-painting cleanup included in the service?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, complete site cleanup and final handover are included in
                  all Apartment Painting Services in Bangalore provided by
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

export default ApartmentPaintingFaq;
