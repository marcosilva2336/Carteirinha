import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const ContactSectionStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  backgroundColor: '#fff',
  textAlign: 'center',
}));

export const ContactForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
    width: '100%',
    maxWidth: 600,
  },
  '& .MuiButton-root': {
    marginTop: theme.spacing(2),
  },
}));
