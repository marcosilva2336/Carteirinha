import React from 'react';
import { Container } from '@mui/material';
import { StyledAppBar, StyledToolbar, LogoBox } from '../styles/HeaderStyles';

const Header = () => {
  return (
    <StyledAppBar>
      <Container>
        <StyledToolbar>
          <LogoBox>
            <img src="/images/passeverde.svg" alt="Logo" />
          </LogoBox>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
