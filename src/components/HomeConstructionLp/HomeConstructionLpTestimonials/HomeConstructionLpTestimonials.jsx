"use client";

import React from "react";
import "./HomeConstructionLpTestimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* Move components OUTSIDE */

const SampleNextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: "#ff22313a",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        height: "40px",
        width: "40px",
        cursor: "pointer",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: "#ff22313a",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        height: "40px",
        width: "40px",
        cursor: "pointer",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
};

const HomeConstructionLpTestimonials = () => {
  const testimonials = [
    {
      text: `I had the pleasure of working with Paintkraft on a multistory
        project. The team was incredibly knowledgeable, experienced, and
        professional from start to finish. They brought my vision to life, and
        the final result exceeded all my expectations. Throughout the process,
        the director, Mr. SriHarsha, kept me informed, addressed all my
        questions, and promptly resolved any issues. The construction crew was
        quick, courteous, and consistently maintained a neat and organized
        workspace, ensuring minimal disruption to my daily routine.`,
      name: "Dr. Srinivas Prasad R.H",
    },
    {
      text: `Thank you for building our dream home. The project was managed professionally, with everything organized and on track. We received excellent support with paperwork and administrative procedures. If you're looking for exceptional quality, outstanding customer service, and a commitment to innovation, Paintkraft is the company for you. Their expertise and attention to detail ensure that your new home will be built to the highest standards, with your satisfaction as their top priority.`,
      name: "Amith",
    },
    {
      text: `We contacted them for the interior work of our house. They understood our requirements, provided designs accordingly, and executed the final work precisely as we envisioned.`,
      name: "Ravichandra",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testiContainer" id="testimonial">
      <div className="testiHeadContainer">
        <h2>
          CUSTOMER <span>TESTIMONIALS</span>
        </h2>
      </div>

      <div className="testiMainContainer">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div className="testiMainContent" key={index}>
              <div className="testimonialCardContainer">
                <p>
                  {item.text}
                  <br /> <br />
                  <h4>- {item.name}</h4>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeConstructionLpTestimonials;
