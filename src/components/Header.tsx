// src/components/Header.tsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Box,
  Container,
} from '@mui/material';

const Header: React.FC = () => {
  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Nossa História', href: '#nossa-historia' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Momentos', href: '#momentos' },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: 'background.paper', boxShadow: 1 }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h2"
            component="div"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              color: 'primary.main',
            }}
          >
            Feliz Dia dos Namorados
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                underline="none"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
