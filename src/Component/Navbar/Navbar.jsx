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

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();

  // Handle drawer toggle for mobile
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Define navigation items and their respective routes
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact Us", path: "/contact-us" },
    { label: "Service", path: "/service" },
    { label: "Loan Calculator", path: "/loan-calculator" },
  ];

  // Check login status on component mount
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn"); // Retrieve login status from localStorage
    setIsLoggedIn(userLoggedIn === "true"); // Set state based on stored value
  }, []); // Empty dependency array ensures it runs only on component mount

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Handle log out
  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn"); // Remove login status from localStorage
    setIsLoggedIn(false); // Update state to trigger re-render
    navigate("/login"); // Redirect to login page
  };

  // Handle log in
  const handleLogIn = () => {
    localStorage.setItem("isLoggedIn", "true"); // Persist login status in localStorage
    setIsLoggedIn(true); // Update state to trigger re-render
    navigate("/"); // Navigate after login
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
      onKeyDown={handleDrawerToggle}>
      <List>
        {navItems.map(({ label, path }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleNavigation(path)}>
              <ListItemText primary={label} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* Show Log In if not logged in, Show Log Out if logged in */}
        {!isLoggedIn ? (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={handleLogIn}>
              <ListItemText primary="Log In" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={handleLogOut}>
              <ListItemText primary="Log Out" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        )}
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
      color="default"
      sx={{
        boxShadow: "none",
        backgroundColor: "black",
      }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}>
        {/* Logo */}
        <img src={logo} alt="logo" width={60} onClick={handleLogo} />

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          {navItems.map(({ label, path }) => (
            <Typography
              key={`${label}-text`}
              variant="body1"
              sx={{
                color: "white",
                ml: 2,
                cursor: "pointer",
                "&:hover": { color: "white" },
              }}
              onClick={() => handleNavigation(path)}>
              {label}
            </Typography>
          ))}

          {/* Conditionally render Log In or Log Out button */}
          {!isLoggedIn ? (
            <Button
              key="login-button"
              onClick={handleLogIn} // assuming path to login
              sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: 0,
                ml: 2,
              }}>
              Log In
            </Button>
          ) : (
            <Button
              key="logout-button"
              onClick={handleLogOut}
              sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: 0,
                ml: 2,
              }}>
              Log Out
            </Button>
          )}
        </Box>

        {/* Mobile Hamburger Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" }, color: "white" }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { backgroundColor: "white" },
        }}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
