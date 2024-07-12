import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Grid, CardContent, Box } from '@mui/material';
import { TestimonialSectionStyled, TestimonialTitle, TestimonialCard, TestimonialAvatar, TestimonialContent, TestimonialName } from '../styles/TestimonialSectionStyles';

const testimonials = [
  {
    name: 'João Silva',
    image: '/images/joao.jpg',
    text: 'Muito prático e fácil de usar. Recomendo para todos!',
  },
  {
    name: 'Maria Souza',
    image: '/images/maria.jpg',
    text: 'Muito prático e fácil de usar. Recomendo para todos!',
  },
  {
    name: 'Carlos Lima',
    image: '/images/carlos.jpg',
    text: 'Muito prático e fácil de usar. Recomendo para todos!',
  },
];

const TestimonialSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <TestimonialSectionStyled>
      <Container>
        <TestimonialTitle variant="h4" align="center" gutterBottom>
          Depoimentos
        </TestimonialTitle>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={4} key={index} data-aos="fade-up">
              <TestimonialCard>
                <CardContent>
                  <TestimonialContent variant="body1" gutterBottom>
                    {testimonial.text}
                  </TestimonialContent>
                  <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
                    <TestimonialAvatar src={testimonial.image} alt={testimonial.name} />
                    <TestimonialName variant="h6" gutterBottom>
                      {testimonial.name}
                    </TestimonialName>
                  </Box>
                </CardContent>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </TestimonialSectionStyled>
  );
};

export default TestimonialSection;
