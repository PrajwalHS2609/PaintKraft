"use client";
import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [projectType, setProjectType] = useState("");
  const [spaceType, setSpaceType] = useState("");
  const [area, setArea] = useState("");
  const [cost, setCost] = useState<number | null>(null);

  const calculateCost = () => {
    if (!projectType || !spaceType || !area) {
      alert("Please fill all fields");
      return;
    }

    let ratePerSqft = 0;

    // base rates (example)
    if (projectType === "fresh" && spaceType === "interior") ratePerSqft = 20;
    if (projectType === "fresh" && spaceType === "exterior") ratePerSqft = 25;
    if (projectType === "repaint" && spaceType === "interior") ratePerSqft = 15;
    if (projectType === "repaint" && spaceType === "exterior") ratePerSqft = 18;

    const total = Number(area) * ratePerSqft;
    setCost(total);
  };

  return (
    <div className="calculator-container">
      <h3>Select your type of project *</h3>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="project"
            value="fresh"
            onChange={(e) => setProjectType(e.target.value)}
          />
          Fresh Painting
        </label>
        <label>
          <input
            type="radio"
            name="project"
            value="repaint"
            onChange={(e) => setProjectType(e.target.value)}
          />
          Repainting
        </label>
      </div>

      <h3>Select the space *</h3>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="space"
            value="interior"
            onChange={(e) => setSpaceType(e.target.value)}
          />
          Interior
        </label>
        <label>
          <input
            type="radio"
            name="space"
            value="exterior"
            onChange={(e) => setSpaceType(e.target.value)}
          />
          Exterior
        </label>
      </div>

      <h3>Enter carpet area in SQFT *</h3>
      <input
        type="number"
        placeholder="Area in square foot"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />

      <button onClick={calculateCost}>
        Calculate now →
      </button>

      {cost !== null && (
        <div className="result">
          <h2>Estimated Cost: ₹{cost.toLocaleString()}</h2>
        </div>
      )}
    </div>
  );
};

export default Calculator;
