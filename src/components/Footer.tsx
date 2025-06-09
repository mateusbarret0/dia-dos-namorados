// src/components/Footer.tsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const HeartIconPulse = () => (
  <FavoriteIcon
    sx={{
      fontSize: "2.5rem",
      color: "primary.main",
      mb: 2,
      animation: "pulse 1.5s infinite",
      "@keyframes pulse": {
        "0%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.15)" },
        "100%": { transform: "scale(1)" },
      },
    }}
  />
);

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "background.paper", py: 6 }}>
      <Container sx={{ textAlign: "center" }}>
        <HeartIconPulse />
        <Typography
          variant="h2"
          sx={{ fontSize: "2rem", color: "primary.main" }}
        >
          Com todo meu amor, para sempre.
        </Typography>
        <Typography sx={{ mt: 2, color: "text.secondary" }}>
          Feito por [Seu Nome] para a melhor namorada do mundo.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Junho de 2025
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
