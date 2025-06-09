// src/sections/MomentsSection.tsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const HeartIconPulse = () => (
  <FavoriteIcon
    sx={{
      color: "primary.main",
      animation: "pulse 1.5s infinite",
      "@keyframes pulse": {
        "0%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.1)" },
        "100%": { transform: "scale(1)" },
      },
    }}
  />
);

const MomentsSection: React.FC = () => {
  const loveItems = [
    "Seu sorriso que ilumina tudo.",
    "O jeito que você cuida de mim.",
    "Sua inteligência e seu humor.",
    "Nossas conversas até de madrugada.",
    "Adicione mais itens que você ama nela...",
  ];

  return (
    <Box id="momentos" sx={{ py: { xs: 8, md: 10 } }}>
      <Container>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ mb: 8, fontSize: "3rem" }}
        >
          Momentos que Guardamos
        </Typography>
        {/* Substituição do Grid por Box com display: 'flex' */}
        <Box
          sx={{
            display: "flex",
            gap: 4, // Espaçamento entre os itens
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Item 1 */}
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <HeartIconPulse />
                <Typography variant="h5" component="h3" sx={{ ml: 1.5 }}>
                  Coisas que Amo em Você
                </Typography>
              </Box>
              <List>
                {loveItems.map((text, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: "auto", marginRight: 1.5 }}>
                      <FavoriteIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ color: "text.secondary" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>

          {/* Item 2 */}
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <HeartIconPulse />
                <Typography variant="h5" component="h3" sx={{ ml: 1.5 }}>
                  Uma Mensagem do Coração
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Aqui, escreva uma mensagem mais longa e pessoal. Abra seu
                coração e diga tudo o que sente. Fale sobre o futuro, seus
                sonhos juntos, e o quanto ela é importante na sua vida. "Meu
                amor, desde que você entrou na minha vida..."
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MomentsSection;
