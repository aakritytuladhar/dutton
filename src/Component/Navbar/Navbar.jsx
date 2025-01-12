import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../Assets/logo2.png";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact Us", path: "/contact-us" },
  { label: "Loan Calculator", path: "/loan-calculator" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVip, setisVip] = useState(false);
  const navigate = useNavigate();

  // Check login state and VIP status from sessionStorage on initial load
  useEffect(() => {
    const userLoggedIn = sessionStorage.getItem("Loggedin") === "true";
    const vipStatus = sessionStorage.getItem("isVip") === "true";
    setIsLoggedIn(userLoggedIn);
    setisVip(vipStatus);
  }, []);

  // Handle drawer toggle for mobile
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Handle log out
  const handleLogOut = () => {
    sessionStorage.removeItem("Loggedin"); // Remove login status
    sessionStorage.removeItem("isVip"); // Remove VIP status
    setIsLoggedIn(false); // Update state
    setisVip(false);
    navigate("/login");
  };

  // Handle log in
  const handleLogIn = () => {
    sessionStorage.setItem("Loggedin", "true"); // Set login status
    sessionStorage.setItem("isVip", "false"); // Default VIP status to false
    setIsLoggedIn(true); // Update state
    setisVip(false);
    navigate("/login");
  };

  // Drawer content (mobile view)
  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "black",
        height: "100%",
        color: "white",
      }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        {navItems.map(({ label, path }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleNavigation(path)}
            >
              <ListItemText primary={label} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* Conditionally render Log In or Log Out */}
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={isLoggedIn ? handleLogOut : handleLogIn}
          >
            <ListItemText
              primary={isLoggedIn ? "Log Out" : "Log In"}
              sx={{ color: "white" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const handleLogo = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        backgroundColor: isVip ? "white" : "black", // Dynamically set background color
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <img src={logo} alt="logo" width={60} onClick={handleLogo} />

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          {navItems.map(({ label, path }) => (
            <Typography
              key={label}
              variant="body1"
              sx={{
                color: isVip ? "black" : "white", // Adjust text color for VIP
                ml: 2,
                cursor: "pointer",
                "&:hover": { color: isVip ? "gray" : "lightgray" },
              }}
              onClick={() => handleNavigation(path)}
            >
              {label}
            </Typography>
          ))}

          {/* Conditionally render Log In or Log Out button */}
          <Button
            onClick={isLoggedIn ? handleLogOut : handleLogIn}
            sx={{
              backgroundColor: isVip ? "black" : "white",
              color: isVip ? "white" : "black",
              borderRadius: 0,
              ml: 2,
            }}
          >
            {isLoggedIn ? "Log Out" : "Log In"}
          </Button>
        </Box>

        {/* Mobile Hamburger Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "block", md: "none" },
            color: isVip ? "black" : "white", // Adjust icon color for VIP
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { backgroundColor: isVip ? "white" : "black" },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
