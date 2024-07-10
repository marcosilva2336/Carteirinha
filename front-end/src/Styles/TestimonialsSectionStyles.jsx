import { styled } from '@mui/system';
import { Box, Paper, Typography } from '@mui/material';

export const TestimonialsSectionStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  backgroundColor: '#fff',
  textAlign: 'center',
}));

export const TestimonialCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'left',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
}));

export const TestimonialText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: '#666',
}));

export const TestimonialAuthor = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#333',
}));
