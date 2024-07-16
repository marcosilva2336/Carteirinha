import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Button, TextField, Alert } from '@mui/material';
import { useRouter } from 'next/router';
import { getUserByCPF } from '../services/api';
import { FormContainer, PageContainer } from '../styles/CardFormStyles';

const ConsultCardForm = () => {
  const [inputCpf, setInputCpf] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSearch = async () => {
    try {
      const user = await getUserByCPF(inputCpf);
      if (user) {
        setSuccess('Cartão encontrado! Redirecionando...');
        setTimeout(() => {
          router.push({
            pathname: '/card-details',
            query: { name: user.name, validity: user.validity }
          });
        }, 2000);
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
        {success && (
          <Box mt={2}>
            <Alert severity="success">{success}</Alert>
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
