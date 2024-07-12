import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Grid, Box, Container, Typography } from '@mui/material';
import {
  FeaturesSectionStyled,
  InnerContainer,
  FeatureItem,
  FeatureNumber,
  FeaturesTitle,
  FeatureTitle,
  FeatureText
} from '../styles/FeaturesSectionStyles';

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <FeaturesSectionStyled>
      <InnerContainer maxWidth="md">
        <FeaturesTitle variant="h4" align="center" gutterBottom>
          Recursos da Carteirinha
        </FeaturesTitle>
        <Grid container spacing={4} direction="column">
          <Grid item xs={12}>
            <FeatureItem data-aos="fade-up">
              <FeatureNumber>1</FeatureNumber>
              <Box>
                <FeatureTitle>Armazenamento Seguro</FeatureTitle>
                <FeatureText>
                  Seus documentos pessoais armazenados de forma criptografada.
                </FeatureText>
              </Box>
            </FeatureItem>
          </Grid>
          <Grid item xs={12}>
            <FeatureItem data-aos="fade-up">
              <FeatureNumber>2</FeatureNumber>
              <Box>
                <FeatureTitle>Autenticação Biométrica</FeatureTitle>
                <FeatureText>
                  Acesso rápido e seguro usando sua impressão digital ou reconhecimento facial.
                </FeatureText>
              </Box>
            </FeatureItem>
          </Grid>
          <Grid item xs={12}>
            <FeatureItem data-aos="fade-up">
              <FeatureNumber>3</FeatureNumber>
              <Box>
                <FeatureTitle>Documentos Digitais</FeatureTitle>
                <FeatureText>
                  Tenha seus documentos sempre à mão, sem precisar carregar papéis.
                </FeatureText>
              </Box>
            </FeatureItem>
          </Grid>
          <Grid item xs={12}>
            <FeatureItem data-aos="fade-up">
              <FeatureNumber>4</FeatureNumber>
              <Box>
                <FeatureTitle>Integração com Serviços</FeatureTitle>
                <FeatureText>
                  Utilize sua Carteirinha em diversos sites e aplicativos parceiros.
                </FeatureText>
              </Box>
            </FeatureItem>
          </Grid>
        </Grid>
      </InnerContainer>
    </FeaturesSectionStyled>
  );
};

export default FeaturesSection;
