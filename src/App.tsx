import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import OurStorySection from './sections/OurStorySection';
import GallerySection from './sections/GallerySection';
import MomentsSection from './sections/MomentsSection';

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import LoveTimer from './sections/LoveTimerAndPlayer';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          minWidth: '100vw',
          backgroundColor: 'background.default',
        }}
      >
        <Header />
        <Box component="main" sx={{ flex: '1 0 auto' }}>
          <HeroSection />
          <OurStorySection />
          <GallerySection />
          <MomentsSection />
          <LoveTimer />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
