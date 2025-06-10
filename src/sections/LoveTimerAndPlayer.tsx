import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  useTheme,
  IconButton,
  Slider,
  Stack,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import musicSrc from '../assets/audio/bestPart.mp3';
import fotoAnime from '../assets/img/fotoAnime.jpg';

const startDate = new Date('2024-09-28T00:00:00');

const LoveTimerAndPlayer: React.FC = () => {
  const theme = useTheme();

  const calculateTime = () => {
    const now = new Date();
    let diff = now.getTime() - startDate.getTime();
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => setTime(calculateTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => setDuration(audio.duration);
    const setAudioTime = () => setCurrentTime(audio.currentTime);
    const handleSongEnd = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleSongEnd);

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleSongEnd);
    };
  }, []);

  const HeartIconPulse = () => (
    <FavoriteIcon
      sx={{
        color: 'primary.main',
        fontSize: 40,
        animation: 'pulse 1.5s infinite',
        '@keyframes pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
      }}
    />
  );

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <audio ref={audioRef} src={musicSrc} preload="metadata" />

      <Paper
        elevation={6}
        sx={{
          p: { xs: 2, md: 3 },
          borderRadius: 4,
          textAlign: 'center',
          backgroundColor: '#fff',
          maxWidth: 500,
          width: '100%',
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <HeartIconPulse />
          <Typography
            variant="h5"
            component="h2"
            sx={{ ml: 1.5, fontWeight: 600 }}
          >
            Eu te amo há
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{ color: theme.palette.text.secondary, mb: 4 }}
        >
          {time.days} dias, {time.hours} horas, {time.minutes} minutos e{' '}
          {time.seconds} segundos
        </Typography>

        <Box sx={{ p: 2, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
          <Box
            component="img"
            src={fotoAnime}
            alt="Album Cover"
            sx={{
              width: '100%',
              maxWidth: '200px',
              maxHeight: '200px',
              height: 'auto',
              borderRadius: 2,
              mb: 2,
              boxShadow: 3,
            }}
          />
          <Box>
            <Typography variant="h6" component="h3" fontWeight="bold" noWrap>
              Best Part (feat. H.E.R.)
            </Typography>
            <Typography variant="body1" color="text.secondary" noWrap>
              Daniel Caesar
            </Typography>
          </Box>

          <Box sx={{ mt: 1 }}>
            <Slider
              aria-label="time-indicator"
              size="small"
              value={currentTime}
              min={0}
              step={1}
              max={duration}
              onChange={(_, value) => {
                if (audioRef.current) {
                  audioRef.current.currentTime = value as number;
                  setCurrentTime(value as number);
                }
              }}
              sx={{
                color: theme.palette.primary.main,
                height: 4,
                '& .MuiSlider-thumb': {
                  width: 12,
                  height: 12,
                  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                  '&:before': {
                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                  },
                  '&:hover, &.Mui-focusVisible': {
                    boxShadow: `0px 0px 0px 8px ${
                      theme.palette.mode === 'dark'
                        ? 'rgb(255 255 255 / 16%)'
                        : 'rgb(0 0 0 / 16%)'
                    }`,
                  },
                },
                '& .MuiSlider-rail': {
                  opacity: 0.28,
                },
              }}
            />
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
              sx={{ mt: -1 }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                fontWeight={500}
              >
                {formatTime(currentTime)}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                fontWeight={500}
              >
                {formatTime(duration)}
              </Typography>
            </Stack>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <IconButton aria-label="previous song" disabled>
              <SkipPreviousIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label={isPlaying ? 'pause' : 'play'}
              onClick={handlePlayPause}
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': { backgroundColor: 'primary.dark' },
              }}
            >
              {isPlaying ? (
                <PauseIcon sx={{ fontSize: '2.5rem' }} />
              ) : (
                <PlayArrowIcon sx={{ fontSize: '2.5rem' }} />
              )}
            </IconButton>
            <IconButton aria-label="next song" disabled>
              <SkipNextIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoveTimerAndPlayer;
