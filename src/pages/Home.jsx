import React from "react";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import DonationSection from "../components/DonationSection";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import Services from "../components/Services";


export default function Home() {
  return (
    <>
      {/* Use Banner component */}
      <Banner />

      {/* ✅ About Section component */}
      <AboutSection />
      {/* ✅ DonationSection  component */}
      <Services />



      {/* ✅ DonationSection  component */}
      {/* <DonationSection/> */}


    </>
  );
}
