// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f43f5e", // tom de rosa principal
    },
    background: {
      default: "#fce4ec", // fundo rosa bem clarinho
      paper: "#ffffff",
    },
    text: {
      primary: "#374151", // cinza escuro para textos
      secondary: "#6b7280", // cinza mais claro
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      color: "#f43f5e",
    },
    h3: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.7,
    },
  },
});

export default theme;
