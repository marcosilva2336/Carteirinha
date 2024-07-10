import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { StyledAppBar, StyledToolbar, LogoBox, MenuBox } from '../styles/HeaderStyles';

const Header = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <LogoBox>
          <img src="/images/logo.svg" alt="Logo" />
        </LogoBox>
        <MenuBox>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Sobre</Button>
          <Button color="inherit">Depoimentos</Button>
          <Button color="inherit">FAQ</Button>
          <Button color="inherit">Contato</Button>
        </MenuBox>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
