import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./HomeConstructionLpPackage.css";

const HomeConstructionLpPackageList = ({ activePackage }) => {
  const standardPackage = [
    {
      title: "DESIGN & DRAWING",
      details: [
        "2D Floor Plan",
        "3D Elevation Design",
        "Working Drawings",
        "Structural Drawings",
      ],
    },
    {
      title: "ARCHITECTURAL DESIGN",
      details: [
        "Space Planning",
        "Modern Elevation",
        "Vastu Planning",
        "Furniture Layout",
      ],
    },
    {
      title: "STRUCTURAL DESIGNING",
      details: [""],
    },
    {
      title: "MEP DESIGNING",
      details: [""],
    },
    {
      title: "INTERIOR DESIGNING",
      details: [""],
    },
    {
      title: "GOVERNMENT LIAISON ASSISTANCE",
      details: [""],
    },
    {
      title: "CIVIL CONSTRUCTION",
      details: [""],
    },
    {
      title: "FLOORING & WALL TILING",
      details: [""],
    },
    {
      title: "PAINTING",
      details: [""],
    },
    {
      title: "ELECTRICAL",
      details: [""],
    },
    {
      title: "PLUMBING",
      details: [""],
    },
    {
      title: "FIXTURES",
      details: [""],
    },
    {
      title: "DOORS",
      details: [""],
    },
    {
      title: "WINDOWS",
      details: [""],
    },
    {
      title: "COMPOUND WALL",
      details: [""],
    },
    {
      title: "FABRICATION",
      details: [""],
    },
    {
      title: "ELEVATION",
      details: [""],
    },
    {
      title: "EXCLUSIONS & BASIC RATES",
      details: [""],
    },
  ];

  return (
    <div className="packageListContainer">
      {activePackage === 0 && (
        <div className="packageCard-container">
          <div className="packageCard">
            <h2 className="packageTitle1">Budget Home</h2>
            <h1 className="packageTitle2">1,2 & 3 BHK</h1>

            <Accordion flush className="packageAccordion-container">
              {standardPackage.map((item, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={index}
                  className="packageAccordionItem"
                >
                  <Accordion.Header className="packageAccordionItem-Head">
                    {item.title}
                  </Accordion.Header>

                  <Accordion.Body className="packageAccordionItem-accBody">
                    <ul className="packageDetailsList">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      )}

{activePackage === 1 && (
        <div className="packageCard-container">
          <div className="packageCard">
            <h2 className="packageTitle1">Luxury Home</h2>
            <h1 className="packageTitle2">2,3,4 & 5 BHK</h1>

            <Accordion flush className="packageAccordion-container">
              {standardPackage.map((item, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={index}
                  className="packageAccordionItem"
                >
                  <Accordion.Header className="packageAccordionItem-Head">
                    {item.title}
                  </Accordion.Header>

                  <Accordion.Body className="packageAccordionItem-accBody">
                    <ul className="packageDetailsList">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      )}
      {activePackage === 2 && (
        <div className="packageCard-container">
          <div className="packageCard">
            <h2 className="packageTitle1">Villa & Bungalows</h2>
            <h1 className="packageTitle2">2,3,4 & 5 BHK</h1>

            <Accordion flush className="packageAccordion-container">
              {standardPackage.map((item, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={index}
                  className="packageAccordionItem"
                >
                  <Accordion.Header className="packageAccordionItem-Head">
                    {item.title}
                  </Accordion.Header>

                  <Accordion.Body className="packageAccordionItem-accBody">
                    <ul className="packageDetailsList">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeConstructionLpPackageList;
