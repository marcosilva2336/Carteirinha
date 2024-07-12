import { styled } from '@mui/system';
import { Box, Typography, Button } from '@mui/material';

export const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '120px 5px',
  [theme.breakpoints.up('sm')]: {
    padding: '66px 50px',
    textAlign: 'left'
  },
  [theme.breakpoints.up('md')]: {
    padding: '140px 180px',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'left',
  },
  backgroundColor: '#FBFCFE', // Cor de fundo
  textAlign: 'center',
}));

export const TextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '0.5rem',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    textAlign: 'left',
  },
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.3rem',
  fontWeight: 'bold',
  lineHeight: '1.2',
  fontFamily: 'Roboto Slab, sans-serif !important',
  background: 'linear-gradient(239deg, #476FD6 10%, #1C3F99 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: 'left',
  [theme.breakpoints.up('sm')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.8rem',
  },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  textAlign: 'justify',
  fontWeight: '400',
  color: '#15213F', // Cinza escuro
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(2),
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
}));

export const CTAButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 'bold',
  borderRadius: '0.2344rem',
  padding: '9px 25px',
  color: '#FFFFFF', // Branco
  background: 'linear-gradient(to right, #1C3F99, #4878D9)', // Gradiente de azul
  '&:hover': {
    backgroundColor: '#1C3F99', // Azul mais escuro no hover
  },
  [theme.breakpoints.up('md')]: {
    padding: '9px 18px',
  },
}));

export const LearnMoreButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: '1rem',
  borderRadius: '0.2344rem',
  padding: '9px 18px',
  color: '#476FD6', 
  boxShadow: 'inset 0 0 0 0.125em #476FD6',
  fontWeight: '500',
  '&:hover': {
    backgroundColor: '#4878D9', 
    color: '#FFFFFF', 
  },
  width: '100%', 
  [theme.breakpoints.up('sm')]: {
    width: 'auto', 
  },
}));