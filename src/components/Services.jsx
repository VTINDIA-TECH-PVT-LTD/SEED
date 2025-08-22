// src/components/Services.jsx
import React from "react";

const Services = () => {
  return (
    <section
      className="service-area-3 space bg-smoke3 overflow-hidden"
      id="service-sec"
    >
      {/* Left Shape */}
      <div
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
      </div>

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
              <span className="sub-title">Our Best Services</span>
              <h2 className="sec-title">
                We provide this life's service to the poor.
              </h2>
            </div>
          </div>
        </div>

        <div className="row gy-30 gx-30 justify-content-center">
          {/* Service Card 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="service-card style3">
              <div className="box-thumb">
                <img
                  src="assets/img/service/service_card_3_1.png"
                  alt="icon"
                />
              </div>
              <div className="box-icon">
                <img
                  src="assets/img/icon/service-icon/service-card-icon1-1.svg"
                  alt="Icon"
                />
              </div>
              <div className="box-content">
                <h3 className="box-title">
                  <a href="about.html">Fund Poor Raised</a>
                </h3>
                <p className="box-text">
                  Share stories and experiences from current volunteers to
                  inspire others to join.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="service-card style3">
              <div className="box-thumb">
                <img
                  src="assets/img/service/service_card_3_2.png"
                  alt="icon"
                />
              </div>
              <div className="box-icon">
                <img
                  src="assets/img/icon/service-icon/service-card-icon1-3.svg"
                  alt="Icon"
                />
              </div>
              <div className="box-content">
                <h3 className="box-title">
                  <a href="about.html">Money This Treatment</a>
                </h3>
                <p className="box-text">
                  Share stories and experiences from current volunteers to
                  inspire others to join.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="service-card style3">
              <div className="box-thumb">
                <img
                  src="assets/img/service/service_card_3_3.png"
                  alt="icon"
                />
              </div>
              <div className="box-icon">
                <img
                  src="assets/img/icon/service-icon/service-card-icon1-2.svg"
                  alt="Icon"
                />
              </div>
              <div className="box-content">
                <h3 className="box-title">
                  <a href="about.html">Child Education Raised</a>
                </h3>
                <p className="box-text">
                  Share stories and experiences from current volunteers to
                  inspire others to join.
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
