import React from "react";
import InnerPageBanner from "../components/InnerPageBanner";
import bannerImage from "../assets/contact-us.jpg";

export default function Contact() {
  return (
    <>
      <InnerPageBanner
        title="Contact"
        background={bannerImage}
        breadcrumb="Contact"
      />

      <div
        className="space overflow-hidden contact-area-1 position-relative z-index-common"
        id="contact-sec"
      >
        <div className="container">
          <div className="contact-wrap1">
            <div className="row gx-60 gy-40">
              {/* Left Side - Contact Info */}
              <div className="col-xl-4 col-lg-5">
                <div className="contact-feature">
                  <div className="box-icon">
                    <i className="fas fa-map-location-dot"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">Address</h3>
                    <p className="box-text">
                    Subhadra Nagar Lane, Bidanasi, Cuttack-14
                    </p>
                  </div>
                </div>

                <div className="contact-feature">
                  <div className="box-icon" data-theme-color="#FFAC00">
                    <i className="fas fa-phone-volume"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">Phone</h3>
                    <p className="box-text">
                      <a href="tel:+91 9437314152">+91 9437314152</a>
                    </p>
                    
                  </div>
                </div>

                <div className="contact-feature">
                  <div className="box-icon" data-theme-color="#122F2A">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">Email</h3>
                    <p className="box-text">
                      <a href="mailto:seedodisha1971@gmail.com">seedodisha1971@gmail.com</a>
                    </p>
                    
                  </div>
                </div>

                <div className="contact-feature" data-theme-color="#FF5528">
                  <div className="box-icon">
                    <i className="fas fa-comment-question"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">Have Questions?</h3>
                    <p className="box-text">
                      Discover more by visiting us or joining our community
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Map */}
              <div className="col-xl-8 col-lg-7">
                <div className="contact-map">
                <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14619.042985865592!2d85.84944979725221!3d20.471689555173676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c979fdba03%3A0x7a53745479d1b7bc!2sSubhadra%20Nagar%2C%20Bidanasi%2C%20Cuttack%2C%20Odisha%20753008!5e0!3m2!1sen!2sin!4v1724588058965!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-page-form-wrap space-top">
            <div className="row gy-40">
              <div className="col-xl-6 align-self-end">
                <div className="contact-thumb1-1">
                  <img src="uploads/contactinner.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="contact-form-v1 contact-page-form">
                  <form
                    action="#"
                    method="POST"
                    className="contact-form style-border ajax-contact"
                  >
                    <div className="row">
                      <div className="form-group style-border col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="form-group style-border col-12">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="form-group style-border col-12">
                        <input
                          type="number"
                          className="form-control"
                          name="number"
                          id="number"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="form-group style-border col-12">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="3"
                          className="form-control"
                          placeholder="Type Your Message"
                        ></textarea>
                      </div>
                      <div className="form-btn col-12">
                        <button className="th-btn" type="submit">
                          Send a Message
                        </button>
                      </div>
                    </div>
                    <p className="form-messages mb-0 mt-3"></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
