import { styled } from '@mui/system';
import { Card, CardMedia, Typography } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: 'auto',
  borderRadius: 16,
  border: '2px solid #000',
  textAlign: 'center',
  padding: '32px 16px',
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  borderRadius: '50%',
  width: 100,
  height: 100,
  margin: 'auto',
  border: '2px solid #4caf50',
}));

export const Logo = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  background: 'linear-gradient(239deg, #476FD6 10%, #1C3F99 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

export const Name = styled(Typography)(({ theme }) => ({
  marginTop: 16,
  fontSize: '1.5rem',
  fontWeight: 'bold',
}));

export const Validity = styled(Typography)(({ theme }) => ({
  marginTop: 16,
  fontSize: '1.2rem',
  color: 'grey',
}));

export const ExpiryDate = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  background: 'linear-gradient(239deg, #476FD6 10%, #1C3F99 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

