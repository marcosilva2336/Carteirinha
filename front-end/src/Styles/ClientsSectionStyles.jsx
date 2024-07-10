import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const ClientsSectionStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0px 20px', // Ajuste para responsividade
  [theme.breakpoints.up('md')]: {
    padding: '0px 100.234px',
  },
  width: '100%',
  backgroundColor: '#FFFFFF',
  textAlign: 'center',
  paddingBottom: theme.spacing(8),
}));

export const LogosContainerStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1002.34px',
  marginTop: theme.spacing(4), // Espaço extra entre título e logos
  flexWrap: 'wrap', // Adiciona quebra de linha para responsividade
}));

export const ClientLogoStyled = styled('img')(({ theme }) => ({
  width: '40px',
  height: '27.843px',
  [theme.breakpoints.down('sm')]: {
    width: '30px',
    height: '20.882px',
  },
  margin: theme.spacing(1), // Espaço entre as logos para melhor layout em telas menores
}));

export const ClientsTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.6rem !important',
  fontWeight: '600',
  color: '#4D4D4D',
  margin: '30px 0',
  fontFamily: 'Inter, sans-serif ',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
}));

export const ClientsSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem !important',
  fontWeight: '400',
  color: '#717171',
  fontFamily: 'Inter, sans-serif',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem',
  },
}));
