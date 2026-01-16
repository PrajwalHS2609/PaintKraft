"use client";
import React, { useState } from "react";
import "./../PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import rating from "@/images/rating.png";
import ramesh from "@/images/CoimbatoreTestimonial/Ramesh K.png";
import arun from "@/images/CoimbatoreTestimonial/Arun M.png";
import lakshmi from "@/images/CoimbatoreTestimonial/Lakshmi R.png";
import priya from "@/images/CoimbatoreTestimonial/Priya S.png";
import suresh from "@/images/CoimbatoreTestimonial/suresh.png";

const LpCoimbatoreTestimonial = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="lpPaintTestimonial-container">
      <div className="lpPaintTestimonial-heading">
        <h2>Our Satisfied Customers</h2>
        <p>Hear Their Stories and Experiences</p>
      </div>
      <div className="lpPaintTestimonial-carouselWrapper">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="lpPaintTestimonial-carouselContainer"
        >
          <Carousel.Item className="lpPaintTestimonial-carouselItem">
            <div className="lpPaintTestimonial-wrapper">
              <div className="lpPaintTestimonial-content">
                <Image src={ramesh} alt="ramesh" />
                <div className="lpPaintTestimonial-text">
                  <Image src={rating} alt="rating" />
                  <p>
                    Paintkraft delivered excellent home painting service in
                    Coimbatore. The finish was smooth, the team was punctual,
                    and the house looks completely refreshed. Highly satisfied
                    with their professionalism.
                  </p>
                  <h3>- Ramesh K</h3>
                  <h4>Coimbatore</h4>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="lpPaintTestimonial-carouselItem">
            <div className="lpPaintTestimonial-wrapper">
              <div className="lpPaintTestimonial-content">
                <Image src={priya} alt="priya" />
                <div className="lpPaintTestimonial-text">
                  <Image src={rating} alt="rating" />
                  <p>
                    We chose Paintkraft for home painting and it was the right
                    decision. They helped with color selection, maintained
                    cleanliness, and completed the work on time. Truly reliable
                    service.
                  </p>
                  <h3>- Priya S</h3>
                  <h4>RS Puram ,Coimbatore</h4>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="lpPaintTestimonial-carouselItem">
            <div className="lpPaintTestimonial-wrapper">
              <div className="lpPaintTestimonial-content">
                <Image src={arun} alt="arun" />
                <div className="lpPaintTestimonial-text">
                  <Image src={rating} alt="rating" />
                  <p>
                    Outstanding home painting service by Paintkraft. The
                    painters were skilled, polite, and detail-oriented. The
                    quality exceeded our expectations. Would definitely
                    recommend them in Coimbatore
                  </p>
                  <h3>- Arun M</h3>
                  <h4>Peelamedu ,Coimbatore</h4>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="lpPaintTestimonial-carouselItem">
            <div className="lpPaintTestimonial-wrapper">
              <div className="lpPaintTestimonial-content">
                <Image src={lakshmi} alt="lakshmi" />
                <div className="lpPaintTestimonial-text">
                  <Image src={rating} alt="rating" />
                  <p>
                    Paintkraft transformed our home beautifully. From
                    consultation to final touch-ups, everything was handled
                    professionally. One of the best home painting services in
                    Coimbatore.
                  </p>
                  <h3>- Lakshmi R</h3>
                  <h4>Saibaba Colony ,Coimbatore</h4>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="lpPaintTestimonial-carouselItem">
            <div className="lpPaintTestimonial-wrapper">
              <div className="lpPaintTestimonial-content">
                <Image src={suresh} alt="suresh" />
                <div className="lpPaintTestimonial-text">
                  <Image src={rating} alt="rating" />
                  <p>
                    Very smooth and hassle-free experience with Paintkraft.
                    Premium materials, clean execution, and great results. If
                    you’re looking for home painting service in Coimbatore,
                    they’re the best.
                  </p>
                  <h3>- Suresh V</h3>
                  <h4>Gandhipuram ,Coimbatore</h4>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <span id="contact-us"></span>
      </div>
    </div>
  );
};

export default LpCoimbatoreTestimonial;
