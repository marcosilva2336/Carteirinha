import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const FeaturesSectionStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  backgroundColor: '#f0f0f0',
  textAlign: 'center',
}));

export const Feature = styled(Box)(({ theme }) => ({
  margin: theme.spacing(5, 0),
}));

export const FeatureIcon = styled(Box)(({ theme }) => ({
  fontSize: '4rem',
  color: '#4caf50',
}));

export const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginTop: theme.spacing(2),
}));

export const FeatureDescription = styled(Typography)(({ theme }) => ({
  color: '#666',
}));
