import React, { useState } from "react";
import "./login.css";
import Dialog from "@mui/material/Dialog";

import axios from "axios";
import wallapaper from "../Assets/login.png";
import {
  IconButton,
  FormControl,
  Switch,
  TextField,
  Button,
} from "@mui/material";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import logo from "../Assets/Frame.png";
import google from "../Assets/google.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleMouseUpPassword = (event) => event.preventDefault();

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/duttonphp/LoginApi.php",
        {
          username,
          password,
        }
      );

      const data = response.data;
      console.log("tes", data);
      console.log(username, password);
      if (data.message === "Login successful") {
        alert("Login successful");
        navigate("/");
        localStorage.setItem("isLoggedIn", "true");
      } else {
        console.log("Login failed");

        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error during login", error);
      setErrorMessage("An error occurred during login");
    }
  };
  const handleSignInPage = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  return (
    <div className="loginDiv">
      {" "}
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
            height: "100%",
            maxWidth: "none",
            overflow: "hidden",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "white",
          },
        }}>
        <div className="dialogContent">
          <div className="loginLeft">
            <div className="dialogTitle">
              <h1> DUTTON FINANCE</h1>
            </div>
            <div className="leftContainer">
              <div className="leftContent">
                <h4>Nice To See You Again</h4>
                <div className="loginForm">
                  <FormControl className="loginMuiForm" onSubmit={handleSubmit}>
                    <label>Login</label>
                    <TextField
                      size="small"
                      placeholder="Enter your email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <label>Password</label>
                    <OutlinedInput
                      id="outlined-adornment-password"
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
                            required
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <div className="buttons">
                      <div className="toggleDiv">
                        <div className="rememberDiv">
                          <Switch {...label} defaultChecked />
                          <p>Remember me</p>
                        </div>
                        <a href="#" className="signupLink">
                          Forgot Password?
                        </a>
                      </div>
                      <Button
                        variant="contained"
                        sx={{ width: "100%" }}
                        onClick={handleSubmit}>
                        Sign In
                      </Button>
                      <hr />
                      <Button
                        // variant="contained"
                        sx={{
                          backgroundColor: "black",
                          color: "white",
                          width: "100%",
                        }}
                        startIcon={
                          <img
                            src={google}
                            alt="Google"
                            style={{ width: "20px", height: "20px" }}
                          />
                        }>
                        Or Sign in with Google
                      </Button>
                    </div>
                  </FormControl>
                </div>
                <div className="signupNow">
                  <p>
                    Dont have an account?{" "}
                    <a
                      href="#"
                      className="signupLink"
                      onClick={handleSignInPage}>
                      Sign up now
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
      </Dialog>
    </div>
  );
};

export default Login;
