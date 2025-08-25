import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiX } from "react-icons/si"; // For X (Twitter)

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const TeamSection = () => {
  return (
    <section className="space-bottom team-area-1" dir="rtl"> {/* 👈 Force RTL */}
      {/* Background Shape */}
      <div
        className="shape-mockup team-bg-shape1-1 spin d-xxl-block d-none"
        data-top="0%"
        data-right="3%"
      >
        <img src="assets/img/shape/Group 1.png" alt="img" />
      </div>

      <div className="container">
        {/* Section Title */}
        <div className="title-area text-center">
          <span className="sub-title">Our Team</span>
          <h2 id="teamheading" className="sec-title">Our Team of Change-Makers</h2>
        </div>

        {/* Slider */}
        <div className="slider-area">
          <Swiper
            dir="rtl"
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".team-next",
              prevEl: ".team-prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            spaceBetween={30}
            className="th-slider has-shadow team-slider1"
          >
            {[...Array(6)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="th-team team-card">
                  <div className="img-wrap">
                    <div className="team-img">
                      <img src="uploads/noimage.jpg" alt="Team" />
                    </div>
                    <div className="team-social-hover">
                      <a href="#" className="team-social-hover_btn">
                        <i className="far fa-plus"></i>
                      </a>
                      <div className="th-social">
                        <a target="_blank" rel="noreferrer" href="https://x.com">
                          <SiX />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://facebook.com">
                          <FaFacebookF />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://instagram.com">
                          <FaInstagram />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://wa.me/919437314152">
                          <FaWhatsapp />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-card-content">
                    <h3 className="box-title">
                      <Link to="/about/team">Name</Link>
                    </h3>
                    <span className="team-desig">Designation</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <button className="slider-arrow slider-prev team-prev">
            <i className="far fa-arrow-left"></i>
          </button>
          <button className="slider-arrow slider-next team-next">
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
