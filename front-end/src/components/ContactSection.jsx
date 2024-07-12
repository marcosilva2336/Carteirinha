import React from 'react';
import { Container, Grid, TextField, Button, Typography, Box, FormControlLabel, Checkbox } from '@mui/material';
import { ContactSectionStyled, ContactTitle, ContactForm, ContactInfo, InfoItem, SubmitButton, SocialIcons } from '../styles/ContactSectionStyles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactSection = () => {
  return (
    <ContactSectionStyled>
      <Container>
        <ContactTitle variant="h4" align="center" gutterBottom>
          Contato
        </ContactTitle>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <InfoItem>
              <FacebookIcon />
              <Typography variant="body1">Facebook</Typography>
            </InfoItem>
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoItem>
              <TwitterIcon />
              <Typography variant="body1">Twitter</Typography>
            </InfoItem>
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoItem>
              <InstagramIcon />
              <Typography variant="body1">Instagram</Typography>
            </InfoItem>
          </Grid>
        </Grid>
        <ContactForm>
          <TextField label="Nome" variant="outlined" fullWidth margin="normal" />
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Mensagem" variant="outlined" fullWidth multiline rows={4} margin="normal" />
          <SubmitButton variant="outlined" color="primary">
            Enviar
          </SubmitButton>
        </ContactForm>
      </Container>
    </ContactSectionStyled>
  );
};

export default ContactSection;
