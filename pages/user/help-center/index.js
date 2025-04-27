import React from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";

const helpCenter = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Sidebar />

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
          <Box sx={{ backgroundColor: "#fff", py: 8, px: { xs: 2, md: 4 } }}>
            {/* Outer container with 80% width */}
            <Box
              sx={{
                width: { xs: "100%", md: "80%" },
                mx: "auto", // center horizontally
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: 4,
              }}
            >
              {/* Left side */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "2rem", md: "3.5rem" },
                    mb: 2,
                  }}
                >
                  Contact Us
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    color: "#333",
                    lineHeight: 1.8,
                  }}
                >
                  If you need any help regarding Dall-E AI image generator
                  service, please get in touch with us — our team will surely
                  help you.
                </Typography>
              </Box>

              {/* Right side */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: 2,
                  }}
                >
                  <TextField fullWidth label="Full Name" variant="outlined" />
                  <TextField fullWidth label="Email" variant="outlined" />
                </Box>

                <TextField
                  select
                  fullWidth
                  label="Inquiry Type"
                  defaultValue="Billing Inquiry"
                  variant="outlined"
                >
                  <MenuItem value="Billing Inquiry">Billing Inquiry</MenuItem>
                  <MenuItem value="Technical Support">
                    Technical Support
                  </MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={5}
                  variant="outlined"
                />

                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#000",
                      color: "#fff",
                      px: 5,
                      py: 1.2,
                      borderRadius: 2,
                      textTransform: "none",
                      fontSize: "1rem",
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                    }}
                  >
                    Send
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default helpCenter;
