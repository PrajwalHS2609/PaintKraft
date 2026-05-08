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
        "Working drawing for all works",
        "Schedule of Openings",
        "Section and Elevation",
      ],
    },
    {
      title: "STRUCTURAL DESIGNING",
      details: [
        "Structural Design as per IS Code.",
        "Good for construction drawings",
        "Soil Test report",
      ],
    },
    {
      title: "MEP DESIGNING",
      details: [
        "Electrical Layout",
        "Plumbing Water Line Layout",
        "Plumbing Drainage Line Layout",
      ],
    },
    {
      title: "INTERIOR DESIGNING",
      details: ["2D Furniture layout"],
    },
    {
      title: "GOVERNMENT LIAISON ASSISTANCE",
      details: [
        "BUILD UR SPACE will provide liaison assistance with different government agencies, obtain permissions, licenses & sanction fee for the following (if applicable)",
        "Construction Plan Sanction | Temporary Electricity connection",
        "Permanent electrical connection",
        "Water connection | Sewage connection",
      ],
    },
    {
      title: "CIVIL CONSTRUCTION",
      details: ["Floor to floor height – 9'6",
"Steel (500 TMT Bars) – Kamadhenu Equivalents",
"Cement (Grade 43 or 53 as needed) – Penna/Dalmia",
"UG Sump built with solid blocks of 6” thickness & waterproof plastered 6000 lts", 
"Concrete – M20 grade RMC",
"Standard Block walls – 6” & 4” thickness",
"Internal, external and toilet wall – column joints plastering with chicken mesh",
"Waterproofing compound – Dr.Fixit FOSROC for external walls",
"Cement based waterproofing",
"Steel/concrete lofts – Not included",
"Anti termite treatment"]
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
            <h2 className="packageTitle1">Standard Package</h2>
            <h1 className="packageTitle2">Rs 1850/*- Sq Ft</h1>

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
            <h2 className="packageTitle1">Classic</h2>
            <h1 className="packageTitle2">Rs 1999/*- Sq Ft</h1>

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
            <h2 className="packageTitle1">Premium</h2>
            <h1 className="packageTitle2">Rs 2099/*- Sq Ft</h1>

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
