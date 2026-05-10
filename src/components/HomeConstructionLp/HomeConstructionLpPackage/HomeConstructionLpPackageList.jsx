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
        "Red Hill Infra will provide liaison assistance with different government agencies, obtain permissions, licenses & sanction fee for the following (if applicable)",
        "Construction Plan Sanction | Temporary Electricity connection",
        "Permanent electrical connection",
        "Water connection | Sewage connection",
      ],
    },
    {
      title: "CIVIL CONSTRUCTION",
      details: [
        "Floor to floor height – 9'6",
        "Steel (500 TMT Bars) – Kamadhenu Equivalents",
        "Cement (Grade 43 or 53 as needed) – Penna/Dalmia",
        "UG Sump built with solid blocks of 6” thickness & waterproof plastered 6000 lts",
        "Concrete – M20 grade RMC",
        "Standard Block walls – 6” & 4” thickness",
        "Internal, external and toilet wall – column joints plastering with chicken mesh",
        "Waterproofing compound – Dr.Fixit FOSROC for external walls",
        "Cement based waterproofing",
        "Steel/concrete lofts – Not included",
        "Anti termite treatment",
      ],
    },
    {
      title: "FLOORING & WALL TILING",
      details: [
        "Living, Foyer: Marble finished Vitrified tiles – Rs.50/-per Sqft",
        "Kitchen, Dining & Bedrooms : Vitrified tiles – Rs.40/-per Sqft",
        "Balcony, Sit-out, Passage Areas : Anti-skid tiles – Rs.30/-per Sqft",
        "Toilet Flooring : Anti-skid tiles – Rs.35/- per Sqft",
        "Toilet Wall Dado (7ft height) : Highlighting Tiles – Rs.45/- per Sqft",
        "Kitchen counter top : Granite – Rs.100/- per Sqft",
        "Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles – Rs.45/- per Sqft",
        "Staircase: Granite – Rs.85/- per Sqft",
        "Parking Area: Parking tiles – Rs.35/- per Sqft",
        "Puja Room- Not included",
        "No setback tiles",
        "2 X 2 tile size maximum",
      ],
    },
    {
      title: "PAINTING",
      details: [
        "Internal wall & ceiling : 2 coat wall putty + 1 coat primer coat + 2 coat latest Tractor emulsion paint or equivalent",
        "External walls : 1 coat primer + 2 coat ace weather proof paint",
        "Brand : Asian/Berger/Dulux",
      ],
    },
    {
      title: "ELECTRICAL",
      details: [
        "        Light & power points – as per electrical design",
        "Geyser points – All bathrooms",
        "AC provision – Any 1 room for the house",
        "Conduits – Good quality, hidden in slabs and walls",
        "Copper wire –Anchor",
        "External electrification is included",
        "Switches & Plates – Anchor – Ziva make",
        "A main DB & MCB – IndoAsian make",
        "One UPS point for the house",
      ],
    },

    {
      title: "PLUMBING",
      details: [
        "Water supply system – Internal & External",
        "Connection for water inlet from corporation",
        "External sewage system – Inspection chambers & sewage outlet to site boundary",
        "Class B CPVC pipes – Astral/Supreme make",
        "Solar & Geyser Provision",
        "Rainwater harvesting facility – Groundwater recharge",
        "PVC Overhead Tank – Ganga or Equivalent make of basic price Rs 6.5 per litre",
      ],
    },
    {
      title: "FIXTURES",
      details: [
        "Kitchen sink with accessories : SS – Rs.4500/- per kitchen (inc sink, Tap, etc)",
        "CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Hindware/Cera – Rs.20,000/- per bathroom attached toilet",
        "7,500/- for powder room",
        "Electrical fixtures – Not Included",
      ],
    },
    {
      title: "DOORS",
      details: [
        "Doors – Main Door : Teak Wood frame(5” X 3”) & shutter including hardware – Rs.17,000/- per door",
        "Internal Doors : Any wood frame(4” X 2.5”) & shutter including cost of hardware – Rs.8,000/- per door",
        "Internal Door frames & shutters – Painted (only)",
        "Main Door – Polished by hand",
        "Bathroom, Terrace & Utility Door – Frame & shutter including hardware – Rs.7,500/- per door",
        "Door hardware – Ozone/Europa/Dorma make",
        "Door hinges – SS hinges",
        "Door & Door Frame cost – Inclusive of planing, rebate, transportation etc.",
      ],
    },
    {
      title: "WINDOWS",
      details: [
        "UPVC windows – 5mm clear glass with MS Grills",
        "Basic price : UPVC window including MS grills – Rs 400/- per Sqft",
      ],
    },
    {
      title: "COMPOUND WALL",
      details: ["Compound wall is not included in the package"],
    },
    {
      title: "FABRICATION",
      details: [
        "Main Gate: MS Gate – Rs.350/- per Sqft",
        "External staircase & balcony railing : MS Railing – Rs. 500/ per Rft",
        "Internal staircase railing : SS Railing – Rs. 800/- per Rft",
        "Utility grill is not included in the package",
      ],
    },
    {
      title: "ELEVATION",
      details: [
        "This proposal includes a basic elevation design for your home",
        "Only Plastering based elevation is included",
        "Special elevation materials are not included in the package",
      ],
    },
    {
      title: "EXCLUSIONS & BASIC RATES",
      details: [
        "Government fees for the liaison bodies to be paid directly by the client",
        "The complete fee payment for plan sanction in Panchayat limits need to be borne by client",
        "Assuming the site & road level to be equal, if the ground level needs to be raised above 18”, it shall be charged for extra",
        "Hard rock/soft rock excavation, if it arises shall be charged accordingly",
        "Buying new earth/sending existing earth for excavation/backfilling purpose shall be charged on actual",
        "Basic price of Cement is Rs.350/- per bag & Steel is Rs.52,000/- per MT. Any increase in these prices shall be charged accordingly",
        "Percentage of opening for door & windows – 12% Maximum",
        "Any work not mentioned within this package or outside the site boundary shall be charged accordingly",
        "One point of Electricity & water needs to be provided by the client free of cost to facilitate construction",
        "SBC of soil is considered at 180 KN/M2 and depth of the foundation considered at 5 Feet, any increase in depth shall be charged accordingly as per actuals upon site conditions",
        "If there is constraints in material delivery or socking place and materials to be order in small quantities, the additional charges for the same shall be charged on actuals",
        "A specific area to construct labour and material shed needs to be provided within 50 feet from the construction place by the client",
        "Any road-cutting charges for the connection of Electricity and Sewage lines are not included, such works shall be charged additionally.",
        "Interiors and furniture etc. not included in this plan.",
        "Electrical Fittings, Electrical Fixtures, Chandeliers, etc. not included in this plan.",
        "Burglar Alarm etc. not included in this plan.",
        "Motors for Pumping Water from the Sump to the overheadtank are not included in this plan.",
        "POP [Plaster of Paris] false ceiling is not included in this plan.",
        "Elevation is not included in this plan.",
        "Elevator / lift not included in this plan.",
        "Home Automation etc not included in this plan.",
        "Landscaping is not included in this plan.",
        "KEB meter connection should be borne by client.",
        "BWSSB sewer connection should be borne by client.",
        "Solar water heater/ panel not included in this plan.",
        "A pressure pump is not included in this plan.",
        "Road cutting [electrical and plumbing including office works] should be borne by client.",
        "Panel board, Earthing pit, and wiring/cabling [panel board to main KEB pole] should be borne by the client.",
        "Plan approval should be borne by the client.",
        "Terrace tiles are not included in this plan.",
        "NOTE: The above-mentioned material specifications are generalized, the inclusion or the exclusion of the same shall vary depending on the floor plan.",
      ],
    },
  ];
  // ==========================================================================================================================================================================
  const classicPackage = [
    {
      title: "DESIGN & DRAWING",
      details: [
        "2D Floor Plan",
        "3D Elevation Design",
        "Design Development – A maximum of 3 drawing revisions",
        "Internal Isometric views all rooms, open areas etc.",
        "3D Walkthrough of the home along with internal & external walkthrough.",
        "Landscaping design.",
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
      details: [
        "2D Furniture layout",
        "Complete 3D design interiors, only if executed by Red Hill Infra.",
        "3D Walkthrough",
      ],
    },
    {
      title: "GOVERNMENT LIAISON ASSISTANCE",
      details: [
        "Red Hill Infra will provide liaison assistance with different government agencies, obtain permissions, licenses & sanction fee for the following (if applicable)",
        "Construction Plan Sanction | Temporary Electricity connection",
        "Permanent electrical connection",
        "Water connection | Sewage connection",
      ],
    },
    {
      title: "CIVIL CONSTRUCTION",
      details: [
        "Floor to floor height – 10'6",
        "Steel (500 TMT Bars) –  Kamadhenu, prime gold, Jindal Equivalents",
        "Cement (Grade 43 or 53 as needed) – UltraTech/Dalmia",
        "UG Sump built with solid blocks of 8” thickness & waterproof plastered 8000 lts",
        "Concrete – M25 grade RMC",
        "Standard Block walls – 6” & 4” thickness",
        "Internal, external and toilet wall – column joints plastering with chicken mesh",
        "Waterproofing compound – Dr.Fixit/FOSROC for external walls",
        "Cement based waterproofing",
        "Steel/concrete lofts – Not included",
        "Anti termite treatment",
      ],
    },
    {
      title: "FLOORING & WALL TILING",
      details: [
        "Living, Foyer: Marble finished Vitrified tiles – Rs.80/-per Sqft",
        "Kitchen, Dining & Bedrooms : Vitrified tiles – Rs.70/-per Sqft",
        "Balcony, Sit-out, Passage Areas : Anti-skid tiles – Rs.50/-per Sqft",
        "Toilet Flooring : Anti-skid tiles – Rs.50/- per Sqft",
        "Toilet Wall Dado (7ft height) : Highlighting Tiles – Rs.55/- per Sqft",
        "Kitchen counter top : Granite – Rs.130/- per Sqft",
        "Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles – Rs.65/- per Sqft",
        "Staircase: Granite – Rs.95/- per Sqft",
        "Parking Area: Parking tiles – Rs.45/- per Sqft",
        "Puja Room - Wall tiling – Rs.45/- per Sqft",
        "Puja Room - Granite slab- Rs-115/- per Sqft",
        "No setback tiles",
      ],
    },
    {
      title: "PAINTING",
      details: [
        "Internal wall & ceiling : 2 coat wall putty + 1 coat primer coat + 2 coat latest Tractor emulsion paint or equivalent",
        "External walls : 1 coat primer + 2 coat ace weather proof paint",
        "Brand : Asian/Berger/Dulux",
      ],
    },
    {
      title: "ELECTRICAL",
      details: [
        "Light & power points – as per electrical design",
        "Geyser points – All bathrooms",
        "AC provision – Any 2 room for the house",
        "Conduits – Good quality, hidden in slabs and walls",
        "Copper wire –Anchor",
        "External electrification is included",
        "Switches & Plates – Anchor – Roma make",
        "A main DB & MCB – IndoAsian make",
        "One Electric car charging point - Parking area",
      ],
    },

    {
      title: "PLUMBING",
      details: [
        "Water supply system – Internal & External",
        "Connection for water inlet from corporation",
        "External sewage system – Inspection chambers & sewage outlet to site boundary",
        "Class B CPVC pipes – Astral/Supreme make",
        "Solar & Geyser Provision",
        "Rainwater harvesting facility – Groundwater recharge",
        "PVC Overhead Tank – Ganga or Equivalent make of basic price Rs 7 per litre",
      ],
    },
    {
      title: "FIXTURES",
      details: [
        "Kitchen sink with accessories : SS – Rs.5500/- per kitchen (inc sink, Tap, etc)",
        "CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Hindware/Cera – Rs.25,000/- per bathroom attached toilet",
        "10,000/- for powder room",
        "Electrical fixtures – Not Included",
      ],
    },
    {
      title: "DOORS",
      details: [
        "Doors – Main Door : Teak Wood frame(5” X 3”) & shutter including hardware – Rs.25,000/- per door",
        "Internal Doors : Any wood frame(4” X 2.5”) & shutter including cost of hardware – Rs.11,000/- per door",
        "Internal Door frames & shutters – Painted (only)",
        "Main Door – Polished by hand",
        "Bathroom, Terrace & Utility Door – Frame & shutter including hardware – Rs.9000/- per door",
        "Door hardware – Ozone/Europa/Dorma make",
        "Door hinges – SS hinges",
        "Door & Door Frame cost – Inclusive of planing, rebate, transportation etc.",
      ],
    },
    {
      title: "WINDOWS",
      details: [
        "UPVC windows – 5mm clear glass with MS Grills",
        "Basic price : UPVC window including MS grills – Rs 550/- per Sqft",
      ],
    },
    {
      title: "COMPOUND WALL",
      details: ["Compound wall is not included in the package"],
    },
    {
      title: "FABRICATION",
      details: [
        "Main Gate: MS Gate – Rs.400/- per Sqft",
        "External staircase & balcony railing : MS Railing – Rs. 600/ per Rft",
        "Internal staircase railing : SS Railing – Rs. 900/- per Rft",
        "Utility grill is not included in the package",
      ],
    },
    {
      title: "ELEVATION",
      details: [
        "This proposal includes a basic elevation design for your home",
        "Only Plastering based elevation is included",
        "Special elevation materials are not included in the package",
      ],
    },
    {
      title: "EXCLUSIONS & BASIC RATES",
      details: [
        "Government fees for the liaison bodies to be paid directly by the client",
        "The complete fee payment for plan sanction in Panchayat limits need to be borne by client",
        "Assuming the site & road level to be equal, if the ground level needs to be raised above 18”, it shall be charged for extra",
        "Hard rock/soft rock excavation, if it arises shall be charged accordingly",
        "Buying new earth/sending existing earth for excavation/backfilling purpose shall be charged on actual",
        "Basic price of Cement is Rs.350/- per bag & Steel is Rs.52,000/- per MT. Any increase in these prices shall be charged accordingly",
        "Percentage of opening for door & windows – 12% Maximum",
        "Any work not mentioned within this package or outside the site boundary shall be charged accordingly",
        "One point of Electricity & water needs to be provided by the client free of cost to facilitate construction",
        "SBC of soil is considered at 180 KN/M2 and depth of the foundation considered at 5 Feet, any increase in depth shall be charged accordingly as per actuals upon site conditions",
        "If there is constraints in material delivery or socking place and materials to be order in small quantities, the additional charges for the same shall be charged on actuals",
        "A specific area to construct labour and material shed needs to be provided within 50 feet from the construction place by the client",
        "Any road-cutting charges for the connection of Electricity and Sewage lines are not included, such works shall be charged additionally.",
        "Interiors and furniture etc. not included in this plan.",
        "Electrical Fittings, Electrical Fixtures, Chandeliers, etc. not included in this plan.",
        "Burglar Alarm etc. not included in this plan.",
        "Motors for Pumping Water from the Sump to the overheadtank are not included in this plan.",
        "POP [Plaster of Paris] false ceiling is not included in this plan.",
        "Elevation is not included in this plan.",
        "Elevator / lift not included in this plan.",
        "Home Automation etc not included in this plan.",
        "Landscaping is not included in this plan.",
        "KEB meter connection should be borne by client.",
        "BWSSB sewer connection should be borne by client.",
        "Solar water heater/ panel not included in this plan.",
        "A pressure pump is not included in this plan.",
        "Road cutting [electrical and plumbing including office works] should be borne by client.",
        "Panel board, Earthing pit, and wiring/cabling [panel board to main KEB pole] should be borne by the client.",
        "Plan approval should be borne by the client.",
        "Terrace tiles are not included in this plan.",
        "NOTE: The above-mentioned material specifications are generalized, the inclusion or the exclusion of the same shall vary depending on the floor plan.",
      ],
    },
  ];
  // ==========================================================================================================================================================================
  const premiumPackage = [
    {
      title: "DESIGN & DRAWING",
      details: [
        "2D Floor Plan",
        "3D Elevation Design",
        "Design Development – A maximum of 3 drawing revisions",
        "Internal Isometric views all rooms, open areas etc.",
        "3D Walkthrough of the home along with internal & external walkthrough.",
        "Landscaping design.",
      ],
    },
    {
      title: "ARCHITECTURAL DESIGN",
      details: [
        "Working drawing for all works",
        "Schedule of Openings",
        "Section and Elevation",
        "A detailed portfolio of the home post-handover.",
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
      details: [
        "2D Furniture layout",
        "Complete 3D design interiors, only if executed by Red Hill Infra.",
        "3D Walkthrough",
      ],
    },
    {
      title: "GOVERNMENT LIAISON ASSISTANCE",
      details: [
        "Red Hill Infra will provide liaison assistance with different government agencies, obtain permissions, licenses & sanction fee for the following (if applicable)",
        "Construction Plan Sanction | Temporary Electricity connection",
        "Permanent electrical connection",
        "Water connection | Sewage connection",
      ],
    },
    {
      title: "CIVIL CONSTRUCTION",
      details: [
        "Floor to floor height – 10'6",
        "Steel (500 TMT Bars) – prime gold, Jindal Equivalents",
        "Cement (Grade 43 or 53 as needed) – UltraTech/Dalmia",
        "UG Sump built with solid blocks of 8” thickness & waterproof plastered 10,000 lts",
        "Concrete – M25 grade RMC",
        "Standard Block walls – 6” & 4” thickness",
        "Internal, external and toilet wall – column joints plastering with chicken mesh",
        "Waterproofing compound – Dr.Fixit/FOSROC for external walls",
        "Cement based waterproofing",
        "Steel/concrete lofts – included",
        "Anti termite treatment",
      ],
    },
    {
      title: "FLOORING & WALL TILING",
      details: [
        "Living, Foyer: Marble finished Vitrified tiles – Rs.95/-per Sqft",
        "Kitchen, Dining & Bedrooms : Vitrified tiles – Rs.80/-per Sqft",
        "Balcony, Sit-out, Passage Areas : Anti-skid tiles – Rs.60/-per Sqft",
        "Toilet Flooring : Anti-skid tiles – Rs.60/- per Sqft",
        "Toilet Wall Dado (7ft height) : Highlighting Tiles – Rs.65/- per Sqft",
        "Kitchen counter top : Granite – Rs.160/- per Sqft",
        "Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles – Rs.75/- per Sqft",
        "Staircase: Granite – Rs.110/- per Sqft",
        "Parking Area: Parking tiles – Rs.75/- per Sqft",
        "Puja Room - Wall tiling – Rs.60/- per Sqft",
        "Puja Room - Granite slab- Rs-125/- per Sqft",
        "No setback tiles",
      ],
    },
    {
      title: "PAINTING",
      details: [
        "Internal wall & ceiling : 2 coat wall putty + 1 coat primer coat + 2 coat latest Tractor emulsion paint or equivalent",
        "External walls : 1 coat primer + 2 coat apex weather proof paint",
        "Brand : Asian/Berger/Dulux",
      ],
    },
    {
      title: "ELECTRICAL",
      details: [
        "Light & power points – as per electrical design",
        "Geyser points – All bathrooms",
        "AC provision – All room for the house",
        "Conduits – Good quality, hidden in slabs and walls",
        "Copper wire –Anchor",
        "External electrification is included",
        "Switches & Plates – Anchor – Roma make",
        "A main DB & MCB – IndoAsian / siemens make or equivalent",
        "Two Electric car charging point - Parking area",
      ],
    },

    {
      title: "PLUMBING",
      details: [
        "Water supply system – Internal & External",
        "Connection for water inlet from corporation",
        "External sewage system – Inspection chambers & sewage outlet to site boundary",
        "Class B CPVC pipes – Astral/Supreme make",
        "Solar & Geyser Provision",
        "Rainwater harvesting facility – Groundwater recharge",
        "PVC Overhead Tank – Ganga or Equivalent make of basic price Rs 7.5 per litre",
      ],
    },
    {
      title: "FIXTURES",
      details: [
        "Kitchen sink with accessories : SS – Rs.9000/- per kitchen (inc sink, Tap, etc)",
        "CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Hindware/Cera – Rs.30,000/- per bathroom attached toilet",
        "12,000/- for powder room",
        "Electrical fixtures – Not Included",
      ],
    },
    {
      title: "DOORS",
      details: [
        "Doors – Main Door : Teak Wood frame(6” X 3”) & shutter including hardware – Rs.32,000/- per door",
        "Internal Doors : Any wood frame(6” X 3”) & shutter including cost of hardware – Rs.14,000/- per door",
        "Internal Door frames & shutters – Painted (only)",
        "Main, puja Door – Polished with melamine spray finish",
        "Bathroom, Terrace & Utility Door – Frame & shutter including hardware – Rs.12,000/- per door",
        "Door hardware – Ozone/Europa/Dorma make",
        "Door hinges – SS hinges",
        "Door & Door Frame cost – Inclusive of planing, rebate, transportation etc.",
      ],
    },
    {
      title: "WINDOWS",
      details: [
        "UPVC windows – 5mm clear glass with MS Grills",
        "Basic price: UPVC window including MS grills – Rs 670/- per Sqft or sal wood frame (5” X 3”) & Honne shutter of 1.2” thickness with clear glass & grill rod",
      ],
    },
    {
      title: "COMPOUND WALL",
      details: ["Compound wall is not included in the package"],
    },
    {
      title: "FABRICATION",
      details: [
        "Main Gate: MS Gate – Rs.450/- per Sqft",
        "External staircase & balcony railing : MS Railing – Rs. 700/ per Rft",
        "Internal staircase railing : SS Railing – Rs. 1000/- per Rft",
        "Utility grill is not included in the package",
        "Waterproofing is included for utility & balcony portions",
      ],
    },
    {
      title: "ELEVATION",
      details: [
        "This proposal includes a basic elevation design for your home",
        "A 3D elevation is presented for client to choose from & design further",
        "Special elevation materials are not included in the package",
      ],
    },
    {
      title: "EXCLUSIONS & BASIC RATES",
      details: [
        "Government fees for the liaison bodies to be paid directly by the client",
        "The complete fee payment for plan sanction in Panchayat limits need to be borne by client",
        "Assuming the site & road level to be equal, if the ground level needs to be raised above 18”, it shall be charged for extra",
        "Hard rock/soft rock excavation, if it arises shall be charged accordingly",
        "Buying new earth/sending existing earth for excavation/backfilling purpose shall be charged on actual",
        "Basic price of Cement is Rs.350/- per bag & Steel is Rs.52,000/- per MT. Any increase in these prices shall be charged accordingly",
        "Percentage of opening for door & windows – 12% Maximum",
        "Any work not mentioned within this package or outside the site boundary shall be charged accordingly",
        "One point of Electricity & water needs to be provided by the client free of cost to facilitate construction",
        "SBC of soil is considered at 180 KN/M2 and depth of the foundation considered at 5 Feet, any increase in depth shall be charged accordingly as per actuals upon site conditions",
        "If there is constraints in material delivery or socking place and materials to be order in small quantities, the additional charges for the same shall be charged on actuals",
        "A specific area to construct labour and material shed needs to be provided within 50 feet from the construction place by the client",
        "Any road-cutting charges for the connection of Electricity and Sewage lines are not included, such works shall be charged additionally.",
        "Interiors and furniture etc. not included in this plan.",
        "Electrical Fittings, Electrical Fixtures, Chandeliers, etc. not included in this plan.",
        "Burglar Alarm etc. not included in this plan.",
        "Motors for Pumping Water from the Sump to the overheadtank are not included in this plan.",
        "POP [Plaster of Paris] false ceiling is not included in this plan.",
        "Elevation is not included in this plan.",
        "Elevator / lift not included in this plan.",
        "Home Automation etc not included in this plan.",
        "Landscaping is not included in this plan.",
        "KEB meter connection should be borne by client.",
        "BWSSB sewer connection should be borne by client.",
        "Solar water heater/ panel not included in this plan.",
        "A pressure pump is not included in this plan.",
        "Road cutting [electrical and plumbing including office works] should be borne by client.",
        "Panel board, Earthing pit, and wiring/cabling [panel board to main KEB pole] should be borne by the client.",
        "Plan approval should be borne by the client.",
        "Terrace tiles are not included in this plan.",
        "NOTE: The above-mentioned material specifications are generalized, the inclusion or the exclusion of the same shall vary depending on the floor plan.",
      ],
    },
  ];
  // ==========================================================================================================================================================================

  const elitePackage = [
    {
      title: "DESIGN & DRAWING",
      details: [
        "Premium 2D & 3D – Floor Plans",
        "Luxury 3D Elevation Design",
        "Design Development – No maximum of drawing revisions",
        "Internal Isometric views all rooms, open areas & detailed renders for each segment of the home.",
        "3D Walkthrough of the home along with internal & external walkthrough.",
        "Detailed Landscaping design.",
      ],
    },
    {
      title: "ARCHITECTURAL DESIGN",
      details: [
        "Working drawing for all works",
        "Schedule of Openings",
        "Section and Elevation",
        "A detailed portfolio of the home post-handover.",
      ],
    },
    {
      title: "STRUCTURAL DESIGNING",
      details: [
        "Structural Design as per IS Code.",
        "Good for construction drawings",
        "Soil Test report",
        "Overlapped Structural, Architectural & MEP Drawings",
        "3D structural drawings & analysis report",
      ],
    },
    {
      title: "MEP DESIGNING",
      details: [
        "Electrical Layout",
        "Plumbing Water Line Layout",
        "Plumbing Drainage Line Layout",
        "HVAC Design",
      ],
    },
    {
      title: "INTERIOR DESIGNING",
      details: [
        "2D Furniture layout",
        "Complete 3D design interiors, only if executed by Red Hill Infra.",
        "3D Walkthrough",
      ],
    },
    {
      title: "GOVERNMENT LIAISON ASSISTANCE",
      details: [
        "Red Hill Infra will provide liaison assistance with different government agencies, obtain permissions, licenses & sanction fee for the following (if applicable)",
        "Construction Plan Sanction | Temporary Electricity connection",
        "Permanent electrical connection",
        "Water connection | Sewage connection",
      ],
    },
    {
      title: "CIVIL CONSTRUCTION",
      details: [
        "Floor to floor height – 11'0",
        "Steel (550 TMT Bars) – JSW, SAIL, Vizag Equivalents",
        "Cement (Grade 43 or 53 as needed) – UltraTech/ Birla super / ACC equivalent",
        "UG Sump built with RCC & waterproof plastered 10,000 lts",
        "Concrete – M25 grade RMC",
        "Machine-cut solid Block walls – 6” & 4” thickness of APCO equivalent",
        "Internal courtyards, skylights other designer architectural elements are included.",
        "Internal, external and toilet wall – column joints plastering with chicken mesh",
        "Waterproofing compound – Dr.Fixit/FOSROC for external walls, waterproofing, Cinder filling in sunken toilets, Heat & Waterproofing in Terrace",
        "A ledge wall for incorporating concealed sanitary parts is included",
        "Steel/concrete lofts – include",
        "Anti termite treatment",
      ],
    },
    {
      title: "FLOORING & WALL TILING",
      details: [
        "Living, Foyer: Marble finished Vitrified tiles(4x8) – Rs.300/-per Sqft",
        "Kitchen, Dining & Bedrooms : Vitrified tiles – Rs.95/-per Sqft",
        "Balcony, Sit-out, Passage Areas : Anti-skid tiles – Rs.60/-per Sqft",
        "Toilet Flooring : Anti-skid tiles – Rs.70/- per Sqft",
        "Toilet Wall Dado (7ft height) : Highlighting Tiles – Rs.75/- per Sqft",
        "Kitchen counter top : Granite – Rs.190/- per Sqft",
        "Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles – Rs.85/- per Sqft",
        "Staircase: Granite – Rs.130/- per Sqft",
        "Parking Area: Parking tiles – Rs.60/- per Sqft",
        "Puja Room - Wall tiling – Rs.70/- per Sqft",
        "Puja Room - Granite slab- Rs-145/- per Sqft",
        "Set back area tiles of 35 per sqft will be provided",
      ],
    },
    {
      title: "PAINTING",
      details: [
        "Internal wall & ceiling : 2 coat wall putty + 1 coat primer coat + 2 coat royale luxury emulsion paint or equivalent",
        "External walls : 1 coat primer + 2 coat ultima  weather proof paint",
        "Brand : Asian/Berger/Dulux",
      ],
    },
    {
      title: "ELECTRICAL",
      details: [
        "Light & power points – as per electrical design",
        "Geyser points – All bathrooms",
        "AC provision – All room for the house",
        "Conduits – Good quality, hidden in slabs and walls",
        "Copper wire - Havells",
        "External electrification is included",
        "Switches & Plates – Legrand britzy or equivalent (touch screen switch provision only)",
        "A main DB & MCB – ABB/Schneider/ Legrand make or equivalent",
        "One UPS point for the house",
        "Two Electric car charging point - Parking area",
      ],
    },

    {
      title: "PLUMBING",
      details: [
        "Water supply system – Internal & External",
        "Connection for water inlet from corporation",
        "External sewage system – Inspection chambers & sewage outlet to site boundary",
        "Class B CPVC pipes – Astral/Supreme make",
        "Solar & Geyser Provision",
        "Rainwater harvesting facility – Groundwater recharge",
        "PVC Overhead Tank – Ganga or Equivalent make of basic price Rs 7.5 per litre",
        "FRP chamber covers for chambers",
        "Separate hot & cold water line for sink",
      ],
    },
    {
      title: "FIXTURES",
      details: [
        "Kitchen sink with accessories : SS – Rs.14,000/- per kitchen (inc sink, Tap, etc)",
        "CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Hindware/Cera/Jaquar – Rs.38,000/- per bathroom attached toilet",
        "15,000/- for powder room",
        "Electrical fixtures – Not Included",
      ],
    },
    {
      title: "DOORS",
      details: [
        "Doors – Main Door : Teak Wood frame(6” X 3”) & shutter including hardware – Rs.45,000/- per door",
        "Internal Doors : sal wood frame(5” X 3”) & shutter including cost of hardware – Rs.17,000/- per door",
        "Internal Door frames & shutters – Painted (only)",
        "Main, puja Door – Polished with melamine spray finish",
        "Bathroom, Terrace & Utility Door – Frame & shutter including hardware – Rs.14,000/- per door",
        "Door hardware – Ozone/Europa/Dorma make",
        "Door hinges – SS hinges",
        "Door & Door Frame cost – Inclusive of planing, rebate, transportation etc.",
      ],
    },
    {
      title: "WINDOWS",
      details: [
        "UPVC windows – 5mm clear glass with MS Grills",
        "Basic price: UPVC window including MS grills – Rs 670/- per Sqft or sal wood frame (5” X 3”) & Honne shutter of 1.2” thickness with clear glass & grill rod",
      ],
    },
    {
      title: "COMPOUND WALL",
      details: [
        "Compound wall – Solid block walls of 4” thickness to suit the elevation (If charged)",
        "Excavation, Foundation, PCC, Size Stone Masonry with DPC course above SSM, Height of Compound wall – 5’6” Feet",
        "Compound wall – Plastered & Painted",
      ],
    },
    {
      title: "FABRICATION",
      details: [
        "Main Gate: MS Gate – Rs.500/- per Sqft",
        "External staircase & balcony railing : MS Railing – Rs. 750/ per Rft",
        "Internal staircase railing : SS Railing – Rs. 1000/- per Rft",
        "Utility grill is not included in the package",
        "Waterproofing is included for utility & balcony portions",
      ],
    },
    {
      title: "ELEVATION",
      details: [
        "This proposal includes a luxurious tile cladding elevation",
        "A 3D elevation is presented for client to choose from & design further",
        "Special elevation materials are not included in the package",
      ],
    },
    {
      title: "EXCLUSIONS & BASIC RATES",
      details: [
        "Government fees for the liaison bodies to be paid directly by the client",
        "The complete fee payment for plan sanction in Panchayat limits need to be borne by client",
        "Assuming the site & road level to be equal, if the ground level needs to be raised above 18”, it shall be charged for extra",
        "Hard rock/soft rock excavation, if it arises shall be charged accordingly",
        "Buying new earth/sending existing earth for excavation/backfilling purpose shall be charged on actual",
        "Basic price of Cement is Rs.350/- per bag & Steel is Rs.52,000/- per MT. Any increase in these prices shall be charged accordingly",
        "Percentage of opening for door & windows – 12% Maximum",
        "Any work not mentioned within this package or outside the site boundary shall be charged accordingly",
        "One point of Electricity & water needs to be provided by the client free of cost to facilitate construction",
        "SBC of soil is considered at 180 KN/M2 and depth of the foundation considered at 5 Feet, any increase in depth shall be charged accordingly as per actuals upon site conditions",
        "If there is constraints in material delivery or socking place and materials to be order in small quantities, the additional charges for the same shall be charged on actuals",
        "A specific area to construct labour and material shed needs to be provided within 50 feet from the construction place by the client",
        "Any road-cutting charges for the connection of Electricity and Sewage lines are not included, such works shall be charged additionally.",
        "Interiors and furniture etc. not included in this plan.",
        "Electrical Fittings, Electrical Fixtures, Chandeliers, etc. not included in this plan.",
        "Burglar Alarm etc. not included in this plan.",
        "Motors for Pumping Water from the Sump to the overheadtank are not included in this plan.",
        "POP [Plaster of Paris] false ceiling is not included in this plan.",
        "Elevation is not included in this plan.",
        "Elevator / lift not included in this plan.",
        "Home Automation etc not included in this plan.",
        "Landscaping is not included in this plan.",
        "KEB meter connection should be borne by client.",
        "BWSSB sewer connection should be borne by client.",
        "Solar water heater/ panel not included in this plan.",
        "A pressure pump is not included in this plan.",
        "Road cutting [electrical and plumbing including office works] should be borne by client.",
        "Panel board, Earthing pit, and wiring/cabling [panel board to main KEB pole] should be borne by the client.",
        "Plan approval should be borne by the client.",
        "Terrace tiles are not included in this plan.",
        "NOTE: The above-mentioned material specifications are generalized, the inclusion or the exclusion of the same shall vary depending on the floor plan.",
      ],
    },
  ];
  const exclusivePackage = [
    {
      title: "DESIGN & DRAWING",
      details: [
        "Premium 2D & 3D – Floor Plans",
        "Luxury 3D Elevation Designs of all views.",
        "Design Development – No maximum of drawing revisions",
        "Internal Isometric views all rooms, open areas & detailed renders for each segment of the home.",
        "3D Walkthrough of the home along with internal & external walkthrough.",
        "Detailed Landscaping design.",
        "Isometric 3D model of home with each floor",
        "Site survey by surveyor with instruments & drawing on the basis of survey",
        "VR for the 3D walkthrough of the home",
      ],
    },
    {
      title: "ARCHITECTURAL DESIGN",
      details: [
        "Working drawing for all works",
        "Schedule of Openings",
        "Section and Elevation",
        "A detailed portfolio of the home post-handover.",
      ],
    },
    {
      title: "STRUCTURAL DESIGNING",
      details: [
        "Structural Design as per IS Code.",
        "Good for construction drawings",
        "Soil Test report",
        "Overlapped Structural, Architectural & MEP Drawings",
        "3D structural drawings & analysis report",
      ],
    },
    {
      title: "MEP DESIGNING",
      details: [
        "Electrical Layout",
        "Plumbing Water Line Layout",
        "Plumbing Drainage Line Layout",
        "HVAC Design",
      ],
    },
    {
      title: "INTERIOR DESIGNING",
      details: [
        "2D Furniture layout",
        "Complete 3D design interiors, only if executed by Red Hill Infra.",
        "3D Walkthrough",
      ],
    },
    {
      title: "GOVERNMENT LIAISON ASSISTANCE",
      details: [
        "Red Hill Infra will provide liaison assistance with different government agencies, obtain permissions, licenses & sanction fee for the following (if applicable)",
        "Construction Plan Sanction | Temporary Electricity connection",
        "Permanent electrical connection",
        "Water connection | Sewage connection",
      ],
    },
    {
      title: "CIVIL CONSTRUCTION",
      details: [
        "Floor to floor height – 12'0",
        "Steel (550 TMT Bars) – JSW, SAIL, TATA Equivalents",
        "Cement (Grade 43 or 53 as needed) – UltraTech/ Birla super / ACC equivalent",
        "UG Sump built with RCC & waterproof plastered 18,000 lts",
        "Concrete – M25 grade RMC",
        "Machine-cut solid Block walls – 6” & 4” thickness of APCO equivalent or country brick wall construction",
        "Internal courtyards, skylights other designer architectural elements are included.",
        "Internal, external and toilet wall – column joints plastering with chicken mesh",
        "Waterproofing compound – Dr.Fixit/FOSROC for external walls, waterproofing, Cinder filling in sunken toilets, Heat & Waterproofing in Terrace",
        "A ledge wall for incorporating concealed sanitary parts is included",
        "Steel/concrete lofts – include",
        "Anti termite treatment",
      ],
    },
    {
      title: "FLOORING & WALL TILING",
      details: [
        "Living, Foyer: Marble finished Vitrified tiles(4x8) – Rs.450/-per Sqft",
        "Kitchen, Dining & Bedrooms : Vitrified tiles – Rs.110/-per Sqft",
        "Balcony, Sit-out, Passage Areas : Anti-skid tiles – Rs.85/-per Sqft",
        "Toilet Flooring : Anti-skid tiles – Rs.85/- per Sqft",
        "Toilet Wall Dado (7ft height) : Highlighting Tiles – Rs.85/- per Sqft",
        "Kitchen counter top : Granite – Rs.500/- per Sqft",
        "Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles – Rs.110/- per Sqft",
        "Staircase: Granite – Rs.150/- per Sqft",
        "Parking Area: Parking tiles – Rs.70/- per Sqft",
        "Puja Room - Wall tiling – Rs.85/- per Sqft",
        "Puja Room - Granite slab- Rs-450/- per Sqft",
        "Set back area tiles of 40 per sqft will be provided",
        "No tile size limit",
        "Epoxy grouting in bathrooms",
      ],
    },
    {
      title: "PAINTING",
      details: [
        "Internal wall & ceiling : 2 coat wall putty + 1 coat primer coat + 2 coat royale luxury emulsion paint or equivalent",
        "External walls : 1 coat primer + 2 coat ultima  weather proof paint",
        "Brand : Asian/Berger/Dulux",
      ],
    },
    {
      title: "ELECTRICAL",
      details: [
        "Light & power points – as per electrical design",
        "Geyser points – All bathrooms",
        "AC provision – All room for the house",
        "Conduits – Good quality, hidden in slabs and walls",
        "Copper wire - Havells",
        "External electrification is included",
        "Switches & Plates – Legrand britzy or equivalent (touch screen switch provision only)",
        "A main DB & MCB – ABB/Schneider/ Legrand make or equivalent",
        "One UPS point for the house",
        "Two Electric car charging point - Parking area",
      ],
    },

    {
      title: "PLUMBING",
      details: [
        "Water supply system – Internal & External",
        "Connection for water inlet from corporation",
        "External sewage system – Inspection chambers & sewage outlet to site boundary",
        "Class B CPVC pipes – Astral/Supreme make",
        "Solar & Geyser Provision",
        "Rainwater harvesting facility – Groundwater recharge",
        "PVC Overhead Tank – Ganga or Equivalent make of basic price Rs 7.5 per litre",
        "FRP chamber covers for chambers",
        "Separate hot & cold water line for sink",
      ],
    },
    {
      title: "FIXTURES",
      details: [
        "Kitchen sink with accessories : SS – Rs.24,000/- per kitchen (inc sink, Tap, etc)",
        "CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Hindware/Cera/Jaquar – Rs.45,000/- per bathroom attached toilet",
        "20,000/- for powder room",
        "Electrical fixtures – Not Included",
      ],
    },
    {
      title: "DOORS",
      details: [
        "Doors – Main Door,puja door : Teak Wood frame & shutter including hardware – Rs.70,000/- per door",
        "Internal Doors : sal wood frame(5” X 3”) & shutter including cost of hardware – Rs.22,000/- per door",
        "Internal Door frames & shutters – Painted/polished",
        "Main, puja Door – Polished with melamine spray finish",
        "Bathroom, Terrace & Utility Door – Frame & shutter including hardware – Rs.14,000/- per door",
        "Door hardware – Ozone/Europa/Dorma make",
        "Door hinges – SS hinges",
        "Door & Door Frame cost – Inclusive of planing, rebate, transportation etc.",
      ],
    },
    {
      title: "WINDOWS",
      details: [
        "UPVC windows – 5mm clear glass with MS Grills",
        "Basic price: UPVC window including MS grills – Rs 900/- per Sqft or sal wood frame (5” X 3”) & Honne shutter of 1.2” thickness with clear glass & grill rod",
      ],
    },
    {
      title: "COMPOUND WALL",
      details: [
        "Compound wall – Solid block walls of 4” thickness to suit the elevation (If charged)",
        "Excavation, Foundation, PCC, Size Stone Masonry with DPC course above SSM, Height of Compound wall – 5’6” Feet",
        "Compound wall – Plastered & Painted",
      ],
    },
    {
      title: "FABRICATION",
      details: [
        "Main Gate: MS Gate – Rs.550/- per Sqft",
        "External staircase & balcony railing : MS Railing – Rs. 800/ per Rft",
        "Internal staircase railing : SS Railing – Rs. 1200/- per Rft",
        "Utility grill is not included in the package",
        "Waterproofing is included for utility & balcony portions",
      ],
    },
    {
      title: "ELEVATION",
      details: [
        "This proposal includes a luxurious tile cladding elevation",
        "A 3D elevation is presented for client to choose from & design further",
        "Special elevation materials are not included in the package",
      ],
    },
    {
      title: "EXCLUSIONS & BASIC RATES",
      details: [
        "Government fees for the liaison bodies to be paid directly by the client",
        "The complete fee payment for plan sanction in Panchayat limits need to be borne by client",
        "Assuming the site & road level to be equal, if the ground level needs to be raised above 18”, it shall be charged for extra",
        "Hard rock/soft rock excavation, if it arises shall be charged accordingly",
        "Buying new earth/sending existing earth for excavation/backfilling purpose shall be charged on actual",
        "Basic price of Cement is Rs.350/- per bag & Steel is Rs.52,000/- per MT. Any increase in these prices shall be charged accordingly",
        "Percentage of opening for door & windows – 12% Maximum",
        "Any work not mentioned within this package or outside the site boundary shall be charged accordingly",
        "One point of Electricity & water needs to be provided by the client free of cost to facilitate construction",
        "SBC of soil is considered at 180 KN/M2 and depth of the foundation considered at 5 Feet, any increase in depth shall be charged accordingly as per actuals upon site conditions",
        "If there is constraints in material delivery or socking place and materials to be order in small quantities, the additional charges for the same shall be charged on actuals",
        "A specific area to construct labour and material shed needs to be provided within 50 feet from the construction place by the client",
        "Any road-cutting charges for the connection of Electricity and Sewage lines are not included, such works shall be charged additionally.",
        "Interiors and furniture etc. not included in this plan.",
        "Electrical Fittings, Electrical Fixtures, Chandeliers, etc. not included in this plan.",
        "Burglar Alarm etc. not included in this plan.",
        "Motors for Pumping Water from the Sump to the overheadtank are not included in this plan.",
        "POP [Plaster of Paris] false ceiling is not included in this plan.",
        "Elevation is not included in this plan.",
        "Elevator / lift not included in this plan.",
        "Home Automation etc not included in this plan.",
        "Landscaping is not included in this plan.",
        "KEB meter connection should be borne by client.",
        "BWSSB sewer connection should be borne by client.",
        "Solar water heater/ panel not included in this plan.",
        "A pressure pump is not included in this plan.",
        "Road cutting [electrical and plumbing including office works] should be borne by client.",
        "Panel board, Earthing pit, and wiring/cabling [panel board to main KEB pole] should be borne by the client.",
        "Plan approval should be borne by the client.",
        "Terrace tiles are not included in this plan.",
        "NOTE: The above-mentioned material specifications are generalized, the inclusion or the exclusion of the same shall vary depending on the floor plan.",
      ],
    },
  ];
  const packages = [
    {
      name: "Standard Package",
      price: "Rs 1850/*- Sq Ft",
      data: standardPackage,
    },
    {
      name: "Classic",
      price: "Rs 1999/*- Sq Ft",
      data: classicPackage,
    },
    {
      name: "Premium",
      price: "Rs 2099/*- Sq Ft",
      data: premiumPackage,
    },
    {
      name: "Elite",
      price: "Rs 2249/*- Sq Ft",
      data: elitePackage,
    },
    {
      name: "Exclusive",
      price: "Rs 2499/*- Sq Ft",
      data: exclusivePackage,
    },
  ];
  return (
    <div className="packageListContainer">
      {activePackage !== null && (
        <div className="packageCard-container">
          <div className="packageCard">
            <h2 className="packageTitle1">{packages[activePackage].name}</h2>

            <h1 className="packageTitle2">{packages[activePackage].price}</h1>

            <Accordion flush className="packageAccordion-container">
              {packages[activePackage].data.map((item, index) => (
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
