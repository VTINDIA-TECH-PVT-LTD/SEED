// src/components/Services.jsx
import React from "react";

const Services = () => {
  return (
    <section
      className="service-area-3 space bg-smoke3 overflow-hidden"
      id="service-sec"
    >
      {/* Left Shape */}
      {/* <div
        className="shape-mockup service-shape-3-1 jump d-lg-block d-none"
        data-left="3%"
        data-top="15%"
      >
        <div className="color-masking">
          <div
            className="masking-src bg-mask"
            data-mask-src="assets/img/hero/hero-bg-shape2-1.png"
          ></div>
          <img src="assets/img/hero/hero-bg-shape2-1.png" alt="shape" />
        </div>
      </div> */}

      {/* Right Shape */}
      <div
        className="shape-mockup service-shape-3-2 jump-reverse d-lg-block d-none"
        data-right="3%"
        data-bottom="5%"
      >
        <img src="assets/img/shape/service_bg_shape4_1.png" alt="shape" />
      </div>

      {/* Content */}
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-7">
            <div className="title-area text-center">
              <span className="sub-title">Our Mission & Vision</span>
              <h2 id="serviceheading" className="sec-title">
                Building a Better Future through Education and Service
              </h2>
            </div>
          </div>
        </div>

        <div className="row gy-30 gx-30 justify-content-center">
          {/* Service Card 1 - About */}
          <div className="col-lg-4 col-md-6">
            <div className="service-card style3">
              <div className="box-thumb">
                <img style={{ height: "308px" }}  src="uploads/Aboutpic1.png" alt="About SEED" />
              </div>
              <div className="box-icon">
                <img 
                  src="assets/img/icon/service-icon/service-card-icon1-2.svg"
                  alt="About Icon"
                />
              </div>
              <div className="box-content">
                <h3 className="box-title">
                  <a href="about.html">About Us</a>
                </h3>
                <p className="box-text">
                  SEED is dedicated to creating lasting change through social empowerment, 
                  educational opportunities, and sustainable services for underprivileged communities.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 2 - Mission */}
          <div className="col-lg-4 col-md-6">
            <div className="service-card style3">
              <div className="box-thumb">
                <img src="uploads/mission.jpg" style={{ width: "409px", height: "307px" }} alt="Mission" />
              </div>
              <div className="box-icon">
                <img
                  src="assets/img/icon/service-icon/service-card-icon1-2.svg"
                  alt="Mission Icon"
                />
              </div>
              <div className="box-content">
                <h3 className="box-title">
                  <a href="about.html">Our Mission</a>
                </h3>
                <p className="box-text">
                  To uplift communities by focusing on social welfare, 
                  providing access to education, and ensuring essential 
                  services that foster dignity and growth for all.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 3 - Vision */}
          <div className="col-lg-4 col-md-6">
            <div className="service-card style3">
              <div className="box-thumb">
                <img src="uploads/vision.png" style={{ width: "409px", height: "307px" }} alt="Vision" />
              </div>
              <div className="box-icon">
                <img
                  src="assets/img/icon/service-icon/service-card-icon1-2.svg"
                  alt="Vision Icon"
                />
              </div>
              <div className="box-content">
                <h3 className="box-title">
                  <a href="about.html">Our Vision</a>
                </h3>
                <p className="box-text">
                  To build a society where every individual has access to 
                  education, social equality, and sustainable services, 
                  creating harmony between people and nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
