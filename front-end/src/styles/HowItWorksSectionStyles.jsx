import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const HowItWorksSectionStyled = styled(Box)(({ theme }) => ({
  backgroundColor: '#FBFCFE',
  padding: '80.823px 20px',
  [theme.breakpoints.up('sm')]: {
    padding: '0',
  },
  [theme.breakpoints.up('md')]: {
    padding: '80.823px 190px',
  },
  textAlign: 'center',
}));

export const HowItWorksTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  fontFamily: 'Roboto Slab, sans-serif !important',
  background: 'linear-gradient(239deg, #476FD6 30%, #1C3F99 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '2rem',
  textAlign: 'left',
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
}));

export const IconStyle = {
  fontSize: 40,
  color: '#476FD6',
};
