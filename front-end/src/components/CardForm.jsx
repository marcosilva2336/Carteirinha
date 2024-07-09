import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router'; 
import { Container, Typography, Box, Alert } from '@mui/material';
import NameInput from './NameInput';
import UploadButton from './UploadButton';
import SaveButton from './SaveButton';
import { FormContainer, FormGridContainer, UploadWrapper } from '../styles/CardFormStyles';
import { CardContext } from '../context/CardContext';

const CardForm = () => {
  const { name, photo, setExpiryDate } = useContext(CardContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter(); 

  const handleSave = () => {
    if (!name || !photo) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    setExpiryDate(new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)); // 1 year from now
    setSuccess(true);
    setTimeout(() => {
      router.push('/card-preview');
    }, 2000); // Delay de 2 segundos antes de redirecionar
  };

  return (
    <Container maxWidth="sm">
      <FormContainer>
        <Typography variant="h5" gutterBottom>
          Crie seu Cartão de Acesso
        </Typography>
        {error && (
          <Box mt={2}>
            <Alert severity="error">{error}</Alert>
          </Box>
        )}
        {success && (
          <Box mt={2}>
            <Alert severity="success">Cartão criado com sucesso!</Alert>
          </Box>
        )}
        <Box mt={3}>
          <NameInput />
        </Box>
        <FormGridContainer>
          <UploadWrapper>
            <UploadButton />
          </UploadWrapper>
          <SaveButton onClick={handleSave} />
        </FormGridContainer>
      </FormContainer>
    </Container>
  );
};

export default CardForm;
