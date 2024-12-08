import React from "react";
import "./footer.css";
import logo from "../Assets/logo3.png";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  TextFieldsSharp,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
const Footer = () => {
  return (
    <div className="footerMain">
      <div className="footercol">
        <div className="col1">
          <img src={logo} alt="footorLogo" className="footerLogo" />
          <h4>
            Stay up to date on features and releases by joining our newspaper.
          </h4>
          <div className="footeremail">
            {" "}
            <TextField
              placeholder="Enter your email here"
              sx={{ backgroundColor: "white", width: 500 }}
            />
            <Button
              sx={{
                border: "1px solid white",
                width: 150,
                height: 55,
                color: "white",
                borderRadius: 0,
              }}>
              Subscribe
            </Button>
          </div>
          <h6>
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </h6>
        </div>
        <div className="col2">
          <h4>More Pages</h4>
          <div className="pageContainer">
            <div className="morePage">
              <p>
                <a href="/privacy-policy">Privacy and Policy</a>
              </p>
              <p>
                <a href="/terms-and-conditions">Terms and Conditions</a>
              </p>
              <p>
                <a href="/blog">Blog Page</a>
              </p>
            </div>
            <div className="morePage2">
              <p>
                <a href="/online-application">Online Application</a>
              </p>
              <p>
                <a href="/novated-fleet-leasing">Novated Fleet & Leasing</a>
              </p>
              <p>
                <a href="/faq">FAQ</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col3">
          <h4>Follow us</h4>
          <div className="social">
            <FacebookOutlined /> Facebook
          </div>
          <div className="social">
            {" "}
            <Instagram /> Instagram
          </div>
          <div className="social">
            {" "}
            <Twitter /> Twitter
          </div>
          <div className="social">
            <LinkedIn /> LinkedIn
          </div>{" "}
          <div className="social">
            {" "}
            <YouTube /> Youtube
          </div>
        </div>
      </div>

      <hr></hr>
      <div className="row">
        <div className="row1">
          <footer>
            <p>© 2024 Dutton Finace. All rights reserved.</p>
          </footer>
        </div>
        <div className="row2">
          <p>Privacy Policy</p> <p>Terms of Service</p> <p>Cookies Setting</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
