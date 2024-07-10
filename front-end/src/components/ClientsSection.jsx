import React from 'react';
import { Container, Box } from '@mui/material';
import { ClientsSectionStyled, ClientLogoStyled, LogosContainerStyled, ClientsTitle, ClientsSubtitle } from '../styles/ClientsSectionStyles';

const ClientsSection = () => {
  return (
    <ClientsSectionStyled>
      <Container>
        <Box>
          <ClientsTitle >
            Our Clients
          </ClientsTitle>
          <ClientsSubtitle>
            We have been working with some Fortune 500+ clients
          </ClientsSubtitle>
        </Box>
        <LogosContainerStyled>
          <ClientLogoStyled src="/images/client1.svg" alt="Client 1" />
          <ClientLogoStyled src="/images/client2.svg" alt="Client 2" />
          <ClientLogoStyled src="/images/client3.svg" alt="Client 3" />
          <ClientLogoStyled src="/images/client4.svg" alt="Client 4" />
          <ClientLogoStyled src="/images/client1.svg" alt="Client 5" />
          <ClientLogoStyled src="/images/client2.svg" alt="Client 6" />
          <ClientLogoStyled src="/images/client3.svg" alt="Client 7" />
        </LogosContainerStyled>
      </Container>
    </ClientsSectionStyled>
  );
};

export default ClientsSection;
