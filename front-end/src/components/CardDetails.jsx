import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, Box } from '@mui/material';
import { getUserByCPF } from '../services/api';
import { PageContainer, PreviewImage } from '../styles/CardFormStyles';

const CardDetails = () => {
  const router = useRouter();
  const { cpf } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (cpf) {
      const fetchUser = async () => {
        try {
          const fetchedUser = await getUserByCPF(cpf);
          setUser(fetchedUser);
        } catch (err) {
          console.error('Erro ao buscar o usuário:', err);
        }
      };
      fetchUser();
    }
  }, [cpf]);

  if (!user) return <Typography>Carregando...</Typography>;

  return (
    <PageContainer>
      <Container>
        <Typography variant="h5" gutterBottom>
          Detalhes do Cartão de Acesso
        </Typography>
        <Box mt={2} textAlign="center">
          <Typography variant="h6">{user.name}</Typography>
          {user.photoUrl && <PreviewImage src={user.photoUrl} alt="Foto do Cartão" />}
          <Typography variant="body1">CPF: {user.cpf}</Typography>
          <Typography variant="body1">
            Acesso Válido até {new Date(user.validity).toLocaleDateString()}
          </Typography>
        </Box>
      </Container>
    </PageContainer>
  );
};

export default CardDetails;
