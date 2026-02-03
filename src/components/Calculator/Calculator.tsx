"use client";
import React, { useState } from "react";
import "./Calculator.css";

type ProjectType = "economy" | "premium" | "luxury" | "";
type SpaceType = "interior" | "exterior" | "";
type PaintMode = "fresh" | "repaint" | "";

const Calculator: React.FC = () => {
  const [paintMode, setPaintMode] = useState<PaintMode>("");
  const [spaceType, setSpaceType] = useState<SpaceType>("");
  const [projectType, setProjectType] = useState<ProjectType>("");
  const [area, setArea] = useState<string>("");
  const [cost, setCost] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  /* ================= RATES ================= */

  const rates: Record<
    PaintMode,
    Record<"interior" | "exterior", Record<ProjectType, number>>
  > = {
    fresh: {
      interior: {
        economy: 17.50,
        premium: 21,
        luxury: 27,
        "": 0,
      },
      exterior: {
        economy: 13,
        premium: 16,
        luxury: 22,
        "": 0,
      },
    },
    repaint: {
      interior: {
        economy: 10,
        premium: 13,
        luxury: 18,
        "": 0,
      },
      exterior: {
        economy: 13,
        premium: 16,
        luxury: 22,
        "": 0,
      },
    },
    "": {
      interior: { economy: 0, premium: 0, luxury: 0, "": 0 },
      exterior: { economy: 0, premium: 0, luxury: 0, "": 0 },
    },
  };

  /* ============== SERVICES (INTERIOR ONLY) ============== */

  const interiorServices: Record<PaintMode, Record<ProjectType, string[]>> = {
    fresh: {
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
    },
    repaint: {
      economy: [
        "Touch up Putty",
        "2 Coat Paint",
      ],
      premium: [
        "Touch up Putty",
        "2 Coat Paint",
        "1 Coat Primer",

      ],
      luxury: [
        "Touch up Putty",
        "2 Coat Paint",
        "1 Coat Primer",
      ],
      "": [],
    },
    "": { economy: [], premium: [], luxury: [], "": [] },
  };

  /* ================= CALCULATION ================= */

  const calculateCost = () => {
    if (!paintMode || !spaceType || !projectType || !area) {
      setError("Please select painting mode, area type, package and enter area");
      setCost(null);
      return;
    }

    setError("");

    const ratePerSqft = rates[paintMode][spaceType][projectType];
    const total = Number(area) * ratePerSqft * 2.5;

    setCost(total);
  };

  return (
    <div className="calculator-container">
      {/* PAINT MODE */}
      <h3>Select Painting Type *</h3>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="mode"
            checked={paintMode === "fresh"}
            onChange={() => setPaintMode("fresh")}
          />
          <span>Fresh Painting</span>
        </label>

        <label>
          <input
            type="radio"
            name="mode"
            checked={paintMode === "repaint"}
            onChange={() => setPaintMode("repaint")}
          />
          <span>Repainting</span>
        </label>
      </div>

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
      <h3>Select Package *</h3>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="project"
            checked={projectType === "economy"}
            onChange={() => setProjectType("economy")}
          />
          <span>Economy</span>
        </label>

        <label>
          <input
            type="radio"
            name="project"
            checked={projectType === "premium"}
            onChange={() => setProjectType("premium")}
          />
          <span>Premium</span>
        </label>

        <label>
          <input
            type="radio"
            name="project"
            checked={projectType === "luxury"}
            onChange={() => setProjectType("luxury")}
          />
          <span>Luxury</span>
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

      {error && <p className="error-text">{error}</p>}

      <button onClick={calculateCost}>Calculate now →</button>

      {/* RESULT */}
      {cost !== null && (
        <>
          <div className="result">
            <h2>Estimated Cost: ₹{cost.toLocaleString()}</h2>
          </div>

          {/* SERVICES – ONLY FOR INTERIOR */}
          {spaceType === "interior" && projectType && (
            <div className="service-details">
              <h4>Service Includes</h4>
              <ul>
                {interiorServices[paintMode][projectType].map(
                  (service, index) => (
                    <li key={index}>{service}</li>
                  )
                )}
              </ul>
            </div>
          )}

        </>
      )}
      <div className="service-details2">
        <p>Contact Us : <a href="tel:7090234446">7090234446</a>
        </p>
        <p>1-Hr Home Visit or Get 10% Off</p>
      </div>
    </div>
  );
};

export default Calculator;
