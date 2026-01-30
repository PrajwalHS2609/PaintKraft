import React from "react";
import "./LpPaintNavbar.css";
import LpPaintLogo from "./LpPaintLogo";
import LpPaintTopbar from "./LpPaintTopbar";
import Menu from "./LpPaintMenu";
const LpPaintNavbar = () => {
  return (
    <>
      <LpPaintTopbar />
      <div className="lpPaintNavbar-container">
        <LpPaintLogo />
        <Menu />
      </div>
    </>
  );
};

export default LpPaintNavbar;
