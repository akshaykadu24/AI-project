import ImageGrid from "@/components/imageGrid";
import Sidebar from "@/components/sidebar";
import { Box, Typography } from "@mui/material";
import React from "react";

const Gallery = () => {
  const images = [
    "/img/img1.jpeg",
    "/img/img2.jpeg",
    "/img/img3.jpeg",
    "/img/img4.jpeg",
    "/img/img5.jpeg",
  ];
  return (
    <div>
      <Sidebar pageHeading="Gallary" />
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
          <Typography color="gray">
            All your generated images using Dall-E AI in one place Images
            available for 30 days download soon.
          </Typography>
          <Box>
            {images.length > 0 ? (
              <ImageGrid images={images} />
            ) : (
              <Typography variant="body1"  pt="30px" >
                No Result Found!
              </Typography>
            )}{" "}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Gallery;
