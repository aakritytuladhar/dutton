import React, { useState } from "react";
import "./contactus.css";
import { FormControl, TextField, Button } from "@mui/material";

import Map from "./Map";
import { Email, Phone, Place } from "@mui/icons-material";

const ContactUs = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="contactMainDiv">
      <div className="contactUsFstDiv">
        <div className="contactTitle">
          <h2>Contact Us</h2>
          <p>Reach out to us for any inquires or support</p>
        </div>
        <div className="contactFormDiv">
          <FormControl className="contactus-form" onSubmit={handleSubmit}>
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
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label>Subject</label>
                <TextField
                  size="small"
                  sx={{ paddingBottom: 1 }}
                  placeholder="Enter the subject"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label>Message</label>
                <TextField
                  size="small"
                  sx={{ paddingBottom: 1 }}
                  placeholder="Enter your message"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="contactus-buttons">
              <Button
                variant="contained"
                sx={{ alignItems: "center", backgroundColor: "black" }}
                onClick={handleSubmit}>
                Send Message
              </Button>
            </div>
          </FormControl>
        </div>
      </div>

      <div className="contactUsSndDiv">
        <div className="contactus-Map">
          <Map />
        </div>
        <div className="contactus-contactInformation">
          <h1>Contact Information</h1>
          <div className="contactus-contactInfoImg">
            <div className="phn">
              <div className="ovalImg">
                {" "}
                <Phone className="contactImg" />
              </div>
              <p>Phone no:</p>
              {/* <p className="contactus-p"> */}
              <a href="tel:123-456-789" className="contactus-a">
                {" "}
                123-456-789
              </a>
              {/* </p> */}
            </div>
            <div className="phn">
              {" "}
              <div className="ovalImg">
                {" "}
                <Email className="contactImg" />
              </div>{" "}
              <p>Email</p>
              <p className="contactus-p">info@gmail.com</p>
            </div>
            <div className="phn">
              {" "}
              <div className="ovalImg">
                {" "}
                <Place className="contactImg" />
              </div>{" "}
              <p>Loaction</p>
              <p className="contactus-p">
                123 Main Street , Melbourne, Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
