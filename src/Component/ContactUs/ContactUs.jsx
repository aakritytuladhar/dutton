import React, { useState } from "react";
import "./contactus.css";
import { FormControl, TextField, Button, Snackbar } from "@mui/material";
import { Email, Phone, Place } from "@mui/icons-material";
import Map from "./Map";
const ContactUs = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !subject || !message) {
      setErrorMessage("All fields are required!");
      setSnackbarMessage("Please fill all fields.");
      setOpenSnackbar(true);
    } else {
      setErrorMessage("");
      setSnackbarMessage("Message Sent Successfully!");
      setOpenSnackbar(true);

      // Reset the form fields after successful submission
      setUsername("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="contactMainDiv">
      <div className="contactUsFstDiv">
        <div className="contactTitle">
          <h1>Contact Us</h1>
          <p>Reach out to us for any inquiries or support</p>
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
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label>Message</label>
                <TextField
                  size="small"
                  sx={{ paddingBottom: 1 }}
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="contactus-buttons">
              <Button
                variant="contained"
                sx={{ alignItems: "center", backgroundColor: "black" }}
                onClick={handleSubmit}
              >
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
                <Phone className="contactImg" />
              </div>
              <p>Phone no:</p>
              <a href="tel:123-456-789" className="contactus-a">
                123-456-789
              </a>
            </div>
            <div className="phn">
              <div className="ovalImg">
                <Email className="contactImg" />
              </div>
              <p>Email</p>
              <p className="contactus-p">info@gmail.com</p>
            </div>
            <div className="phn">
              <div className="ovalImg">
                <Place className="contactImg" />
              </div>
              <p>Location</p>
              <p className="contactus-p">
                123 Main Street, Melbourne, Australia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Snackbar for showing messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </div>
  );
};

export default ContactUs;
