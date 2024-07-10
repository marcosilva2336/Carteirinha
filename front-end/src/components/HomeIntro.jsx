import React from 'react';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import { HeroSection, HeroTitle, HeroSubtitle, HeroImage, TextContainer, CTAButtonStyled } from '../styles/HomeIntroStyles';
import { useRouter } from 'next/router';

const HomeIntro = () => {
  const router = useRouter();

  const handleCreateCard = () => {
    router.push('/create-card');
  };

  return (
    <HeroSection>
      <Container>
        <Grid container alignItems="center" spacing={8}>
          <Grid item xs={12} md={6}>
            <TextContainer>
              <HeroTitle>
                Bem-vindo ao Carteirinha
              </HeroTitle>
              <HeroSubtitle>
                Crie sua carteira eletrônica de acesso de forma rápida e fácil!
              </HeroSubtitle>
              <CTAButtonStyled onClick={handleCreateCard}>
                CRIE SEU CARTÃO
              </CTAButtonStyled>
            </TextContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <HeroImage src="/images/hero-image.svg" alt="Hero Image" />
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default HomeIntro;
