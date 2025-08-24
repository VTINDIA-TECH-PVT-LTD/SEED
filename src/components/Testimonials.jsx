// src/components/Testimonials.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ✅ import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahul Samal",
    role: "Social Worker",
    img: "uploads/noimage.jpg",
    text: "Join SEED in driving social, educational, and environmental change. Stay connected with our programs and events to make a lasting impact.",
  },
  {
    name: "Jitu Das",
    role: " Social Worker",
    img: "uploads/noimage.jpg",
    text: "Join SEED in driving social, educational, and environmental change. Stay connected with our programs and events to make a lasting impact.",
  },
  {
    name: "Sunil Sahu",
    role: "Social Worker",
    img: "uploads/noimage.jpg",
    text: "Join SEED in driving social, educational, and environmental change. Stay connected with our programs and events to make a lasting impact.",
  },
  {
    name: "Debang Prasad Jena",
    role: "Social Worker",
    img: "uploads/noimage.jpg",
    text: "Join SEED in driving social, educational, and environmental change. Stay connected with our programs and events to make a lasting impact.",
  },
  {
    name: "Nikhilendra Nayak",
    role: "Social Worker",
    img: "uploads/noimage.jpg",
    text: "Join SEED in driving social, educational, and environmental change. Stay connected with our programs and events to make a lasting impact.",
  },
  {
    name: "Rakesh Jena",
    role: "Social Worker",
    img: "uploads/noimage.jpg",
    text: "Join SEED in driving social, educational, and environmental change. Stay connected with our programs and events to make a lasting impact.",
  },
];

const Testimonials = () => {
  return (
    <section className="overflow-hidden space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title after-none before-none">
            <i className="far fa-heart text-theme"></i> Testimonials
          </span>
          <h2 id="testimonialheading" className="sec-title">Hear From Our Community</h2>
        </div>

        <div className="testi-slider3 slider-area relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // ✅ include Autoplay
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            autoplay={{
              delay: 3000, // slide every 3 seconds
              reverseDirection: true, // ✅ right to left
              disableOnInteraction: false, // keeps autoplay even after manual interaction
            }}
            autoHeight={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            }}
            spaceBetween={30}
            className="th-slider"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="testi-card3">
                  <div className="testi-card-shape"></div>
                  <div className="testi-card_review">
                    <i className="fas fa-star"></i> 5.0
                  </div>
                  <div className="testi-card_profile">
                    <div className="box-thumb">
                      <img src={item.img} alt={item.name} />
                      <div className="quote-icon">
                        <i className="fal fa-quote-right"></i>
                      </div>
                    </div>
                    <div className="media-left">
                      <h3 className="testi-card_name">{item.name}</h3>
                      <span className="testi-card_desig">{item.role}</span>
                    </div>
                  </div>
                  <p className="testi-card_text justify">“{item.text}”</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="slider-arrow style-border slider-prev">
            <i className="far fa-arrow-left"></i>
          </button>
          <button className="slider-arrow style-border slider-next">
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
