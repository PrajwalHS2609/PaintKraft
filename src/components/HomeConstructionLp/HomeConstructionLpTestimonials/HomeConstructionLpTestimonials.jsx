"use client";

import React from "react";
import "./HomeConstructionLpTestimonials.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="testiContainer" id="testimonial">
      <div className="testiHeadContainer">
        <h2>
          CUSTOMER <span>TESTIMONIALS</span>
        </h2>
      </div>

      <div className="testiMainContainer">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
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
        </Carousel>
      </div>
    </div>
  );
};

export default HomeConstructionLpTestimonials;
