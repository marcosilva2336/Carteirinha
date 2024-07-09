import { styled } from '@mui/system';
import { Paper } from '@mui/material';

export const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  borderRadius: theme.spacing(2),
  textAlign: 'center',
}));

export const FormGridContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(2),
}));

export const UploadWrapper = styled('div')(({ theme }) => ({
  marginRight: theme.spacing(2),
}));
