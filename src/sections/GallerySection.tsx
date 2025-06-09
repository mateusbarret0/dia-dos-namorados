// src/sections/GallerySection.tsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import viagemPortoSeguro from "../assets/viagemPortoSeguro.jpg";

const galleryItems = [
  {
    src: viagemPortoSeguro,
    alt: "Foto de uma viagem do casal",
  },
  {
    src: { viagemPortoSeguro },
    alt: "Foto de um jantar romântico",
  },
  {
    src: { viagemPortoSeguro },
    alt: "Foto de uma comemoração",
  },
  {
    src: { viagemPortoSeguro },
    alt: "Foto de um passeio",
  },
  {
    src: { viagemPortoSeguro },
    alt: "Foto descontraída do casal",
  },
  {
    src: { viagemPortoSeguro },
    alt: "Outra foto importante",
  },
];

const GallerySection: React.FC = () => {
  return (
    <Box
      id="galeria"
      sx={{ backgroundColor: "background.paper", py: { xs: 8, md: 10 } }}
    >
      <Container>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ mb: 8, fontSize: "3rem" }}
        >
          Galeria de Memórias
        </Typography>
        {/* Substituição do Grid por Box com display: 'grid' */}
        <Box
          sx={{
            display: "grid",
            gap: 2, // Espaçamento entre os itens
            // Define as colunas responsivas
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)", // 1 coluna em telas pequenas
              sm: "repeat(2, 1fr)", // 2 colunas em telas médias
              md: "repeat(3, 1fr)", // 3 colunas em telas grandes
            },
          }}
        >
          {galleryItems.map((item, index) => (
            <Box
              key={index}
              component="img"
              src={item.src}
              alt={item.alt}
              sx={{
                width: "100%",
                height: "auto",
                aspectRatio: "1 / 1", // Garante que as imagens sejam quadradas
                objectFit: "cover", // Preenche o espaço sem distorcer
                borderRadius: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default GallerySection;
