import React, { useState } from "react";
import "../Login/login.css";

import axios from "axios";
import wallapaper from "../Assets/signin.jpg";
import {
  IconButton,
  FormControl,
  Switch,
  TextField,
  Button,
  Checkbox,
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

  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const handleClickShowConfirmPassword = () =>
    setConfirmShowPassword((show) => !show);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleMouseUpPassword = (event) => event.preventDefault();

  const navigate = useNavigate();
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      console.log(data);
      if (data.message === "User registered successfully") {
        alert("Registration successful!");
        navigate("/login");
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error during registration", error);
      setErrorMessage("Registration failed. Please try again.");
    }
  };
  const handleLoginPage = (e) => {
    e.preventDefault();
    navigate("/login");
  };
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
                <form className="loginMuiForm" onSubmit={handleSubmit}>
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
                    id="outlined-adornment-password"
                    sx={{ width: "100%" }}
                    type={showPassword ? "text" : "password"}
                    size="small"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    required
                  />
                  <label>Confirm Password</label>
                  <OutlinedInput
                    sx={{ width: "100%" }}
                    id="outlined-adornment-confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    size="small"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showConfirmPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end">
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
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <p> I agree to the terms & policy</p>
                  </div>
                  <div className="buttons">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ width: "100%", backgroundColor: "black" }}>
                      Sign Up
                    </Button>
                  </div>
                </form>
              </div>

              <div className="signinNow">
                <p>OR</p>
                <p style={{ marginTop: 0 }}>
                  Already have an account?{" "}
                  <a href="#" className="signupLink" onClick={handleLoginPage}>
                    Login now
                  </a>
                </p>
              </div>
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
