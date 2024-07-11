import { styled } from '@mui/system';
import { AppBar, Toolbar, Box } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#FBFCFE', // Cor de fundo do AppBar
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 2),
  },
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const LogoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '6rem',
  '& img': {
    width: '9rem',
    height: '2rem',
    [theme.breakpoints.down('sm')]: {
      width: '50px',
      height: '9px',
    },
  },
}));

export const MenuBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.5rem',
  '& button': {
    color: '#39ff14', // Cor do texto dos botões para ser visível em fundo preto
    fontSize: '0.6875rem',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
  },
}));
