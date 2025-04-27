import React, { useState } from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ImageIcon from "@mui/icons-material/Image";
import Sidebar from "@/components/sidebar";
import DashboardProfileIcon from "@/components/dashboardProfileIcon";
import ImageGrid from "@/components/imageGrid";

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const images = [
    "/img/img1.jpeg",
    "/img/img2.jpeg",
    "/img/img3.jpeg",
    "/img/img4.jpeg",
    "/img/img5.jpeg",
  ];


  return (
    <>
       <Sidebar pageHeading ="Dashboard"/>
    
    <Box sx={{ display: "flex", height: "100vh" }}>
      
      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          ml: { md: "250px" }, // Margin left for desktop sidebar
          width: { xs: "100%", md: "calc(100% - 250px)" },
        }}
      >
        {/* Top Right Profile */}
       

        {/* Content */}

        <Typography variant="h6" sx={{ mb: 3 }}>
          Welcome to DALL-E AI
        </Typography>
        {/* Cards */}
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 4 }}>
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              p: 3,
              flex: '1 1 200px',
              textAlign: 'center',
            }}
          >
            <ImageIcon sx={{ fontSize: 50, mb: 1 }} />
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              0
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Images Generated From Text
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              p: 3,
              flex: '1 1 200px',
              textAlign: 'center',
            }}
          >
            <CreditCardIcon sx={{ fontSize: 50, mb: 1 }} />
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              0
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Number of Credit Counts Left
            </Typography>
          </Box>
        </Box>

        {/* Last Generated Images */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          Last Generated Images
        </Typography>

        {
            images.length > 0 ? (
                <ImageGrid images={images} />

            ):
            <Typography variant="body1" color="text.secondary">
              No Result Found!
            </Typography>
        }
      </Box>
    </Box>
    </>
  );
};

export default Dashboard;
