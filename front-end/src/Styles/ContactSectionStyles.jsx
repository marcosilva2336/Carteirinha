import { styled } from '@mui/system';
import { Box, Typography, Button } from '@mui/material';

export const ContactSectionStyled = styled(Box)(({ theme }) => ({
  backgroundColor: '#FBFCFE',
  padding: '10rem',
  textAlign: 'center',
}));

export const ContactTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 'bold',
  fontFamily: 'Roboto Slab, sans-serif !important',
  background: 'linear-gradient(239deg, #476FD6 50%, #1C3F99 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '2rem',
}));

export const ContactForm = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginTop: '2rem',
}));

export const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#FFFFFF',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  '& svg': {
    fontSize: '2rem',
    color: '#1C3F99',
    marginBottom: '0.5rem',
  },
  '&:hover svg': {
    color: '#476FD6',
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: '1rem',
  background: 'linear-gradient(239deg, #476FD6 10%, #1C3F99 90%)',
  color: '#fff',
  padding: '0.35rem 3.5rem',
  '&:hover': {
    background: 'linear-gradient(239deg, #1C3F99 50%, #476FD6 90%)',
  },
}));
