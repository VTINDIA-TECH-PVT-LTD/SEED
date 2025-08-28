import React from "react";
import { Link } from "react-router-dom";
import InnerPageBanner from "../components/InnerPageBanner";
import bannerImage from "../assets/missionbanner.jpg";

export default function Vision_mission() {
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
        title="Mission & Vision"
        background={bannerImage}
        breadcrumb="Mission & Vision"
      />

<div className="story-area-1 overflow-hidden space">
      <div className="container">
        <div className="row gy-40 justify-content-between flex-row-reverse align-items-center">
          {/* Left Section - Image & Card */}
          <div className="col-xl-7">
            <div className="story-img-box1">
              <div className="box-wrap d-inline-block">
                <div className="img1">
                  <img src="/uploads/vissioninner.jpg" alt="img" />
                </div>
                <div className="story-shape1-1 jump-reverse">
                  <img src="/assets/img/shape/story_shape1_1.png" alt="img" />
                </div>
                <div className="story-card movingX">
                  <h5 className="box-title">Empowered Lives</h5>
                  <p className="box-text">
                  mpowering people today, creating sustainable communities for tomorrow.
                  </p>
                  <div
                    className="quote-icon"
                    data-mask-src="/assets/img/icon/quote.svg"
                  ></div>
                </div>
                <div className="year-counter">
                  <p className="year-counter_text">
                    Years of <span></span>
                  </p>
                  <div className="year-counter_number">
                    <span className="counter-number"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="col-xl-5">
            <div className="story-wrap1">
              <div className="title-area mb-0">
                <span className="sub-title before-none">our Mission</span>
                <h2
  className="sec-title"
  style={{ fontSize: "30px", fontWeight: "bold" }}
>
  Empowering Communities Through Sustainable Development
</h2>

<p
  className="mt-30"
  style={{ textAlign: "justify" }}
>
  SEED’s mission is to promote education, social welfare, and environmental
  sustainability through innovative programs and community-driven initiatives.
  We strive to empower marginalized groups, build skills, and encourage
  participation for sustainable development. By fostering awareness and
  collective responsibility, we work to transform lives and build a stronger,
  equitable society.
</p>

              
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
    </>
  );
}
