import { Box, Typography, Grid } from "@mui/material";
import React from 'react'

const steps = [
    {
      title: "Enter Your Prompt",
      description: "Click on the input field and enter your prompt text.",
      svg: "/img/img1.5cc9262be56b224050dea7a9cfe5cde2.svg",
    },
    {
      title: "Review and Refine",
      description: "Evaluate the generated image and refine your prompt if needed.",
      svg: "/img/img2.e2e4cdc4cfbcedd6cbff0389678a755d.svg",
    },
    {
      title: "Download the Image",
      description: "Use the provided option to save the image to your device.",
      svg: "/img/img3.2e3618dc7b2a2c6f2fb9f602215220c1.svg",
    },
  ];

const HomeGenerateBox = () => {
  return (
    <Box sx={{ textAlign: "center", py: 6, px: { xs: 2, sm: 4, md: 8 } }}>
    <Typography variant="h4" fontWeight="bold" mb={1}>
      How to Generate Image
    </Typography>
    <Typography color="gray" mb={6}>
      Here’s the easy steps to get Image you want.
    </Typography>

    <Grid container spacing={6} justifyContent="center">
      {steps.map((step, index) => (
        <Grid item xs={12} sm={8} md={4} key={index}>
          <Box sx={{ px: 2 ,maxWidth: "300px",}}>
            
            <Box
              component="img"
              src={step.svg}
              alt={step.title}
              sx={{
                width: "100%",
                maxWidth: "300px",
                mx: "auto",
              }}
            />
            <Typography variant="h6" fontWeight="bold" mb={1}>
              {step.title}
            </Typography>
            <Typography color="gray" mb={3}>
              {step.description}
            </Typography>
          </Box>
          
        </Grid>
      ))}
    </Grid>
  </Box>
  )
}

export default HomeGenerateBox