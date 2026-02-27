"use client"
import React, { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import "./HomeTestimonialVid.css";

const videos = {
  Vid1: "https://www.youtube.com/embed/veZgIP79-yw",
  Vid2: "https://www.youtube.com/embed/kvHBOCvuHpo",
  Vid3: "https://www.youtube.com/embed/T2bZ0coTQ9c",
  Vid4: "https://www.youtube.com/embed/OSLd2aJXzDE",
  Vid5: "https://www.youtube.com/embed/r9mPYPfi0Z8",
  Vid6: "https://www.youtube.com/embed/nqt9gIR3Uak",
};
const HomeTestimonialVid = () => {
  const [activeVideo, setActiveVideo] = useState("Vid1");

  return (
    <div className="testimonial-container">
      <div className="testimonial-heading">
        {" "}
        <h2>Voices of Our Customers </h2>
        <p>
          Real experiences and honest feedback from customers who trust our
          quality, service, and professional commitment every time.
        </p>
      </div>
      <br />
      <div className="testimonial-content">
        <div className="testimonial-vidWrapper">
          <iframe
            src={videos[activeVideo]}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="testimonial-content">
        <div className="testimonial-icons">
          {Object.keys(videos).map((videoKey) => (
            <div
              key={videoKey}
              className={`testimonial-item ${
                activeVideo === videoKey ? "active" : ""
              }`}
              onClick={() => setActiveVideo(videoKey)}
            >
              <FaRegCirclePlay className="testimonial-icon" />
              <p>{videoKey}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonialVid;
