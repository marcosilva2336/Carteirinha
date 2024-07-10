import { styled } from '@mui/system';
import { AppBar, Toolbar, Box } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
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
      color: '#333333',
      fontSize: ' 0.6875 rem',
      fontFamily: 'Inter, sans-serif', 
      fontWeight: '500',// Cor do texto dos botões para ser visível em fundo branco
    },
  }));