import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Grid,
  IconButton,
  InputAdornment,
  Divider,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";


export default function LoginForm() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const router = useRouter();
  const { data: session } = useSession();

  const handleClick = (path) => {
    router?.push(path);
  };

  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData?.email && formData?.password) {
        let user = await fetch(
          `${process.env.NEXT_PUBLIC_API}/api/user/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        let userRes = await user.json();
        console.log(userRes);
        if (userRes?.success) {
          localStorage.setItem("user", userRes?.user);
          localStorage.setItem("token", userRes?.token);
          alert(userRes?.msg);
        } else {
          alert(userRes?.msg);
        }
      } else {
        alert("Please fill all the fields");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box>
        <Box>
          {/* <Box pt={5} sx={{ background: "#f5f5f5"}} onClick={()=>handleClick("/")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/DALL·E_Logo.svg"
            alt="Logo"
            style={{
              height: 40,
              width: "100px",
              objectFit: "contain",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          />
        </Box> */}

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
              <Box onClick={() => handleClick("/")}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/DALL·E_Logo.svg"
                  alt="Logo"
                  style={{
                    height: 40,
                    width: "100px",
                    objectFit: "contain",
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block",
                  }}
                />
              </Box>
              <Typography variant="h6" gutterBottom>
                Sign in to Ai photo App
              </Typography>

              <Box component="form" noValidate autoComplete="off" mt={2}>
                <TextField name="email"
                  onChange={(e) => handleChange(e)}
                  fullWidth
                  label="Email Address"
                  margin="normal"
                  variant="outlined"
                  type="email"
                />
                <TextField name="password"
                  onChange={(e) => handleChange(e)}
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Box textAlign="right" mt={1} mb={2}>
                  <Link href="#" underline="hover" variant="body2">
                    Forgot Password?
                  </Link>
                </Box>

                <Button
                  onClick={(e) => handleSubmit(e)}
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#000",
                    "&:hover": { backgroundColor: "#333" },
                    color: "#fff",
                    textTransform: "none",
                    py: 1.5,
                  }}
                >
                  Sign in
                </Button>
              </Box>

              <Box mt={3}>
                <Typography variant="body2">
                  Don’t have an account?{" "}
                  <Link href="/register" underline="hover">
                    Register for free
                  </Link>
                </Typography>
              </Box>

              <Divider sx={{ my: 3 }}>Or Sign in with Google</Divider>

              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{
                  textTransform: "none",
                  py: 1.2,
                  borderRadius: 2,
                }}
                onClick={() => signIn("google")}
              >
                Sign in with Google
              </Button>
            </Paper>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
