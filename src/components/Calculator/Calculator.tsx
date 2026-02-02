"use client";
import React, { useState } from "react";
import "./Calculator.css";

type ProjectType = "economy" | "premium" | "luxury" | "";
type SpaceType = "interior" | "exterior" | "";

const Calculator: React.FC = () => {
  const [projectType, setProjectType] = useState<ProjectType>("");
  const [spaceType, setSpaceType] = useState<SpaceType>(""); // optional
  const [area, setArea] = useState<string>("");
  const [cost, setCost] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const rates: Record<"interior" | "exterior", Record<ProjectType, number>> = {
    interior: {
      economy: 17.5,
      premium: 21,
      luxury: 22,
      "": 0,
    },
    exterior: {
      economy: 13,
      premium: 16,
      luxury: 22,
      "": 0,
    },
  };

  const calculateCost = () => {
    if (!spaceType || !projectType || !area) {
      setError("Please select painting type and area");
      setCost(null);
      return;
    }

    setError("");

    // default to interior if not selected
    // const finalSpace: "interior" | "exterior" =
    //   spaceType === "exterior" ? "exterior" : "interior";

    const ratePerSqft = rates[spaceType][projectType];
    const total = (Number(area) * ratePerSqft) * 2.5;

    setCost(total);
  };

  const interiorServices: Record<ProjectType, string[]> = {
    economy: [
      "2 Coat Putty",
      "1 Coat Primer",
      "2 Coat Tractor Emulsion",
      "Basic Cleaning",
    ],
    premium: [
      "2 Coat Putty",
      "1 Coat Primer",
      "2 Coat Premium Emulsion",
      "Basic Cleaning",
    ],
    luxury: [
      "2 Coat Putty",
      "1 Coat Primer",
      "2 Coat Royale Luxury Emulsion",
      "Basic Cleaning",
    ],
    "": [],
  };

  return (
    <div className="calculator-container">
      {/* SPACE */}
      <h3>Select Area *</h3>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="space"
            checked={spaceType === "interior"}
            onChange={() => setSpaceType("interior")}
          />
          <span>Interior</span>
        </label>

        <label>
          <input
            type="radio"
            name="space"
            checked={spaceType === "exterior"}
            onChange={() => setSpaceType("exterior")}
          />
          <span>Exterior</span>
        </label>
      </div>

      {/* PROJECT */}
      <h3>Select Painting Type *</h3>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="project"
            checked={projectType === "economy"}
            onChange={() => setProjectType("economy")}
          />
          <span>Economy Painting</span>
        </label>

        <label>
          <input
            type="radio"
            name="project"
            checked={projectType === "premium"}
            onChange={() => setProjectType("premium")}
          />
          <span>Premium Painting</span>
        </label>

        <label>
          <input
            type="radio"
            name="project"
            checked={projectType === "luxury"}
            onChange={() => setProjectType("luxury")}
          />
          <span>Luxury Painting</span>
        </label>
      </div>

      {/* AREA */}
      <h3>Enter carpet area in SQFT *</h3>
      <input
        type="number"
        placeholder="Area in square foot"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />

      {/* ERROR */}
      {error && <p className="error-text">{error}</p>}

      {/* BUTTON */}
      <button onClick={calculateCost}>Calculate now →</button>

      {/* RESULT */}
      {cost !== null && (
        <>
          <div className="result">
            <h2>Estimated Cost: ₹{cost.toLocaleString()}</h2>
          </div>

          {/* INTERIOR SERVICE DETAILS */}
          {spaceType === "interior" && projectType && (
            <div className="service-details">
              <h4>Service Includes</h4>
              <ul>
                {interiorServices[projectType].map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Calculator;
