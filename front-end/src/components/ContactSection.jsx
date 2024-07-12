import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Grid, TextField, Button, Typography, Box } from '@mui/material';
import { ContactSectionStyled, ContactTitle, ContactForm, InfoItem, SubmitButton } from '../styles/ContactSectionStyles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <ContactSectionStyled>
      <Container>
        <ContactTitle variant="h4" align="center" gutterBottom data-aos="fade-up">
          Contato
        </ContactTitle>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4} data-aos="fade-up">
            <InfoItem>
              <FacebookIcon />
              <Typography variant="body1">Facebook</Typography>
            </InfoItem>
          </Grid>
          <Grid item xs={12} sm={4} data-aos="fade-up">
            <InfoItem>
              <TwitterIcon />
              <Typography variant="body1">Twitter</Typography>
            </InfoItem>
          </Grid>
          <Grid item xs={12} sm={4} data-aos="fade-up">
            <InfoItem>
              <InstagramIcon />
              <Typography variant="body1">Instagram</Typography>
            </InfoItem>
          </Grid>
        </Grid>
        <ContactForm data-aos="fade-up">
          <TextField label="Nome" variant="outlined" fullWidth margin="normal" />
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Mensagem" variant="outlined" fullWidth multiline rows={4} margin="normal" />
          <SubmitButton variant="contained" color="primary">
            Enviar
          </SubmitButton>
        </ContactForm>
      </Container>
    </ContactSectionStyled>
  );
};

export default ContactSection;
