import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router'; // Importando useRouter do Next.js
import { Container } from '@mui/material';
import { HeroSection, TextContainer, HeroTitle, HeroSubtitle, ButtonContainer, CTAButtonStyled, LearnMoreButtonStyled } from '../styles/HomeIntroStyles';

const HomeIntro = () => {
  const router = useRouter(); // Usando useRouter

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleCreateCardClick = () => {
    router.push('/create-card'); // Redirecionando para a rota create-card
  };

  return (
    <HeroSection>
      <Container>
        <TextContainer data-aos="fade-up">
          <HeroTitle>
            Carteirinha: Sua Identidade Digital
          </HeroTitle>
          <HeroSubtitle variant="subtitle1">
            Transforme seu smartphone em uma carteira digital segura e conveniente.
          </HeroSubtitle>
          <ButtonContainer>
            <CTAButtonStyled variant="contained" onClick={handleCreateCardClick}>Criar minha carteirinha</CTAButtonStyled>
            <LearnMoreButtonStyled variant="outlined">Saiba Mais</LearnMoreButtonStyled>
          </ButtonContainer>
        </TextContainer>
      </Container>
    </HeroSection>
  );
};

export default HomeIntro;
