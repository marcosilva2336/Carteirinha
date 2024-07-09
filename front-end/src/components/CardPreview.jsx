import React, { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import { Container, Box, CardContent } from '@mui/material';
import { StyledCard, StyledCardMedia, Logo, Name, Validity, ExpiryDate } from '../styles/CardPreviewStyles';

const CardPreview = () => {
  const { name, photo, expiryDate } = useContext(CardContext);

  return (
    <Container>
      <Box mt={5} textAlign="center">
        <StyledCard>
          <Logo src="/logo.png" alt="Logo" />
          <StyledCardMedia
            component="img"
            alt="Foto"
            image={photo}
          />
          <CardContent>
            <Name>
              {name}
            </Name>
            <Validity>
              Acesso Válido até
            </Validity>
            <ExpiryDate>
              {new Date(expiryDate).toLocaleDateString()}
            </ExpiryDate>
          </CardContent>
        </StyledCard>
      </Box>
    </Container>
  );
};

export default CardPreview;
