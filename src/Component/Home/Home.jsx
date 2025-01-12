import React from "react";
import Carosal from "./Carosal/Carosal";
import "./home.css";
import { Button } from "@mui/material";
import CardBox from "./CardSection/CardBox";
import Brand from "./BrandSection/Brand";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="carosalSection">
        <Carosal />
        <div className="carosalText">
          <div className="carosalLeft">
            <h1>Need a new car, Dutton Automotive has the best one.</h1>
          </div>
          <div className="carosalRight">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 0,
                marginLeft: "2rem",
              }}
              onClick={() => navigate("/loan-calculator")}
            >
              Calculate Now
            </Button>
          </div>
        </div>
        <hr />
        <div className="cardSection">
          <div className="cardText">
            <h1>Simplified Financing Solutions for Your Car Purchase</h1>
            <p>
              Our car finance options make it easy for you to get behind the
              wheel of your dream car. Whether you're looking for a loan,
              financial planning assistance, or insurance coverage, we have you
              covered.
            </p>
          </div>
          <div className="cardDiv">
            <CardBox />
          </div>
          <div className="brandDiv">
            <h1> Explore Our Premium Brands</h1>
            <Brand />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
