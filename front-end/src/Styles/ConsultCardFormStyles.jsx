import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const PageContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f4f6f8',
});

export const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '600px',
  margin: 'auto',
}));

export const PreviewImage = styled('img')(({ theme }) => ({
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  objectFit: 'cover',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));
