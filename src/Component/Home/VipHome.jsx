import React, { useState } from "react";
import watch from "../Assets/watch.jpg";
import car3 from "../Assets/car pics/car-63930.jpg";
import img from "../Assets/carosal2.jpg";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  TextField,
  Alert,
  Button,
} from "@mui/material";
import "./home.css";

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
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!message || !email) {
      setError(true);
      setSuccess(false); // Hide success alert if fields are empty
    } else {
      setError(false);
      setSuccess(true); // Show success alert if validation passes
      // Add your submit logic here
      console.log("Form submitted:", { message, email });

      // Clear fields after submission
      setMessage("");
      setEmail("");
    }
  };

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
          <div className="rowcontainer">
            <h2>Contact Advisor</h2>
            <br />
            <p>Reach out to our financial advisors for personalized support.</p>
          </div>
          <div className="column form-column">
            <div className="contact-advisor-form">
              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  All fields are required.
                </Alert>
              )}
              {success && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Email sent successfully!
                </Alert>
              )}
              <label htmlFor="message">Message</label>
              <TextField
                id="message"
                placeholder="Enter your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{ backgroundColor: "white", width: "100%", mb: 2 }}
              />
              <label htmlFor="email">Email</label>
              <TextField
                id="email"
                type="email"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ backgroundColor: "white", width: "100%", mb: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className="contact-submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="vipMember">
        <div className="columnvipMember">
          <div className="content">
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
          <div className="image">
            <img src={car3} alt="car-about-us" className="vipImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipHome;
