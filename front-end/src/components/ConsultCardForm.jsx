import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Button, TextField, Alert } from '@mui/material';
import { useRouter } from 'next/router';
import { getUserByCPF } from '../services/api';
import { FormContainer, PageContainer } from '../styles/ConsultCardFormStyles';

const ConsultCardForm = () => {
  const [inputCpf, setInputCpf] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSearch = async () => {
    try {
      const user = await getUserByCPF(inputCpf);
      if (user) {
        router.push(`/card-details?cpf=${inputCpf}`);
      } else {
        setError('Cartão não encontrado. Verifique os dados e tente novamente.');
      }
    } catch (err) {
      setError('Erro ao buscar o cartão. Tente novamente mais tarde.');
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
      </FormContainer>
    </PageContainer>
  );
};

export default ConsultCardForm;
