"use client"
import Image from "next/image";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "@/images/faqImg.png";

const HomePaintingFaq = () => {
  return (
    <div className="paintFaq-container">
      <h2>Frequently Asked Questions</h2>

      <div className="paintFaq-wrapper">
        <div className="paintFaq-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="paintFaq-accItem" eventKey="0">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  1. What does Home Painting Services in Bangalore include?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Home Painting Services in Bangalore include wall inspection,
                  surface preparation, crack filling, primer application,
                  interior and exterior painting, texture finishes, final
                  cleanup, and site handover. Paintkraft ensures a complete
                  end-to-end painting solution for homes.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="1">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  {" "}
                  2. How do I book Home Painting in Bangalore with Paintkraft?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  You can book Home Painting in Bangalore by contacting
                  Paintkraft online or by phone. Our executive schedules a site
                  visit, evaluates your requirements, and provides a transparent
                  digital quotation.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="2">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  {" "}
                  3. What is the average Home Painting Price in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  The Home Painting Price in Bangalore depends on factors like
                  carpet area, paint brand, number of coats, wall condition, and
                  type of finish. Paintkraft offers competitive and transparent
                  pricing with no hidden charges.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="3">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  4. Do you provide House Painting Service Near Me across
                  Bangalore? consultation?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, Paintkraft offers House Painting Service Near Me across
                  all major areas of Bangalore, including apartments, villas,
                  and independent houses.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="4">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  {" "}
                  5. How long does Residential painting in Bangalore take?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Residential painting in Bangalore usually takes 2 to 7 days,
                  depending on the size of the home, scope of work, and surface
                  preparation requirements.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="5">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>6. Are your painters trained and professional?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, all Paintkraft painters are trained and certified
                  professionals with experience in Residential painting in
                  Bangalore using modern tools and machine painting techniques.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="6">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>
                  7. Do you offer interior and exterior Home Painting in
                  Bangalore?{" "}
                </h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Yes, Paintkraft provides both interior and exterior Home
                  Painting in Bangalore, including waterproof exterior coatings
                  and premium interior finishes.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="7">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>8. Will my furniture be protected during painting?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Absolutely. Before starting Home Painting in Bangalore, all
                  furniture, flooring, and fixtures are carefully covered to
                  prevent paint spills or damage.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="paintFaq-accItem" eventKey="8">
              <Accordion.Header className="paintFaq-accHeader">
                <h5>9. What paint brands do you use?</h5>
              </Accordion.Header>
              <Accordion.Body className="paintFaq-body">
                <p>
                  Paintkraft uses high-quality and eco-friendly paint brands
                  suitable for Residential painting in Bangalore, ensuring
                  durability, safety, and excellent finish.
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
                  all Home Painting Services in Bangalore provided by
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

export default HomePaintingFaq;
