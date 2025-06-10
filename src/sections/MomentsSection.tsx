import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const HeartIconPulse = () => (
  <FavoriteIcon
    sx={{
      color: 'primary.main',
      animation: 'pulse 1.5s infinite',
      '@keyframes pulse': {
        '0%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.1)' },
        '100%': { transform: 'scale(1)' },
      },
    }}
  />
);

const MomentsSection: React.FC = () => {
  const loveItems = [
    'Seu bom humor e esse jeitinho que ilumina meus dias.',
    'As nossas brincadeiras bobas que sempre terminam em risadas.',
    'Sua beleza única, seja por dentro ou por fora.',
    'As nossas ligações diárias que me fazem sentir mais perto de você, mesmo longe.',
    'Seu abraço que é meu refúgio e aconchego preferido.',
  ];

  return (
    <Box id="momentos" sx={{ py: { xs: 8, md: 10 } }}>
      <Container>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ mb: 8, fontSize: '3rem' }}
        >
          Momentos que Guardamos
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HeartIconPulse />
                <Typography variant="h5" component="h3" sx={{ ml: 1.5 }}>
                  Coisas que amo em você
                </Typography>
              </Box>
              <List>
                {loveItems.map((text, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: 'auto', marginRight: 1.5 }}>
                      <FavoriteIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ color: 'text.secondary' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>

          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HeartIconPulse />
                <Typography variant="h5" component="h3" sx={{ ml: 1.5 }}>
                  Uma mensagem do coração
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Meu amor, desde que você entrou na minha vida eu me sinto alguém
                melhor, mais completo, mais feliz, não me sinto mais sozinho,
                você entrou na minha vida e já logo de cara coloriu o meu mundo,
                me enchendo de alegria, me dando novos sonhos e propositos,
                espero que a nossa relação dure uma vida inteira, e se puder,
                até mais... Quero compartilhar e viver com você tudo de bom que
                a vida pode nos proporcionar, viajar, conquistar coisas juntos,
                morar juntos, ter uma familia linda, bichinhos, enfim, eu quero
                tudo isso e muito mais, a vida com você fica mais leve,
                divertida e mais simples de se viver, sempre estarei aqui, ao
                seu lado, você é o meu maior trofeu, o meu maior motivo de
                orgulho, te amo muito!
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MomentsSection;
