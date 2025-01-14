import React, { useEffect, useState } from "react";
import "./login.css";
import Dialog from "@mui/material/Dialog";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import wallapaper from "../Assets/login.png";
import {
  IconButton,
  FormControl,
  TextField,
  Button,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const navigate = useNavigate();

  useEffect(() => {
    const rememberMe = localStorage.getItem("rememberMe");
    if (rememberMe === "true") {
      setUsername(localStorage.getItem("username") || "");
    }
  }, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/duttonphp/LoginApi.php",
        { username, password }
      );

      const data = response.data;

      if (data.message === "Login successful") {
        setSnackbarMessage("Login successful!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);

        // VIP navigation logic
        if (data.vip === "DUTTON2024") {
          sessionStorage.setItem("isVip", true);
          navigate("/vip-home");
          window.location.reload();
        } else {
          sessionStorage.setItem("isVip", false);
          navigate("/");
          window.location.reload();
        }
        sessionStorage.setItem("Loggedin", JSON.stringify(true));
      } else {
        setSnackbarMessage(data.message || "Login failed");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch (error) {
      setSnackbarMessage("An error occurred during login");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSignInPage = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div className="loginDiv">
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
            height: "70%",
            maxWidth: "none",
            overflow: "hidden",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "white",
          },
        }}
      >
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
                    <label>UserName</label>
                    <TextField
                      size="small"
                      placeholder="Enter your UserName"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <label>Password</label>
                    <OutlinedInput
                      placeholder="Enter your password"
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
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <div className="buttons">
                      <div className="toggleDiv">
                        <a href="#" className="signupLink">
                          Forgot Password?
                        </a>
                      </div>
                      <Button
                        variant="contained"
                        sx={{ width: "100%" }}
                        onClick={handleSubmit}
                      >
                        Sign In
                      </Button>
                    </div>
                  </FormControl>
                </div>
                <div className="signupNow">
                  <p>
                    Don’t have an account?{" "}
                    <a
                      href="#"
                      className="signupLink"
                      onClick={handleSignInPage}
                    >
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

      {/* Snackbar for alerts */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
