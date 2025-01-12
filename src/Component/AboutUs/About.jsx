import React from "react";
import "./about.css";
import car1 from "./../Assets/car pics/car-1376190.jpg";
import car2 from "./../Assets/car pics/car-1880381.jpg";
import car3 from "./../Assets/car pics/car-63930.jpg";
import bibek from "./../Assets/team/Bibek.jpg";
import aakru from "./../Assets/team/Aakru.jpg";
import durlav from "./../Assets/team/Durlav.jpg";
import sachin from "./../Assets/team/sachin.jpg";
import sudash from "../Assets/team/Sudash.jpg";
import ashish from "../Assets/team/ashish.jpg";
import cube from "../Assets/brands/Relume.png";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
const data = [
  {
    img: bibek,
    name: "Bibek Karki",
    description:
      "John Doe is a seasoned financial advisor with over 10 years of experience.",
    post: "Financial Advisor",
    socialLinks: {
      linkedin: "https://linkedin.com/person1",
      twitter: "https://twitter.com/person1",
      linkedin: "https://linkedin.com/in/person1",
    },
  },
  {
    img: bibek,
    name: "adnkabdibeidbw ndakdnkiabdoc",
    description:
      "Jane Smith is an investment analyst specializing in market research and analysis.",
    post: "Investment Analyst",
    socialLinks: {
      linkedin: "https://linkedin.com/person2",
      twitter: "https://twitter.com/person2",
      instagram: "https://linkedin.com/in/person2",
    },
  },
  {
    img: durlav,
    name: "Durlav Regmi",
    description:
      "Jane Smith is an investment analyst specializing in market research and analysis.",
    post: "Investment Analyst",
    socialLinks: {
      linkedin: "https://linkedin.com/person2",
      twitter: "https://twitter.com/person2",
      instagram: "https://linkedin.com/in/person2",
    },
  },
  {
    img: sachin,
    name: "Sachin Subedi",
    description:
      "Jane Smith is an investment analyst specializing in market research and analysis.",
    post: "Investment Analyst",
    socialLinks: {
      linkedin: "https://linkedin.com/person2",
      twitter: "https://twitter.com/person2",
      instagram: "https://linkedin.com/in/person2",
    },
  },
  {
    img: sudash,
    name: "Sudansh Deuba",
    description:
      "Jane Smith is an investment analyst specializing in market research and analysis.",
    post: "Investment Analyst",
    socialLinks: {
      linkedin: "https://linkedin.com/person2",
      twitter: "https://twitter.com/person2",
      instagram: "https://linkedin.com/in/person2",
    },
  },
  {
    img: ashish,
    name: "Ashish Kharel ",
    description:
      "Jane Smith is an investment analyst specializing in market research and analysis.",
    post: "Investment Analyst",
    socialLinks: {
      linkedin: "https://linkedin.com/person2",
      twitter: "https://twitter.com/person2",
      instagram: "https://linkedin.com/in/person2",
    },
  },
];
const About = () => {
  return (
    <div className="about-us-main">
      <div className="container">
        {/* First div with 2 columns */}
        <div className="row1">
          <h2> Finacial Solutions Made Easy</h2>

          <p>
            Dutton Financial is a leading provider of tailored financial
            solutions, dedicated to helping you achieve your goals.
          </p>
          <button>Contact us</button>
        </div>

        {/* Second div with 2 columns */}
        <div className="row2">
          <div className="column1">
            <h3>Company Overview</h3>
            <p>
              At Dutton Financial, we are dedicated to providing customized
              financial solutions that meet your car financing needs. Whether
              you're looking to purchase a new car or refinance an existing
              loan, our team of experts is here to help. With our competitive
              rates and personalized service, we make the car financing process
              simple and hassle-free.
            </p>
          </div>
          <div className="column2">
            <img src={car1} alt="car-about-us" />
          </div>
        </div>

        {/* Third div with 2 columns */}
        <div className="row3">
          <div className="column3">
            <h3>Our Core Principles and Goals</h3>
            <p>
              At Dutton Financial, we are driven by our core principles and
              goals. We strive to provide tailored financial solutions that meet
              the unique needs of our clients.
            </p>
            <br />
            <p>
              We believe in conducting business with integrity, always putting
              our clients' best interests first.
            </p>
            <br />
            <p>
              We believe in conducting business with integrity, always putting
              our clients' best interests first.
            </p>
          </div>
          <div className="column4">
            {" "}
            <img src={car2} alt="car-about-us" />
          </div>
        </div>

        {/* Fourth div with 2 columns */}
        <div className="row4">
          <div className="rowTitle">
            {" "}
            <h3>Meet our Team</h3>
            <p>Get to know the talented individuals behind Dutton Financial.</p>
          </div>

          <div className="grid-container">
            {data.map((item, index) => (
              <div className="box" key={index}>
                <img src={item.img} alt={item.name} className="box-image" />
                <h3>{item.name}</h3>
                <p>{item.post}</p>
                <p>{item.description}</p>
                <div className="social-links">
                  <a
                    href={item.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn />{" "}
                  </a>
                  <a
                    href={item.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter />{" "}
                  </a>
                  <a
                    href={item.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram />{" "}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fifth div with 2 columns */}
        <div className="row">
          <div className="column">
            <h3>Our Journey: Milestones that Define Us</h3>
          </div>
          <div className="column">
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-icon">
                  <img src={cube} alt="icon" />
                </div>
                <div class="timeline-content">
                  <h3>Established in</h3>
                  <p>
                    2010 - Dutton Financial is founded with a vision to
                    revolutionize car financing.
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-icon">
                  <img src={cube} alt="icon" />
                </div>
                <div class="timeline-content">
                  <h3>Expansion</h3>
                  <p>
                    2015 - Dutton Financial expands its operations to serve
                    customers nationwide.
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-icon">
                  <img src={cube} alt="icon" />
                </div>
                <div class="timeline-content">
                  <h3>Achievements</h3>
                  <p>
                    2018 - Dutton Financial receives the prestigious Car Finance
                    Provider of the Year award.
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-icon">
                  <img src={cube} alt="icon" />
                </div>
                <div class="timeline-content">
                  <h3>Future Goals</h3>
                  <p>
                    2022 - Dutton Financial aims to launch innovative digital
                    car financing solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sixth div with 2 columns */}
        <div className="row6">
          <div className="column7">
            <h3>Our Commitment to Integrity, Transparency, and Client Focus</h3>
            <p>
              At Dutton Financial, we pride ourselves on our core values of
              integrity, transparency, and client focus. These values are at the
              heart of everything we do, guiding our decisions and actions. We
              believe in building trust with our clients by always being honest,
              open, and accountable. Our commitment to transparency means that
              we provide clear and straightforward information about our
              services, fees, and processes. And above all, we prioritize our
              clients' needs and goals, working closely with them to develop
              tailored financial solutions that meet their unique circumstances.
              Trust, integrity, transparency, and client focus are not just
              words to us – they are the foundation of our business.
            </p>
          </div>
          <div className="column8">
            {" "}
            <img src={car3} alt="car-about-us" />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default About;
