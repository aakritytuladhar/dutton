import React, { useState } from "react";
import "./login.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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

const Login = () => {
  const [open, setOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleMouseUpPassword = (event) => event.preventDefault();

  const handleClose = () => {
    setOpen(false);
  };
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className="loginDiv">
      {" "}
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            width: "100%", // Set custom width
            height: "100%", // Set custom height
            maxWidth: "none", // Prevent default width constraints
          },
        }}>
        <div className="dialogContent">
          <div className="loginLeft">
            <div className="dialogTitle">
              <img src={logo} alt="logo" className="loginLogo" />
            </div>
            <h4>Nice To See You Again</h4>
            <div className="loginForm">
              <FormControl className="loginMuiForm">
                <label>Login</label>
                <TextField size="small" sx={{ paddingBottom: 1 }} />
                <label>Password</label>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  size="small"
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
                    <p>Forgot Password?</p>
                  </div>
                  <Button variant="contained" sx={{ width: "100%" }}>
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
              <p>Dont have an account? Sign up now</p>
            </div>
            <p className="copyRight">© Dutton Finance 2024</p>
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
