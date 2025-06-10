import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import viagemPortoSeguro from '../assets/img/viagemPortoSeguro.jpg';
import fotoFj from '../assets/img/fotoFj.jpg';
import fotoJogoTubarao from '../assets/img/fotoJogoTubarao.jpg';
import fotoHotNTender from '../assets/img/fotoHotNTender.jpg';
import fotoFormatura from '../assets/img/fotoFormatura.jpg';
import primeiraFoto from '../assets/img/primeiraFoto.jpg';

const galleryItems = [
  {
    src: viagemPortoSeguro,
    alt: '',
  },
  {
    src: fotoFj,
    alt: '',
  },
  {
    src: fotoJogoTubarao,
    alt: '',
  },
  {
    src: fotoHotNTender,
    alt: '',
  },
  {
    src: fotoFormatura,
    alt: '',
  },
  {
    src: primeiraFoto,
    alt: '',
  },
];

const GallerySection: React.FC = () => {
  return (
    <Box
      id="galeria"
      sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}
    >
      <Container>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ mb: 8, fontSize: '3rem' }}
        >
          Galeria de Memórias
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
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
                width: '100%',
                height: 'auto',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                borderRadius: 2,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
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
