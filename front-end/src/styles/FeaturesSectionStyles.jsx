import { styled } from '@mui/system';
import { Box, Container, Typography } from '@mui/material';

export const FeaturesSectionStyled = styled(Box)(({ theme }) => ({
  backgroundColor: '#CAD6DE',
  padding: '4rem 1rem', // Ajuste para responsividade
  [theme.breakpoints.up('sm')]: {
    padding: '0',
  },
  [theme.breakpoints.up('md')]: {
    padding: '80.823px 190px',
  },
}));

export const InnerContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  padding: '2rem 1rem', // Ajuste para responsividade
  borderRadius: '8px',
  [theme.breakpoints.up('md')]: {
    padding: '4rem',
  },
}));

export const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#FFFFFF',
  flexDirection: 'column', // Empilhar verticalmente em telas pequenas
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row', // Alinhar horizontalmente em telas maiores
  },
}));

export const FeatureNumber = styled(Typography)(({ theme }) => ({
  backgroundColor: '#E6E8EB',
  borderRadius: '0.15em',
  width: '2.5rem',
  height: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '1.7rem',
  color: '#15213F',
  marginBottom: '1rem', // Adicionar margem inferior em telas menores
  [theme.breakpoints.up('md')]: {
    marginRight: '1rem',
    marginBottom: '0', // Remover margem inferior em telas maiores
    width: '2.8rem',
    height: '2.8rem',
  },
}));

export const FeaturesTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem', // Ajuste para responsividade
  fontWeight: 'bold',
  fontFamily: 'Roboto Slab, sans-serif !important',
  background: 'linear-gradient(239deg, #476FD6 30%, #1C3F99 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '2rem',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
    textAlign: 'left', // Alinhar à esquerda em telas maiores
  },
}));

export const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  fontFamily: 'Roboto Slab, sans-serif !important',
  color: '#15213F',
  textAlign: 'center', // Centralizar em telas pequenas
  [theme.breakpoints.up('md')]: {
    textAlign: 'left', // Alinhar à esquerda em telas maiores
  },
}));

export const FeatureText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '400',
  fontFamily: 'Roboto, sans-serif',
  color: '#15213F',
  textAlign: 'center', // Centralizar em telas pequenas
  [theme.breakpoints.up('md')]: {
    textAlign: 'left', // Alinhar à esquerda em telas maiores
  },
}));
