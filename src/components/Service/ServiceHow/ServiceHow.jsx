import React from "react";
import "./ServiceHow.css";
const ServiceHow = () => {
  return (
    <div className="serviceHow-container">
      <div className="serviceHow-content">
        <h2>How it works!</h2>
        <img
          src="https://static.asianpaints.com/content/dam/asian_paints/sps-revamp/how-it-works/how-it-works-desk-new.webp"
          alt=""
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
                <h4>Sign up for the service</h4>
              </div>
              <div>
                <p>Sign up & our executive will set up a home visit time.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="serviceHow-item">
              <h3>02</h3>
            </div>
            <div>
              <div className="serviceHow-itemContent">
                <h4>Product & site consultation</h4>
              </div>
              <div>
                <p>
                  The associate will evaluate the home and provide a digital
                  quote.
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
                  On approval of the digital quote, select your preferred shade.
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
                <h4>Pre-painting work</h4>
              </div>
              <div>
                <p>
                  Before painting, we will cover your home to protect your
                  furniture.
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
                <h4>Site execution</h4>
              </div>
              <div>
                <p>
                  Our trained painters will use machine painting tools to
                  provide your walls the best finish while completing work on
                  time.
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
                <h4>Site handover</h4>
              </div>
              <div>
                <p>
                  After your home is ready, we will clean up and provide tips
                  tricks to take care of the walls.
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
