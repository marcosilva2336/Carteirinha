import { styled } from '@mui/system';
import { Box, Typography, Button } from '@mui/material';

export const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '66.823px 20px',
  [theme.breakpoints.up('sm')]: {
    padding: '66.823px 50px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '66.823px 100.234px',
  },
  alignItems: 'center',
  gap: '72.391px',
  backgroundColor: '#F5F7FA', // Silver
  color: '#333333', // Texto escuro
  alignSelf: 'stretch',
}));

export const TextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '22.274px',
  flex: '1 0 0',
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.8rem',
  },
  fontWeight: '600',
  lineHeight: '1.2',
  [theme.breakpoints.up('md')]: {
    lineHeight: '52.901px',
  },
  fontFamily: 'Inter, sans-serif',
  color: '#333333', // Cinza escuro
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '400',
  fontFamily: 'Inter, sans-serif !important',
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
  color: '#666666', // Cinza médio
}));

export const HeroImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '300px',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '400px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '500px',
  },
  marginLeft: '20px', // Espaçamento entre a imagem e o texto
  [theme.breakpoints.up('md')]: {
    marginLeft: '72.391px', // Espaçamento maior para telas maiores
  },
}));

export const CTAButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: '1rem',
  borderRadius: '0.2344rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem',
  },
  padding: theme.spacing(1, 3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(1, 5),
  },
  color: '#FFFFFF', // Branco
  backgroundColor: '#4CAF50', // Verde principal
  '&:hover': {
    backgroundColor: '#388E3C', // Verde mais escuro
  },
}));
