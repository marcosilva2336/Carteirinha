import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router'; 
import { Container, Typography, Box, Alert, Grid, Checkbox, FormControlLabel } from '@mui/material';
import NameInput from './NameInput';
import UploadButton from './UploadButton';
import SaveButton from './SaveButton';
import CpfInput from './CpfInput';
import { FormContainer, FormGridContainer, UploadWrapper, PreviewImage, PageContainer } from '../Styles/CardFormStyles';
import { CardContext } from '../context/CardContext';
import { createUser, uploadPhoto } from '../services/api'; // Importando as funções

const CardForm = () => {
  const { name, cpf, photo, setExpiryDate } = useContext(CardContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter(); 

  const handleSave = async () => {
    if (!name || !cpf || !photo) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    if (!termsAccepted) {
      setError('Você deve aceitar os termos.');
      return;
    }

    try {
      // Cria o usuário
      await createUser(name, cpf);

      // Faz upload da foto
      const file = new File([photo], `${name}.${photo.split(';')[0].split('/')[1]}`, { type: photo.split(';')[0].split(':')[1] });
      await uploadPhoto(file);

      setExpiryDate(new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)); // 1 year from now
      setSuccess(true);
      setTimeout(() => {
        router.push('/card-preview');
      }, 2000); // Delay de 2 segundos antes de redirecionar
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <PageContainer>
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
        {photo && (
          <Box mb={3} display="flex" justifyContent="center">
            <PreviewImage src={photo} alt="Pré-visualização da foto do cartão" />
          </Box>
        )}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <NameInput />
          </Grid>
          <Grid item xs={12}>
            <CpfInput />
          </Grid>
        </Grid>
        <Box mt={3}>
          <FormControlLabel
            control={<Checkbox checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />}
            label="Aceito os termos"
          />
        </Box>
        <FormGridContainer>
          <UploadWrapper>
            <UploadButton />
          </UploadWrapper>
          <UploadWrapper>
            <SaveButton onClick={handleSave} />
          </UploadWrapper>
        </FormGridContainer>
      </FormContainer>
    </PageContainer>
  );
};

export default CardForm;
