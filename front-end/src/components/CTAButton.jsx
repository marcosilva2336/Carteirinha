import React from 'react';
import { Button, Container, Box } from '@mui/material';
import { useRouter } from 'next/router';

const CTAButton = () => {
  const router = useRouter();

  const handleCreateCard = () => {
    router.push('/create-card');
  };

  return (
    <Container>
      <Box mt={5} textAlign="center">
        <Button variant="contained" color="primary" onClick={handleCreateCard}>
          Crie Seu Cartão
        </Button>
      </Box>
    </Container>
  );
};

export default CTAButton;
