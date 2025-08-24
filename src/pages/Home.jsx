import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";

import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import TeamSection from "../components/TeamSection";
import Activities from "../components/Activities";
import Testimonials from "../components/Testimonials";
import Counter from "../components/Counter";



export default function Home() {
  return (
    <>

      <style>
        {`
          .widget-area {
            padding-top: 40px;
            padding-bottom: 0px;
          }
        `}
      </style>

      <Banner />

      <AboutSection />

      <Services />

      <TeamSection />

      <Activities />

      <Testimonials />

      <Counter />


    </>
  );
}
