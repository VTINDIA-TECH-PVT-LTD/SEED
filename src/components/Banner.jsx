import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    subtitle: "Empowering Communities",
    title1: "Together for a Better",
    title2: "Social & Educational Future",
    text: "Join SEED to create opportunities for education, empowerment, and sustainability.",
    bgImage: "/uploads/banner.jpg",
  },
  {
    subtitle: "Building a Greener Tomorrow",
    title1: "Environmental Care",
    title2: "Starts with Us",
    text: "Be a part of SEED's initiatives to protect nature and promote a cleaner, healthier planet.",
    bgImage: "uploads/banner2.jpg",
  },
  {
    subtitle: "Your Support Matters",
    title1: "Education, Equality,",
    title2: "and Empowerment",
    text: "Support SEED’s mission to uplift lives through education, social change, and sustainability.",
    bgImage: "uploads/banner3.jpg",
  },
];


const Banner = () => {
  return (
    <div className="th-hero-wrapper hero-4" id="hero" style={{ height: "600px" }}>
      <Swiper
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay, EffectFade]}
        className="th-slider hero-slider4"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-inner"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-9">
                    <div className="hero-style4 text-white">
                      <span className="sub-title after-none">{slide.subtitle}</span>
                      <h1 className="hero-title text-white">
                        <span id="bannertitle1" className="title1">{slide.title1}</span>{" "}
                        <span id="bannertitle1" className="title1">{slide.title2}</span>
                      </h1>
                      <p className="hero-text text-white">{slide.text}</p>
                      <div className="btn-wrap">
                       

                        <Link to="/about/overview" className="th-btn">About Us <i className="fa-solid fa-arrow-up-right ms-2"></i></Link>
                        {/* <a
                          href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                          className="play-btn style3 popup-video"
                        >
                          <i className="fas fa-play"></i>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional: Thumbnail navigation */}
      <div className="hero-thumb-tab">
        {slides.map((slide, index) => (
          <div className={`tab-btn ${index === 0 ? "active" : ""}`} key={index}>
            <img src={slide.bgImage} alt={`thumb-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
