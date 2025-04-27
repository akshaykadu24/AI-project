import Sidebar from '@/components/sidebar';
import { useState } from 'react';
import { Box, Button, Typography, Paper, Avatar, TextField, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BillingHistory from '@/components/BillingHistory';

const MyAccount = () => {
  const [selected, setSelected] = useState("Profile");
  const [sidebarOpen, setSidebarOpen] = useState(true); // State to manage sidebar visibility

  const tabs = [
    { label: "Profile", icon: <AccountCircleIcon fontSize="small" /> },
    { label: "Subscriptions", icon: <SubscriptionsIcon fontSize="small" /> },
    { label: "Billing history", icon: <ReceiptIcon fontSize="small" /> },
    { label: "Logout", icon: <LogoutIcon fontSize="small" /> },
  ];

  const handleTabClick = (tabLabel) => {
    setSelected(tabLabel);
    if (window.innerWidth <= 600) { // For mobile screens, close sidebar on tab selection
      setSidebarOpen(false);
    }
  };

  const handleBackClick = () => {
    setSidebarOpen(true); // Open sidebar again when back icon is clicked
  };

  return (
    <>
      <Sidebar pageHeading="My Account" />
      <Box sx={{ display: "flex", bgcolor: "#fafafa", minHeight: "100vh", ml: { md: "250px" } }}>
        {/* Left Sidebar */}
        {sidebarOpen && (
          <Box
            sx={{
              width: { xs: "250px", sm: "250px" },
              borderRight: { sm: "1px solid #e0e0e0" },
              bgcolor: "#fff",
              p: 2,
              display: { xs: "block", sm: "block" }, // Ensure it is displayed on small and large screens
            }}
          >
            {tabs.map((tab) => (
              <Button
                key={tab.label}
                fullWidth
                onClick={() => handleTabClick(tab.label)}
                sx={{
                  mb: 1,
                  justifyContent: "space-between",
                  color: "black",
                  bgcolor: selected === tab.label ? "#f5f5f5" : "#fff",
                  border: "1px solid",
                  borderColor: selected === tab.label ? "black" : "#e0e0e0",
                  "&:hover": {
                    bgcolor: "#f5f5f5",
                    borderColor: "black",
                  },
                  fontWeight: 500,
                  textTransform: "none",
                  pl: 1.5,
                  pr: 1,
                }}
                startIcon={tab.icon}
                endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
              >
                {tab.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Right Content */}
        <Box sx={{ flexGrow: 1, p: { xs: 2, sm: 4 }, position: "relative" }}>
          {/* Show back button on mobile screen if sidebar is closed */}
          {!sidebarOpen && (
            <Box sx={{ position: "absolute", top: 22, left: 15, padding: 1 }}>
              <IconButton onClick={handleBackClick} sx={{ color: "black" }}>
                <ArrowBackIcon />
              </IconButton>
            </Box>
          )}

          <Paper sx={{ p: { xs: 2, sm: 4 }, minHeight: "450px", bgcolor: "#fff", boxShadow: "none" }}>
            {selected === "Profile" && (
              <>
                <Typography variant="h5" fontWeight={600} mb={3} ml={4}>
                  Basic Details
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: 2,
                    mb: 4,
                  }}
                >
                  <Avatar sx={{ width: 80, height: 80 }} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3, maxWidth: "500px" }}>
                  <Box>
                    <Typography variant="subtitle2" mb={0.5}>Name</Typography>
                    <TextField
                      fullWidth
                      value="Akshay Kadu"
                      InputProps={{
                        readOnly: true,
                        sx: { bgcolor: "#f9f7f7" },
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" mb={0.5}>Email</Typography>
                    <TextField
                      fullWidth
                      value="akshaykadu24@gmail.com"
                      InputProps={{
                        readOnly: true,
                        sx: { bgcolor: "#f9f7f7" },
                      }}
                    />
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    mt: 4,
                    bgcolor: "black",
                    "&:hover": { bgcolor: "#333" },
                    textTransform: "none",
                    px: 3,
                    py: 1.5,
                    borderRadius: "8px",
                  }}
                >
                  Delete Account
                </Button>
              </>
            )}

            {selected === "Subscriptions" && (
              <>
                <Typography variant="h5" fontWeight={600} ml={4}>
                  Your Subscriptions Info
                </Typography>
                <Typography pt={"20px"}>
                  You do not have any subscription.<br />
                  Subscribe to our more featured plan for more credits and benefits.
                </Typography>
              </>
            )}

            {selected === "Billing history" && (
              <>
                <Typography variant="h5" fontWeight={600} ml={4}>
                  Your Billing History
                </Typography>
                <BillingHistory />
              </>
            )}

            {selected === "Logout" && (
              <Typography variant="h5" fontWeight={600}>
                You are Logged Out
              </Typography>
            )}
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default MyAccount;
