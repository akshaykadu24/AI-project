import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box py={6}>
          {/* Hero Section */}
          <Typography variant="h2" align="center" gutterBottom>
            Dall-E Free Your Gateway
          </Typography>
          <Typography variant="h2" align="center" gutterBottom>
            To Creative Imagining
          </Typography>
          <Typography variant="body1" color="text.secondary"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8 }} align="center" >
            Welcome to Dall-E Free platform that empowers users to create images
            effortlessly through simple prompts.
          </Typography>

          <Box
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        component="img"
        src="/img/about/abt-left.a6a677448f074fc3c0e1.webp"
        alt="Desert"
        sx={{
          width: { xs: "100%", sm: "50%", md: "50%" },
          borderRadius: 2,
        }}
      />
      <Box
        component="img"
        src="/img/about/abt-right.e7aca20d7801b1cfc675.webp"
        alt="Cat on Couch"
        sx={{
          width: { xs: "100%", sm: "50%", md: "38%" },
          borderRadius: 2,
        }}
      />
    </Box>

          {/* Our Vision */}
          <Box sx={{ py: 6, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
            gap: 4,
          }}
        >
          {/* Left Side - Title */}
          <Box sx={{ width: { xs: "100%", md: "20%" } }}>
            <Typography variant="h4" fontSize={"45px"}  color="text.primary">
              Our 
              <br></br>Vision
            </Typography>
          </Box>

          {/* Right Side - Content */}
          <Box sx={{ width: { xs: "100%", md: "80%" } }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              At Dall-E Free, our vision is to provide a seamless and
              cost-effective solution for users to bring their ideas to life
              through captivating images. We understand the power of visual
              storytelling and its impact on your projects, and that's why
              we've built a platform that makes image creation accessible to
              everyone.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>

          {/* Innovative Image Generation */}
          <Box mt={6} p={3} bgcolor="#f5f5f5" borderRadius={2}>
            <Typography variant="h6" fontSize={"30px"} textAlign={"center"} gutterBottom>
              Innovative Image Generation
            </Typography>
            <Typography color="text.secondary"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              Dall-E Free is a platform powered by DreamVibe AI Studio that
              utilizes OpenAI’s DALL·E 2 & DALL·E 3 API to produce visually
              stunning images from simple prompts. Our platform combines various
              techniques to ensure that you get the best value for your
              investment. We understand that creativity should not be limited by
              high costs, and that’s why we have created a solution that brings
              your imagination to life without putting a strain on your budget.
            </Typography>
          </Box>

          {/* Reasonable Plans */}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
            p: { xs: 2, md: 4 },
            mt: 6,
            borderRadius: "16px",
            backgroundColor: "#f9f9f9",
            boxShadow: 3,
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src="/img/about/rpneed.26e384f29abde28107f4.png"
            alt="Castle Bridge"
            sx={{
              width: { xs: "100%", md: "50%" },
              borderRadius: "10px",
            }}
          />

          {/* Content */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" fontSize={"30px"} gutterBottom>
              Reasonable Plans for Every Need
            </Typography>
            <Typography variant="body1" color="text.secondary"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              At Dall-E Free, we are proud to offer a variety of affordable
              plans that are customised to meet your specific needs. Whether you
              are a freelancer, a small business owner, or an individual with a
              passion for visual storytelling, we have a plan that will suit
              you. Our pricing is transparent, so there are no hidden fees or
              surprises. You’ll know exactly what you’re getting when you sign
              up with us.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
