import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import fotoPrimeiroDate from '../assets/img/fotoPrimeiroDate.jpg';

const OurStorySection: React.FC = () => {
  return (
    <Box id="nossa-historia" sx={{ py: { xs: 8, md: 10 } }}>
      <Container>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ mb: 8, fontSize: '3rem' }}
        >
          O Início de Tudo
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography
                variant="h4"
                component="h3"
                sx={{ mb: 2, color: 'text.primary' }}
              >
                Quem diria...
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Quem diria que uma simples ficada no rodeio mudaria tudo?
                Naquele primeiro beijo, a gente nem imaginava o que o destino
                estava preparando. O tempo passou, fomos nos conhecendo, e logo
                eu soube: conhecer você foi uma das melhores coisas que já me
                aconteceram. Ter a chance de dividir a vida com alguém tão
                incrível é mágico — e a cada dia, você me mostra ainda mais o
                quanto é especial.
              </Typography>
            </Paper>
          </Box>

          <Box
            component="img"
            src={fotoPrimeiroDate}
            alt=""
            sx={{
              width: { xs: '100%', md: '50%' },
              height: 'auto',
              borderRadius: 2,
              boxShadow: 5,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default OurStorySection;
