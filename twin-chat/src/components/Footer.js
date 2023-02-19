import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Toolbar disableGutters>
      <Box
        sx={{
          backgroundColor: "hsl(20, 21%, 75%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "6vh",
          width: "100%",
        }}
      >
        <Typography ariant="subtitle2" gutterBottom>
          Twin Chat Copyright © {new Date().getFullYear()}
        </Typography>
      </Box>
    </Toolbar>
  );
}
