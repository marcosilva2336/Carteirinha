import React, { useContext, useRef } from 'react';
import { CardContext } from '../context/CardContext';
import { Container, Box, CardContent, Button } from '@mui/material';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { StyledCard, StyledCardMedia,Logo, Name, Validity, ExpiryDate } from '../styles/CardPreviewStyles';


const CardPreview = () => {
  const { name, photo, expiryDate } = useContext(CardContext);
  const cardRef = useRef();

  const downloadAsPDF = () => {
    html2canvas(cardRef.current)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10);
        pdf.save('cartao.pdf');
      })
      .catch((error) => {
        console.error('Erro ao gerar PDF:', error);
      });
  };

  return (
    <Container>
      <Box mt={5} textAlign="center" ref={cardRef}>
        <StyledCard>
          <Logo>Carteirinha</Logo>
          <StyledCardMedia component="img" alt="Foto" image={photo} />
          <CardContent>
            <Name>{name}</Name>
            <Validity>Acesso Válido até</Validity>
            <ExpiryDate>{new Date(expiryDate).toLocaleDateString()}</ExpiryDate>
          </CardContent>
        </StyledCard>
      </Box>
      <Box mt={2} textAlign="center">
        <Button variant="contained" color="primary" onClick={downloadAsPDF}>
          Baixar Cartão
        </Button>
      </Box>
    </Container>
  );
};

export default CardPreview;
