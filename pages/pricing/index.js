import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PriceFaqSection from "@/components/priceFaqSection";

const monthlyPlans = [
  {
    title: "Free",
    price: 0,
    frequency: "Mo",
    billingNote: "Billed Monthly",
    features: [
      "5 generations",
      "Normal processing",
      "1 Images Per Request day",
    ],
    disabledFeatures: ["Upscale", "No Watermark", "Commercial license"],
    buttonText: "Use For Free",
  },
  {
    title: "Gold",
    price: 10,
    frequency: "Mo",
    billingNote: "Billed Monthly",
    tag: "most popular",
    features: [
      "1000 fast generations per month",
      "Fast Processing Generations",
      "3 Images Per Request",
      "Upscale",
      "No Watermark",
      "Commercial license",
    ],
    buttonText: "Buy Now",
  },
  {
    title: "Platinum",
    price: 15,
    frequency: "Mo",
    billingNote: "Billed Monthly",
    tag: "best valued",
    features: [
      "3000 fast generations per month",
      "Fast Processing Generations",
      "4 Images Per Request",
      "Upscale",
      "No Watermark",
      "Commercial license",
    ],
    buttonText: "Buy Now",
  },
];

const yearlyPlans = [
  {
    title: "Free",
    price: 0,
    frequency: "Year",
    billingNote: "One Time",
    features: [
      "5 generations",
      "Normal processing",
      "1 Images Per Request day",
    ],
    disabledFeatures: ["Upscale", "No Watermark", "Commercial license"],
    buttonText: "Use For Free",
  },
  {
    title: "Gold",
    price: 70,
    frequency: "Year",
    billingNote: "One Time",
    tag: "most popular",
    features: [
      "All free features, plus",
      "12000 fast generations per month",
      "Fast Processing Generations",
      "3 Images Per Request",
      "Upscale",
      "No Advertisements",
      "No Watermark",
      "Commercial license",
    ],
    buttonText: "Buy Now",
  },
  {
    title: "Platinum",
    price: 100,
    frequency: "Year",
    billingNote: "One Time",
    tag: "best valued",
    features: [
      "All free features, plus",
      "36000 fast generations per month",
      "Fast Processing Generations",
      "4 Images Per Request",
      "Upscale",
      "No Advertisements",
      "No Watermark",
      "Commercial license",
    ],
    buttonText: "Buy Now",
  },
];

const PricingCards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [planType, setPlanType] = useState("monthly");
  const [billingType, setBillingType] = useState("subscription");

  const handlePlanChange = (_, newPlan) => {
    if (newPlan !== null) setPlanType(newPlan);
  };
  console.log(monthlyPlans, "planSelect");
  return (
    <>
      <Navbar />
      <Box sx={{ textAlign: "center", py: 6, px: 2 }}>
        <Typography variant="h3" fontWeight={500} gutterBottom>
          Choose your plan
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Our billing cycle is recurring, but you can cancel anytime hassle-free
          <br />
          or you can take advantage of credits for on-demand use
        </Typography>

        {/* Plan Type Toggle */}
        <ToggleButtonGroup
          value={planType}
          exclusive
          onChange={handlePlanChange}
          aria-label="Plan Type"
          sx={{
            borderRadius: 2,
            mb: 2,
            "& .MuiToggleButton-root": {
              px: 4,
              py: 1.5,
              fontWeight: 300,
              fontSize: "1rem",
              border: "1px solid #ccc",
            },
            "& .Mui-selected": {
              color: "#fff",
              backgroundColor: "#000",
              borderColor: "#000",
            },
          }}
        >
          <ToggleButton value="monthly">Monthly</ToggleButton>
          <ToggleButton value="yearly">Yearly</ToggleButton>
        </ToggleButtonGroup>

        {planType === "monthly" && (
          <Typography
            variant="body2"
            color="error"
            sx={{ mb: 3, transition: "all 0.3s ease" }}
          >
            Pay annually and{" "}
            <span style={{ textDecoration: "underline" }}>Save up to 17%</span>
          </Typography>
        )}
        <br></br>

        {/* Billing Option Radio */}
        <FormControl component="fieldset">
          <RadioGroup
            row
            value={billingType}
            onChange={(e) => setBillingType(e.target.value)}
            aria-label="Billing Type"
            name="billing-type"
          >
            <FormControlLabel
              value="subscription"
              control={<Radio />}
              label="Subscription"
            />
            <FormControlLabel
              value="credit"
              control={<Radio />}
              label="Credit"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ px: 2, py: 4 }}>
        <Grid container spacing={3} justifyContent="center">
          {((planType == "monthly")
            ? monthlyPlans
            : yearlyPlans)?.map((plan, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Card
                    sx={{
                      width: 320,
                      height: 550,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: 3,
                      boxShadow: index === 1 ? 6 : 2,
                      backgroundColor: index === 1 ? "#1a1a1a" : "#fff",
                      color: index === 1 ? "#fff" : "#000",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5"  gutterBottom>
                        {plan.title}
                        {plan.tag && (
                          <Typography
                            variant="caption"
                            component="span"
                            sx={{
                              backgroundColor: "#fca311",
                              color: "#fff",
                              borderRadius: "10px",
                              padding: "2px 8px",
                              marginLeft: 1,
                              fontSize: "0.75rem",
                            }}
                          >
                            {plan.tag}
                          </Typography>
                        )}
                      </Typography>
                      <Typography variant="h4" textAlign={"center"}>
                        ${plan.price}
                        <Typography variant="caption" component="span">
                          /{plan.frequency}
                        </Typography>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="gray"
                        sx={{ mt: 1 }}
                        textAlign={"center"}
                      >
                        {plan.billingNote}
                      </Typography>

                      <Box sx={{ mt: 2 }}>
                        <Typography
                          variant="subtitle1"
                          
                          gutterBottom
                        >
                          What's included
                        </Typography>
                        {plan.features.map((feature, i) => (
                          <Box
                            key={i}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 0.5,
                            }}
                          >
                            <CheckIcon sx={{ mr: 1 }} />
                            <Typography variant="body2" fontWeight={100}>{feature}</Typography>
                          </Box>
                        ))}
                        {plan.disabledFeatures &&
                          plan.disabledFeatures.map((feature, i) => (
                            <Box
                              key={i}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 0.5,
                              }}
                            >
                              <ClearIcon
                                sx={{ color: "text.disabled", mr: 1 }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  textDecoration: "line-through",
                                  color: "text.disabled",
                                }}
                                fontWeight={100}
                              >
                                {feature}
                              </Typography>
                            </Box>
                          ))}
                      </Box>
                    </CardContent>
                    <Box sx={{ p: 2 }}>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: index === 1 ? "#fff" : "#1a1a1a",
                            color: index === 1 ? "#000" : "#fff",
                          borderRadius: 2,
                          py: 1.2,
                          fontWeight: "bold",
                          "&:hover": { backgroundColor: "#333" },
                        }}
                      >
                        {plan.buttonText}
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
        </Grid>
      </Box>
      <PriceFaqSection/>
      <Footer />
    </>
  );
};

export default PricingCards;
