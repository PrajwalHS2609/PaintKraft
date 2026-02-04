import React from "react";
import "./HomeKeywords.css";
const HomeKeywords = () => {
  const keywords = [
    "Home Painting Services in Bangalore",
    "Home Painting in Bangalore",
    "House Painting Services Bangalore",
    "House Painting Service Near Me",
    "Residential Painting Services Bangalore",
    "Interior Painting Services Bangalore",
    "Exterior Painting Services Bangalore",
    "Apartment Painting Services Bangalore",
    "Flat Painting Services Bangalore",
    "Villa Painting Services Bangalore",
    "Wall Painting Services Bangalore",
    "Best Home Painting Services in Bangalore",
    "Affordable Home Painting Bangalore",
    "Professional Home Painters Bangalore",
    "Painting Contractors in Bangalore",
    "Home Painting Price in Bangalore",
    "House Painting Cost in Bangalore",
    "Residential Painting in Bangalore",
    "Home Repainting Services Bangalore",
    "Interior Wall Painting Bangalore",
    "Exterior Wall Painting Bangalore",
    "Texture Painting Services Bangalore",
    "Spray Painting Services Bangalore",
    "Waterproof Painting Services Bangalore",
    "One Day Home Painting Service Bangalore",
    "Apartment Interior Painting Bangalore",
    "Flat Painting Service Near Me",
    "Local Home Painters Bangalore",
    "Trusted Painting Services in Bangalore",
    "Premium Home Painting Services Bangalore",
    "Apartment Painting Services in Bangalore",
    "Apartment Painting in Bangalore",
    "Flat Painting Services Bangalore",
    "Flats Painting Service Near Me",
    "Apartment Interior Painting Bangalore",
    "Residential Painting Services Bangalore",
    "Home Painting Services for Apartments Bangalore",
    "Flat Painting Cost in Bangalore",
    "Apartment Painting Price in Bangalore",
    "Apartment Wall Painting Bangalore",
    "Interior Painting for Apartments Bangalore",
    "Best Apartment Painting Services Bangalore",
    "Professional Apartment Painters Bangalore",
    "Affordable Apartment Painting Bangalore",
    "Flat Repainting Services Bangalore",
    "Apartment Exterior Painting Bangalore",
    "Apartment Painting Contractors Bangalore",
    "Flat Painting Service Near Me Bangalore",
    "Apartment Painting Company Bangalore",
    "Residential Painting in Bangalore",
    "Flat Interior Painting Bangalore",
    "One Day Apartment Painting Service Bangalore",
    "Spray Painting for Apartments Bangalore",
    "Texture Painting for Apartments Bangalore",
    "Apartment Waterproof Painting Bangalore",
    "Move-in Apartment Painting Bangalore",
    "Rental Apartment Painting Bangalore",
    "Trusted Apartment Painters Bangalore",
    "Premium Apartment Painting Services Bangalore",
    "Apartment Painting Near Me Bangalore",
  ];
  return (
    <div className="keywords-container">
      <ul className="keywords-list">
        {keywords.map((item, index) => (
          <li key={index} className="keywords-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeKeywords;
