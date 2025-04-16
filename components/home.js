import { Box, Typography, Button, TextField } from "@mui/material";
import { useEffect, useRef } from "react";
import im from "../public/img/images.jpg"
const images = [
  "/img/img1.jpeg",
  "/img/img2.jpeg",
  "/img/img3.jpeg",
  "/img/img4.jpeg",
  "/img/img5.jpeg",
];

const HomePage = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const scrollSpeed = 0.5; // speed of scrolling

    const scroll = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += scrollSpeed;
        if (
          sliderRef.current.scrollLeft >=
          sliderRef.current.scrollWidth / 2
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    // return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <Box sx={{ textAlign: "center", py: 5, px: 2 }}>
      <Typography variant="h5" mb={1}>
        Empower Your Creativity with
      </Typography>
      <Typography
        variant="h2"
        fontWeight="bold"
        color="#000"
        mb={2}
        sx={{ fontSize: { xs: "40px", md: "80px" } }}
      >
        DALL-E
      </Typography>
      <Typography mb={4} color="gray">
        Bring your ideas to life with Dall-E Free. Think of a textual prompt
        and convert it into visual images for your dream project
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          maxWidth: "600px",
          mx: "auto",
          mb: 4,
        }}
      >
        <TextField
          fullWidth
          placeholder="Describe what you want to see"
          sx={{ bgcolor: "#fff", borderRadius: "50px" }}
        />
        <Button
          variant="contained"
          sx={{ borderRadius: "50px", px: 4, bgcolor: "#000" }}
        >
          Generate
        </Button>
      </Box>
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          overflowX: "scroll",
          scrollBehavior: "smooth",
          gap: 2,
          py: 4,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {[...images, ...images].map((img, i) => (
          <Box
            key={i}
            component="img"
            src={img}
            alt={`image-${i}`}
            sx={{
              width: "250px",
              height: "350px",
              borderRadius: "10px",
              flexShrink: 0,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
