// src/sections/HeroSection.tsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import fotoInicial from "../assets/fotoInicial.jpg";

const HeroSection: React.FC = () => {
  return (
    <Box
      id="inicio"
      sx={{ backgroundColor: "background.paper", py: { xs: 8, md: 10 } }}
    >
      <Container sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "2.5rem", md: "4rem" }, color: "primary.main" }}
        >
          Para a melhor namorada do mundo.
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            mt: 2,
            color: "text.secondary",
            fontSize: { xs: "1.5rem", md: "3rem" },
          }}
        >
          A mulher que ilumina todos os meus dias.
        </Typography>
        <Box
          component="img"
          src={fotoInicial}
          alt="Imagem de um casal feliz"
          sx={{
            width: "100%",
            maxWidth: "48rem",
            height: "auto",
            borderRadius: 2,
            boxShadow: 5,
            mt: 6,
            mx: "auto",
          }}
        />
        <Typography
          variant="h6"
          component="p"
          sx={{
            mt: 6,
            fontStyle: "italic",
            color: "text.secondary",
            maxWidth: "56rem",
            mx: "auto",
          }}
        >
          Sou feliz por estar ao seu lado. Você me completa, me transforma e faz
          meu mundo mais bonito.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
