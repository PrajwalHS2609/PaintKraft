"use client";

import React from "react";
import "./HomeConstructionLpTestimonials.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeConstructionLpTestimonials = () => {
  const testimonials = [
    {
      text: `Red Hills Infra delivered our dream home exactly the way we imagined. The construction quality, planning, and project execution were outstanding from start to finish.`,
      name: "Karthik R",
      loc: "JP Nagar",
    },
    {
      text: `We are extremely satisfied with the professionalism shown by Red Hills Infra. Their team maintained transparency throughout the project and completed the work within the promised timeline.`,
      name: "Divya Shetty",
      loc: "Yelahanka",
    },
    {
      text: `Choosing Red Hills Infra was one of the best decisions for our home construction project. Their attention to detail and modern design ideas truly impressed our family.`,
      name: "Sandeep Gowda",
      loc: "Kanakapura Road",
    },
    {
      text: `The entire experience with Red Hills Infra was smooth and stress-free. Their engineers and support staff were very responsive and ensured quality work at every stage.`,
      name: "Pooja Nair",
      loc: "Whitefield",
    },
    {
      text: `Red Hills Infra transformed our vision into reality with excellent craftsmanship and professional project management. Highly recommended for anyone planning home construction in Bangalore.`,
      name: "Rohith Kumar",
      loc: "HSR Layout",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,

    // Desktop
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 4000,

    arrows: false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
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
            <div key={index}>
              <div className="testiMainContent">
                <div className="testimonialCardContainer">
                  <p>{item.text}</p>

                  <div className="testimonialCardContainer-name">
                    <h4>— {item.name}</h4>
                    <h6>{item.loc}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeConstructionLpTestimonials;