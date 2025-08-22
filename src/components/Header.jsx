import React from "react";
import { Link } from "react-router-dom";
import SideCart from "./SideCart";
import seedLogo from "../assets/seedlogo.png";
import { useState } from "react";
import Topbar from "./Topbar";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* <div className="preloader">
        <button className="th-btn style2 preloaderCls">Cancel Preloader</button>
        <div className="preloader-inner">
          <span className="loader">
            SEED
            <span className="loading-text">SEED</span>
          </span>
        </div>
      </div> */}

      <SideCart />
      <div className="popup-search-box d-none d-lg-block">
        <button className="searchClose">
          <i className="far fa-times"></i>
        </button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit">
            <i className="fal fa-search"></i>
          </button>
        </form>
      </div>

      {/* Mobile Menu */}
      <div className={`th-menu-wrapper ${menuOpen ? "th-body-visible" : ""}`}>
        <div className="th-menu-area text-center">
          {/* <button className="th-menu-toggle"> */}
          <button
            className="th-menu-toggle"
            onClick={() => setMenuOpen(false)}   // ✅ close
          >
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <Link to="/">

              <img
                src={seedLogo}
                alt="SEED Logo"
                className="w-32"
              />
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="th-mobile-menu">
            <ul>
              <li><Link to="/home">Home</Link></li>

              <li className="menu-item-has-children">
                <Link to="#">About Us</Link>
                <ul className="sub-menu">
                  <li><Link to="/about/overview">Overview</Link></li>
                  <li><Link to="/about/vision-mission">Vision & Mission</Link></li>
                  <li><Link to="/about/registration">Registration Details</Link></li>
                  <li><Link to="/about/team">Team & Members</Link></li>
                </ul>
              </li>

              <li className="menu-item-has-children">
                <Link to="#">Programs & Activities</Link>
                <ul className="sub-menu">
                  <li><Link to="/programs/human-rights">Human Rights Awareness</Link></li>
                  <li><Link to="/programs/swachh-bharat">Swachh Bharat Abhiyan</Link></li>
                  <li><Link to="/programs/women-empowerment">Women Empowerment</Link></li>
                  <li><Link to="/programs/skill-development">Skill Development</Link></li>
                  <li><Link to="/programs/cultural">Cultural Programs</Link></li>
                  <li><Link to="/programs/education-scst">Education for SC/ST Girls</Link></li>
                  <li><Link to="/programs/environment">Environment Awareness</Link></li>
                  <li><Link to="/programs/sports">Sports Development</Link></li>
                  <li><Link to="/programs/health-camps">Health Camps</Link></li>
                </ul>
              </li>

              <li><Link to="/annual">Annual Reports</Link></li>

              <li className="menu-item-has-children">
                <Link to="#">Gallery</Link>
                <ul className="sub-menu">
                  <li><Link to="/gallery/photos">Photos</Link></li>
                  <li><Link to="/gallery/videos">Videos</Link></li>
                </ul>
              </li>

              <li><Link to="/annual">News & Events</Link></li>

              <li className="menu-item-has-children">
                <Link to="#">Get Involved</Link>
                <ul className="sub-menu">
                  <li><Link to="/get-involved/volunteer">Volunteer</Link></li>
                  <li><Link to="/get-involved">Donate</Link></li>
                  <li><Link to="/get-involved/partnership">Partnership</Link></li>
                </ul>
              </li>

              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>


        </div>
      </div>

      {/* Color Switcher */}
      <header className="th-header header-layout3">


        {/* <Topbar /> */}

        {/* ✅ Main Header */}
        <div className="sticky-wrapper bg-white shadow">
          <div className="container" id="setnav">
            <div className="menu-area flex justify-between items-center py-3">
              {/* Logo */}
              <div className="header-logo">
                <Link to="/">
                  <img
                    src={seedLogo}
                    alt="SEED Logo"
                    className="w-32"
                  />

                </Link>
              </div>

              {/* Menu Items */}
              <div className="menu-area-wrap">
                <nav className="main-menu d-none d-lg-block">
                  <ul className="flex gap-6 font-medium">
                    <li><Link to="/home">Home</Link></li>

                    <li className="menu-item-has-children relative group">
                      <Link to="#">About Us</Link>
                      <ul className="sub-menu absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded mt-2">
                        <li><Link to="/about/overview">Overview</Link></li>
                        <li><Link to="/about/vision-mission">Vision & Mission</Link></li>
                        <li><Link to="/about/registration">Registration Details</Link></li>
                        <li><Link to="/about/team">Team & Members</Link></li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children relative group">
                      <Link to="#">Programs & Activities</Link>
                      <ul className="sub-menu absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded mt-2">
                        <li><Link to="/programs/human-rights">Human Rights Awareness</Link></li>
                        <li><Link to="/programs/swachh-bharat">Swachh Bharat Abhiyan</Link></li>
                        <li><Link to="/programs/women-empowerment">Women Empowerment</Link></li>
                        <li><Link to="/programs/skill-development">Skill Development</Link></li>
                        <li><Link to="/programs/cultural">Cultural Programs</Link></li>
                        <li><Link to="/programs/education-scst">Education for SC/ST Girls</Link></li>
                        <li><Link to="/programs/environment">Environment Awareness</Link></li>
                        <li><Link to="/programs/sports">Sports Development</Link></li>
                        <li><Link to="/programs/health-camps">Health Camps</Link></li>
                      </ul>
                    </li>

                    <li><Link to="/annual">Annual Reports</Link></li>

                    <li className="menu-item-has-children relative group">
                      <Link to="#">Gallery</Link>
                      <ul className="sub-menu absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded mt-2">
                        <li><Link to="/gallery/photos">Photos</Link></li>
                        <li><Link to="/gallery/videos">Videos</Link></li>
                      </ul>
                    </li>

                    <li><Link to="/annual">News & Events</Link></li>

                    <li className="menu-item-has-children relative group">
                      <Link to="#">Get Involved</Link>
                      <ul className="sub-menu absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded mt-2">
                        <li><Link to="/get-involved/volunteer">Volunteer</Link></li>
                        <li><Link to="/get-involved">Donate</Link></li>
                        <li><Link to="/get-involved/partnership">Partnership</Link></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Contact Button */}
              <div className="header-button">
                <Link to="/contact" className="th-btn style3 d-xl-block d-none bg-[#2e8ed8] text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
                  <i className="fas fa-phone me-2"></i> Contact Us
                </Link>
                {/* <button type="button" className="icon-btn th-menu-toggle d-lg-none"> */}
                <button
                  type="button"
                  className="icon-btn th-menu-toggle d-lg-none"
                  onClick={() => setMenuOpen(true)}   // ✅ open
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
