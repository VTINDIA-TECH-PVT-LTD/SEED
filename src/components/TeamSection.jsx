import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

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
        <img src="assets/img/shape/hand-group-shape1.png" alt="img" />
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
            dir="rtl" // 👈 important
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".team-next",
              prevEl: ".team-prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: true, // 👈 make autoplay move RTL
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
            {/* Slide 1 */}
            <SwiperSlide>
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
                      <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                      <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
                      <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                      <a target="_blank" href="https://behance.com/"><i className="fab fa-behance"></i></a>
                    </div>
                  </div>
                </div>
                <div className="team-card-content">
                  <h3 className="box-title"><a href="team-details.html">Name</a></h3>
                  <span className="team-desig">Desingnation</span>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
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
                      <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                      <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
                      <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                      <a target="_blank" href="https://behance.com/"><i className="fab fa-behance"></i></a>
                    </div>
                  </div>
                </div>
                <div className="team-card-content">
                  <h3 className="box-title"><a href="team-details.html">Name</a></h3>
                  <span className="team-desig">Desingnation</span>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
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
                      <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                      <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
                      <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                      <a target="_blank" href="https://behance.com/"><i className="fab fa-behance"></i></a>
                    </div>
                  </div>
                </div>
                <div className="team-card-content">
                  <h3 className="box-title"><a href="team-details.html">Name</a></h3>
                  <span className="team-desig">Desingnation</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
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
                      <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                      <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
                      <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                      <a target="_blank" href="https://behance.com/"><i className="fab fa-behance"></i></a>
                    </div>
                  </div>
                </div>
                <div className="team-card-content">
                  <h3 className="box-title"><a href="team-details.html">Name</a></h3>
                  <span className="team-desig">Desingnation</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
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
                      <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                      <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
                      <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                      <a target="_blank" href="https://behance.com/"><i className="fab fa-behance"></i></a>
                    </div>
                  </div>
                </div>
                <div className="team-card-content">
                  <h3 className="box-title"><a href="team-details.html">Name</a></h3>
                  <span className="team-desig">Desingnation</span>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
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
                      <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                      <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
                      <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                      <a target="_blank" href="https://behance.com/"><i className="fab fa-behance"></i></a>
                    </div>
                  </div>
                </div>
                <div className="team-card-content">
                  <h3 className="box-title"><a href="team-details.html">Name</a></h3>
                  <span className="team-desig">Desingnation</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Navigation buttons (fixed for RTL) */}
          <button className="slider-arrow slider-prev team-prev">
            <i className="far fa-arrow-left"></i> {/* Prev */}
          </button>
          <button className="slider-arrow slider-next team-next">
            <i className="far fa-arrow-right"></i> {/* Next */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
