import React from "react";
import chairmanImg from "/uploads/noimage.jpg"; // 👈 replace with your image path
import InnerPageBanner from "../components/InnerPageBanner";
import bannerImage from "../assets/missionbanner.jpg";

const ChairmanDesk = () => {
  return (
    <>
      <InnerPageBanner
        title="ChairmanDesk"
        background={bannerImage}
        breadcrumb="ChairmanDesk"
      />

      <section className="container my-5">
        <h2 className="mb-4 fw-bold text-success text-center">From the Chairman’s Desk</h2>

        <div>
          {/* Chairman photo floated left */}
          <img
            src={chairmanImg}
            alt="Chairman"
            style={{
              float: "left",
              marginRight: "20px",
              marginBottom: "15px",
              width: "350px", // fixed width
              height: "350px", // fixed height
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0px 3px 6px rgba(0,0,0,0.15)",
            }}
          />

          {/* Paragraph text wraps around image */}
          <p style={{ textAlign: "justify", lineHeight: "1.7" }}>
            SEED’s commitment to needy people over the last couple of years is a testimony
            of our resolve to ensure that every people are given an opportunity to live a
            decent life which every human being rightfully deserves. <br /><br />
            SEED has undertaken a series of programme for realizing gender-violence-free
            society. The model-of-change focusing on individual transformation to
            collectivization, leading to actions for social change by Young Leaders remain at
            the core of each programme. Personal Safety and Wellbeing Education is the key
            tool engaged for personal transformation from powerlessness to choice and
            empowerment. <br /><br />
            We firmly believe that every child deserves the best chance for a bright future,
            which is why, we are fiercely committed to ensure that children not only survive,
            but thrive. With a bold ambition and a powerful vigilance, we do whatever it takes
            to Save Children. We are proud to be the world’s leading expert on children,
            delivering lasting results to millions of vulnerable girls and boys. By saving our
            world’s children, we transform their lives and the future we share.
            <br /><br />
            Our continuous effort is to implement the Juvenile Justice system ensuring the
            Child Welfare as the minimum entitlements and freedoms that should be accorded
            to every human being below the age of 18 regardless of race, national origin,
            colour, gender, language, religion, opinions, origin, wealth, birth status,
            disability, or other characteristics.
            <br /><br />
            We are setting the goal to see each girl child is not only a beneficiary of progress
            but also a driver of change. As a leader, innovator, and advocate, she challenges
            outdated norms and discriminatory practices, paving the way for gender equality
            and social justice. Her voice amplifies the call for equal opportunities,
            highlighting the importance of girl child, inspiring others to strive for a world
            where every child, regardless of gender, can fulfill their potential without fear of
            discrimination or limitation.
            <br /><br />
            We cordially and heartily solicit all your help and cooperation to work more for
            the society, and we deeply value your support and collaboration to further
            societal goals. Your continued support and partnership are vital as we work to
            improve our society and see all the human lives are valued.
          </p>

          <h5 className="mt-4 fw-bold text-end">Chairman, SEED</h5>
        </div>
      </section>
    </>
  );
};

export default ChairmanDesk;
