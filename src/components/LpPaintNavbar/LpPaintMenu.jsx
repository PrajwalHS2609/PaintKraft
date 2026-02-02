"use client";
import React, { useState } from "react";
import "./LpPaintNavbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const LpPaintMenu = () => {
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
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <span className="service-text">
            <Link href={"/services"}> Services</Link>
            <FaChevronDown className="menuDropIcon" />
          </span>
          <div className="menuDropDown">
            <li>
              <span>
                {" "}
                <Link
                  href="/home-painting-services-in-bangalore"
                  className={
                    pathname === "/home-painting-services-in-bangalore"
                      ? "actives"
                      : ""
                  }
                >
                  Home Painting
                </Link>
              </span>
            </li>

            <li>
              <span>
                <Link
                  href="/apartment-painting-services-in-bangalore"
                  className={
                    pathname === "/apartment-painting-services-in-bangalore"
                      ? "actives"
                      : ""
                  }
                >
                  Apartment Painting
                </Link>
              </span>
            </li>

            <li>
              <span>
                {" "}
                <Link
                  href="/spray-painting-services-in-bangalore"
                  className={
                    pathname === "/spray-painting-services-in-bangalore"
                      ? "actives"
                      : ""
                  }
                >
                  Spray Painting
                </Link>
              </span>
            </li>

            <li>
              <span>
                {" "}
                <Link
                  href="/1-day-express-painting-services-in-bangalore"
                  className={
                    pathname === "/1-day-express-painting-services-in-bangalore"
                      ? "actives"
                      : ""
                  }
                >
                  1 Day Express Painting{" "}
                </Link>
              </span>
            </li>

            <li>
              <Link
                href="/texture-and-designer-services-in-bangalore"
                className={
                  pathname === "/texture-and-designer-services-in-bangalore"
                    ? "actives"
                    : ""
                }
              >
                Texture & Designer Walls
              </Link>
            </li>
            <li>
              <Link
                href="/waterproofing-services-in-bangalore"
                className={
                  pathname === "/waterproofing-services-in-bangalore"
                    ? "actives"
                    : ""
                }
              >
                Waterproofing
              </Link>
            </li>
            <li>
              <Link
                href="/commercial-painting-services-in-bangalore"
                className={
                  pathname === "/commercial-painting-services-in-bangalore"
                    ? "actives"
                    : ""
                }
              >
                Commercial Painting
              </Link>
            </li>
          </div>
        </li>
        <li>
          <span className="service-text">
            Brands
            <FaChevronDown className="menuDropIcon" />
          </span>
          <div className="menuDropDown">
            <li>
              <span>
                {" "}
                <Link
                  href="/"
                  className={pathname === "/nippon" ? "actives" : ""}
                >
                  Nippon
                </Link>
              </span>
            </li>

            <li>
              <span>
                <Link
                  href="/"
                  className={pathname === "/berger" ? "actives" : ""}
                >
                  Berger
                </Link>
              </span>
            </li>
            <li>
              <span>
                {" "}
                <Link
                  href="/"
                  className={pathname === "/opus" ? "actives" : ""}
                >
                  Opus
                </Link>
              </span>
            </li>

            <li>
              <span>
                <Link
                  href="/"
                  className={pathname === "/yulu" ? "actives" : ""}
                >
                  Yulu
                </Link>
              </span>
            </li>
          </div>
        </li>

        <li>
          <span className="service-text">
            Shades
            <FaChevronDown className="menuDropIcon" />
          </span>
          <div className="menuDropDown">
            <li>
              <span>
                {" "}
                <Link
                  href="/"
                  className={pathname === "/nippon" ? "actives" : ""}
                >
                  Nippon
                </Link>
              </span>
            </li>

            <li>
              <span>
                <Link
                  href="/"
                  className={pathname === "/berger" ? "actives" : ""}
                >
                  Berger
                </Link>
              </span>
            </li>
            <li>
              <span>
                {" "}
                <Link
                  href="/"
                  className={pathname === "/opus" ? "actives" : ""}
                >
                  Opus
                </Link>
              </span>
            </li>

            <li>
              <span>
                <Link
                  href="/"
                  className={pathname === "/yulu" ? "actives" : ""}
                >
                  Yulu
                </Link>
              </span>
            </li>
          </div>
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
          <Link
            href="/contact-us"
            className={pathname === "/contact-us" ? "active" : ""}
          >
            Contact Us
          </Link>
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
                href={`/`}
                onClick={hideSideBar}
                className={pathname === "/" ? "active" : ""}
              >
                Home
              </Link>{" "}
            </li>
            <li className="respDropdownList">
              <span>
                <Link href={"/services"}>Service</Link>
                <FaChevronRight
                  className="menuNavDropIcon"
                  onClick={() => toggleDropdown("service")}
                />
              </span>
              {activeDropdown === "service" && (
                <div className="respDropDown">
                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/home-painting-services-in-bangalore`}
                        className={
                          pathname === "/home-painting-services-in-bangalore"
                            ? "active"
                            : ""
                        }
                      >
                        Home Painting{" "}
                      </Link>
                    </span>
                  </li>

                  <li>
                    <span>
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/apartment-painting-services-in-bangalore`}
                        className={
                          pathname ===
                          "/apartment-painting-services-in-bangalore"
                            ? "active"
                            : ""
                        }
                      >
                        Apartment Painting{" "}
                      </Link>
                    </span>
                  </li>

                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/spray-painting-services-in-bangalore`}
                        className={
                          pathname === "/spray-painting-services-in-bangalore"
                            ? "active"
                            : ""
                        }
                      >
                        Spray Painting
                      </Link>
                    </span>
                  </li>

                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/1-day-express-painting-services-in-bangalore`}
                        className={
                          pathname ===
                          "/1-day-express-painting-services-in-bangalore"
                            ? "active"
                            : ""
                        }
                      >
                        1 Day Express Painting{" "}
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/1-day-express-painting-services-in-bangalore`}
                        className={
                          pathname ===
                          "/1-day-express-painting-services-in-bangalore"
                            ? "active"
                            : ""
                        }
                      >
                        Texture & Designer Walls
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/waterproofing-services-in-bangalore`}
                        className={
                          pathname === "/waterproofing-services-in-bangalore"
                            ? "active"
                            : ""
                        }
                      >
                        Waterproofing
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/commercial-painting-services-in-bangalore`}
                        className={
                          pathname ===
                          "/commercial-painting-services-in-bangalore"
                            ? "active"
                            : ""
                        }
                      >
                        Commercial Painting
                      </Link>
                    </span>
                  </li>
                </div>
              )}
            </li>
            <li className="respDropdownList">
              <span>
                Brand
                <FaChevronRight
                  className="menuNavDropIcon"
                  onClick={() => toggleDropdown("brand")}
                />
              </span>
              {activeDropdown === "brand" && (
                <div className="respDropDown">
                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/nippon`}
                        className={pathname === "/nippon" ? "active" : ""}
                      >
                        Nippon
                      </Link>
                    </span>
                  </li>

                  <li>
                    <span>
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/berger`}
                        className={pathname === "/berger" ? "active" : ""}
                      >
                        Berger
                      </Link>
                    </span>
                  </li>

                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/opus0`}
                        className={pathname === "/opus0" ? "active" : ""}
                      >
                        Opus
                      </Link>
                    </span>
                  </li>

                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/yulu`}
                        className={pathname === "/yulu" ? "active" : ""}
                      >
                        Yulu
                      </Link>
                    </span>
                  </li>
                </div>
              )}
            </li>
            <li className="respDropdownList">
              <span>
                Shades
                <FaChevronRight
                  className="menuNavDropIcon"
                  onClick={() => toggleDropdown("shades")}
                />
              </span>
              {activeDropdown === "shades" && (
                <div className="respDropDown">
                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/nippon`}
                        className={pathname === "/nippon" ? "active" : ""}
                      >
                        Nippon
                      </Link>
                    </span>
                  </li>

                  <li>
                    <span>
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/berger`}
                        className={pathname === "/berger" ? "active" : ""}
                      >
                        Berger
                      </Link>
                    </span>
                  </li>

                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/opus0`}
                        className={pathname === "/opus0" ? "active" : ""}
                      >
                        Opus
                      </Link>
                    </span>
                  </li>

                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/yulu`}
                        className={pathname === "/yulu" ? "active" : ""}
                      >
                        Yulu
                      </Link>
                    </span>
                  </li>
                </div>
              )}
            </li>
            <li className="">
              {" "}
              <Link
                id="menuNavLink"
                href={`/contact-us`}
                onClick={hideSideBar}
                className={pathname === "/contact-us" ? "active" : ""}
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

export default LpPaintMenu;
