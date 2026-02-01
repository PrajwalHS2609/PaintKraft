"use client";
import React, { useState } from "react";
import "@/components/LpPaintNavbar/LpPaintNavbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const BangaloreLpMenu = () => {
  const pathname = usePathname(); // ✅ Get current path

  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");

    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(100%)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(100%)";
  };
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };
  const toggleSubDropdown = (submenu) => {
    setActiveSubDropdown((prev) => (prev === submenu ? null : submenu));
  };
  // const handlePop = () => {
  //   document.querySelector(".popup-container").style.display = "flex";
  // };
  return (
    <div className="menuContainer">
      <div className="menuContainerList">
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="#why">Why Us</Link>
        </li>

        <li>
          <Link href="#testimonial">Testimonials</Link>
        </li>
        {/* <li>
          <Link
            href="/our-gallery"
            className={pathname === "/our-gallery" ? "active" : ""}
          >
            Our Work Gallery
          </Link>
        </li> */}
        <li>
          <Link href="#contact-us">Contact Us</Link>
        </li>
      </div>
      {/* <div>
        <button className="button1" id="non-repsBtn" onClick={handlePop}>
          Book Now
          <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
            <path
              clipRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </div> */}

      {/* ------------------------respMenuBar----------------------- */}
      <div className="respMenuBar">
        <FaBarsStaggered className="respMenuIcon" onClick={showSideBar} />
      </div>
      <div className="respMenu">
        <div className="innerRespMenu">
          {" "}
          <FaX className="closeX" onClick={hideSideBar} />
          <div className="innerMenu">
            <li className="">
              <Link
                id="menuNavLink"
                href={`#home`}
                onClick={hideSideBar}
                className={pathname === "#home" ? "active" : ""}
              >
                Home
              </Link>{" "}
            </li>
            <li className="respDropdownList">
              <Link
                id="menuNavLink"
                href="#services"
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Services
              </Link>{" "}
            </li>
            <li className="respDropdownList">
              <Link
                id="menuNavLink"
                href="#why"
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Why Us
              </Link>{" "}
            </li>
            <li className="respDropdownList">
              <Link
                id="menuNavLink"
                href="#testimonial"
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Testimonials
              </Link>{" "}
            </li>
            <li className="">
              {" "}
              <Link
                id="menuNavLink"
                href="#contact-us"
                onClick={hideSideBar}
                className={pathname === "#contact-us" ? "active" : ""}
              >
                Contact Us
              </Link>
            </li>
            {/* <li>
              <button className="button1" onClick={handlePop}>
                Book Now
                <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BangaloreLpMenu;
