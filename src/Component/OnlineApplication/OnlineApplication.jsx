import React, { useState } from "react";
import "./onlineApplication.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { FormControl, TextField, Button } from "@mui/material";
import shield from "../Assets/Shield Eye.png";
import protection from "../Assets/Document Protection.png";
import applicationProcess from "../Assets/Placeholder Image.png";
import loan from "../Assets/loan.png";
import interest from "../Assets/interest.jpg";
import personalLoan from "../Assets/loan 2.png";

const OnlineApplication = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const cardData = [
    {
      title: "Car Loans",
      description: "Low-interest Rates",
      image: interest,
    },
    {
      title: "Personal Loans",
      description: "Flexible Terms",
      image: personalLoan,
    },
    {
      title: "Your Loans",
      description: "Quick Approval Process",
      image: loan,
    },
  ];
  const buttonLabels = ["Sedan", "SUV", "Truck "];
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="onlineApplicationMainDiv">
      <div class="onlineApplicationMainRow">
        <div class="onlineApplicationMaincolumn">
          <h1>Popular Loan Options</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: "2%",
            }}
          >
            {cardData.map((card, index) => (
              <Card sx={{ width: "50%", maxWidth: "365px" }} key={index}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ width: "100%", height: " 320px", objectFit: "cover" }}
                    image={card.image}
                    alt={card.title}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {card.title}
                    </Typography>
                    <h4>{card.description}</h4>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        </div>
        <div class="onlineApplicationMaincolumn">
          <h1>Car Loans Application</h1>
          <p>Provide Your Personal And Financial Details</p>
          <div className="onlineApplicationDiv">
            <FormControl
              className="onlineApplication-form"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="field">
                  <label>Name</label>
                  <TextField
                    size="small"
                    value={username}
                    placeholder="Enter your Name"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label>Email</label>
                  <TextField
                    size="small"
                    value={username}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="onlineApplication-buttons">
                <label>Car Type</label>
                <div className="button-row">
                  {buttonLabels.map((label, index) => (
                    <Button
                      key={index}
                      variant="contained"
                      color="primary"
                      style={{ margin: "10px" }}
                    >
                      {label}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="contonlineApplicationactus-submitbuttons">
                <Button
                  variant="contained"
                  sx={{ alignItems: "center", backgroundColor: "black" }}
                  onClick={handleSubmit}
                >
                  Submit Application
                </Button>
              </div>
            </FormControl>
          </div>
        </div>
        <div class="onlineApplicationMaincolumn">
          <div class="applicationProcess">
            <div class="applicationProcessCol">
              <h2>Simple and Secure Online Application Process</h2>
              <p>
                Our online application process is designed to be user-friendly
                and secure. With separate sections for Car, Equipment, Personal,
                and YouX loans, you can easily provide your personal, financial,
                and loan details.
              </p>
              <div className="security">
                <div className="securitycol">
                  <img src={shield} />
                  <h6>Ease</h6>
                  <p>
                    Clear and organized form for personal, financial, and loan
                    details
                  </p>
                </div>
                <div className="securitycol">
                  <img src={protection} />
                  <h6>Security</h6>
                  <p>
                    Prominently displayed security assurances and trust badges
                  </p>
                </div>
              </div>
            </div>
            <div class="applicationProcessCol">
              <img src={applicationProcess} className="applicationImg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineApplication;
