import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { TestimonialsSectionStyled, TestimonialCard, TestimonialText, TestimonialAuthor } from '../styles/TestimonialsSectionStyles';

const TestimonialsSection = () => {
  return (
    <TestimonialsSectionStyled>
      <Container>
        <Typography variant="h4" gutterBottom>
          Depoimentos
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <TestimonialCard>
              <TestimonialText>
                "A Carteirinha facilitou muito minha vida! Agora tenho todos os meus documentos importantes sempre à mão."
              </TestimonialText>
              <TestimonialAuthor>- João Silva</TestimonialAuthor>
            </TestimonialCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <TestimonialCard>
              <TestimonialText>
                "Simples e eficiente. Recomendo a todos que precisam organizar seus documentos."
              </TestimonialText>
              <TestimonialAuthor>- Maria Oliveira</TestimonialAuthor>
            </TestimonialCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <TestimonialCard>
              <TestimonialText>
                "A melhor aplicação de gerenciamento de documentos que já usei!"
              </TestimonialText>
              <TestimonialAuthor>- Pedro Souza</TestimonialAuthor>
            </TestimonialCard>
          </Grid>
        </Grid>
      </Container>
    </TestimonialsSectionStyled>
  );
};

export default TestimonialsSection;
