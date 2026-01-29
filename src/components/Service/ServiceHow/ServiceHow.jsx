import React from "react";
import "./ServiceHow.css";
import Image from "next/image";
import Howitworks from "./../../../images/Howitworks.png"
const ServiceHow = () => {
  return (
    <div className="serviceHow-container">
      <div className="serviceHow-content">
        <h2>How it works!</h2>
        <Image
          src={Howitworks}
          alt="How it works"
        />
      </div>
      <div className="serviceHow-content">
        <ul>
          <li>
            <div className="serviceHow-item">
              <h3>01</h3>
            </div>
            <div>
              <div className="serviceHow-itemContent">
                <h4>Reach out for the service</h4>
              </div>
              <div>
                <p>
                  Contact us, and our executive will schedule a convenient home
                  visit at your preferred time.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="serviceHow-item">
              <h3>02</h3>
            </div>
            <div>
              <div className="serviceHow-itemContent">
                <h4>Site inspection and consultation</h4>
              </div>
              <div>
                <p>
                  Our specialist will assess the site requirements and share a
                  detailed digital quotation.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="serviceHow-item">
              <h3>03</h3>
            </div>
            <div>
              <div className="serviceHow-itemContent">
                <h4>Shade selection</h4>
              </div>
              <div>
                <p>
                  Once the quotation is approved, choose your desired color
                  shades with expert guidance.{" "}
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="serviceHow-item">
              <h3>04</h3>
            </div>
            <div>
              <div className="serviceHow-itemContent">
                <h4>Pre-painting preparation</h4>
              </div>
              <div>
                <p>
                  Prior to painting, we carefully cover furniture and surfaces
                  to ensure complete protection.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="serviceHow-item">
              <h3>05</h3>
            </div>
            <div>
              <div className="serviceHow-itemContent">
                <h4>Painting execution</h4>
              </div>
              <div>
                <p>
                  Our skilled painters use advanced machine painting tools to
                  deliver a flawless finish while completing the project on
                  schedule.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="serviceHow-item">
              <h3>06</h3>
            </div>
            <div>
              <div className="serviceHow-itemContent">
                <h4>Final handover</h4>
              </div>
              <div>
                <p>
                  After completion, we clean the site thoroughly and share
                  simple care tips to help maintain your walls long-term.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceHow;
