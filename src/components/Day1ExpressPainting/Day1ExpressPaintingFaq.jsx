"use client";
import Image from "next/image";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "@/images/faqImg.png";
const Day1ExpressPaintingFaq = () => {
  return (
    <div className="paintFaq-container">
      <h2>Frequently Asked Questions</h2>

      <div className="paintFaq-wrapper">
        <div className="paintFaq-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="paintFaq-accItem" eventKey="0">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>1. What is 1 Day Express Painting Service in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  1 Day Express Painting Service in Bangalore is a fast-track
                  painting solution where professional home painting is
                  completed within 24 hours using advanced tools, skilled
                  painters, and quick-drying paints.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="1">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  2. Is 1 Day Express Painting suitable for homes and
                  apartments?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, this service is ideal for homes and apartments that
                  require quick painting with minimal disruption. It is commonly
                  used for occupied homes, rental properties, and resale
                  apartments.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="2">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  3. What type of Home Painting in Bangalore can be done in one
                  day?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Typically, selective rooms, interior walls, apartments, or
                  partial home painting can be completed in one day, depending
                  on surface condition and scope of work.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="3">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  4. How does Paintkraft complete Residential painting in
                  Bangalore within one day?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Paintkraft uses proper pre-planning, trained manpower, machine
                  painting tools, and fast-drying premium paints to deliver
                  Residential painting in Bangalore efficiently within 24 hours.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="4">
              <Accordion.Header className="paintFaq-accHeader">
                <h5> </h5> 5. What is the Apartment Painting Price in Bangalore
                for express service?
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Apartment Painting Price in Bangalore for express services
                  depends on carpet area, paint brand, number of rooms, and
                  paint type. Paintkraft provides transparent digital quotations
                  with no hidden charges.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="5">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  6. Do you provide House Painting Service Near Me with express
                  execution?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, Paintkraft offers House Painting Service Near Me across
                  Bangalore with 1 Day Express Painting options for apartments
                  and homes.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="6">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  7. Will furniture and flooring be protected during express
                  painting?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Absolutely. All furniture, flooring, and fixtures are properly
                  covered and protected before starting the express painting
                  process.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="7">
              <Accordion.Header className="paintFaq-accHeader">
                <h5> 8. Are fast-drying paints safe for families?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, Paintkraft uses low-VOC and eco-friendly fast-drying
                  paints that are safe for families, children, and pets.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="8">
              <Accordion.Header className="paintFaq-accHeader">
                <h5> 9. Can I stay in my home during the painting process?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  In most cases, yes. The express painting process is planned to
                  minimize disruption, making it suitable for occupied homes.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="8">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  10. Is post-painting cleanup included in 1 Day Express
                  Painting Service?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, complete cleanup and site handover are included on the
                  same day as part of Paintkraft’s express service.
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

export default Day1ExpressPaintingFaq;
