import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { BenefitsSectionStyled, BenefitsTitle, BenefitCard, BenefitTitle, BenefitText, Overlay } from '../styles/BenefitsSectionStyles';

const BenefitsSection = () => {
  return (
    <BenefitsSectionStyled>
      <Overlay />
      <Container>
        <BenefitsTitle variant="h4" align="center" gutterBottom>
          Benefícios da Carteirinha
        </BenefitsTitle>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <BenefitCard>
              <BenefitTitle variant="h6" gutterBottom>
                Praticidade
              </BenefitTitle>
              <BenefitText>
                Todos os seus documentos em um só lugar, sempre à mão.
              </BenefitText>
            </BenefitCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <BenefitCard>
              <BenefitTitle variant="h6" gutterBottom>
                Segurança
              </BenefitTitle>
              <BenefitText>
                Seus dados pessoais protegidos com criptografia avançada.
              </BenefitText>
            </BenefitCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <BenefitCard>
              <BenefitTitle variant="h6" gutterBottom>
                Agilidade
              </BenefitTitle>
              <BenefitText>
                Acesso rápido a seus documentos usando autenticação biométrica.
              </BenefitText>
            </BenefitCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <BenefitCard>
              <BenefitTitle variant="h6" gutterBottom>
                Versatilidade
              </BenefitTitle>
              <BenefitText>
                Integração com diversos serviços online e offline.
              </BenefitText>
            </BenefitCard>
          </Grid>
        </Grid>
      </Container>
    </BenefitsSectionStyled>
  );
};

export default BenefitsSection;
