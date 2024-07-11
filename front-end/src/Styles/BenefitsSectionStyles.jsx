import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const BenefitsSectionStyled = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#FBFCFE',
  padding: '1rem',
  textAlign: 'center',
  backgroundImage: 'url(/images/beneficios.avif)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.up('sm')]: {
    padding: '0',
  },
  [theme.breakpoints.up('md')]: {
    padding: '80.823px 190px',
  },
}));

export const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  zIndex: 1,
});

export const BenefitsTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 'bold',
  fontFamily: 'Roboto Slab, sans-serif !important',
  background: 'linear-gradient(239deg, #476FD6 50%, #1C3F99 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '2rem',
  position: 'relative',
  zIndex: 2,
  textAlign: 'left',
}));

export const BenefitCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: '8px',
  padding: '1.5rem',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  zIndex: 2,
}));

export const BenefitTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#15213F',
  marginBottom: '0.5rem',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

export const BenefitText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#15213F',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));
