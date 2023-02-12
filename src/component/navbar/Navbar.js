import React from "react";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#E8345E" }}>
        <Toolbar sx={{ marginTop: "20px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <img src="/logo.svg" alt="Turno" />
          </Box>
          <Box>
            <IconButton
              sx={{
                backgroundColor: "#35BF68",
                color: "white",
                height: "24px",
                width: "24px",
              }}
            >
              <WhatsAppIcon />
            </IconButton>
            <Button
              variant="contained"
              size="small"
              sx={{
                borderRadius: "108px",
                background: "#FFFFFF",
                color: "#35BF68",
                fontSize: "12px",
                fontWeight: "700",
                margin: "10px",
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              <PhoneIcon sx={{ height: "13.15px", widht: "13.15px" }} /> Call
              Turno
            </Button>
            <IconButton sx={{ color: "#fff" }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
