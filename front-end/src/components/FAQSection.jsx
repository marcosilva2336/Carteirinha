import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQSectionStyled } from '../styles/FAQSectionStyles';

const FAQSection = () => {
  return (
    <FAQSectionStyled>
      <Container>
        <Typography variant="h4" gutterBottom>
          Perguntas Frequentes
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Como faço para criar uma Carteirinha?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para criar uma Carteirinha, clique no botão "CRIE SEU CARTÃO" e siga as instruções na tela.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Posso adicionar vários documentos?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sim, você pode adicionar quantos documentos quiser à sua Carteirinha.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Meus documentos estão seguros?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sim, utilizamos as melhores práticas de segurança para garantir que seus documentos estejam protegidos.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </FAQSectionStyled>
  );
};

export default FAQSection;
