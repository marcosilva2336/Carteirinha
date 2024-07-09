import React from 'react';
import { Container, Grid } from '@mui/material';
import { FeaturesSectionStyled, Feature, FeatureIcon, FeatureTitle, FeatureDescription } from '../styles/FeaturesSectionStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faClock, faUserCheck } from '@fortawesome/free-solid-svg-icons';

const FeaturesSection = () => {
  return (
    <FeaturesSectionStyled>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Feature>
              <FeatureIcon>
                <FontAwesomeIcon icon={faShieldAlt} />
              </FeatureIcon>
              <FeatureTitle>Segurança</FeatureTitle>
              <FeatureDescription>Proteja seu acesso com nosso sistema seguro.</FeatureDescription>
            </Feature>
          </Grid>
          <Grid item xs={12} md={4}>
            <Feature>
              <FeatureIcon>
                <FontAwesomeIcon icon={faClock} />
              </FeatureIcon>
              <FeatureTitle>Praticidade</FeatureTitle>
              <FeatureDescription>Crie e acesse sua carteira eletrônica rapidamente.</FeatureDescription>
            </Feature>
          </Grid>
          <Grid item xs={12} md={4}>
            <Feature>
              <FeatureIcon>
                <FontAwesomeIcon icon={faUserCheck} />
              </FeatureIcon>
              <FeatureTitle>Fácil Acesso</FeatureTitle>
              <FeatureDescription>Tenha sua carteira sempre à mão, em qualquer lugar.</FeatureDescription>
            </Feature>
          </Grid>
        </Grid>
      </Container>
    </FeaturesSectionStyled>
  );
};

export default FeaturesSection;
