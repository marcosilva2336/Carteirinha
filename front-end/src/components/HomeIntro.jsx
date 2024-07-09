import React from 'react';
import { Container } from '@mui/material';
import { HeroSection, HeroTitle, HeroSubtitle, CTAButtonStyled } from '../styles/HomeIntroStyles';
import { useRouter } from 'next/router';

const HomeIntro = () => {
  const router = useRouter();

  const handleCreateCard = () => {
    router.push('/create-card');
  };

  return (
    <HeroSection>
      <Container>
        <HeroTitle>
          Bem-vindo ao My Wallet App
        </HeroTitle>
        <HeroSubtitle>
          Crie sua carteira eletrônica de acesso de forma rápida e fácil!
        </HeroSubtitle>
        <CTAButtonStyled onClick={handleCreateCard}>
          CRIE SEU CARTÃO
        </CTAButtonStyled>
      </Container>
    </HeroSection>
  );
};

export default HomeIntro;
