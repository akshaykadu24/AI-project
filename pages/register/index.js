import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  IconButton,
  InputAdornment,
  Divider,
  useTheme,
  useMediaQuery,
  Paper,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import { useRouter } from "next/router";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const router = useRouter()
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    conformPassword: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  console.log(process.env.NEXT_PUBLIC_API);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData?.password !== formData?.conformPassword) {
      alert("Password and Confirm Password do not match");
      return;
    } else {
      try {
        let createUser = await fetch(
          `${process.env.NEXT_PUBLIC_API}/api/user/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        let createUserRes = await createUser.json();
        console.log(createUserRes);
        alert(createUserRes?.msg);
        router.push("/login")
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box>
      <Box>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "100vh", background: "#f5f5f5" }}
        >
          <Paper
            elevation={4}
            sx={{
              width: "100%",
              maxWidth: 500,
              p: 4,
              borderRadius: 3,
              textAlign: "center",
              background: "#fff",
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Create your account
            </Typography>
            <Typography variant="body2" mb={3}>
              Register with your email
            </Typography>

            {/* First & Last Name */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mt: 2,
              }}
            >
              <TextField
                name="fname"
                onChange={(e) => handleChange(e)}
                fullWidth
                label="First Name"
              />
              <TextField
                name="lname"
                onChange={(e) => handleChange(e)}
                fullWidth
                label="Last Name"
              />
            </Box>

            {/* Email */}
            <Box mt={2}>
              <TextField
                name="email"
                onChange={(e) => handleChange(e)}
                fullWidth
                label="Email Address"
                type="email"
              />
            </Box>

            {/* Password */}
            <Box mt={2}>
              <TextField
                name="password"
                onChange={(e) => handleChange(e)}
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Confirm Password */}
            <Box mt={2}>
              <TextField
                name="conformPassword"
                onChange={(e) => handleChange(e)}
                fullWidth
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Terms */}
            <Box mt={2} textAlign="left">
              <Typography variant="body2">
                By creating an account you agree to our{" "}
                <Link href="#" underline="hover" fontWeight="bold">
                  terms and conditions.
                </Link>
              </Typography>
            </Box>

            {/* Register Button */}
            <Button
              onClick={(e) => handleSubmit(e)}
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                mt: 3,
                textTransform: "none",
                py: 1.5,
                borderRadius: 2,
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Register
            </Button>

            {/* Sign In Option */}
            <Box mt={3}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link href="/login" underline="hover">
                  Sign in
                </Link>
              </Typography>
            </Box>

            <Divider sx={{ my: 3 }}>Or</Divider>

            {/* Google Sign In */}
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{
                textTransform: "none",
                py: 1.2,
                borderRadius: 2,
              }}
            >
              Sign in with Google
            </Button>
          </Paper>
        </Grid>
      </Box>
    </Box>
  );
}
