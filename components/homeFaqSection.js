import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  useMediaQuery,

} from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from './fontTheme';

const faqData = [
  {
    question: 'What is Dall-E Free?',
    answer: `Dall-E Free is a website that provides a platform for accessing DALL-E-generated images for free in our free plan. 
             It allows you to generate AI-powered images on the spot without you having to log in every time you need to generate one.`
  },
  {
    question: 'How does Dall-E Free work?',
    answer: ''
  },
  {
    question: 'Are Dall-E Generated Images On Dall-E Free Really Cost-Effective?',
    answer: ''
  },
  {
    question: 'Can I use the DALL-E 2, DALL-E 3, generated images from Dall-E Free for commercial purposes?',
    answer: ''
  },
  {
    question: 'Is there a refund policy?',
    answer: ''
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: ''
  },
  {
    question: 'Can I modify or edit the DALL-E 2, DALL-E 3 generated images on Dall-E Free?',
    answer: ''
  },
  {
    question: 'How frequently can you generate DALL-E 2, DALL-E 3 generated images on Dall-E Free?',
    answer: ''
  },
  {
    question: 'What image formats are available for download on Dall-E Free?',
    answer: ''
  }
];

const HomeFaqSection = () => {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (index) => (event, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        py: 6,
        px: 2
      }}
    >
      <Box
        sx={{
          width: '80%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4
        }}
      >
        {/* Left column */}
        <Box sx={{ flex: 1, maxWidth: 400 }}>
          <Typography variant="h4" fontWeight={500} gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            Find answers to common queries quickly and easily in our comprehensive FAQ section.
          </Typography>
          <Button variant="contained" sx={{ borderRadius: 2, fontWeight: 'bold' }}>
            View All
          </Button>
        </Box>

        {/* Right column - FAQ list */}
       <Box >
      <Container maxWidth="md">
       

        {faqData?.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: 5,
              mb: 2,
              boxShadow: "none",
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === index ? (
                  <RemoveIcon fontSize="small" />
                ) : (
                  <AddIcon fontSize="small" />
                )
              }
              sx={{
                px: 2,
                py: 1.5,
                "& .MuiTypography-root": {
                  fontWeight: 100,
                  fontSize: "1rem",
                },
              }}
            >
              <Typography>
                {index + 1}. {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2, pt: 0, pb: 2 }}>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.7 }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
      </Box>
    </Box>
  );
};

export default HomeFaqSection;
