import { styled } from '@mui/system';
import { Box, Typography, Card } from '@mui/material';

export const FAQSectionStyled = styled(Box)(({ theme }) => ({
  backgroundColor: '#FBFCFE',
  padding: '8rem 0',
  textAlign: 'center',
}));

export const FAQTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 'bold',
  fontFamily: 'Roboto Slab, sans-serif !important',
  background: 'linear-gradient(239deg, #476FD6 50%, #1C3F99 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '2rem',
}));

export const FAQCard = styled(Card)(({ theme }) => ({
  padding: '1rem',
  backgroundColor: '#FFFFFF',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  marginBottom: '1rem',
  opacity: 0.95,
}));

export const FAQContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

export const FAQImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));
