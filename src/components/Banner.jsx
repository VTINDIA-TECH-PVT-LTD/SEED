import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    subtitle: "Making a Difference",
    title1: "Changing Lives, One",
    title2: "Donation at a Time",
    text: "Explore the variety of volunteer opportunities available...",
    bgImage: "/assets/img/hero/hero_bg_4_1.jpg",
  },
  {
    subtitle: "Give Hope For Homeless",
    title1: "Helping Each Other",
    title2: "Make World Better",
    text: "Explore the variety of volunteer opportunities available...",
    bgImage: "/assets/img/hero/hero_bg_4_2.jpg",
  },
  {
    subtitle: "Making a Difference",
    title1: "Every Donation Counts",
    title2: "Help Us Change Lives",
    text: "Explore the variety of volunteer opportunities available...",
    bgImage: "/assets/img/hero/hero_bg_4_3.jpg",
  },
];

const Banner = () => {
  return (
    <div className="th-hero-wrapper hero-4" id="hero">
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
                        <span className="title1">{slide.title1}</span>{" "}
                        <span className="title1">{slide.title2}</span>
                      </h1>
                      <p className="hero-text text-white">{slide.text}</p>
                      <div className="btn-wrap">
                        <a href="about.html" className="th-btn">
                          Discover Now <i className="fa-solid fa-arrow-up-right ms-2"></i>
                        </a>
                        <a
                          href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                          className="play-btn style3 popup-video"
                        >
                          <i className="fas fa-play"></i>
                        </a>
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
