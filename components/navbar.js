import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
  import CloseIcon from "@mui/icons-material/Close";
  import { useState } from "react";
import { useRouter } from "next/router";
  
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-us" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/contact-us" }
  ]
  
  const Navbar = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const handleClick = (path)=>{
        router?.push(path)
    }
  
    return (
      <>
        <AppBar
          position="static"
          sx={{
            borderRadius: "10px",
            bgcolor: "#fff",
            width: { xs: "100%", md: "75%" },
            margin: { xs: "0 auto", md: "20px auto" },
            color: "#000",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Typography variant="h6" sx={{ minWidth: "80px", fontWeight: "bold" }} onClick={()=>handleClick("/")}  >
              Logo
            </Typography>
  
            {/* Center Menu (Desktop Only) */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 3,
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {navItems.map((item) => (
                <Button key={item?.name} onClick={()=>handleClick(item?.link)} sx={{ color: "#000", textTransform: "none" }}>
                  {item?.name}
                </Button>
              ))}
            </Box>
  
            {/* Login Button Desktop */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#000",
                  color: "#fff",
                  borderRadius: "8px",
                  textTransform: "none",
                  ":hover": { bgcolor: "#000" },
                }}
              >
                Login
              </Button>
            </Box>
  
            {/* Menu Icon Mobile */}
            <IconButton
              sx={{ display: { md: "none" }, color: "#000" }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
  
        {/* Drawer for Mobile */}
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              width: 280,
              borderRadius: "8px 0 0 8px",
              p: 2,
            },
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6" fontWeight="bold">
              Mobile Sidebar logo
            </Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
  
          <List>
            {navItems.map((item) => (
              <ListItem key={item?.name} disablePadding>
                <ListItemButton onClick={() => {setOpen(false),handleClick(item?.link)}}>
                  <ListItemText primary={item?.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
  
          <Divider sx={{ my: 2 }} />
  
          {/* Mobile Login Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#000",
              color: "#fff",
              textTransform: "none",
              ":hover": { bgcolor: "#000" },
            }}
            onClick={() => setOpen(false)}
          >
            Login
          </Button>
        </Drawer>
      </>
    );
  };
  
  export default Navbar;
  