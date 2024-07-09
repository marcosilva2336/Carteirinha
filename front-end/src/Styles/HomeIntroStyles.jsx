import { styled } from '@mui/system';
import { Box, Typography, Button } from '@mui/material';

export const HeroSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(20, 2),
  backgroundColor: '#fff',
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  color: '#666',
  marginBottom: theme.spacing(4),
}));

export const CTAButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: '1.25rem',
  padding: theme.spacing(1, 5),
  color: '#fff',
  backgroundColor: '#007bff',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
}));
