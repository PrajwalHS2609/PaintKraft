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
        "Switches & Plates – Anchor – Ziva make",
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
  const elitePackage = [
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
  const exclusivePackage = [
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
