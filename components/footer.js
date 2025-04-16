import { Box, Typography, Grid, List, ListItem, ListItemText, IconButton, Link, Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", py: 6, px: { xs: 3, md: 10 } }}>
      {/* Center Content for Desktop */}
      <Box sx={{ maxWidth: { md: "75%" }, mx: "auto" }}>
        <Grid container spacing={4} justifyContent="space-between">
          {/* Left Side */}
          <Grid item xs={12} md={4}>
            <Typography variant="h3" fontWeight="bold" mb={3}>
              DALL-E AI
            </Typography>

            <Box display="flex" alignItems="center" mb={2}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography
                component={Link}
                href="mailto:info@dall-efree.com"
                color="inherit"
                underline="hover"
                sx={{ fontSize: "16px" }}
              >
                info@dall-efree.com
              </Typography>
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <IconButton sx={{ color: "#fff" }} href="#" target="_blank">
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: "#fff" }} href="#" target="_blank">
                <PinterestIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Right Side Links */}
          <Grid item xs={12} md={7} pl={{ md: 10 }}>
            <Grid container spacing={2}>
              {[
                ["About Us", "Contact Us", "Pricing Plans", "How it Works"],
                ["Terms of Use", "Privacy Policy", "Refund & Cancellation", "FAQ"],
              ].map((list, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <List>
                    {list.map((item) => (
                      <ListItem key={item} disablePadding>
                        <ListItemText
                          primary={
                            <Link
                              href="#"
                              color="inherit"
                              underline="hover"
                              sx={{ fontSize: "16px" }}
                            >
                              {item}
                            </Link>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "#333", my: 4 }} />

        <Box textAlign="center">
          <Typography variant="body2" sx={{ fontSize: "14px", color: "grey.500" }}>
            © 2024 Dall-E Free, All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
