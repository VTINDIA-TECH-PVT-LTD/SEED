import React from "react";
import { Link } from "react-router-dom";
import InnerPageBanner from "../components/InnerPageBanner";
import bannerImage from "../assets/innerbanner.png";

export default function Overview() {
  return (
    <>

       <style>
        {`
          .widget-area {
            padding-top: 40px;
            padding-bottom: 0px;
          }
        `}
      </style>


      <InnerPageBanner
        title="About Us"
        background={bannerImage}
        breadcrumb="About Us"
      />

      {/* 1st Part */}
      <section className="space-top">
  <div className="container">
    <div className="row gy-4 justify-content-center">
      
      {/* Feature 1 */}
      <div className="col-lg-3 col-md-6">
        <div className="feature-card">
          
          <div className="box-icon">
            <img src="/uploads/technology.png" alt="icon" />
          </div>
          <h3 className="box-title" id="overviewcardtitle">Education for All</h3>
          <p className="box-text justify">
            We work to ensure access to quality education for children and youth, empowering them for a brighter future.
          </p>
          {/* <a className="link-btn style2" href="/about">
            View Details <i className="fa-solid fa-arrow-up-right ms-2"></i>
          </a> */}
        </div>
      </div>

      {/* Feature 2 */}
      <div className="col-lg-3 col-md-6">
        <div className="feature-card">
          
          <div className="box-icon">
            <img src="/uploads/healthcare.png" alt="icon" />
          </div>
          <h3 className="box-title">Health & Nutrition</h3>
          <p className="box-text justify">
            Providing healthcare support, awareness camps, and nutrition programs for underprivileged communities.
          </p>
          {/* <a className="link-btn style2" href="/about">
            View Details <i className="fa-solid fa-arrow-up-right ms-2"></i>
          </a> */}
        </div>
      </div>

      {/* Feature 3 */}
      <div className="col-lg-3 col-md-6">
        <div className="feature-card">
          
          <div className="box-icon">
            <img src="/uploads/woman.png" alt="icon" />
          </div>
          <h3 className="box-title">Women Empowerment</h3>
          <p className="box-text justify">
            Empowering women through skill development, self-help groups, and leadership opportunities.
          </p>
          {/* <a className="link-btn style2" href="/about">
            View Details <i className="fa-solid fa-arrow-up-right ms-2"></i>
          </a> */}
        </div>
      </div>

      {/* Feature 4 */}
      <div className="col-lg-3 col-md-6">
        <div className="feature-card">
          
          <div className="box-icon">
            <img src="/uploads/mother-earth-day.png" alt="icon" />
          </div>
          <h3 className="box-title">Environment Protection</h3>
          <p className="box-text justify">
            Promoting sustainability through tree plantation, clean-up drives, and climate awareness programs.
          </p>
          {/* <a className="link-btn style2" href="/about">
            View Details <i className="fa-solid fa-arrow-up-right ms-2"></i>
          </a> */}
        </div>
      </div>

    </div>
  </div>
</section>



      {/* 2nd Part */}
      <div className="overflow-hidden space" id="about-sec">
        {/* Shapes */}
        <div
          className="shape-mockup about-bg-shape2-1 jump-reverse d-lg-inline-block d-none"
          data-top="10%"
          data-right="5%"
        >
          <img src="/assets/img/shape/heart-shape1.png" alt="shape" />
        </div>

        <div
          className="shape-mockup about-bg-shape3-1 jump"
          data-bottom="20%"
          data-right="5%"
        >
          <div className="color-masking2">
            <div
              className="masking-src"
              data-mask-src="/assets/img/shape/about_shape3_1.png"
            ></div>
            <img src="/assets/img/shape/about_shape3_1.png" alt="img" />
          </div>
        </div>

        <div className="container">
          <div className="row gy-60 align-items-center">
            {/* Left Image Section */}
            <div className="col-xl-6">
              <div className="img-box3">
                <div className="img1">
                  <img src="/uploads/about2.jpg" alt="About" />
                </div>
                <div className="img2 jump">
                  <img src="/uploads/about1.png" alt="img" />
                </div>
                <div className="about-shape3-1 jump-reverse">
                  <div className="color-masking2">
                    <div
                      className="masking-src"
                      data-mask-src="/assets/img/shape/about_shape1_1.png"
                    ></div>
                    <img src="/assets/img/shape/about_shape1_1.png" alt="img" />
                  </div>
                </div>
                <div className="year-counter movingX">
                  <div className="year-counter_number">
                    <span className="counter-number justify">SEED</span> Serving Society Through Education and Development
                  </div>
                 
                </div>
              </div>
            </div>

            {/* Right Text Section */}
            <div className="col-xl-6">
              <div className="title-area mb-40">
                <span className="sub-title after-none before-none">
                  <i className="text-theme far fa-heart"></i> About SEED
                </span>
                <h2 id="overviewheading" className="sec-title">
                  Empowering Lives Through Education, Equality & Environment
                </h2>
                <p className="justify">
                  SEED (Social, Educational and Environmental Development Centre) is committed to building an inclusive society where education, equality, and sustainability thrive. We work tirelessly to uplift marginalized communities, protect the environment, and empower individuals through social and educational initiatives.
                </p>
              </div>
              <div className="about-wrap3">
                <p className="mb-30 justify">
                  From grassroots programs to large-scale awareness campaigns,
                  SEED focuses on creating lasting impact. We believe every
                  individual deserves access to education, health, and a clean
                  environment. Together, we can create a better tomorrow.
                </p>
                <div className="about-feature-grid">
                  <div className="box-icon">
                   <img src="/uploads/success.png" alt="icon" />
                  </div>
                  <div className="media-body">
                    <h4 className="box-title">Our Success</h4>
                    <p className="box-text justify">
                    Our success lies in empowering communities through education, social welfare, environmental awareness, and sustainable development initiatives.
                    </p>
                  </div>
                </div>
                {/* <div className="btn-wrap mt-40">
                  <Link to="/about" className="th-btn style3 style-radius">
                    Learn More <i className="fa-solid fa-arrow-up-right ms-2"></i>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
