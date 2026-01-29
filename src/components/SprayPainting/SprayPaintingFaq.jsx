"use client";
import Image from "next/image";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "@/images/faqImg.png";

const SprayPaintingFaq = () => {
  return (
    <div className="paintFaq-container">
      <h2>Frequently Asked Questions</h2>

      <div className="paintFaq-wrapper">
        <div className="paintFaq-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="paintFaq-accItem" eventKey="0">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>1. What are Spray Painting Services in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Spray Painting Services in Bangalore use advanced spray
                  machines to apply paint evenly on walls and surfaces,
                  delivering a smooth, flawless, and professional finish faster
                  than traditional painting methods.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="1">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  {" "}
                  2. Is Home Spray Painting in Bangalore better than roller
                  painting?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, Home Spray Painting in Bangalore provides a more uniform
                  finish, faster completion, and minimal visible brush or roller
                  marks compared to traditional painting methods.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="2">
              <Accordion.Header className="paintFaq-accHeader">
                <h5> 3. What is the Spray Painting Price in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Spray Painting Price in Bangalore depends on the carpet area,
                  surface condition, paint type, number of coats, and scope of
                  work. Paintkraft offers transparent pricing with detailed
                  digital quotations.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="3">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  4. Do you provide House Painting Service Near Me using spray
                  technology?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, Paintkraft offers House Painting Service Near Me across
                  Bangalore using professional spray painting equipment for
                  apartments, villas, and independent houses.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="4">
              <Accordion.Header className="paintFaq-accHeader">
                <h5> 5. Is spray painting suitable for residential homes?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Absolutely. Spray painting is ideal for Residential painting
                  in Bangalore, especially for modern homes that require smooth
                  finishes and faster execution.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="5">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  {" "}
                  6. Will furniture and floors be protected during spray
                  painting?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, before starting Home Spray Painting in Bangalore, all
                  furniture, floors, and fixtures are properly masked and
                  covered to prevent overspray or damage.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="6">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>7. How long does spray painting take for a home?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Spray painting usually takes less time than traditional
                  methods. Most Residential painting in Bangalore projects using
                  spray technology are completed within 1–3 days, depending on
                  size.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="7">
              <Accordion.Header className="paintFaq-accHeader">
                <h5> 8. What type of paints are used for spray painting?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Paintkraft uses premium, low-VOC, and eco-friendly paints
                  suitable for spray application and safe for residential
                  interiors.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="8">
              <Accordion.Header className="paintFaq-accHeader">
                <h5> 9. Can spray painting be done in apartments?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, spray painting can be safely done in apartments by
                  following proper masking, ventilation, and society guidelines.
                  Paintkraft ensures compliance with all apartment regulations.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="8">
              <Accordion.Header className="paintFaq-accHeader">
                <h5> 10. Is post-painting cleanup included in the service?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, complete cleanup and site handover are included in all
                  Spray Painting Services in Bangalore provided by Paintkraft.
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

export default SprayPaintingFaq;
