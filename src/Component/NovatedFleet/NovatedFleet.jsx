import React from "react";
import "./novatedFleet.css";
import img3 from "../Assets/car pics/car-63930.jpg";
import { ViewInAr } from "@mui/icons-material";
const NovatedFleet = () => {
  return (
    <div className="novatedFleetMain">
      {" "}
      <div className="novated-leasing">
        <div className="overlay">
          <h1>Novated Leasing Benefits</h1>
          <p>
            Discover how novated leasing can benefit both employers and
            employees.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
      <div className="two-column-container">
        <div className="column">
          <h2>Unlock Your Savings</h2>
        </div>
        <div className="column">
          <p>
            Discover the benefits of novated leasing and fleet management
            services offered by Dutton Financial. Save on taxes and enjoy
            comprehensive fleet solutions for your business. Explore vehicle
            acquisition, management, and financing options today.
          </p>
          <div className="column-button">
            <button className="learn-more">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="outer-container">
        {/* Right Column */}
        <div className="right-column">
          <h2>Tax-Saving Benefits for Employers</h2>
          <p>
            Discover how our novated leasing and fleet management services can
            help your business save on taxes while providing comprehensive
            solutions for vehicle acquisition, management, and financing.
          </p>

          {/* Nested Columns */}
          <div className="nested-columns">
            <div className="nested-column">
              <h4>50%</h4>
              <p>Tax savings for your business</p>
            </div>
            <div className="nested-column">
              <h4>50%</h4>
              <p>Comprehensive fleet management solutions</p>
            </div>
          </div>
        </div>
        {/* Left Column */}
        <div className="left-column">
          <img src={img3} />{" "}
        </div>
      </div>
      <div className="outer-container">
        {/* Right Column */}
        <div className="right-column">
          <h2>Streamline Your Fleet Management with Us</h2>
          <p>
            Our comprehensive fleet management solutions provide businesses with
            efficient and cost-effective ways to manage their vehicle fleet.
            From acquisition to financing, we have you covered.
          </p>

          {/* Nested Columns */}
          <div className="nested-columns">
            <div className="nested-column">
              <h4>Benefits</h4>
              <p>Save on Taxes and Optimize Your Fleet Operations</p>
            </div>
            <div className="nested-column">
              <h4>Expertise</h4>
              <p>
                Leverage Our Fleet Management Expertise for Maximum Efficiency
              </p>
            </div>
          </div>
        </div>
        {/* Left Column */}
        <div className="left-column">
          <img src={img3} />{" "}
        </div>
      </div>
      <div className="flexible-container">
        <h1>Flexible Options for Vehicle Acquisition and Financing</h1>
        <p>
          At Dutton Financial, we offer a range of vehicle acquisition,
          management, and financing options to suit your needs. Whether you're
          an individual looking for a novated lease or a business in need of
          fleet management solutions, we have you covered.
        </p>
      </div>
      <div class="features">
        <div class="feature-card">
          <div class="icon">
            {" "}
            <ViewInAr />
          </div>
          <h3>Novated Leasing for Tax Savings</h3>
          <p>
            Our novated leasing program provides tax-saving benefits for
            employees, allowing them to finance their vehicles with pre-tax
            dollars.
          </p>
        </div>
        <div class="feature-card">
          <div class="icon">
            {" "}
            <ViewInAr />
          </div>
          <h3>Comprehensive Fleet Management Solutions</h3>
          <p>
            For businesses, we offer comprehensive fleet management solutions to
            streamline operations and reduce costs.
          </p>
        </div>
        <div class="feature-card">
          <div class="icon">
            <ViewInAr />
          </div>
          <h3>Expert Guidance and Support</h3>
          <p>
            Our team of experts is here to provide guidance and support
            throughout the entire vehicle acquisition and financing process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NovatedFleet;
