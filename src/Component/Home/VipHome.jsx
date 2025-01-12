import React from "react";
import watch from "../Assets/watch.jpg";
import "./home.css";
import car3 from "../Assets/car pics/car-63930.jpg";

import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  TextField,
} from "@mui/material";
import img from "../Assets/carosal2.jpg";
const cardsData = [
  {
    id: 1,
    images: img,
    title: "XYZ Luxury Sedan",
    description: "$100,000",
  },
  {
    id: 2,
    images: img,
    title: "ABC Private Jet",
    description: "$100,000",
  },
  {
    id: 3,
    images: img,
    title: "ABC Private Jet",
    description: "$100,000",
  },
];
const VipHome = () => {
  return (
    <div className="vip-home-main">
      <div className="welcome">
        <h1>Welcome to VIP Home</h1>
        <img src={watch} alt="watch" />
      </div>
      <div className="explusiveDeals">
        <h1>Exclusive Deals</h1>
        <p>Discover premium products at special prices.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5%" }}>
          {cardsData.map((card) => (
            <Card sx={{ width: 380 }} key={card.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={card.images}
                  alt={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
      <div className="contact-advisor">
        <div className="contact-container">
          {/* First Column: Row */}
          {/* <div className="column row-column"> */}
          {/* <div className="row"> */}
          <div className="rowcontainer">
            {" "}
            <h2>Contact Advisor</h2>
            <br />
            <p>Reach out to our financial advisors for personalized support.</p>
          </div>

          {/* </div> */}
          {/* </div> */}

          {/* Second Column: Contact Advisor Form */}
          <div className="column form-column">
            <div className="contact-advisor-form">
              <label htmlFor="message">Message</label>
              <TextField
                id="message"
                placeholder="Enter your message here"
                sx={{ backgroundColor: "white", width: "100%" }}
              />
              <label htmlFor="email">Email</label>
              <TextField
                id="email"
                type="email"
                placeholder="Enter your email here"
                sx={{ backgroundColor: "white", width: "100%" }}
              />
              <button className="contact-submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="vipMember">
        <div className="row6">
          <div className="column7">
            <h3>
              Unlock Exclusive Deals and Personalized Financial Offers as a VIP
              Member
            </h3>
            <p>
              As a VIP member, you'll enjoy access to a range of personalized
              financial offers tailored to your unique needs. Whether you're
              looking for a new car or want to refinance your current vehicle,
              our team of dedicated advisors is here to assist you every step of
              the way.
            </p>
          </div>
          <div className="column8">
            {" "}
            <img src={car3} alt="car-about-us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipHome;
