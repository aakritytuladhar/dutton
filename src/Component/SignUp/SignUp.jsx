import React, { useState, useEffect } from "react";
import "../Login/login.css";
import axios from "axios";
import wallapaper from "../Assets/signin.jpg";
import {
  IconButton,
  TextField,
  Button,
  Checkbox,
  Alert,
  AlertTitle,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [vipCode, setVipCode] = useState("");
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpTimer, setOtpTimer] = useState(30);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const isVip = vipCode === "DUTTON2024";
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/duttonphp/SiginApi.php",
        { sendOtp: true, email },
        { withCredentials: true }
      );
      if (response.data.message === "OTP sent successfully") {
        setOtpSent(true);
        setOtpTimer(30);
        setSuccessMessage("OTP sent successfully.");
        const timer = setInterval(() => {
          setOtpTimer((prev) => {
            if (prev === 1) clearInterval(timer);
            return prev - 1;
          });
        }, 1000);
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage("Error sending OTP.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/duttonphp/SiginApi.php",
        {
          otp,
          username,
          password,
          confirmPassword,
          email,
          contact,
          address,
          vipCode,
        },
        { withCredentials: true }
      );
      if (response.data.message === "User registered successfully") {
        const userData = {
          username,
          email,
          contact,
          address,
          isVip,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        setSuccessMessage("Registration successful!");
        setTimeout(() => {
          if (isVip) {
            navigate("/login");
          } else {
            navigate("/");
          }
        }, 2000);
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/duttonphp/SiginApi.php",
        {
          username,
          password,
          confirmPassword,
          email,
          contact,
          address,
          vipCode,
        }
      );
      if (response.data.message === "User registered successfully") {
        setSuccessMessage("Registration successful!");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  // Automatically dismiss success or error alert after 30 seconds
  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 20000); // 30 seconds
      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="signInDiv">
      <div className="dialogContent">
        <div className="loginLeft">
          <div className="dialogTitle">
            <h1> DUTTON FINANCE</h1>
          </div>
          <div className="leftContainer">
            <div className="leftContent">
              <h4>Get Started Now</h4>
              <div className="loginForm">
                <form className="loginMuiForm">
                  <label>Full Name</label>
                  <TextField
                    size="small"
                    sx={{ width: "100%" }}
                    placeholder="Enter your full name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label>Email</label>
                  <TextField
                    size="small"
                    sx={{ width: "100%" }}
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label>Contact</label>
                  <TextField
                    size="small"
                    sx={{ width: "100%" }}
                    placeholder="Enter your Contact Number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                  <label>Address</label>
                  <TextField
                    size="small"
                    sx={{ width: "100%" }}
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <label>Password</label>
                  <OutlinedInput
                    sx={{ width: "100%" }}
                    type={showPassword ? "text" : "password"}
                    size="small"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    required
                  />
                  <label>Confirm Password</label>
                  <OutlinedInput
                    sx={{ width: "100%" }}
                    type={showConfirmPassword ? "text" : "password"}
                    size="small"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setConfirmShowPassword((prev) => !prev)
                          }
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    required
                  />
                  <h6>VIP LOGIN CODE</h6>
                  <TextField
                    size="small"
                    sx={{ width: "100%" }}
                    value={vipCode}
                    onChange={(e) => setVipCode(e.target.value)}
                  />
                  <div className="signUp-loginCode">
                    <Checkbox
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                    />
                    <p>I agree to the terms & policy</p>
                  </div>

                  <Button
                    type="button"
                    variant="contained"
                    sx={{ width: "100%", backgroundColor: "black" }}
                    onClick={handleSendOtp}
                  >
                    Send OTP
                  </Button>
                  {otpSent && (
                    <>
                      <label>Enter OTP</label>
                      <TextField
                        size="small"
                        sx={{ width: "100%" }}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                      />
                      <Button
                        type="button"
                        variant="contained"
                        sx={{ width: "100%", backgroundColor: "black" }}
                        onClick={handleVerifyOtp}
                      >
                        Verify OTP and Sign Up
                      </Button>
                    </>
                  )}
                  {successMessage && (
                    <Alert severity="success" sx={{ marginTop: 2 }}>
                      <AlertTitle>Success</AlertTitle>
                      {successMessage}
                    </Alert>
                  )}

                  {errorMessage && (
                    <Alert severity="error" sx={{ marginTop: 2 }}>
                      <AlertTitle>Error</AlertTitle>
                      {errorMessage}
                    </Alert>
                  )}
                </form>
              </div>
              <p>
                Already have an account?{" "}
                <a href="#" onClick={() => navigate("/login")}>
                  Login now
                </a>
              </p>
              <p className="copyRight">© Dutton Finance 2024</p>
            </div>
          </div>
        </div>
        <div className="loginRight">
          <img src={wallapaper} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
