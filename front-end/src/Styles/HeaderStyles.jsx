import { styled } from '@mui/system';
import { AppBar, Toolbar, Box } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    position: 'relative',
    backgroundColor: '#8BC34A', // Verde mais claro
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(1, 0),
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start', // Centraliza a logo
}));

export const LogoBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    '& img': {
        height: 50,
        [theme.breakpoints.down('sm')]: {
            height: 40,
        },
    },
}));
