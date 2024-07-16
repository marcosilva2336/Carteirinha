import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Grid, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQSectionStyled, FAQTitle, FAQCard, FAQContent, FAQImage } from '../styles/FAQSectionStyles';

const FAQSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <FAQSectionStyled>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FAQImage src="/images/icebreaker.avif" alt="Imagem de fundo" data-aos="fade-up" />
          </Grid>
          <Grid item xs={12} md={6}>
            <FAQContent data-aos="fade-up">
              <FAQTitle variant="h4" align="center" gutterBottom>
                Perguntas Frequentes
              </FAQTitle>
              <FAQCard>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Quais documentos posso armazenar?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Você pode armazenar documentos pessoais como RG, CPF, CNH, entre outros.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </FAQCard>
              <FAQCard>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>É seguro usar a Carteirinha?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Sim, todos os seus dados são criptografados e protegidos com alta segurança.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </FAQCard>
              <FAQCard>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Posso usar a Carteirinha em qualquer lugar?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Sim, você pode usar a Carteirinha em qualquer estabelecimento que aceite documentos digitais.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </FAQCard>
              <FAQCard>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Como posso recuperar minha senha?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Você pode recuperar sua senha através da opção &#39;Esqueci minha senha&#39; na tela de login.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </FAQCard>
            </FAQContent>
          </Grid>
        </Grid>
      </Container>
    </FAQSectionStyled>
  );
};

export default FAQSection;
