// DonationSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const donations = [
    {
        img: "uploads/act1.png",
        title: "Human Rights Awareness",
        
        description: "Support human rights initiatives to empower communities globally."
    },
    {
        img: "uploads/act2.jpg",
        title: "Swachh Bharat Abhiyan",
        
        description: "Promote cleanliness, hygiene, and sanitation across all communities."
    },
    {
        img: "uploads/act7.jpeg",
        title: "Women Empowerment",
       
        description: "Empower women through education, skill development, and opportunities."
    },
    {
        img: "uploads/act8.jpeg",
        title: "Skill Development",
        
        description: "Provide training and guidance to improve employability skills."
    },
    {
        img: "uploads/act9.jpg",
        title: "Cultural Programs",
       
        description: "Celebrate and preserve cultural heritage through community programs."
    },
    {
        img: "uploads/act3.png",
        title: "Education for SC/ST Girls",
        
        description: "Support education and learning opportunities for underprivileged girls."
    },
    {
        img: "uploads/act4.png",
        title: "Environment Awareness",
        
        description: "Encourage sustainable living and protect nature for future generations."
    },
    {
        img: "uploads/act6.png",
        title: "Health Camps",
       
        description: "Organize free health checkups and wellness camps for communities."
    },
];


// Duplicate donations if needed for smooth looping
const allDonations = [...donations, ...donations];

const DonationSection = () => {
    return (
        <section
            className="space overflow-hidden"
            style={{ backgroundImage: `url(assets/img/bg/gray-bg3.png)` }}
            id="donation-sec"
        >
            {/* Heading */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="title-area text-center">
                            <span className="sub-title">Programs & Activities</span>
                            <h2 id="programheading" className="sec-title">Empowering Communities Through Programs & Activities</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Donation Cards Slider */}
            <div className="container th-container2">
                <div className="slider-area">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={4}
                        slidesPerGroup={4}          // scroll 4 slides at a time
                        loop={true}                 // infinite loop
                        loopFillGroupWithBlank={true} // fill last group to avoid empty space
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}

                        breakpoints={{
                            0: { slidesPerView: 1, slidesPerGroup: 1 },
                            576: { slidesPerView: 1, slidesPerGroup: 1 },
                            768: { slidesPerView: 2, slidesPerGroup: 1 },
                            992: { slidesPerView: 2, slidesPerGroup: 1 },
                            1200: { slidesPerView: 3, slidesPerGroup: 1 },
                            1400: { slidesPerView: 4, slidesPerGroup: 1 },
                          }}
                          
                    >

                        {allDonations.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="donation-card style4" style={{ "--theme-color": item.theme }}>
                                    <div className="box-thumb">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <h3 className="box-title">

                                        <Link to="/programs/human-rights">{item.title}</Link>
                                    </h3>

                                    <div className="box-content">
                                        <h4 id="activitysubtitle" className="subtitle">{item.description}</h4>


                                        
                                        <Link to="/gallery/photos" className="th-btn style3 d-lg-block ">Read More <i className="fas fa-arrow-up-right ms-2"></i></Link>
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
                        <img src="assets/img/donation/donation4-btn-wrap-thumb.png" alt="img" />
                    </div>
                    <h4 className="title justify">
                        We engage in diverse programs and activities to uplift lives and communities.
                    </h4>

                    <Link to="/gallery/photos" className="th-btn">View Details <i className="fas fa-arrow-up-right ms-2"></i></Link>

                </div>
            </div>
        </section>
    );
};

export default DonationSection;
