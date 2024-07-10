import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { ContactSectionStyled, ContactForm } from '../styles/ContactSectionStyles';

const ContactSection = () => {
  return (
    <ContactSectionStyled>
      <Container>
        <Typography variant="h4" gutterBottom>
          Contato
        </Typography>
        <ContactForm>
          <TextField label="Nome" variant="outlined" fullWidth margin="normal" />
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Mensagem" variant="outlined" fullWidth margin="normal" multiline rows={4} />
          <Button variant="contained" color="primary">
            Enviar
          </Button>
        </ContactForm>
      </Container>
    </ContactSectionStyled>
  );
};

export default ContactSection;
