import React from "react";
import { Link } from "react-router-dom";
import InnerPageBanner from "../components/InnerPageBanner";
import bannerImage from "../assets/innerbanner.png";

export default function Registration() {
    return (
        <>
            <style>
                {`
          .widget-area {
            padding-top: 40px;
            padding-bottom: 0px;
          }
          .form-check {
            margin-right: 15px;
          }
        `}
            </style>

            {/* Page Banner */}
            <InnerPageBanner
                title="Registration"
                background={bannerImage}
                breadcrumb="Registration"
            />

            {/* Registration Section */}
            <section className="donation-details space-top space-extra2-bottom">
                <div className="container">
                    <div className="row gx-40">
                        {/* Left Side - Form */}
                        <div className="col-xxl-8 col-lg-7">
                            <div className="donation-form-v1">
                                <h5
                                    className="title"
                                    style={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px" }}
                                >
                                    Registration Form
                                </h5>

                                <form
                                    action=""
                                    method="POST"
                                    className="contact-form ajax-contact"
                                >
                                    <div className="row">
                                        {/* First Name */}
                                        <div className="form-group style-border col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="firstname"
                                                id="firstname"
                                                placeholder="First Name"
                                                required
                                            />
                                        </div>

                                        {/* Last Name */}
                                        <div className="form-group style-border col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="lastname"
                                                id="lastname"
                                                placeholder="Last Name"
                                                required
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="form-group style-border col-md-6">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Email Address"
                                                required
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="form-group style-border col-md-6">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                name="phone"
                                                id="phone"
                                                placeholder="Phone Number"
                                                required
                                            />
                                        </div>

                                        {/* Date of Birth */}
                                        <div className="form-group style-border col-md-6">
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="dob"
                                                id="dob"
                                                placeholder="Date of Birth"
                                                required
                                            />
                                        </div>

                                        {/* Occupation */}
                                        <div className="form-group style-border col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="occupation"
                                                id="occupation"
                                                placeholder="Occupation"
                                                required
                                            />
                                        </div>

                                        {/* Education */}
                                        <div className="form-group style-border col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="education"
                                                id="education"
                                                placeholder="Education"
                                                required
                                            />
                                        </div>

                                        {/* Skills */}
                                        <div className="form-group style-border col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="skills"
                                                id="skills"
                                                placeholder="Skills"
                                                required
                                            />
                                        </div>

                                        {/* Gender */}
                                        <div className="form-group style-border col-md-6">
                                            <label className="d-block mb-2 fw-bold">Gender:</label>
                                            <div className="d-flex">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="gender"
                                                        id="male"
                                                        value="Male"
                                                    />
                                                    <label className="form-check-label" htmlFor="male">
                                                        Male
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="gender"
                                                        id="female"
                                                        value="Female"
                                                    />
                                                    <label className="form-check-label" htmlFor="female">
                                                        Female
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="gender"
                                                        id="other"
                                                        value="Other"
                                                    />
                                                    <label className="form-check-label" htmlFor="other">
                                                        Other
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Address */}
                                        <div className="form-group style-border col-md-12">
                                            <textarea
                                                name="address"
                                                id="address"
                                                cols="30"
                                                rows="2"
                                                className="form-control"
                                                placeholder="Address"
                                                required
                                            ></textarea>
                                        </div>

                                        {/* Submit */}
                                        <div className="form-btn col-12">
                                            <button className="th-btn" type="submit">
                                                <i className="fas fa-heart me-2"></i> Register Now
                                            </button>
                                        </div>
                                    </div>
                                    <p className="form-messages mb-0 mt-3"></p>
                                </form>

                            </div>
                        </div>

                        {/* Right Side - Sidebar */}
                        <div className="col-xxl-4 col-lg-5">
                            <aside className="sidebar-area donation-sidebar">


                                <div
                                    className="widget"
                                    data-bg-src="assets/img/bg/gray-bg2.png"
                                    data-overlay="gray"
                                    data-opacity="5"
                                >
                                    <div className="author-widget-wrap">
                                        <div className="author-tag">Organizer:</div>
                                        <div className="avater">
                                            <img src="/uploads/noimage.jpg" alt="author" />
                                        </div>
                                        <div className="author-info">
                                            <h4 className="name">
                                                <Link className="text-inherit" to="/blog">
                                                    Name
                                                </Link>
                                            </h4>
                                            <span className="meta">
                                                <Link to="/blog">
                                                    <i className="fas fa-tags"></i> Education
                                                </Link>
                                            </span>
                                            <span className="meta">
                                                <Link to="/#">
                                                    <i className="fas fa-map-marker-alt"></i> Location
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
