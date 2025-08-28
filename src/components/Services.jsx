// src/components/Services.jsx
import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      {/* Inline CSS for Notice Board */}
      <style>
{`
/* Notice Card Styling */
.notice-card {
  border: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 12px;
  overflow: hidden;
  background: #fefefe;
}

/* Header */
.notice-header {
  background: linear-gradient(135deg, #4fad0a);
  color: #fff;
  padding: 12px 15px;
  font-weight: 600;
  text-align: center;
  font-size: 18px;
  letter-spacing: 0.5px;
}

/* Notice list container */
.notice-box {
  height: 380px;
  overflow: hidden;
  padding: 12px;
  background: #f9fafb;
}

/* Scrolling effect */
.notice-list {
  animation: scrollUp 15s linear infinite;
  margin: 0;
  padding: 0;
}

.notice-box:hover .notice-list {
  animation-play-state: paused;
}

@keyframes scrollUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
}

/* Notice item */
.notice-list li {
  background: #fff;
  margin-bottom: 10px;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  list-style: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.notice-list li:hover {
  transform: scale(1.02);
  box-shadow: 0 3px 8px rgba(0,0,0,0.12);
}

/* Highlight date */
.notice-list .date {
  background: #aa0505;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 6px;
  min-width: 60px;
  text-align: center;
  flex-shrink: 0;
}
`}
</style>


      <section
        className="service-area-3 space bg-smoke3 overflow-hidden"
        id="service-sec"
      >
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
                  <img
                    style={{ height: "308px" }}
                    src="uploads/mission.jpg"
                    alt="About SEED"
                  />
                </div>
                <div className="box-icon">
                  <img
                    src="uploads/missionicon.png"
                    alt="About Icon"
                  />
                </div>
                <div className="box-content">
                  <h3 className="box-title">
                    <Link to="/about/overview">Mission </Link>
                  </h3>
                  <p className="box-text justify">
                  To uplift communities by focusing on social welfare,
                    providing access to education, and ensuring essential
                    services that foster dignity and growth for all.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 2 - Mission */}
            <div className="col-lg-4 col-md-6">
              <div className="service-card style3">
                <div className="box-thumb">
                  <img
                    src="uploads/vision.png"
                    style={{ width: "409px", height: "307px" }}
                    alt="Mission"
                  />
                </div>
                <div className="box-icon">
                  <img src="/uploads/visionicon.png" alt="Mission Icon" />
                </div>
                <div className="box-content">
                  <h3 className="box-title">
                    <Link to="/about/vision-mission"> Vision</Link>
                  </h3>
                  <p className="box-text justify">
                  To build a society where every individual has access to education, social equality, and sustainable services, creating harmony between people and nature.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 3 - Notice Board */}
           {/* Service Card 3 - Notice Board */}
<div className="col-lg-4 col-md-6">
  <div className="service-card style3 notice-card">
    <div className="notice-header">
      <span role="img" aria-label="notice">📢</span> News & Events
    </div>
    <div className="notice-box">
      <ul className="notice-list">
        <li><span className="date">Sept 10</span> Scholarship applications deadline</li>
        <li><span className="date">Sept 15</span> Annual sports meet</li>
        <li><span className="date">Sept 5</span> Teacher’s Day celebration</li>
        <li><span className="date">Oct 1</span> Mid-term exams start</li>
        <li><span className="date">Nov 20</span> Cultural Fest</li>
      </ul>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Services;














