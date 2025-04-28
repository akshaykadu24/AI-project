import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Button,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ImageIcon from "@mui/icons-material/Image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DashboardProfileIcon from "./dashboardProfileIcon";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";

const menuItems = [
  { text: "Dashboard", url: "/user/dashboard", icon: <DashboardIcon /> },
  { text: "DALL-E Generator", url: "/", icon: <ImageIcon /> },
  { text: "Gallery", url: "/user/image-gallery", icon: <ImageIcon /> },
  { text: "My Account", url: "/user/my-account", icon: <AccountCircleIcon /> },
  { text: "Help Center", url: "/user/help-center", icon: <HelpOutlineIcon /> },
];

const Sidebar = ({ pageHeading }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const router = useRouter();
  const handleClick = (url) => {
    router?.push(url);
  };
  const drawer = (
    <Box sx={{ p: 2 }}>
      {/* Logo */}
      <Typography variant="h5" sx={{ mb: 4, fontWeight: "bold" }}>
        DALL-E AI
      </Typography>

      {/* Menu */}
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{ borderRadius: 2, mb: 1 }}
            onClick={() => {
              handleClick(item?.url);
            }}
          >
            <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              disableTypography
              sx={{ fontSize: "1rem", color: "#fff", fontWeight: 500 }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: 250,
          backgroundColor: "#000",
          color: "#fff",
          height: "100vh",
          position: "fixed",
        }}
      >
        {drawer}
      </Box>

      {/* Mobile Sidebar (Drawer) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
            backgroundColor: "#000",
            color: "#fff",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px", // Slightly increased for better spacing
          paddingX: 3, // Padding left and right
          paddingY: 1.5, // Padding top and bottom
          backgroundColor: "#fff", // Optional: White background
          borderRadius: "10px", // Optional: Smooth corners
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)", // Optional: Soft shadow
          marginBottom: 3, // Space below navbar
        }}
      >
        {/* Mobile menu button */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <Button
            color="black"
            onClick={handleDrawerToggle}
            sx={{ minWidth: "auto", padding: 1 }}
          >
            <MenuIcon fontSize="large" />
          </Button>
        </Box>
        {/* for desktop screen */}
        <Typography
          variant="h5"
          sx={{
            display: { xs: "none", md: "block" },
            fontWeight: "bold",
            mb: { xs: 0, md: 0 },
            textAlign: "center",
            flexGrow: 1, // Push center when menu icon visible
            ml: { xs: 2, md: 0 },
          }}
        >
          {pageHeading}
        </Typography>
        {/* for mobile screen */}
        <Typography
          variant="h5"
          sx={{
            display: { xs: "block", md: "none" },
            fontWeight: "bold",
            mb: { xs: 0, md: 0 },
            textAlign: "center",
            flexGrow: 1, // Push center when menu icon visible
            // ml: { xs: 2, md: 0 },
          }}
        >
          Logo{" "}
        </Typography>

        <DashboardProfileIcon />
      </Box>
    </>
  );
};

export default Sidebar;
