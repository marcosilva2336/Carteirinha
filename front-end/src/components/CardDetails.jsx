import React from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, Box, CardContent } from '@mui/material';
import { StyledCard, Logo, Name, Validity, ExpiryDate } from '../styles/CardPreviewStyles'; 
import { PageContainer } from '../styles/CardFormStyles';

const CardDetails = () => {
  const router = useRouter();
  const { name, validity } = router.query;

  if (!name || !validity) {
    return (
      <PageContainer>
        <Container>
          <Typography variant="h5" gutterBottom>
            Nenhum cartão encontrado
          </Typography>
        </Container>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Container>
        <Box mt={5} textAlign="center">
          <StyledCard>
            <Logo>Carteirinha</Logo>
            <CardContent>
              <Name>
                {name}
              </Name>
              <Validity>
                Acesso Válido até
              </Validity>
              <ExpiryDate>
                {new Date(validity).toLocaleDateString()}
              </ExpiryDate>
            </CardContent>
          </StyledCard>
        </Box>
      </Container>
    </PageContainer>
  );
};

export default CardDetails;
