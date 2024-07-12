import { styled } from '@mui/system';
import { Box, Typography, Card, Avatar } from '@mui/material';

export const TestimonialSectionStyled = styled(Box)(({ theme }) => ({
  backgroundColor: '#FBFCFE',
  padding: '8rem 0',
  textAlign: 'center',
}));

export const TestimonialTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  fontFamily: 'Roboto Slab, sans-serif !important',
  background: 'linear-gradient(239deg, #476FD6 50%, #1C3F99 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '2rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
}));

export const TestimonialCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  padding: '2rem',
  textAlign: 'center',
}));

export const TestimonialAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  marginBottom: theme.spacing(2),
}));

export const TestimonialContent = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '400',
  color: '#15213F',
  marginBottom: theme.spacing(2),
}));

export const TestimonialName = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: '#15213F',
}));
