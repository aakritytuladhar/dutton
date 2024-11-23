import React, { useState } from "react";
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

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    "Home",
    "About",
    "Contact",
    "Service",
    "Loan Calculator",
    "Log In",
  ];

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
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
        <img src={logo} alt="logo" width={60} />

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          {navItems.map((item) =>
            item === "Log In" ? (
              <Button
                key={item}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: 0,
                  ml: 2,
                }}>
                {item}
              </Button>
            ) : (
              <Typography
                key={item}
                variant="body1"
                sx={{
                  color: "white",
                  ml: 2,
                  cursor: "pointer",
                  "&:hover": { color: "white" },
                }}>
                {item}
              </Typography>
            )
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
