
import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="overflow-hidden space" id="about-sec">
      {/* Floating Shape */}
      <div
        className="shape-mockup about-bg-shape2-1 jump-reverse"
        data-top="10%"
        data-right="5%"
      >
        <img src="assets/img/shape/heart-shape1.png" alt="shape" />
      </div>

      <div className="container">
        <div className="row gx-60 gy-60 align-items-center">
          {/* Left Side Images */}
          <div className="col-xl-6 col-lg-10">
            <div className="img-box2">
              <div className="img1">
                <img src="uploads/Aboutpic3.png" style={{ width: "410px", height: "500px" }} alt="About" />
              </div>
              <div className="img2 jump">
                <img src="uploads/Aboutpic1.png" alt="About" />
              </div>

              <div
                className="img3 moving"
                data-mask-src="assets/img/normal/about_2_3-mask.png"
              >

                <img

                  data-mask-src="assets/img/normal/about_2_3-mask.png"
                  src="uploads/Aboutpic2.png" style={{ width: "357px", height: "231px" }}

                  data-mask-src="/assets/img/normal/about_2_3-mask.png"
                  src="uploads/Aboutpic2.png" style={{ width: "356px", height: "230px" }}

                  alt="About"
                />
              </div>


              {/* Decorative Shapes */}
              <div className="about-shape2-1 jump">
                <div className="color-masking">
                  {/* <div
                    className="masking-src"
                    data-mask-src="assets/img/shape/about_shape2_1.png"
                  ></div> */}
                  <img src="assets/img/shape/Mask group.png" alt="img" />
                </div>
              </div>
              <div className="about-shape2-2 jump-reverse">
                {/* <div className="color-masking2">
                  <div
                    className="masking-src"
                    data-mask-src="assets/img/shape/about_shape2_2.png"
                  ></div>
                  <img src="assets/img/shape/about_shape2_2.png" alt="img" />
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-xl-6">
            <div className="about-wrap2">
              <div className="title-area mb-35">
                <span className="sub-title after-none before-none">
                  Welcome to SEED
                </span>
                <h2 id="aboutheading" className="sec-title">
                  Social, Educational & Environmental Development Center
                </h2>
                <p className="mt-30 justify">
                  At SEED, we are committed to empowering communities by
                  fostering sustainable growth in three key areas: social
                  welfare, education, and environmental development. Our mission
                  is to nurture brighter futures through awareness, action, and
                  compassion, while building a society that thrives in harmony
                  with nature.
                </p>
              </div>

              {/* Features */}
              <div className="about-feature-grid">
                <div className="box-icon">
                  <img src="/uploads/development.png" alt="icon" />
                </div>
                <div className="media-body">
                  <h4 className="box-title">Social Development</h4>
                  <p className="box-text justify">
                    We work to uplift underprivileged communities through health
                    programs, women empowerment initiatives, and skill-building
                    workshops that promote equality and dignity for all.
                  </p>
                </div>
              </div>

              <div className="about-feature-grid">
                <div className="box-icon">
                  <img src="/uploads/educational-growth.png" alt="icon" />
                </div>
                <div className="media-body">
                  <h4 className="box-title">Educational Growth</h4>
                  <p className="box-text justify">
                    Our programs focus on providing quality education and
                    resources to children and youth, ensuring they have the
                    tools to build a better future for themselves and their
                    communities.
                  </p>
                </div>
              </div>

              <div className="about-feature-grid">
                <div className="box-icon">
                  <img src="/uploads/environmental-protection.png" alt="icon" />
                </div>
                <div className="media-body">
                  <h4 className="box-title">Environmental Care</h4>
                  <p className="box-text justify">
                    We work to protect our planet through tree plantations, clean-up drives, and promoting sustainable practices to ensure a healthier environment for future generations.
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="btn-wrap mt-40">

                <Link to="/about/overview" className="th-btn">Learn More About SEED <i className="fas fa-arrow-up-right ms-2"></i></Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
