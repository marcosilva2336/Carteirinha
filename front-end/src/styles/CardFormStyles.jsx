import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const PageContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: 'linear-gradient(145deg, #f0f4ff, #d9e0ff)',
});

export const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(6),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '700px',
  textAlign: 'center',
}));

export const FormGridContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: theme.spacing(3),
}));

export const UploadWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flex: '1',
}));

export const PreviewImage = styled('img')(({ theme }) => ({
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  objectFit: 'cover',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));
