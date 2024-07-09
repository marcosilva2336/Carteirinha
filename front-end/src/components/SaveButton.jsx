import React from 'react';
import { Button } from '@mui/material';

const SaveButton = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      SALVAR
    </Button>
  );
};

export default SaveButton;
