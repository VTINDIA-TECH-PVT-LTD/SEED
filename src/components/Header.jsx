import React, { useState } from "react";
import { Link } from "react-router-dom";
import seedLogo from "../assets/seedlogo6.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // ✅ track submenu

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className={`th-menu-wrapper ${menuOpen ? "th-body-visible" : ""}`}>
        <div className="th-menu-area text-center">
          {/* Close Button */}
          <button className="th-menu-toggle" onClick={() => setMenuOpen(false)}>
            <i className="fal fa-times"></i>
          </button>

          {/* Mobile Logo */}
          <div className="mobile-logo text-center">
            <Link to="/">
              <img
                src={seedLogo}
                alt="SEED Logo"
                className="h-12 w-auto mx-auto object-contain"
                style={{ maxHeight: "60px" }}
              />
            </Link>
          </div>

          {/* ✅ Mobile Navigation with Toggle */}
          <div className="th-mobile-menu">
            <ul>
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>

              {/* About Us */}
              <li
                className={`menu-item-has-children ${
                  openSubmenu === "about" ? "th-active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSubmenu("about");
                  }}
                >
                  About Us <span className="th-mean-expand"></span>
                </a>
                <ul
                  className="sub-menu"
                  style={{
                    display: openSubmenu === "about" ? "block" : "none",
                  }}
                >
                  <li>
                    <Link
                      to="/about/overview"
                      onClick={() => setMenuOpen(false)}
                    >
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/vision-mission"
                      onClick={() => setMenuOpen(false)}
                    >
                      Vision & Mission
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/registration"
                      onClick={() => setMenuOpen(false)}
                    >
                      Registration Details
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/team" onClick={() => setMenuOpen(false)}>
                      Team & Members
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/chairman-desk" onClick={() => setMenuOpen(false)}>
                      Chairmandesk
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Programs */}
              <li
                className={`menu-item-has-children ${
                  openSubmenu === "programs" ? "th-active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSubmenu("programs");
                  }}
                >
                  Programs & Activities <span className="th-mean-expand"></span>
                </a>
                <ul
                  className="sub-menu"
                  style={{
                    display: openSubmenu === "programs" ? "block" : "none",
                  }}
                >
                  <li>
                    <Link to="/programs/human-rights">
                      Human Rights Awareness
                    </Link>
                  </li>
                  <li>
                    <Link to="/programs/swachh-bharat">
                      Swachh Bharat Abhiyan
                    </Link>
                  </li>
                  <li>
                    <Link to="/programs/women-empowerment">
                      Women Empowerment
                    </Link>
                  </li>
                  <li>
                    <Link to="/programs/skill-development">
                      Skill Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/programs/cultural">Cultural Programs</Link>
                  </li>
                  <li>
                    <Link to="/programs/education-scst">
                      Education for SC/ST Girls
                    </Link>
                  </li>
                  <li>
                    <Link to="/programs/environment">
                      Environment Awareness
                    </Link>
                  </li>
                  <li>
                    <Link to="/programs/sports">Sports Development</Link>
                  </li>
                  <li>
                    <Link to="/programs/health-camps">Health Camps</Link>
                  </li>
                </ul>
              </li>

              <li
                className={`menu-item-has-children ${
                  openSubmenu === "reports" ? "th-active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSubmenu("reports");
                  }}
                >
                  Reports <span className="th-mean-expand"></span>
                </a>
                <ul
                  className="sub-menu"
                  style={{
                    display: openSubmenu === "reports" ? "block" : "none",
                  }}
                >
                  <li>
                    <Link to="/reports/annual">Annual</Link>
                  </li>
                  <li>
                    <Link to="/reports/audit">Audit</Link>
                  </li>
                </ul>
              </li>

              {/* Gallery */}
              <li
                className={`menu-item-has-children ${
                  openSubmenu === "gallery" ? "th-active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSubmenu("gallery");
                  }}
                >
                  Gallery <span className="th-mean-expand"></span>
                </a>
                <ul
                  className="sub-menu"
                  style={{
                    display: openSubmenu === "gallery" ? "block" : "none",
                  }}
                >
                  <li>
                    <Link to="/gallery/photos">Photos</Link>
                  </li>
                  <li>
                    <Link to="/gallery/videogallery">Videos</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/news-events" onClick={() => setMenuOpen(false)}>
                  News & Events
                </Link>
              </li>

              {/* Get Involved */}
              <li
                className={`menu-item-has-children ${
                  openSubmenu === "getinvolved" ? "th-active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSubmenu("getinvolved");
                  }}
                >
                  Get Involved <span className="th-mean-expand"></span>
                </a>
                <ul
                  className="sub-menu"
                  style={{
                    display: openSubmenu === "getinvolved" ? "block" : "none",
                  }}
                >
                  <li>
                    <Link to="/get-involved/volunteer">Volunteer</Link>
                  </li>

                  <li>
                    <Link to="/get-involved/partnership">Partnership</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <header className="th-header header-default">
        {/* Top Bar */}
        <div className="menu-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              {/* Logo for Desktop */}
              <div className="col-auto d-none d-lg-block">
                <div className="header-logo text-center">
                  <Link to="/">
                    <img
                      src={seedLogo}
                      alt="SEED Logo"
                      className="img-fluid"
                      style={{ maxHeight: "100px" }} // keeps logo responsive
                    />
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-auto d-none d-md-block">
                <div className="info-card-wrap">
                  {/* Address */}
                  <div className="info-card">
                    <div className="box-icon">
                      <i className="fal fa-map-marker-alt"></i>
                      <div
                        className="bg-shape1"
                        data-mask-src="https://html.themeholy.com/donat/demo/assets/img/shape/info_card_icon_bg_shape_1_1.png"
                      ></div>
                      <div
                        className="bg-shape2"
                        data-mask-src="https://html.themeholy.com/donat/demo/assets/img/shape/info_card_icon_bg_shape_1_1.png"
                      ></div>
                    </div>
                    <div className="box-content">
                      <p className="box-text">Locate Address:</p>
                      <h4 className="box-title">
                        <a href="https://maps.google.com" id="headeraddress">
                          Subhadra Nagar Lane, Bidanasi, Cuttack-14
                        </a>
                      </h4>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="info-card">
                    <div className="box-icon">
                      <i className="fal fa-phone"></i>
                      <div className="bg-shape1"></div>
                      <div className="bg-shape2"></div>
                    </div>
                    <div className="box-content">
                      <p className="box-text">Call us any time:</p>
                      <h4 className="box-title">
                        <a id="headertel" href="tel:9437314152">
                          +91 9437314152
                        </a>
                      </h4>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="info-card">
                    <div className="box-icon">
                      <i className="fal fa-envelope-open"></i>
                      <div className="bg-shape1"></div>
                      <div className="bg-shape2"></div>
                    </div>
                    <div className="box-content">
                      <p className="box-text">Email us any time:</p>
                      <h4 className="box-title">
                        <a
                          id="headeremail"
                          href="mailto:seedodisha1971@gmail.com"
                        >
                          seedodisha1971@gmail.com
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="sticky-wrapper">
          <div className="container">
            <div className="menu-area">
              <div className="menu-area-wrap">
                {/* Mobile Logo */}
                <div className="col-auto d-inline-block d-lg-none">
                  <div className="header-logo">
                    <Link to="/">
                      <img src={seedLogo} alt="SEED Logo" />
                    </Link>
                  </div>
                </div>

                {/* Navigation Menu */}
                <nav className="main-menu d-none d-lg-block">
                  <ul>
                    <li>
                      <Link to="/" className="menubaradjust">
                        Home
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#" className="menubaradjust">
                        About Us
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/about/overview">Overview</Link>
                        </li>
                        <li>
                          <Link to="/about/vision-mission">
                            Vision & Mission
                          </Link>
                        </li>
                        <li>
                          <Link to="/about/registration">
                            Registration Details
                          </Link>
                        </li>
                        <li>
                          <Link to="/about/team">Team & Members</Link>
                        </li>
                          <li>
                    <Link to="/about/chairman-desk" onClick={() => setMenuOpen(false)}>
                      Chairmandesk
                    </Link>
                  </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#" className="menubaradjust">
                        Programs & Activities
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/programs/human-rights">
                            Human Rights Awareness
                          </Link>
                        </li>
                        <li>
                          <Link to="/programs/swachh-bharat">
                            Swachh Bharat Abhiyan
                          </Link>
                        </li>
                        <li>
                          <Link to="/programs/women-empowerment">
                            Women Empowerment
                          </Link>
                        </li>
                        <li>
                          <Link to="/programs/skill-development">
                            Skill Development
                          </Link>
                        </li>
                        <li>
                          <Link to="/programs/cultural">Cultural Programs</Link>
                        </li>
                        <li>
                          <Link to="/programs/education-scst">
                            Education for SC/ST Girls
                          </Link>
                        </li>
                        <li>
                          <Link to="/programs/environment">
                            Environment Awareness
                          </Link>
                        </li>
                        <li>
                          <Link to="/programs/sports">Sports Development</Link>
                        </li>
                        <li>
                          <Link to="/programs/health-camps">Health Camps</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children">
                      <Link to="#" className="menubaradjust">
                        Reports{" "}
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/reports/annual">Annual Reports</Link>
                        </li>
                        <li>
                          <Link to="/reports/audit">Audit Reports</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children">
                      <Link to="#" className="menubaradjust">
                        Get Involved
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/get-involved/volunteer">Volunteer</Link>
                        </li>

                        <li>
                          <Link to="/get-involved/partnership">
                            Partnership
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children">
                      <Link to="#" className="menubaradjust">
                        Gallery
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/gallery/photos">Photos</Link>
                        </li>
                        <li>
                          <Link to="/gallery/videogallery">Videos</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/contact" className="menubaradjust">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>

                {/* <p className="header-notice">
                  <img
                    className="me-1"
                    src="assets/img/icon/heart-icon.svg"
                    alt="icon"
                  />
                  Are you ready to help them? Let’s become a volunteer...
                </p> */}
              </div>

              {/* Buttons */}
              <div className="header-button">
                {/* Contact Button */}
                <Link
                  id="headercontactbtn"
                  to="/donate"
                  className="th-btn style3 d-lg-block d-none"
                >
                  <i className="fas fa-heart me-2"></i> Donate Now
                </Link>

                <button
                  type="button"
                  className="icon-btn th-menu-toggle d-lg-none"
                  onClick={() => setMenuOpen(true)}
                >
                  <i className="far fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
