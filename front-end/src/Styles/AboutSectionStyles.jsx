import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const AboutSectionStyled = styled(Box)(({ theme }) => ({
  backgroundColor: '#FBFCFE', // Cor de fundo igual à da HomeIntro
  padding: '1rem', // Ajuste para responsividade',
  [theme.breakpoints.up('sm')]: {
    padding: '0',
  },
  [theme.breakpoints.up('md')]: {
    padding: '80.823px 190px',
  },
}));

export const AboutTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  fontFamily: 'Roboto Slab, sans-serif !important',
  color: '#486FCA',
  background: 'linear-gradient(239deg, #476FD6 10%, #1C3F99 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '2rem',
  textAlign: 'left',
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
}));

export const AboutText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '400', 
  color: '#15213F', // Cinza escuro
  marginBottom: '1rem',
}));

export const AboutSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  textAlign: 'left',
  fontFamily: 'Roboto Slab, sans-serif !important',
  fontWeight: '500',
  background: 'linear-gradient(239deg, #476FD6 10%, #1C3F99 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '1rem',
}));
