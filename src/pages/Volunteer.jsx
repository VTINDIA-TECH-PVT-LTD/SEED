import React from "react";
import InnerPageBanner from "../components/InnerPageBanner";
import bannerImage from "../assets/contact-us.jpg";

export default function Volunteer() {
  return (
    <>
      <InnerPageBanner
        title="Volunteers"
        background={bannerImage}
        breadcrumb="Volunteers"
      />

      <div
        className="space overflow-hidden contact-area-1 position-relative z-index-common"
        id="contact-sec"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form-box p-4 shadow-lg rounded-3 bg-white">
                <h3 className="mb-4 text-center">Volunteer With Us</h3>
                <form>
                  <div className="row g-3">
                    {/* Full Name */}
                    <div className="col-md-6">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    {/* Address */}
                    <div className="col-md-6">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your address"
                      />
                    </div>

                    {/* Why do you want to volunteer? */}
                    <div className="col-12">
                      <label className="form-label">
                        Why do you want to volunteer?
                      </label>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Tell us your motivation..."
                      ></textarea>
                    </div>

                    {/* Availability */}
                    <div className="col-md-6">
                      <label className="form-label">Availability</label>
                      <select className="form-select">
                        <option value="">Select...</option>
                        <option value="weekdays">Weekdays</option>
                        <option value="weekends">Weekends</option>
                        <option value="both">Both</option>
                      </select>
                    </div>

                    {/* Area of Interest */}
                    <div className="col-md-6">
                      <label className="form-label">Area of Interest</label>
                      <select className="form-select">
                        <option value="">Choose...</option>
                        <option value="education">Education</option>
                        <option value="environment">Environment</option>
                        <option value="health">Health</option>
                        <option value="community">Community Support</option>
                      </select>
                    </div>

                    {/* Submit */}
                    <div className="col-12 text-center mt-3">
                      <button type="submit" className="btn btn-primary px-4">
                        Submit Application
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
