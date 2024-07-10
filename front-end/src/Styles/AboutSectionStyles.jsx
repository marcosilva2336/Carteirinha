import { styled } from '@mui/system';
import { Box,Typography } from '@mui/material';

export const AboutSectionStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  backgroundColor: '#FFFFFF', // Branco
  textAlign: 'center',
}));

export const AboutImage = styled(Box)(({ theme }) => ({
  '& img': {
    width: '100%',
    maxWidth: 450,
  },
}));

export const AboutText = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  color: '#666666', // Cinza Médio
  marginTop: theme.spacing(2),
}));

export const AboutTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.6rem !important',
  fontWeight: '600',
  color: '#4D4D4D',
  fontFamily: 'Inter, sans-serif',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem !important',
  },
}));

export const AboutDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem !important',
  color: '#4D4D4D',
  textAlign: 'justify',
  fontFamily: 'Inter, sans-serif',
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem !important',
  },
}));