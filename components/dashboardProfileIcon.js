import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";

const DashboardProfileIcon = () => {
  const [iconDropDown, setIconDropDown] = useState(false);
  const router = useRouter();
  const handleAccountIcon = () => {
    setIconDropDown(!iconDropDown);
  };
  const handleClick = ()=>{
    router?.push("/user/my-account")
  }
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: 3,
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 2,
          py: 1,
          "&:hover": {
            backgroundColor: "#333",
          },
        }}
        onClick={() => handleAccountIcon()}
      >
        <Avatar sx={{ width: 30, height: 30 }}>A</Avatar>
        {/* Name - Hide on mobile */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>Akshay Kadu</Box>

        {/* Icon - Hide or show based on screen */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <ExpandMoreIcon />
        </Box>
      </Button>
      {iconDropDown && (
        <Box
          sx={{
            position: "absolute",
            top: 57,
            right: 25,
            backgroundColor: "#fff",
            boxShadow: 2,
            borderRadius: 2,
            p: 2,
            zIndex: 10,
          }}
        >
          <Typography
            variant="body1"
            sx={{ mb: 1 }}
            onClick={() => handleClick()}
          >
            My Account
          </Typography>
          <Typography variant="body1">Logout</Typography>
        </Box>
      )}
    </div>
  );
};

export default DashboardProfileIcon;
