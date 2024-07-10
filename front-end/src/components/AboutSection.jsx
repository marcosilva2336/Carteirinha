import React from 'react';
import { Container, Grid } from '@mui/material';
import { AboutSectionStyled, AboutImage, AboutText, AboutTitle , AboutDescription } from '../styles/AboutSectionStyles';

const AboutSection = () => {
  return (
    <AboutSectionStyled>
      <Container>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} md={6}>
            <AboutImage>
              <img src="/images/sobre.svg" alt="Logo Carteirinha" />
            </AboutImage>
          </Grid>
          <Grid item xs={12} md={6}>
            <AboutText>
            <AboutTitle>
            Sobre a Carteirinha
          </AboutTitle>
          <AboutDescription>
            A Carteirinha é uma aplicação que permite que você crie e gerencie suas carteiras de documentos eletrônicos de forma fácil e segura.
            Nossa missão é simplificar a organização dos seus documentos importantes, proporcionando acesso rápido e seguro a qualquer momento.
          </AboutDescription>
            </AboutText>
          </Grid>
        </Grid>
      </Container>
    </AboutSectionStyled>
  );
};

export default AboutSection;
