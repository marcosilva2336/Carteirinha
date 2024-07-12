import React, { useState, useContext } from 'react';
import { Container, Typography, Box, Grid, Button, TextField, Alert } from '@mui/material';
import { CardContext } from '../context/CardContext';
import { FormContainer, PageContainer, PreviewImage } from '../styles/ConsultCardFormStyles';

const ConsultCardForm = () => {
  const { name, photo } = useContext(CardContext);
  const [inputName, setInputName] = useState('');
  const [inputCpf, setInputCpf] = useState('');
  const [error, setError] = useState('');
  const [cardFound, setCardFound] = useState(false);

  const handleSearch = () => {
    if (inputName === name && inputCpf === '12345678900') { // Aqui você deve fazer a lógica de busca do CPF
      setCardFound(true);
      setError('');
    } else {
      setCardFound(false);
      setError('Cartão não encontrado. Verifique os dados e tente novamente.');
    }
  };

  return (
    <PageContainer>
      <FormContainer>
        <Typography variant="h5" gutterBottom>
          Consulte seu Cartão de Acesso
        </Typography>
        {error && (
          <Box mt={2}>
            <Alert severity="error">{error}</Alert>
          </Box>
        )}
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
            <TextField 
              fullWidth
              label="Nome Completo"
              variant="outlined"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              fullWidth
              label="CPF"
              variant="outlined"
              value={inputCpf}
              onChange={(e) => setInputCpf(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSearch} fullWidth>
              Buscar
            </Button>
          </Grid>
        </Grid>
        {cardFound && (
          <Box mt={4} textAlign="center">
            <Typography variant="h6">{name}</Typography>
            <PreviewImage src={photo} alt="Foto do Cartão" />
            <Typography variant="body1">CPF: {inputCpf}</Typography>
          </Box>
        )}
      </FormContainer>
    </PageContainer>
  );
};

export default ConsultCardForm;
