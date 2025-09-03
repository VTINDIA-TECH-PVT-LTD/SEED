import React from "react";
import chairmanImg from "/uploads/noimage.jpg"; // 👈 replace with your chairman image path
import { Link } from "react-router-dom"; // if you want navigation

const ChairmanSection = () => {
  return (
    <section className="container my-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-7">
          <div className="title-area text-center">
            <span className="sub-title">Chairman’s Desk</span>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        {/* Left side - Image */}
        <div className="col-md-7">
          <h2 className="fw-bold text-success mb-3">
            From the Chairman’s Desk
          </h2>
          <p style={{ textAlign: "justify", lineHeight: "1.7" }}>
            SEED’s commitment to needy people over the last couple of years is a
            testimony of our resolve to ensure that every people are given an
            opportunity to live a decent life which every human being rightfully
            deserves.
            <br />
            SEED has undertaken a series of programme for realizing
            gender-violence-free society. The model-of-change focusing on
            individual transformation to collectivization, leading to actions
            for social change by Young Leaders remain at the core of each
            programme.
          </p>
          <Link to="/about/chairman-desk" className="th-btn">Read More<i className="fas fa-arrow-up-right ms-2"></i></Link>
        </div>
        {/* Right side - Content */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src={chairmanImg}
            alt="Chairman"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>

      </div>
    </section>
  );
};

export default ChairmanSection;
