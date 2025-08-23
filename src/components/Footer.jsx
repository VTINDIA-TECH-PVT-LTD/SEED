import React from "react";
import { Link } from "react-router-dom";
import seedLogo from "../assets/seedlogo.png";


export default function Footer() {
  return (
    <footer
      className="footer-wrapper footer-default"
      data-bg-src="assets/img/bg/footer-default-bg-mask.png"
    >
      <div
        className="footer-bg-shape2 shape-mockup jump"
        data-top="20%"
        data-right="0"
      >
        <img src="assets/img/shape/footer-bg-shape3.png" alt="img" />
      </div>
      <div
        className="footer-bg-shape3 shape-mockup d-none"
        data-bottom="0"
        data-right="0"
      >
        <img src="assets/img/shape/footer-bg-shape2.png" alt="img" />
      </div>


      {/* Widgets */}
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <Link to="/">
                      <img src={seedLogo} alt="SEED" />
                    </Link>
                  </div>
                  <p className="about-text" id="footertext">
                    SEED (Social, Educational and Environmental Development
                    Centre) works for social welfare, education, environment
                    awareness, and empowerment through various programs and
                    activities.
                  </p>
                  {/* <Link to="/contact" className="th-btn">
                    <i className="fas fa-heart me-2"></i> Donate Now
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <ul className="menu">
                  <li>
                    <Link to="/about/overview">About Us</Link>
                  </li>
                  <li>
                    <Link to="/programs">Annual Reports</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/news-events">News & Events</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Activities</h3>
                <ul className="menu">
                  <li><Link to="/programs/human-rights">Human Rights Awareness</Link></li>
                  <li><Link to="/programs/swachh-bharat">Swachh Bharat Abhiyan</Link></li>
                  <li><Link to="/programs/women-empowerment">Women Empowerment</Link></li>
                  <li><Link to="/programs/skill-development">Skill Development</Link></li>
                  <li><Link to="/programs/cultural">Cultural Programs</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <div className="th-widget-contact">
                  <h3 className="widget_title">Contact Us</h3>

                  <div className="info-card">
                    <div className="box-icon"><i className="fal fa-phone"></i></div>
                    <div className="box-content">
                      <p className="box-text">Call us any time:</p>
                      <h4 className="box-title">
                        <a id="footertel" href="tel:+919437314152">+91 9437314152</a>
                      </h4>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="box-icon"><i className="fal fa-envelope-open"></i></div>
                    <div className="box-content">
                      <p className="box-text">Email us any time:</p>
                      <h4 className="box-title">
                        <a id="footermail" href="mailto:seedodisha1971@gmail.com">
                          seedodisha1971@gmail.com
                        </a>
                      </h4>
                    </div>
                  </div>

                  <div className="th-social style2">
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-wrap">
        <div className="container">
          <p className="copyright-text text-center">
            <i className="fal fa-copyright"></i> Copyright 2025{" "}
            <Link to="/">SEED</Link>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}