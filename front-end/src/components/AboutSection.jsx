import React from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import { AboutSectionStyled, AboutTitle, AboutText , AboutSubTitle} from '../styles/AboutSectionStyles';

const AboutSection = () => {
  return (
    <AboutSectionStyled>
      <Container>
        <AboutTitle variant="h4" align="center" gutterBottom>
          Sobre o Aplicativo
        </AboutTitle>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box>
              < AboutSubTitle variant="h6" gutterBottom>
                O Que É
              </ AboutSubTitle>
              <AboutText variant="body1">
                A Carteirinha é um aplicativo que permite criar e armazenar sua identidade digital de forma segura e conveniente.
              </AboutText>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              < AboutSubTitle variant="h6" gutterBottom>
                Principais Recursos
              </ AboutSubTitle>
              <AboutText variant="body1">
                Acesso rápido a seus documentos, autenticação biométrica, e integração com serviços online.
              </AboutText>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              < AboutSubTitle variant="h6" gutterBottom>
                Benefícios
              </ AboutSubTitle>
              <AboutText variant="body1">
                Praticidade, segurança e controle total sobre seus documentos pessoais.
              </AboutText>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AboutSectionStyled>
  );
};

export default AboutSection;
