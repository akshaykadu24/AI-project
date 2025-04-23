import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const faqData = [
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "It's easy to cancel your subscription anytime from your account settings. Please note that the cancellation will take effect at the end of your current billing cycle.",
  },
  {
    question: "How is billing processed for subscription plans?",
    answer: "Billing is automatically processed at the start of each billing cycle.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Refunds are only applicable if requested within 7 days of subscription and under valid conditions.",
  },
  {
    question: "How does the credit system work ?",
    answer: "You purchase credits and use them on-demand as per your need. The credit balance can be checked anytime.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "We offer the convenience of PayPal and FastSpring for all your payments. PayPal allows you to make secure transactions using major credit cards and well-known digital wallets, such as Apple Pay and Google Pay. Similarly, FastSpring provides a secure and flexible payment gateway to handle your transactions smoothly. If you have any questions about payments, please feel free to contact us.",
  },
  {
    question: "Is there a commitment period for subscription plans?",
    answer: "No, you can cancel anytime before your renewal date.",
  },
  {
    question: "Is the checkout process secure?",
    answer: "Yes, all transactions are encrypted with industry-standard SSL security.",
  },
  {
    question: "What happens if I exceed the limits of my chosen plan?",
    answer: "You will be prompted to upgrade your plan or purchase additional credits.",
  },
];

const PriceFaqSection = () => {
  const [expanded, setExpanded] = useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (index) => (_, isExpanded) => {
    setExpanded(isExpanded ? index : null);
  };

  return (
    <Box sx={{  py: 8 }}>
      <Container maxWidth="md">
        <Typography
          variant={isSmallScreen ? "h5" : "h4"}
          fontWeight={700}
          textAlign="center"
          mb={5}
        >
          Frequently Asked Questions
        </Typography>

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
  );
};

export default PriceFaqSection;
