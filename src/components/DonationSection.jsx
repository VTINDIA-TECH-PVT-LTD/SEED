import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const donations = [
  {
    img: "assets/img/donation/donation4-1.png",
    title: "Big charity: build school for poor children",
    raised: "5M",
    goal: "10M",
    progress: 85,
    theme: "",
  },
  {
    img: "assets/img/donation/donation4-2.png",
    title: "Providing Medical Aid to Undeserved Areas",
    raised: "5M",
    goal: "10M",
    progress: 85,
    theme: "var(--theme-color2)",
  },
  {
    img: "assets/img/donation/donation4-3.png",
    title: "Fighting Hunger with Food Distribution Drives",
    raised: "5M",
    goal: "10M",
    progress: 85,
    theme: "#FF5528",
  },
  {
    img: "assets/img/donation/donation4-4.png",
    title: "Supporting Mental Health Awareness Initiatives",
    raised: "5M",
    goal: "10M",
    progress: 80,
    theme: "#122F2A",
  },
];

const DonationSection = () => {
  return (
    <section
      className="space overflow-hidden"
      style={{ backgroundImage: url(assets/img/bg/gray-bg3.png) }}
      id="donation-sec"
    >
      {/* Heading */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="title-area text-center">
              <span className="sub-title">Start donating poor people</span>
              <h2 className="sec-title">
                Give Now to Help Locate the Well-liked Cause
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Cards Slider */}
      <div className="container th-container2">
        <div className="slider-area">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={4} // keep fixed for your layout
            loop={true}       // enable infinite loop
            autoplay={{
              delay: 2500,   // auto scroll every 2.5s
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
          >
            {donations.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="donation-card style4"
                  style={{ "--theme-color": item.theme }}
                >
                  <div className="box-thumb">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html">{item.title}</a>
                  </h3>
                  <div className="box-content">
                    <h4 className="subtitle">Donation</h4>
                    <div className="donation-card_progress-wrap">
                      <div className="progress">
                       <div
  className="progress-bar"
  style={{ width: `${item.progress}%` }}
>
  <div className="progress-value">{item.progress}%</div>
</div>

                      </div>
                      <div className="donation-card_progress-content">
                        <span className="donation-card_raise">
                          Raised - {item.raised}
                        </span>
                        <span className="donation-card_goal">Goal - ${item.goal}</span>
                      </div>
                    </div>
                    <a href="blog-details.html" className="th-btn style6">
                      Donate Now <i className="fas fa-arrow-up-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Footer Section */}
      <div className="container">
        <div className="donation4-btn-wrap mt-60 text-center">
          <div className="thumb">
            <img
              src="assets/img/donation/donation4-btn-wrap-thumb.png"
              alt="img"
            />
          </div>
          <h4 className="title">
            We are supporting over 10+ additional causes to aid people worldwide.
          </h4>
          <a href="blog-details.html" className="th-btn">
            More Cause <i className="fas fa-arrow-up-right ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;