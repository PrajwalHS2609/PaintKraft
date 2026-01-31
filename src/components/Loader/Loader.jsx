"use client";

import React from "react";
import "./Loader.css";
import Image from "next/image";
import logo from "./../../images/favicon.png"
const Loader = () => {
  return (
    <div className="loader-wrapper">
      <Image src={logo} alt="logo loader" />
    </div>
  );
};

export default Loader;

