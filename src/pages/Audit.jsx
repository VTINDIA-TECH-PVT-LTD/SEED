import React from "react";
import { Link } from "react-router-dom";
import InnerPageBanner from "../components/InnerPageBanner";
import bannerImage from "../assets/missionbanner.jpg";

export default function Audit() {
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


      <InnerPageBanner
        title="Audit Reports"
        background={bannerImage}
        breadcrumb="Audit Reports"
      />


    </>
  );
}
