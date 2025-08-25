import React from "react";
import { Link } from "react-router-dom";
import InnerPageBanner from "../components/InnerPageBanner";
import bannerImage from "../assets/teambanner.jpg";

export default function Team() {
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
        title="Our Team"
        background={bannerImage}
        breadcrumb="Our Team"
      />
<section className="space" id="team-sec">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title after-none before-none">
            <i className="far fa-heart text-theme"></i> Our Team
          </span>
          <h2 className="sec-title">Meet the Helping Hearts</h2>
        </div>

        <div className="row gy-40">
          {/* Single Item */}
          <div className="col-lg-3 col-md-6">
            <div className="th-team team-card3">
              <div className="team-img">
                <img src="/uploads/noimage.jpg" alt="Team" />
              </div>
              <div className="team-card-content">
                <h3 className="box-title">
                  <Link to="/team-details"> Name</Link>
                </h3>
                <span className="team-desig">Designation</span>
                <div className="th-social style2">
                  <a target="_blank" rel="noreferrer" href="https://facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                 
                </div>
              </div>
            </div>
          </div>

          {/* Repeat for all other team members */}
          <div className="col-lg-3 col-md-6">
            <div className="th-team team-card3">
              <div className="team-img">
                <img src="/uploads/noimage.jpg" alt="Team" />
              </div>
              <div className="team-card-content">
                <h3 className="box-title">
                  <Link to="/team-details">Name </Link>
                </h3>
                <span className="team-desig">Designation</span>
                <div className="th-social style2">
                  <a target="_blank" rel="noreferrer" href="https://facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Daniel Thomas */}
          <div className="col-lg-3 col-md-6">
            <div className="th-team team-card3">
              <div className="team-img">
                <img src="/uploads/noimage.jpg" alt="Team" />
              </div>
              <div className="team-card-content">
                <h3 className="box-title">
                  <Link to="/team-details">Name </Link>
                </h3>
                <span className="team-desig">Designation</span>
                <div className="th-social style2">
                  <a target="_blank" rel="noreferrer" href="https://facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Michel Vetory */}
          <div className="col-lg-3 col-md-6">
            <div className="th-team team-card3">
              <div className="team-img">
                <img src="/uploads/noimage.jpg" alt="Team" />
              </div>
              <div className="team-card-content">
                <h3 className="box-title">
                  <Link to="/team-details">Name </Link>
                </h3>
                <span className="team-desig">Designation</span>
                <div className="th-social style2">
                  <a target="_blank" rel="noreferrer" href="https://facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Emma Mary */}
          <div className="col-lg-3 col-md-6">
            <div className="th-team team-card3">
              <div className="team-img">
                <img src="/uploads/noimage.jpg" alt="Team" />
              </div>
              <div className="team-card-content">
                <h3 className="box-title">
                  <Link to="/team-details">Name </Link>
                </h3>
                <span className="team-desig">Designation</span>
                <div className="th-social style2">
                  <a target="_blank" rel="noreferrer" href="https://facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Alexander Joseph */}
          <div className="col-lg-3 col-md-6">
            <div className="th-team team-card3">
              <div className="team-img">
                <img src="/uploads/noimage.jpg" alt="Team" />
              </div>
              <div className="team-card-content">
                <h3 className="box-title">
                  <Link to="/team-details">Name </Link>
                </h3>
                <span className="team-desig">Designation</span>
                <div className="th-social style2">
                  <a target="_blank" rel="noreferrer" href="https://facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Olivia Patricia */}
          <div className="col-lg-3 col-md-6">
            <div className="th-team team-card3">
              <div className="team-img">
                <img src="/uploads/noimage.jpg" alt="Team" />
              </div>
              <div className="team-card-content">
                <h3 className="box-title">
                  <Link to="/team-details">Name</Link>
                </h3>
                <span className="team-desig">Designation</span>
                <div className="th-social style2">
                  <a target="_blank" rel="noreferrer" href="https://facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Ethan David */}
          <div className="col-lg-3 col-md-6">
            <div className="th-team team-card3">
              <div className="team-img">
                <img src="/uploads/noimage.jpg" alt="Team" />
              </div>
              <div className="team-card-content">
                <h3 className="box-title">
                  <Link to="/team-details">Name </Link>
                </h3>
                <span className="team-desig">Designation</span>
                <div className="th-social style2">
                  <a target="_blank" rel="noreferrer" href="https://facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}
